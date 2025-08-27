// Plano (com GIFs/figuras do Wikimedia Commons – CC-BY-SA)
const PLAN = [
  { key:"seg", title:"Segunda – Treino A (Superior)",
    warmup:["5 min de bicicleta ergométrica leve","Mobilidade leve de ombros e coluna"],
    exercises:[
      {id:"supino_reto",name:"Supino reto (máquina/halter)",scheme:"3x12",
        notes:["Pés firmes no chão","Desça controlando, suba sem travar cotovelos"],
        gif:"https://upload.wikimedia.org/wikipedia/commons/3/3b/SmithMachineBenchPress.gif",credit:"Wikimedia Commons – CC-BY-SA"},
      {id:"remada_baixa",name:"Remada baixa (máquina)",scheme:"3x12",
        notes:["Coluna neutra","Puxe com as costas"],
        gif:"https://upload.wikimedia.org/wikipedia/commons/4/49/Cable-seated-rows-1.png",credit:"Wikimedia Commons – CC-BY-SA"},
      {id:"desenvolvimento",name:"Desenvolvimento de ombros (máquina/halter)",scheme:"3x12",
        notes:["Cotovelo abaixo do punho"],
        gif:"https://upload.wikimedia.org/wikipedia/commons/2/2e/Dumbbell-lateral-raises-2.png",credit:"Wikimedia Commons – CC-BY-SA"},
      {id:"puxada_alta",name:"Puxada alta na frente",scheme:"3x12",
        gif:"https://upload.wikimedia.org/wikipedia/commons/7/7a/Wide-grip-lat-pull-down-2.gif",credit:"Wikimedia Commons – CC-BY-SA"},
      {id:"rosca",name:"Rosca direta (halter/barra)",scheme:"2x12",
        gif:"https://upload.wikimedia.org/wikipedia/commons/b/bd/Standing-one-arm-bicep-curl-1.gif",credit:"Wikimedia Commons – CC-BY-SA"},
      {id:"triceps",name:"Tríceps (corda/francês)",scheme:"2x12",
        gif:"https://upload.wikimedia.org/wikipedia/commons/1/1a/Reverse-triceps-bench-press-1.gif",credit:"Wikimedia Commons – CC-BY-SA"},
      {id:"prancha",name:"Prancha abdominal",scheme:"3x30s",
        gif:"https://upload.wikimedia.org/wikipedia/commons/8/8d/Plank.jpg",credit:"Wikimedia Commons – CC-BY-SA"},
    ]},
  { key:"ter", title:"Terça – Treino B (Inferior Adaptado + Core)",
    warmup:["5 min de bicicleta ergométrica leve"],
    caution:"Evite leg press e agachamentos/saltos até o pé esquerdo estar 100% sem dor.",
    exercises:[
      {id:"extensora",name:"Cadeira extensora (quadríceps)",scheme:"3x12",
        notes:["Ajuste o encosto","Movimento controlado"],
        gif:"https://upload.wikimedia.org/wikipedia/commons/6/69/Quad_extension.gif",credit:"Wikimedia Commons – CC-BY-SA"},
      {id:"abdutora",name:"Cadeira abdutora",scheme:"3x12",
        notes:["Evite girar tronco","Amplitude confortável"],
        gif:"https://upload.wikimedia.org/wikipedia/commons/4/49/Hip_abduction_machine.gif",credit:"Wikimedia Commons – CC-BY-SA"},
      {id:"adutora",name:"Cadeira adutora",scheme:"3x12",
        notes:["Postura neutra","Sem pressa"],
        gif:"https://upload.wikimedia.org/wikipedia/commons/2/2c/Hip_adduction_machine.gif",credit:"Wikimedia Commons – CC-BY-SA"},
      {id:"mesa_flexora",name:"Mesa flexora (posterior)",scheme:"3x12",
        notes:["Apoie bem o quadril","Não arqueie a lombar"],
        gif:"https://upload.wikimedia.org/wikipedia/commons/7/7a/Lying_leg_curl.gif",credit:"Wikimedia Commons – CC-BY-SA"},
      {id:"gluteo",name:"Glúteo (máquina/caneleira)",scheme:"3x12",
        notes:["Quadril estável","Não gire o tronco"],
        gif:"https://upload.wikimedia.org/wikipedia/commons/1/10/Glute_kickback.gif",credit:"Wikimedia Commons – CC-BY-SA"},
      {id:"infra",name:"Abdominal infra",scheme:"3x12",
        notes:["Lombar apoiada","Movimento curto"],
        gif:"https://upload.wikimedia.org/wikipedia/commons/5/5e/Reverse_crunch.gif",credit:"Wikimedia Commons – CC-BY-SA"},
      {id:"prancha_lat",name:"Prancha lateral",scheme:"2x30s cada lado",
        notes:["Alinhe cabeça–quadril–pé","Evite cair com o quadril"],
        gif:"https://upload.wikimedia.org/wikipedia/commons/2/22/Side_plank.jpg",credit:"Wikimedia Commons – CC-BY-SA"},
    ]},
  { key:"qua", title:"Quarta – Treino C (Cardio)",
    warmup:["2 min bicicleta leve"],
    cooldown:["Alongamento leve de coluna, quadril e posterior"],
    exercises:[
      {id:"bike_hit",name:"Bicicleta intervalada",scheme:"20–25 min",
        notes:["1' moderado + 30\" forte × 6–8","Finalize com 3' leves"],
        gif:"https://upload.wikimedia.org/wikipedia/commons/8/80/Stationary_bicycle_exercise.gif",credit:"Wikimedia Commons – CC-BY-SA"},
    ]},
  { key:"qui", title:"Quinta – Treino A (Superior)",
    exercises:[{id:"ref_seg",name:"Repetir o Treino A",scheme:"",notes:["Mesmo da segunda-feira"],
      gif:"https://upload.wikimedia.org/wikipedia/commons/3/3b/SmithMachineBenchPress.gif",credit:"Wikimedia Commons – CC-BY-SA"}]},
  { key:"sex", title:"Sexta – Treino B (Inferior Adaptado + Core)",
    exercises:[{id:"ref_ter",name:"Repetir o Treino B",scheme:"",notes:["Mesmo da terça-feira"],
      gif:"https://upload.wikimedia.org/wikipedia/commons/6/69/Quad_extension.gif",credit:"Wikimedia Commons – CC-BY-SA"}]},
  { key:"sab", title:"Sábado – Treino A (Variação leve)",
    warmup:["5 min bicicleta leve"],
    exercises:[
      {id:"supino_incl",name:"Supino inclinado",scheme:"3x12",
        notes:["Controle na descida","Não arqueie excessivamente"],
        gif:"https://upload.wikimedia.org/wikipedia/commons/4/43/DumbbellFlye.gif",credit:"Wikimedia Commons – CC-BY-SA"},
      {id:"remada_unilat",name:"Remada unilateral com halter",scheme:"3x12",
        notes:["Apoie bem o joelho/mão","Coluna neutra"],
        gif:"https://upload.wikimedia.org/wikipedia/commons/7/76/One-arm-dumbbell-row-1.png",credit:"Wikimedia Commons – CC-BY-SA"},
      {id:"elev_lat",name:"Elevação lateral (ombros)",scheme:"3x12",
        notes:["Polegares levemente para cima","Braços quase estendidos"],
        gif:"https://upload.wikimedia.org/wikipedia/commons/2/2e/Dumbbell-lateral-raises-2.png",credit:"Wikimedia Commons – CC-BY-SA"},
      {id:"puxada_sup",name:"Puxada supinada",scheme:"3x12",
        notes:["Peito aberto","Não balance o tronco"],
        gif:"https://upload.wikimedia.org/wikipedia/commons/7/7a/Wide-grip-lat-pull-down-1.gif",credit:"Wikimedia Commons – CC-BY-SA"},
      {id:"rosca_alt",name:"Rosca alternada",scheme:"2x12",
        notes:["Palma gira levemente","Controle excêntrico"],
        gif:"https://upload.wikimedia.org/wikipedia/commons/b/bd/Standing-one-arm-bicep-curl-1.gif",credit:"Wikimedia Commons – CC-BY-SA"},
      {id:"triceps_banco",name:"Tríceps no banco",scheme:"2x12",
        notes:["Ombros para trás","Desça até 90°"],
        gif:"https://upload.wikimedia.org/wikipedia/commons/1/1a/Reverse-triceps-bench-press-1.gif",credit:"Wikimedia Commons – CC-BY-SA"},
      {id:"obl",name:"Abdominal oblíquo",scheme:"3x15 cada lado",
        notes:["Quadril estável","Evite puxar o pescoço"],
        gif:"https://upload.wikimedia.org/wikipedia/commons/2/2b/Oblique_crunch.gif",credit:"Wikimedia Commons – CC-BY-SA"},
    ]},
  { key:"dom", title:"Domingo – Cardio leve ou descanso ativo",
    cooldown:["Alongamento geral"],
    exercises:[
      {id:"bike_leve",name:"Bicicleta leve",scheme:"20 min",
        notes:["Ritmo conversacional"],
        gif:"https://upload.wikimedia.org/wikipedia/commons/8/80/Stationary_bicycle_exercise.gif",credit:"Wikimedia Commons – CC-BY-SA"},
      {id:"caminhada",name:"Caminhada curta (se o pé permitir)",scheme:"10–15 min",
        notes:["Sem dor e sem impacto"],
        gif:"https://upload.wikimedia.org/wikipedia/commons/6/6b/Treadmill_walk.gif",credit:"Wikimedia Commons – CC-BY-SA"},
    ]},
];

