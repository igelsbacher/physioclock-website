'use strict';
(function(){
 const clamp=(value,min,max)=>Math.min(max,Math.max(min,value));
 function normalized(c){return {minutes:clamp(c.minutes,3,45),focus:Number.isFinite(c.focus)?clamp(c.focus,0,1):0.5,count:clamp(c.count,1,12)}}
 function candidates(c,lib){
  const allowed=new Set(['none','chair','wall','support']); const focus=normalized(c).focus;
  return lib.items.filter(x=>x.region<9&&Math.abs(lib.levels[x.region]-focus)<=0.181&&allowed.has(x.equipment)).sort((a,b)=>{
   const da=Math.abs(lib.levels[a.region]-focus),db=Math.abs(lib.levels[b.region]-focus);
   return da===db?(a.key<b.key?-1:a.key>b.key?1:0):da-db;
  });
 }
 function generate(slot,c,lib){
  const config=normalized(c),pool=candidates(config,lib);
  config.count=Math.min(config.count,Math.max(1,pool.length));
  if(!pool.length)return {config,guides:[],exercises:[],availableCount:0};
  const offset=(clamp(slot,0,2)*5)%pool.length;
  const guides=Array.from({length:config.count},(_,i)=>pool[(offset+Math.floor(i*pool.length/config.count))%pool.length]).sort((a,b)=>lib.levels[a.region]===lib.levels[b.region]?(a.key<b.key?-1:a.key>b.key?1:0):lib.levels[a.region]-lib.levels[b.region]);
  const total=config.minutes*60,base=Math.floor(total/config.count),remainder=total%config.count;
  return {config,guides,exercises:guides.map((x,i)=>({name:x.names.de,seconds:base+(i<remainder?1:0),bodyPart:x.bodyPart,catalogKey:x.key})),availableCount:pool.length};
 }
 if(typeof module!=='undefined')module.exports={normalized,candidates,generate};
 if(typeof document==='undefined')return;
 const dataNode=document.querySelector('#catalog-data');if(!dataNode)return;
 const artworkBase=new URL('exercise-art/', document.currentScript.src).href;
 const lib=JSON.parse(dataNode.textContent),tr=JSON.parse(document.querySelector('#catalog-strings').textContent),language=document.documentElement.lang;
 const txt=key=>tr[key]||key;
 const el=(tag,text,cls)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n};
 const time=seconds=>Math.floor(seconds/60)+':'+String(seconds%60).padStart(2,'0');
 function detail(x){
  const box=el('details',undefined,'exercise-detail');box.append(el('summary',txt('guide.view')));
  const content=el('div',undefined,'exercise-detail-content');
  content.append(el('p',txt('guide.position')+': '+txt('position.'+x.position)),el('p',txt('guide.equipment')+': '+txt('equipment.'+x.equipment)));
  const frames=el('div',undefined,'exercise-frames');
  for(let i=0;i<x.frames;i++){
   const figure=el('figure');const label=txt(x.frames===1?'guide.positionHold':i===0?'guide.start':'guide.movement');
   const image=el('img');image.src=artworkBase+x.key+'-'+i+'.svg';image.alt=x.names[language]+' – '+label;image.loading='lazy';image.width=220;image.height=220;
   figure.append(image,el('figcaption',label));frames.append(figure);
  }
  content.append(frames,el('p',txt('cue.'+x.cue)),el('p',txt('guide.schematic'),'small-notice'));
  const source=el('a',txt('guide.reference'));source.href=x.source;content.append(source);box.append(content);return box;
 }
 const catalog=document.querySelector('[data-exercise-catalog]');
 if(catalog){
  const search=document.querySelector('[data-exercise-search]');
  function draw(){
   catalog.replaceChildren();const term=search.value.toLocaleLowerCase(language).trim();
   lib.regions.forEach((region,index)=>{
    const rows=lib.items.filter(x=>x.region===index&&x.names[language].toLocaleLowerCase(language).includes(term));if(!rows.length)return;
    const group=el('details',undefined,'exercise-region');group.open=!!term;
    const summary=el('summary');const icon=el('img');icon.src='../exercise-art/pc-region-'+index+'.svg';icon.alt='';icon.width=40;icon.height=40;
    summary.append(icon,el('span',region[language]+' ('+rows.length+')'));group.append(summary);
    rows.forEach(x=>{const row=el('article',undefined,'exercise-row');row.append(el('h3',x.names[language]),detail(x));group.append(row)});catalog.append(group);
   });
  }
  search.addEventListener('input',draw);draw();
 }
 const builder=document.querySelector('[data-preset-builder]');
 if(builder){
  const configs=[{minutes:10,focus:.12,count:5},{minutes:12,focus:.5,count:6},{minutes:10,focus:.88,count:5}];let slot=0;
  const minutes=document.querySelector('#preset-minutes'),focus=document.querySelector('#preset-focus'),count=document.querySelector('#preset-count');
  const preview=document.querySelector('[data-preset-preview]'),range=document.querySelector('[data-preset-range]');
  function draw(){
   const draft=generate(slot,configs[slot],lib);configs[slot]=draft.config;
   minutes.value=draft.config.minutes;focus.value=draft.config.focus;count.max=Math.max(2,Math.min(12,draft.availableCount));count.disabled=draft.availableCount<=1;count.value=draft.config.count;
   document.querySelector('[data-duration-output]').textContent=draft.config.minutes+' min';document.querySelector('[data-count-output]').textContent=draft.exercises.length;
   range.textContent=Array.from(new Set(candidates(draft.config,lib).map(x=>x.region))).sort((a,b)=>(lib.levels[a]-lib.levels[b])||(a-b)).map(i=>lib.regions[i][language]).join(' · ');
   preview.replaceChildren();draft.guides.forEach((x,i)=>{const row=el('article',undefined,'exercise-row');row.append(el('h3',x.names[language]+' · '+time(draft.exercises[i].seconds)),detail(x));preview.append(row)});
   document.querySelectorAll('[data-preset-slot]').forEach(button=>button.setAttribute('aria-pressed',String(Number(button.dataset.presetSlot)===slot)));
  }
  document.querySelectorAll('[data-preset-slot]').forEach(button=>button.addEventListener('click',()=>{slot=Number(button.dataset.presetSlot);draw()}));
  [[minutes,'minutes'],[focus,'focus'],[count,'count']].forEach(([control,key])=>control.addEventListener('input',()=>{configs[slot][key]=Number(control.value);draw()}));
  document.querySelector('[data-preset-download]').addEventListener('click',()=>{
   const draft=generate(slot,configs[slot],lib);const payload={format:'PhysioClock.Set',schemaVersion:1,setName:txt('preset.label')+' '+['A','B','C'][slot],exercises:draft.exercises,options:{rounds:1,restSeconds:0}};
   const url=URL.createObjectURL(new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}));const a=el('a');a.href=url;a.download='PhysioClock-Set-'+['A','B','C'][slot]+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  });draw();
 }
})();
