/* comelebozec.com — la nébuleuse du seuil (three.js r128)
   Identité conservée : shader, attributs, couches coquille / manteau / poussière, caméra immergée, parallaxe souris.
   Ajouts : génération par tranches (le seuil ne bloque jamais), uniforme uBokeh (la galaxie sort du plan de netteté
   à l'entrée), capture in-frame du ciel vers un canvas 2D puis destruction complète du contexte WebGL. */
(function(){
  const html = document.documentElement;
  const canvas = document.getElementById('galaxie');
  if (!canvas) return;
  if (html.classList.contains('entered') || typeof THREE === 'undefined'){ canvas.remove(); return; } // entré avant three.js

  const COARSE  = matchMedia('(pointer:coarse)').matches;
  const TACTILE = matchMedia('(hover:none)').matches;
  const REDUIT  = matchMedia('(prefers-reduced-motion:reduce)').matches;
  const DPR = Math.min(devicePixelRatio || 1, COARSE ? 1.5 : 2);
  const COEURS = navigator.hardwareConcurrency || 4;
  const N_COQ  = COARSE ? 26000 : 80000;
  const N_POUS = COARSE ? 110000 : (COEURS >= 8 ? 400000 : 250000);
  const N = N_COQ + N_POUS;

  const souris = { x:0, y:0 };
  function surSouris(e){ souris.x = (e.clientX/innerWidth - .5) * 2; souris.y = (e.clientY/innerHeight - .5) * 2; }
  addEventListener('mousemove', surSouris, { passive:true });

  function hash2(x,y){ const s=Math.sin(x*127.1+y*311.7)*43758.5453; return s-Math.floor(s); }
  function vnoise2(x,y){
    const xi=Math.floor(x),yi=Math.floor(y),xf=x-xi,yf=y-yi;
    const u=xf*xf*(3-2*xf),v=yf*yf*(3-2*yf);
    return hash2(xi,yi)*(1-u)*(1-v)+hash2(xi+1,yi)*u*(1-v)+hash2(xi,yi+1)*(1-u)*v+hash2(xi+1,yi+1)*u*v;
  }

  const renderer = new THREE.WebGLRenderer({ canvas, antialias:false });
  renderer.setPixelRatio(DPR);
  const camera = new THREE.PerspectiveCamera(50, 1, .1, 100);
  let dernierW = innerWidth, dernierH = innerHeight;
  function resize(){
    dernierW = innerWidth; dernierH = innerHeight;
    renderer.setSize(Math.max(1, innerWidth), Math.max(1, innerHeight), false);
    camera.aspect = innerWidth/innerHeight; camera.updateProjectionMatrix();
  }
  resize();
  function surResize(){
    // barre d'adresse mobile : on ignore une variation de hauteur seule inférieure à 120 px
    if (COARSE && innerWidth === dernierW && Math.abs(innerHeight - dernierH) < 120) return;
    resize();
  }
  addEventListener('resize', surResize);

  const scene = new THREE.Scene();
  const groupe = new THREE.Group();
  groupe.rotation.set(.15, 0, .22);
  scene.add(groupe);

  const R = 0.78;
  let dir  = new Float32Array(N*3), ray = new Float32Array(N), alea = new Float32Array(N),
      pop  = new Float32Array(N),   dep = new Float32Array(N);
  const gauss = () => { let u=0,v=0; while(u===0)u=Math.random(); while(v===0)v=Math.random();
    return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v); };
  const bruitSurface = (x,y,z) => .5*vnoise2(x*2.3+9.7, y*2.3+3.1) + .5*vnoise2(y*2.3+5.4, z*2.3+1.8);

  function genere(a, b){
    for(let i=a;i<b;i++){
      const poussiere = i >= N_COQ;
      let x, y, z, d, essais = 0;
      do {
        x=gauss(); y=gauss(); z=gauss();
        const n = 1/(Math.sqrt(x*x+y*y+z*z)||1);
        x*=n; y*=n; z*=n;
        d = bruitSurface(x,y,z);
        essais++;
      } while(!poussiere && essais < 25 && d < Math.random()*.75);
      dir[i*3]=x; dir[i*3+1]=y; dir[i*3+2]=z;
      pop[i] = poussiere ? 1 : 0;
      dep[i] = d;
      const manteau = Math.random() < .45;
      ray[i]  = poussiere ? R : R + (manteau ? Math.abs(gauss())*0.13 : gauss()*0.018);
      alea[i] = Math.random();
    }
  }

  const g = new THREE.BufferGeometry();
  const attrs = {
    position: new THREE.BufferAttribute(new Float32Array(N*3),3),
    aDir:  new THREE.BufferAttribute(dir,3),
    aRay:  new THREE.BufferAttribute(ray,1),
    aAlea: new THREE.BufferAttribute(alea,1),
    aPop:  new THREE.BufferAttribute(pop,1),
    aDep:  new THREE.BufferAttribute(dep,1)
  };
  for (const k in attrs){ attrs[k].setUsage(THREE.DynamicDrawUsage); g.setAttribute(k, attrs[k]); }
  g.setDrawRange(0, 0);

  const m = new THREE.ShaderMaterial({
    transparent:true, depthWrite:false, blending:THREE.NormalBlending,
    uniforms:{ uTime:{value:0}, uSize:{value:0.75*DPR}, uR:{value:R}, uRMax:{value:11.0}, uBokeh:{value:0} },
    vertexShader:`
      attribute vec3 aDir; attribute float aRay; attribute float aAlea; attribute float aPop; attribute float aDep;
      uniform float uTime; uniform float uSize; uniform float uR; uniform float uRMax; uniform float uBokeh;
      varying float vLum; varying float vAlpha;
      void main(){
        float souffle = sin(uTime*0.8 + aAlea*6.2831) * mix(0.012, 0.0, aPop);
        float vitesse = 0.5 + aAlea*0.9;
        float x01 = fract(uTime*0.02*vitesse + aAlea*7.0);
        float rPous = uR + (uRMax - uR) * pow(1.0 - x01, 3.0);
        float fondu = mix(1.0, smoothstep(0.0,0.08,x01)*(1.0-smoothstep(0.92,1.0,x01)), aPop);
        float r = mix(aRay + souffle, rPous, aPop);
        vec3 p = aDir * r;
        float prox = clamp(1.0 - (r - uR)/(uRMax - uR), 0.0, 1.0);
        float haut   = clamp((aRay - uR) / 0.13, 0.0, 1.0);
        float gPose  = (0.5 + 0.5*fract(aAlea*13.7)) * (0.55 + 0.45*aDep);
        float gNuage = (0.45 + 0.55*fract(aAlea*9.3)) * (0.3 + 0.7*prox*prox);
        float grain  = mix(mix(gPose, gNuage, haut*haut), gNuage, aPop);
        vLum   = grain * (0.85 + 0.15*sin(uTime*1.6 + aAlea*40.0));
        vAlpha = mix(mix(0.72, 0.42, haut), 0.42, aPop) * fondu * (1.0 - 0.78*uBokeh);
        vec4 mv = modelViewMatrix * vec4(p,1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = min(uSize * (6.6 / -mv.z), uSize * 3.2) * (1.0 + 4.0*uBokeh);
      }`,
    fragmentShader:`
      varying float vLum; varying float vAlpha;
      void main(){
        vec2 c = gl_PointCoord - 0.5;
        if(dot(c,c) > 0.25) discard;
        gl_FragColor = vec4(vec3(1.0)*vLum, vAlpha);
      }`
  });
  const points = new THREE.Points(g, m);
  groupe.add(points);

  const basePos = { x:0, y:.1, z:6.4 };
  camera.position.set(basePos.x, basePos.y, basePos.z);

  /* génération par tranches : la coquille d'abord, la poussière ensuite, une tranche par frame */
  const TRANCHE = Math.ceil(N/8);
  let genere_jusqua = 0, generation_finie = false, plafond = 0;
  function tranche(){
    if (generation_finie) return;
    const a = genere_jusqua, b = Math.min(N, a + TRANCHE);
    genere(a, b);
    for (const k in attrs){
      const at = attrs[k];
      at.updateRange.offset = a * at.itemSize; at.updateRange.count = (b - a) * at.itemSize; at.needsUpdate = true;
    }
    genere_jusqua = b;
    g.setDrawRange(0, plafond ? Math.min(b, plafond) : b);
    if (b >= N) generation_finie = true;
  }

  /* sonde de frames : 10 frames ignorées après la génération, puis 30 frames mesurées ;
     si l'intervalle moyen dépasse 1,5 × le meilleur intervalle observé (et 20 ms), on dessine la moitié des points */
  let sonde = 0, tCumul = 0, tPrec = 0, tMin = Infinity;
  let bokeh = 0, bokehCible = 0, running = true, entre = false;
  const horloge = new THREE.Clock();

  function update(t, dt){
    m.uniforms.uTime.value = REDUIT ? 10 : t;
    if (!REDUIT) groupe.rotation.y = t * .05;
    const k6 = 1 - Math.pow(1 - .06, dt*60), k55 = 1 - Math.pow(1 - .055, dt*60), k3 = 1 - Math.pow(1 - .03, dt*60);
    bokeh += (bokehCible - bokeh) * k6;
    m.uniforms.uBokeh.value = bokeh;
    const amp = (TACTILE || REDUIT) ? 0 : 1;
    camera.position.x += (basePos.x + souris.x*2.2*amp - camera.position.x)*k55;
    camera.position.y += (basePos.y - souris.y*1.3*amp - camera.position.y)*k55;
    camera.position.z += (basePos.z - camera.position.z)*k3;
    camera.lookAt(0,0,0);
  }
  function tick(){
    if (!running) return;
    const t = horloge.getElapsedTime();
    const dt = Math.min(Math.max(t - tPrec, .001), .1); tPrec = t;
    tranche();
    update(t, dt);
    renderer.render(scene, camera);
    if (generation_finie && !plafond && sonde < 40){
      sonde++;
      if (sonde > 10){ tCumul += dt; tMin = Math.min(tMin, dt); }
      if (sonde === 40){
        const moyen = tCumul / 30;
        if (moyen > Math.max(.020, tMin * 1.5)){ plafond = Math.floor(N/2); g.setDrawRange(0, plafond); }
      }
    }
    requestAnimationFrame(tick);
  }
  tick();

  /* le ciel se pose : capture de la dernière image, puis le contexte WebGL n'existe plus */
  function capturerEtDetruire(){
    running = false;
    try{
      update(horloge.getElapsedTime(), .016);
      renderer.render(scene, camera);
      if (!COARSE && COEURS > 4){
        const c = document.getElementById('ciel');
        if (c){
          const ctx = c.getContext('2d');
          c.width = Math.round(innerWidth*DPR*.6); c.height = Math.round(innerHeight*DPR*.6);
          ctx.drawImage(renderer.domElement, 0, 0, c.width, c.height);
          c.hidden = false;
        }
      }
    }catch(e){}
    removeEventListener('resize', surResize);
    removeEventListener('mousemove', surSouris);
    g.dispose(); m.dispose(); renderer.dispose();
    try{ renderer.forceContextLoss(); }catch(e){}
    canvas.remove();
    dir = ray = alea = pop = dep = null;
  }

  function entrer(){
    if (entre) return; entre = true;
    if (REDUIT){ bokeh = bokehCible = 1; }
    else { basePos.z = 4.9; bokehCible = 1; }
    setTimeout(capturerEtDetruire, 1200);
  }
  if (html.classList.contains('entered')) entrer();
  else addEventListener('entree', entrer, { once:true });
})();