// Utilitários
const $ = (sel, root=document)=>root.querySelector(sel);
const $all = (sel, root=document)=>Array.from(root.querySelectorAll(sel));
const lsGet=(k,d)=>{try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}};
const lsSet=(k,v)=>{try{localStorage.setItem(k, JSON.stringify(v))}catch(e){}};
const secondsToMMSS = (s)=>String(Math.floor(s/60)).padStart(2,'0')+':'+String(Math.floor(s%60)).padStart(2,'0');

// Abas
function renderTabs(){
  const row1 = $('.tabs'), row2 = $('.tabs2');
  row1.innerHTML=''; row2.innerHTML='';
  PLAN.slice(0,4).forEach(d=>{
    const b=document.createElement('button'); b.className='tab-btn'; b.textContent=d.title.split('–')[0].trim(); b.dataset.key=d.key; row1.appendChild(b);
  });
  PLAN.slice(4).forEach(d=>{
    const b=document.createElement('button'); b.className='tab-btn'; b.textContent=d.title.split('–')[0].trim(); b.dataset.key=d.key; row2.appendChild(b);
  });
}
function setActiveTab(key){ lsSet('tab', key); $all('.tab-btn').forEach(b=>b.classList.toggle('active', b.dataset.key===key)); renderDay(key); }

