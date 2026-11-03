(() => {
  const c = window.weeklyQuizConfig;
  const el = id => document.getElementById('weekly-' + id);
  let scenario;
  const sum = data => data.minutes.reduce((a,b) => a+b, 0) + data.extra;
  const level = data => sum(data) >= data.target ? 2 : sum(data) >= data.target / 2 ? 1 : 0;
  function clear() { el('answer').textContent = ''; el('answer').style.borderLeft = ''; }
  function next() {
    let candidate;
    do {
      candidate = {target:[60,90,120,150,180][Math.floor(Math.random()*5)], minutes:Array.from({length:7},()=>Math.floor(Math.random()*7)*5), extra:(1+Math.floor(Math.random()*6))*5};
    } while (JSON.stringify(candidate) === JSON.stringify(scenario));
    scenario = candidate;
    el('target').textContent = c.target + ': ' + scenario.target + ' min';
    el('days').replaceChildren();
    scenario.minutes.forEach((minutes,index) => {
      const row=document.createElement('tr'), day=document.createElement('th'), value=document.createElement('td');
      day.scope='row'; day.textContent=new Intl.DateTimeFormat(c.locale,{weekday:'long',timeZone:'UTC'}).format(new Date(Date.UTC(2024,0,1+index)));
      value.textContent=minutes+' min';row.append(day,value);el('days').append(row);
    });
    el('extra').textContent=c.extra+': +'+scenario.extra+' min';
    el('prediction').value='0';clear();
  }
  el('check').addEventListener('click',()=>{
    const total=sum(scenario), result=level(scenario);
    el('answer').textContent=c.feedback[Number(el('prediction').value)===result?0:1]+' '+scenario.minutes.join(' + ')+' + '+scenario.extra+' = '+total+' min · '+total+' / '+scenario.target+' min · '+Math.floor(total/scenario.target*100)+' % · '+c.labels[result];
    el('answer').style.borderLeft='6px solid '+['#f87171','#facc15','#4ade80'][result];el('answer').style.padding='12px';
  });
  el('next').addEventListener('click',next);
  el('prediction').addEventListener('change',clear);
  next();
})();
