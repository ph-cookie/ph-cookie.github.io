(() => {
  const card = document.querySelector('.collection-package');
  if (!card) return;
  // Cookie-wrapper interaction requested for this site.
  let progress = 0, frame = 0, opening = false;
  const art = card.querySelector('.wrapper-opening');
  const setPath = (selector, d) => card.querySelector(selector).setAttribute('d', d);
  const point = (x, y) => `${x.toFixed(2)},${(Math.abs(y) < .005 ? 0 : y).toFixed(2)}`;
  function paint(value) {
    progress = value;
    card.classList.toggle('is-torn', value > .001);
    card.style.setProperty('--tear', `${value * 100}%`);
    const tip = value * 600;
    card.querySelector('.torn-span-rect').setAttribute('width', tip);
    const amount = Math.min(1, value / .2);
    const bend = x => {
      if (tip < .1 || (x >= tip && value < .999)) return 0;
      const t = Math.min(1, Math.max(0, x / tip)), tail = 1-t;
      const curl = amount * tail*tail * (-25 + 36*t)
        + Math.sin(Math.PI*t)**2 * amount * (1.3*Math.sin(x*.19)+.6*Math.sin(x*.47));
      if (!opening) return curl;
      const pull = Math.max(0, (value-.2)/.8);
      const hinge = Math.min(1, Math.max(0, (tip-x)/28));
      const attachment = value >= .985 ? 1 : hinge*hinge*(3-2*hinge);
      // The free strip rises as the tear advances; the right side rises highest.
      return curl - 92 * Math.pow(pull,.9) * (.25+.75*Math.pow(x/600,2)) * attachment;
    };
    const tearY = x => {
      if (tip < .1 || x >= tip) return 22;
      const taper = Math.min(1, (tip-x)/9);
      return 22 + taper*taper * (.85*Math.sin(x*.85)+.5*Math.sin(x*.31));
    };
    // The lifted and unopened portions share ONE fill and ONE path.
    // The original side teeth use exactly the body's five-unit spacing.
    const xs = [11];
    for (let x=14;x<589;x+=3) xs.push(x);
    if (tip>11 && tip<589) xs.push(tip);
    xs.push(589);xs.sort((a,b)=>a-b);
    const top = xs.map(x=>point(x,bend(x)));
    const bottom = xs.map(x=>point(x,tearY(x)+bend(x)));
    const right = [5,10,15,20,22].map((y,i)=>{
      const x=i<4 && i%2===0 ? 596 : 589;
      return point(x,y+bend(x));
    });
    const left = [22,20,15,10,5,0].map((y,i)=>{
      const x=i===2 || i===4 ? 4 : 11;
      return point(x,y+bend(x));
    });
    const strip='M'+top.join('L')+'L'+right.join('L')
      +'L'+bottom.slice().reverse().join('L')+'L'+left.join('L')+'Z';
    const rightBody=[];
    for(let y=5;y<=300;y+=5) rightBody.push(point((y/5)%2 ? 596 : 589,y));
    const leftBody=[];
    for(let y=300;y>=25;y-=5) leftBody.push(point((y/5)%2 ? 4 : 11,y));
    const tornXs=[11,...xs.filter(x=>x>11 && x<tip),Math.max(11,tip)];
    const tearBase=tornXs.map(x=>point(x,tearY(x)));
    const tearLift=tornXs.map(x=>point(x,tearY(x)+bend(x)));
    // Trace the whole bag including the slit: no separate edges meet at the hinge.
    const whole='M'+top.join('L')+'L'+rightBody.join('L')+'L'+leftBody.join('L')
      +'L'+tearBase.join('L')+'L'+tearLift.reverse().join('L')+'L'+left.join('L')+'Z';
    const baseOnly='M'+[11,...xs,589].map(x=>point(x,tearY(x))).join('L')
      +'L'+rightBody.filter((_,i)=>(i+1)*5>=25).join('L')+'L'+leftBody.join('L')+'Z';
    card.querySelector('.bag-surface').setAttribute('d',whole);
    card.querySelector('.bag-white-ends').setAttribute('d',whole);
    card.dataset.detachedBody=baseOnly;
    card.querySelector('.bag-ribs').setAttribute('d',[20,25,30,570,575,580].map(x=>
      'M'+point(x,bend(x)+1)+'L'+point(x,bend(x)+20)+'M'+point(x,tearY(x)+1)+'L'+point(x,298)).join(''));
    setPath('.curled-film',strip);
    setPath('.curled-white-end',strip);
    setPath('.curled-ribs',[20,25,30,570,575,580].map(x=>'M'+point(x,bend(x)+1)+'L'+point(x,bend(x)+20)).join(''));
    const visibleCut = xs.filter(x=>x<=tip).map(x=>point(x,tearY(x)+bend(x)));
    setPath('.curled-edge',tip>.1?'M'+visibleCut.join('L'):'');
    // Complementary surfaces meet at the same edge without a double-opacity overlay.
    const cut=[0,...xs.filter(x=>x<tip),tip].map(x=>point(x,tearY(x)));
    setPath('.remaining-path','M'+cut.join('L')+'L'+point(tip,0)+'H600V300H0Z');
    const openedCut= [0,...xs.filter(x=>x<=tip),tip].map(x=>point(x,tearY(x)));
    setPath('.body-torn-edge',tip>.1?'M'+openedCut.join('L'):'');
  }
  function finishOpen() {
    card.classList.add('is-detached');
    card.querySelector('.bag-surface').setAttribute('d',card.dataset.detachedBody);
    card.querySelector('.bag-white-ends').setAttribute('d',card.dataset.detachedBody);
    // Let the final raised shape paint, then navigate without a second animation.
    frame = requestAnimationFrame(() => location.assign(card.href));
  }
  function animate(target, duration, complete) {
    cancelAnimationFrame(frame);
    const start = performance.now(), from = progress;
    function tick(now) {
      const t = Math.min(1, (now - start) / duration);
      // Quick initial pull, then a precise stop at the notch.
      const eased = opening ? t*(2-t) : 1 - Math.pow(1 - t, 3);
      paint(from + (target - from) * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
      else if (complete) complete();
    }
    frame = requestAnimationFrame(tick);
  }
  const hint = () => { if (!opening) animate(.2, 170); };
  const reset = () => { if (!opening) animate(0, 130); };
  card.addEventListener('pointerenter', event => { if (event.pointerType !== 'touch') hint(); });
  card.addEventListener('pointerleave', reset);
  card.addEventListener('focus', hint);
  card.addEventListener('blur', reset);
  card.addEventListener('click', event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (opening) return;
    opening = true;
    card.classList.add('is-opening');
    animate(1, 160, finishOpen);
  });
  paint(0);
  addEventListener('pageshow', () => { opening = false; cancelAnimationFrame(frame); card.classList.remove('is-opening','is-detached'); art.querySelector('.wrapper-curled-top').removeAttribute('transform'); art.querySelector('.wrapper-curled-top').style.opacity = ''; paint(0); });
})();