// Dia
function renderDay(key){
  const d = PLAN.find(x=>x.key===key);
  const container = $('#day'); container.innerHTML='';
  const h = document.createElement('div'); h.innerHTML = `<div class="small">${d.title}</div>`; container.appendChild(h);

  if(d.caution){ const n=document.createElement('div'); n.className='note'; n.textContent='⚠️ Atenção ao pé esquerdo: '+d.caution; container.appendChild(n); }
  if(d.warmup){ const c=document.createElement('div'); c.className='card';
    c.innerHTML=`<div class="card-header"><div class="card-title">Aquecimento</div></div><div class="card-body"><ul class="list">${d.warmup.map(w=>`<li>${w}</li>`).join('')}</ul></div>`;
    container.appendChild(c);
  }

  const total = d.exercises.length;
  let completed = lsGet('completed_'+d.key, 0);
  if(completed>total) completed=total; lsSet('completed_'+d.key, completed);
  const prog = document.createElement('div'); prog.className='card';
  prog.innerHTML = `<div class="card-body"><div class="row" style="justify-content:space-between">
    <div style="flex:1"><div class="progress"><div id="pbar" style="width:${Math.round((completed/total)*100)}%"></div></div>
    <div class="small">Progresso do dia: <span id="pcnt">${completed}</span>/${total} exercícios (${Math.round((completed/total)*100)}%)</div></div>
    <button class="btn outline" id="resetProg">Zerar</button></div></div>`;
  container.appendChild(prog);
  $('#resetProg', prog).onclick = ()=>{ lsSet('completed_'+d.key, 0); renderDay(key); };

  d.exercises.forEach(ex=>{
    const done = !!lsGet('done_'+ex.id, false);
    const card = document.createElement('div'); card.className='card';
    card.innerHTML = `<div class="card-header"><div class="card-title">${ex.name} <span class="badge">${ex.scheme}</span></div>${done?'<span class="small" style="color:#34d399">✔ Feito</span>':''}</div>`;
    const body = document.createElement('div'); body.className='card-body';
    if(ex.notes) body.innerHTML += `<ul class="list">${ex.notes.map(n=>`<li>${n}</li>`).join('')}</ul>`;
    const row = document.createElement('div'); row.className='row';
    const b1 = document.createElement('button'); b1.className='btn secondary'; b1.textContent='Visualizar'; b1.onclick=()=>openModal(ex);
    const b2 = document.createElement('button'); b2.className='btn'; b2.textContent='Marcar como feito'; b2.onclick=()=>{ lsSet('done_'+ex.id, true); let c=lsGet('completed_'+d.key,0); lsSet('completed_'+d.key, Math.min(total, c+1)); renderDay(key); };
    row.appendChild(b1); row.appendChild(b2);
    if(done){ const b3=document.createElement('button'); b3.className='btn outline'; b3.textContent='Desmarcar'; b3.onclick=()=>{ lsSet('done_'+ex.id,false); renderDay(key); }; row.appendChild(b3); }
    body.appendChild(row); card.appendChild(body); container.appendChild(card);
  });

  if(d.cooldown){ const c=document.createElement('div'); c.className='card';
    c.innerHTML=`<div class="card-header"><div class="card-title">Alongamento/Finalização</div></div><div class="card-body"><ul class="list">${d.cooldown.map(c=>`<li>${c}</li>`).join('')}</ul></div>`;
    container.appendChild(c);
  }

  renderTimer();
}

// Timer
function renderTimer(){
  const target = Number(lsGet('rest_target', 60));
  let seconds = Number(lsGet('rest_seconds', target));
  let running = false; let interval=null;
  const box = document.createElement('div'); box.className='card';
  box.innerHTML = `<div class="card-header"><div class="card-title">Descanso</div></div>
  <div class="card-body">
    <div class="row" style="justify-content:space-between">
      <div style="font-size:28px;font-weight:700" id="clock">${secondsToMMSS(seconds)}</div>
      <div class="row">
        <button class="btn" id="start">Iniciar</button>
        <button class="btn secondary" id="pause">Pausar</button>
        <button class="btn outline" id="reset">Reset</button>
      </div>
    </div>
    <div class="progress" style="margin-top:8px"><div id="pb" style="width:${Math.min(100, Math.max(0, ((target-seconds)/target)*100))}%"></div></div>
    <div class="row" style="margin-top:8px"><span class="small">Meta (s):</span><input class="input" style="width:90px" type="number" id="meta" value="${target}" /></div>
  </div>`;
  $('#day').appendChild(box);
  const update=()=>{ $('#clock',box).textContent=secondsToMMSS(seconds); $('#pb',box).style.width=((target-seconds)/target*100)+'%'; lsSet('rest_seconds', seconds); lsSet('rest_target', target); };
  $('#start',box).onclick=()=>{ if(running) return; running=true; interval=setInterval(()=>{ seconds = Math.max(0, seconds-1); update(); if(seconds===0){ clearInterval(interval); running=false; } },1000); };
  $('#pause',box).onclick=()=>{ running=false; if(interval) clearInterval(interval); };
  $('#reset',box).onclick=()=>{ running=false; if(interval) clearInterval(interval); seconds=Number(lsGet('rest_target',60)); update(); };
  $('#meta',box).onchange=(e)=>{ const v = Math.max(10, Number(e.target.value||60)); lsSet('rest_target', v); seconds=v; update(); };
  update();
}

// Modal
function openModal(ex){
  const m = document.querySelector('.modal'); const title = document.querySelector('.modal-title'); title.textContent = ex.name;
  const urlKey = 'gif_'+ex.id; const saved = lsGet(urlKey, ex.gif||'');
  let notes = ''; if(ex.notes){ notes = '<div class="small" style="margin:6px 0 4px 0;font-weight:600">Pontos chave</div><ul class="list">'+ex.notes.map(n=>`<li>${n}</li>`).join('')+'</ul>'; }
  document.querySelector('.modal-body').innerHTML = notes
    + `<div style="margin-top:8px">` + (saved?`<img class='img' src='${saved}' alt='Demonstração ${ex.name}'/>`:`<div class='small'>Nenhuma mídia definida para este exercício.</div>`) + `</div>`
    + `<div class='small' style='margin-top:6px'>Crédito/licença: ${ex.credit||''}</div>`
    + `<div class='small' style='margin-top:8px'>Cole abaixo uma URL (GIF/PNG/JPG) para personalizar:</div>`
    + `<div class='row'><input id='gifurl' class='input' placeholder='https://...' value='${saved||''}'/><button class='btn' id='savegif'>Salvar</button></div>`;
  document.querySelector('#savegif').onclick = ()=>{ const v = document.querySelector('#gifurl').value.trim(); lsSet(urlKey, v); openModal(ex); };
  m.classList.add('open');
}
function closeModal(){ document.querySelector('.modal').classList.remove('open'); }

// Inicialização
window.addEventListener('load', ()=>{
  renderTabs();
  const tab = lsGet('tab', PLAN[0].key);
  setActiveTab(tab);
  document.body.addEventListener('click', (e)=>{
    const b = e.target.closest('.tab-btn'); if(b) setActiveTab(b.dataset.key);
    if(e.target.classList.contains('modal')) closeModal();
    if(e.target.classList.contains('close-modal')) closeModal();
  });
  if('serviceWorker' in navigator){ navigator.serviceWorker.register('./service-worker.js'); }
});
