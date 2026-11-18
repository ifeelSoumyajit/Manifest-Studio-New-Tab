(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const NS = 'http://www.w3.org/2000/svg';
  const DEFAULT_THEME = {
    bg:'#17191f', surface:'#1b1e25', surface2:'#15171d', text:'#eef0f5', muted:'#9299a8',
    accent:'#a98bff', shadowLight:'#343840', shadowDark:'#050609', line:'#2a2e37',
    hover:'#242832', input:'#12151b', clock:'#f2f3f8', highlight:'#29223b', danger:'#ff8d9b'
  };
  const LIGHT_THEME = {
    bg:'#e9edf4', surface:'#edf1f8', surface2:'#e1e6ef', text:'#273044', muted:'#6d788c',
    accent:'#7657d6', shadowLight:'#ffffff', shadowDark:'#b9c1cf', line:'#d2d9e5',
    hover:'#e4e9f2', input:'#e6eaf2', clock:'#30394d', highlight:'#dcd5f5', danger:'#c64261'
  };
  const DEF = {
    name:'', city:'Guwahati', units:'c', h12:false, secs:true, ticks:true, digi:true,
    digitalSecs:true, clockMode:'analog', showDate:true, showGreeting:true,
    engine:'google', dim:18, opacity:100, wall:'', useGps:true, themeMode:'light', ui:{font:'mono',radius:18,gap:16,scale:100,border:45,shadow:0},
    theme:{...DEFAULT_THEME}, lightTheme:{...LIGHT_THEME}, customText:'', customTextVisible:false,
    modules:{clock:true,weather:true,notes:true,tasks:true,bookmarks:true,quotes:true,ai:true,apps:true},
    transparentCards:{clock:false,weather:false,notes:false,tasks:false,bookmarks:false,browserBookmarks:false,search:false,quote:false,ai:false,apps:false},
    ai:[
      {n:'ChatGPT',u:'https://chatgpt.com',logo:'assets/ai/chatgpt.svg'},
      {n:'Gemini',u:'https://gemini.google.com',logo:'assets/ai/gemini.svg'},
      {n:'Claude',u:'https://claude.ai',logo:'assets/ai/claude.svg'},
      {n:'Perplexity',u:'https://www.perplexity.ai',logo:'assets/ai/perplexity.svg'},
      {n:'Copilot',u:'https://copilot.microsoft.com',logo:'assets/ai/copilot.svg'},
      {n:'DeepSeek',u:'https://chat.deepseek.com',logo:'assets/ai/deepseek.svg'},
      {n:'Grok',u:'https://grok.com',logo:'assets/ai/grok.svg'},
      {n:'Meta AI',u:'https://www.meta.ai',logo:'assets/ai/meta-ai.svg'},
      {n:'Qwen',u:'https://chat.qwen.ai',logo:'assets/ai/qwen.svg'},
      {n:'Adobe Firefly',u:'https://firefly.adobe.com',logo:'assets/ai/adobe-firefly.svg'}
    ],
    bookmarks:[
      {n:'Google',u:'https://www.google.com'}, {n:'YouTube',u:'https://www.youtube.com'},
      {n:'GitHub',u:'https://github.com'}, {n:'Notion',u:'https://www.notion.so'},
      {n:'Gmail',u:'https://mail.google.com'}
    ]
  };
  const THEME_PRESETS = [
    {name:'Graphite',v:{...DEFAULT_THEME}},
    {name:'Obsidian',v:{...DEFAULT_THEME,bg:'#101216',surface:'#171a20',surface2:'#0c0e12',text:'#f2f4f8',muted:'#929baa',accent:'#8eb8ff',shadowLight:'#30343c',shadowDark:'#020305',line:'#252a32',hover:'#20252e',input:'#0a0d12',clock:'#f3f7ff',highlight:'#1e2a3b',danger:'#ff8794'}},
    {name:'Amethyst',v:{...DEFAULT_THEME,bg:'#191622',surface:'#211d2d',surface2:'#171421',text:'#f4efff',muted:'#aaa0bd',accent:'#bd9aff',shadowLight:'#3b334d',shadowDark:'#08060e',line:'#342d43',hover:'#2b2439',input:'#15111e',clock:'#f3ecff',highlight:'#302342',danger:'#ff91ae'}},
    {name:'Forest',v:{...DEFAULT_THEME,bg:'#141c1a',surface:'#1b2622',surface2:'#111a17',text:'#e9f4ee',muted:'#91a79b',accent:'#82d6ad',shadowLight:'#30483d',shadowDark:'#050a08',line:'#2b3d34',hover:'#23342d',input:'#101713',clock:'#edfff5',highlight:'#213d30',danger:'#ff9c91'}},
    {name:'Burgundy',v:{...DEFAULT_THEME,bg:'#211719',surface:'#2a1d20',surface2:'#1a1114',text:'#f7edef',muted:'#b99da3',accent:'#e99aaf',shadowLight:'#4a3038',shadowDark:'#0a0507',line:'#493038',hover:'#36242a',input:'#180f12',clock:'#fff0f3',highlight:'#482833',danger:'#ff8c92'}},
    {name:'Blue steel',v:{...DEFAULT_THEME,bg:'#151c24',surface:'#1c2631',surface2:'#111923',text:'#edf4fb',muted:'#94a7b9',accent:'#80c7f5',shadowLight:'#35495b',shadowDark:'#05090e',line:'#2d3e4d',hover:'#253443',input:'#0e1720',clock:'#f1f8ff',highlight:'#1e3548',danger:'#ff929e'}},
    {name:'Cinder',v:{...DEFAULT_THEME,bg:'#1c1b1a',surface:'#252321',surface2:'#171615',text:'#f5f1eb',muted:'#aaa198',accent:'#e8b77a',shadowLight:'#403b34',shadowDark:'#080706',line:'#3b342e',hover:'#302b25',input:'#13110f',clock:'#fff7e9',highlight:'#3b2d1d',danger:'#ff8e86'}},
    {name:'Arctic',v:{...DEFAULT_THEME,bg:'#182024',surface:'#202b31',surface2:'#141d22',text:'#eef8fb',muted:'#9db2ba',accent:'#79ded7',shadowLight:'#3c5158',shadowDark:'#071014',line:'#31434a',hover:'#293940',input:'#11191d',clock:'#efffff',highlight:'#1f4144',danger:'#ff929e'}}
  ];
  const ENGINES = {
    google:'https://www.google.com/search?q=', duckduckgo:'https://duckduckgo.com/?q=',
    bing:'https://www.bing.com/search?q=', brave:'https://search.brave.com/search?q=',
    youtube:'https://www.youtube.com/results?search_query=', images:'https://www.google.com/search?tbm=isch&q=',
    reddit:'https://www.reddit.com/search/?q=', wikipedia:'https://en.wikipedia.org/wiki/Special:Search?search=',
    quora:'https://www.quora.com/search?q='
  };
  const GOOGLE_APPS = [
    ['Gmail','https://mail.google.com'],['Calendar','https://calendar.google.com'],['Drive','https://drive.google.com'],
    ['Docs','https://docs.google.com/document'],['Sheets','https://sheets.google.com'],['Slides','https://slides.google.com'],
    ['Maps','https://maps.google.com'],['Keep','https://keep.google.com'],['Photos','https://photos.google.com'],
    ['YouTube','https://youtube.com'],['Meet','https://meet.google.com'],['News','https://news.google.com']
  ];
  const QUOTES = [
    'Consistency builds momentum.','Small steps compound into remarkable progress.','Focus on the next useful action.','Discipline makes room for possibility.',
    'Make today count, one decision at a time.','Progress is built in the ordinary moments.','Start where you are. Use what you have.','Clarity comes from taking the first step.',
    'Build quietly. Let the results speak.','A little progress each day adds up.'
  ];
  const load = (key, fallback) => { try { const raw=localStorage.getItem(key); return raw===null?fallback:JSON.parse(raw); } catch { return fallback; } };
  const save = (key,value) => { try { localStorage.setItem(key,JSON.stringify(value)); return true; } catch { return false; } };
  const storedSettings=load('dt:settings',{});
  let S = {...DEF,...storedSettings};
  if(!storedSettings.fontDefaultMigrated){
    S.ui={...DEF.ui,...(S.ui||{})};
    if(!storedSettings.ui||!storedSettings.ui.font||storedSettings.ui.font==='system')S.ui.font='mono';
    S.fontDefaultMigrated=true;
  }
  S.theme=cleanTheme(S.theme,DEFAULT_THEME); S.lightTheme=cleanTheme(S.lightTheme,LIGHT_THEME);
  S.modules=cleanModules(S.modules);S.transparentCards={...DEF.transparentCards,...(S.transparentCards||{})};
  S.bookmarks=(Array.isArray(S.bookmarks)?S.bookmarks:DEF.bookmarks).map(x=>x&&typeof x==='object'?{n:String(x.n||'Bookmark').slice(0,64),u:normalizeUrl(x.u)}:null).filter(x=>x&&x.u);
  S.ai=(Array.isArray(S.ai)?S.ai:DEF.ai).map(x=>{
    if(!x||typeof x!=='object') return null;
    const n=String(x.n||'AI tool').slice(0,64);
    const savedLogo=typeof x.logo==='string' && (/^assets\/ai\/[a-z0-9_-]+\.svg$/.test(x.logo)||/^https:\/\//.test(x.logo)) ? x.logo : '';
    // Canonical local assets take priority for the built-in providers.
    const logo=logoFor(n)||savedLogo;
    return {n,u:normalizeUrl(x.u),logo};
  }).filter(x=>x&&x.u);
  // Add the additional MYNT-inspired providers to existing installations only once.
  if(!S.aiCatalogV14Added){for(const provider of DEF.ai) if(!S.ai.some(x=>x.n.toLowerCase()===provider.n.toLowerCase())) S.ai.push({...provider});S.aiCatalogV14Added=true;}
  let tasks=load('dt:tasks',[]); if(!Array.isArray(tasks)) tasks=[]; tasks=tasks.filter(t=>t&&typeof t==='object'&&typeof t.text==='string').map(t=>({text:t.text.slice(0,120),done:!!t.done,created:Number(t.created)||Date.now()}));
  const persist=()=>save('dt:settings',S);
  if(S.aiCatalogV14Added&&!load('dt:settings',{}).aiCatalogV14Added) persist();
  function logoFor(name){
    const key=String(name||'').toLowerCase().replace(/[^a-z0-9]+/g,'');
    const map={
      chatgpt:'chatgpt',gemini:'gemini',claude:'claude',perplexity:'perplexity',
      copilot:'copilot',deepseek:'deepseek',grok:'grok',metaai:'meta-ai',
      qwen:'qwen',adobefirefly:'adobe-firefly'
    };
    const id=map[key];
    return id ? `assets/ai/mono/${id}.svg` : '';
  }
  function normalizeUrl(value){let u=String(value||'').trim();if(!/^https?:\/\//i.test(u))u='https://'+u;try{const parsed=new URL(u);return ['http:','https:'].includes(parsed.protocol)?parsed.href:''}catch{return ''}}
  function cleanTheme(input,fallback){const output={...fallback};if(input&&typeof input==='object')for(const key of Object.keys(fallback)){const value=String(input[key]||'');if(/^#[0-9a-f]{6}$/i.test(value))output[key]=value}return output}
  function cleanModules(input){const output={...DEF.modules};if(input&&typeof input==='object')for(const key of Object.keys(output))output[key]=input[key]!==false;return output}
  function sanitizeState(){
    S={...DEF,...S};S.ui={...DEF.ui,...(S.ui||{})};S.theme=cleanTheme(S.theme,DEFAULT_THEME);S.lightTheme=cleanTheme(S.lightTheme,LIGHT_THEME);S.modules=cleanModules(S.modules);S.transparentCards={...DEF.transparentCards,...(S.transparentCards||{})};
    S.themeMode=['dark','light','system'].includes(S.themeMode)?S.themeMode:'light';S.clockMode=['analog','digital','both'].includes(S.clockMode)?S.clockMode:'analog';
    S.city=String(S.city||'').slice(0,100);S.name=String(S.name||'').slice(0,64);S.customText=String(S.customText||'').slice(0,100);S.units=S.units==='f'?'f':'c';
    S.dim=Math.max(0,Math.min(90,Number(S.dim)||0));S.opacity=Math.max(35,Math.min(100,Number(S.opacity)||100));
    S.bookmarks=(Array.isArray(S.bookmarks)?S.bookmarks:[]).map(x=>x&&typeof x==='object'?{n:String(x.n||'Bookmark').slice(0,64),u:normalizeUrl(x.u)}:null).filter(x=>x&&x.u);
    S.ai=(Array.isArray(S.ai)?S.ai:[]).map(x=>x&&typeof x==='object'?{n:String(x.n||'AI tool').slice(0,64),u:normalizeUrl(x.u),logo:typeof x.logo==='string'&&(/^(assets\/ai\/[a-z0-9_-]+\.svg|https:\/\/cdn\.simpleicons\.org\/)/.test(x.logo))?x.logo:logoFor(x.n)}:null).filter(x=>x&&x.u);
    if(typeof S.wall!=='string'||(!/^data:image\/(jpeg|png|webp|gif);base64,/i.test(S.wall)&&!/^https:\/\//i.test(S.wall)))S.wall='';
  }
  function safeText(node,value){node.textContent=String(value??'')}

  // Greeting, personalized note and date.
  function greet(){
    const now=new Date(),hour=now.getHours();
    const period=hour<5?'Night':hour<12?'Morning':hour<17?'Afternoon':hour<21?'Evening':'Night';
    const heading=$('greeting'); heading.replaceChildren();
    if(S.showGreeting){
      heading.append(document.createTextNode('Good '));
      const span=document.createElement('span'); span.className='accent-word'; span.textContent=period; heading.append(span);
      if(S.name) heading.append(document.createTextNode(', '+S.name));
    }
    heading.hidden=!S.showGreeting;
    $('date').textContent=now.toLocaleDateString(undefined,{weekday:'long',day:'numeric',month:'long'});
    $('date').hidden=!S.showDate;
    safeText($('custom-text'),S.customText||''); $('custom-text').hidden=!(S.customTextVisible&&S.customText);
  }

  // Analog and digital clock with selectable display modes.
  function drawTicks(){
    const group=$('ticks'); group.replaceChildren(); if(!S.ticks)return;
    for(let i=0;i<12;i++){const angle=i*Math.PI/6,c=document.createElementNS(NS,'circle');c.setAttribute('cx',100+Math.sin(angle)*88);c.setAttribute('cy',100-Math.cos(angle)*88);c.setAttribute('r',i%3===0?3.6:2.2);if(i%3===0)c.classList.add('q');group.append(c)}
  }
  const rotate=(id,degrees)=>$(id).setAttribute('transform',`rotate(${degrees} 100 100)`);
  function tick(){
    const d=new Date(),seconds=d.getSeconds()+d.getMilliseconds()/1000,minutes=d.getMinutes()+seconds/60,hours=d.getHours()%12+minutes/60;
    rotate('hh',hours*30);rotate('mh',minutes*6);rotate('sh',seconds*6);$('sh').style.display=S.secs?'':'none';
    const mode=S.clockMode||'analog',showAnalog=mode!=='digital',showDigital=mode==='digital'||mode==='both'||(mode==='analog'&&S.digi);
    $('clock').hidden=!showAnalog;$('digital').hidden=!showDigital;
    $('digital').textContent=showDigital?d.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit',...(S.digitalSecs?{second:'2-digit'}:{}),hour12:!!S.h12}):'';
  }

  // Weather: Open-Meteo weather feed and device geolocation, with a city fallback.
  const WMO={0:['Clear','clear'],1:['Mostly clear','mostly'],2:['Partly cloudy','partly'],3:['Overcast','cloud'],45:['Fog','fog'],48:['Fog','fog'],51:['Light drizzle','rain'],53:['Drizzle','rain'],55:['Heavy drizzle','rain'],61:['Light rain','rain'],63:['Rain','rain'],65:['Heavy rain','rain'],71:['Light snow','snow'],73:['Snow','snow'],75:['Heavy snow','snow'],80:['Showers','rain'],81:['Showers','rain'],82:['Heavy showers','storm'],95:['Thunderstorm','storm'],96:['Thunderstorm','storm'],99:['Thunderstorm','storm']};
  const fmtT=c=>Math.round(S.units==='f'?c*9/5+32:c)+'°'+(S.units==='f'?'F':'C');
  function weatherGlyph(kind,isDay){
    const svgStart='<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">';
    const sun='<circle cx="25" cy="23" r="9"/><path d="M25 5v5M25 36v5M7 23h5M38 23h5M12.3 10.3l3.6 3.6M34.1 32.1l3.6 3.6M37.7 10.3l-3.6 3.6M15.9 32.1l-3.6 3.6"/>';
    const moon='<path d="M43.8 9.5a19.5 19.5 0 1 0 10.7 34.7A20.7 20.7 0 0 1 43.8 9.5Z"/><path d="M46 8v-4M56 18h4"/>';
    const cloud='<path d="M17.2 49h28.1a10.2 10.2 0 0 0 1.2-20.3 15.4 15.4 0 0 0-29.2-2.1A11.3 11.3 0 0 0 17.2 49Z"/>';
    const rain='<path d="m21 53-3 6m16-6-3 6m16-6-3 6"/>';
    const snow='<path d="M21 53v9m-4.5-4.5h9m-7.7-3.2 6.4 6.4m0-6.4-6.4 6.4M44 53v9m-4.5-4.5h9m-7.7-3.2 6.4 6.4m0-6.4-6.4 6.4"/>';
    if(kind==='clear') return svgStart+(isDay?sun:moon)+'</svg>';
    if(kind==='mostly'||kind==='partly') return svgStart+sun+'<path d="M19 49h27a9 9 0 0 0 .8-18 14 14 0 0 0-26.5-1.7A10 10 0 0 0 19 49Z"/>'+'</svg>';
    if(kind==='cloud') return svgStart+cloud+'</svg>';
    if(kind==='fog') return svgStart+cloud+'<path d="M8 54h17m5 0h26M15 61h13m6 0h19"/>'+'</svg>';
    if(kind==='rain') return svgStart+cloud+rain+'</svg>';
    if(kind==='snow') return svgStart+cloud+snow+'</svg>';
    if(kind==='storm') return svgStart+cloud+'<path d="m35 47-10 12h9l-4 7 14-16h-9l4-3"/>'+'</svg>';
    return svgStart+cloud+'</svg>';
  }
  function renderWeather(w){
    const [condition,kind]=WMO[w.code]||['Unknown','cloud'];
    $('wx-icon').innerHTML=weatherGlyph(kind,w.isDay!==0);
    $('wx-temp').textContent=fmtT(w.t);
    $('wx-cond').textContent=condition;$('wx-city').textContent=w.place;
    const metrics=[['Feels like',fmtT(w.feels)],['Humidity',w.hum+'%'],['High / Low',fmtT(w.hi)+' / '+fmtT(w.lo)],['Wind',Math.round(w.wind)+' km/h']],list=$('wx-meta');list.replaceChildren();
    metrics.forEach(([label,value])=>{const li=document.createElement('li'),strong=document.createElement('b');li.append(document.createTextNode(label));strong.textContent=value;li.append(strong);list.append(li)});
  }
  async function fetchForecast(lat,lon,place,source){
    $('wx-cond').textContent='Updating local weather…';
    const url=`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,is_day&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;
    const response=await fetch(url);if(!response.ok)throw new Error('Weather service unavailable');const data=await response.json();if(!data.current||!data.daily)throw new Error('Incomplete weather response');
    const c=data.current,w={t:c.temperature_2m,feels:c.apparent_temperature,hum:c.relative_humidity_2m,code:c.weather_code,wind:c.wind_speed_10m,isDay:c.is_day,hi:data.daily.temperature_2m_max[0],lo:data.daily.temperature_2m_min[0],place};
    save('dt:wx',{at:Date.now(),w,lat,lon,source,city:source==='city'?S.city:undefined});renderWeather(w);return w;
  }
  async function cityWeather(){
    if(!S.city)throw new Error('Set a fallback city in settings');const response=await fetch(`https://geocoding-api.open-meteo.com/v1/search?count=1&name=${encodeURIComponent(S.city)}`);if(!response.ok)throw new Error('City lookup unavailable');
    const data=await response.json(),p=data.results&&data.results[0];if(!p)throw new Error('City not found');return fetchForecast(p.latitude,p.longitude,[p.name,p.admin1,p.country].filter(Boolean).join(', '),'city');
  }
  function getPosition(fresh=false){return new Promise((resolve,reject)=>{if(!navigator.geolocation)return reject(new Error('Geolocation is unavailable'));navigator.geolocation.getCurrentPosition(resolve,reject,{enableHighAccuracy:true,timeout:15000,maximumAge:fresh?0:300000})})}
  async function reverseGeocode(lat,lon){
    try{const r=await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);if(!r.ok)throw Error();const d=await r.json();return [d.locality||d.city||d.localityInfo?.administrative?.[0]?.name,d.principalSubdivision,d.countryName].filter(Boolean).filter((x,i,a)=>a.indexOf(x)===i).join(', ')||'Current location'}catch{return 'Current location'}
  }
  async function gpsWeather(fresh=false){const pos=await getPosition(fresh),lat=pos.coords.latitude,lon=pos.coords.longitude,place=await reverseGeocode(lat,lon);return fetchForecast(lat,lon,place,'gps')}
  let gpsBlocked=false;
  async function updateWeather(force=false){
    const cached=load('dt:wx',null),fresh=cached&&Date.now()-cached.at<10*60*1000,valid=cached&&((S.useGps&&cached.source==='gps')||(!S.useGps&&cached.source==='city'&&cached.city===S.city));
    if(!force&&fresh&&valid){renderWeather(cached.w);return}
    try{if(S.useGps&&!gpsBlocked){try{await gpsWeather(false);$('location-status').textContent='Using device location';return}catch(e){if(e.code===1)gpsBlocked=true;$('location-status').textContent=e.code===1?'Location permission denied · using fallback city':'GPS unavailable · using fallback city'}}await cityWeather()}
    catch(e){if(cached)renderWeather(cached.w);else $('wx-cond').textContent='Weather unavailable · check connection';$('location-status').textContent=e.message||'Unable to update weather'}
  }
  $('locate').addEventListener('click',async()=>{
    const btn=$('locate'),status=$('location-status');btn.disabled=true;btn.textContent='Locating…';status.textContent='Getting a fresh device location…';gpsBlocked=false;S.useGps=true;$('s-gps').checked=true;persist();
    try{const w=await gpsWeather(true);status.textContent=`Detected: ${w.place}. Reloading dashboard…`;btn.textContent='Location updated ✓';setTimeout(()=>window.location.reload(),650)}
    catch(e){status.textContent=e.code===1?'Location permission denied. Allow it in Chrome site settings.':(e.message||'Could not detect location.');btn.disabled=false;btn.textContent='⌖ Detect my location now'}
  });

  // Notes with autosave.
  let noteTimer;$('note').value=load('dt:note','');
  $('note').addEventListener('input',()=>{$('saved').textContent='Saving…';clearTimeout(noteTimer);noteTimer=setTimeout(()=>$('saved').textContent=save('dt:note',$('note').value)?'Saved':'Could not save',350)});
  $('clear-note').addEventListener('click',()=>{
    $('note').value='';
    const ok=save('dt:note','');
    $('saved').textContent=ok?'Cleared':'Could not clear note';
  });

  // Compact top-left productivity widgets can be independently collapsed.
  function bindMiniPanel(panelId,buttonId,storageKey){
    const panel=$(panelId),button=$(buttonId),collapsed=!!load(storageKey,false);
    panel.classList.toggle('collapsed',collapsed);
    button.setAttribute('aria-expanded',String(!collapsed));
    button.title=collapsed?'Expand panel':'Collapse panel';
    button.addEventListener('click',()=>{
      const next=!panel.classList.contains('collapsed');
      panel.classList.toggle('collapsed',next);
      button.setAttribute('aria-expanded',String(!next));
      button.title=next?'Expand panel':'Collapse panel';
      save(storageKey,next);
    });
  }
  bindMiniPanel('notes-panel','notes-collapse','dt:notes-collapsed');
  bindMiniPanel('todo-panel','todo-collapse','dt:todo-collapsed');

  // Custom themed search-engine menu (native select remains the persisted source of truth).
  const engineSelect=$('engine'),enginePicker=$('engine-picker'),engineTrigger=$('engine-trigger'),engineMenu=$('engine-menu'),engineCurrent=$('engine-current');
  engineSelect.tabIndex=-1;engineSelect.setAttribute('aria-hidden','true');engineSelect.classList.add('engine-native-hidden');
  function syncEngineMenu(){
    engineCurrent.textContent=engineSelect.options[engineSelect.selectedIndex]?.text||'Google';
    engineMenu.replaceChildren();
    [...engineSelect.options].forEach(option=>{
      const item=document.createElement('button');item.type='button';item.className='engine-option';item.setAttribute('role','option');item.setAttribute('aria-selected',String(option.value===engineSelect.value));
      const tick=document.createElement('span');tick.className='engine-check';tick.textContent=option.value===engineSelect.value?'✓':'';item.append(tick,document.createTextNode(option.text));
      item.addEventListener('click',()=>{engineSelect.value=option.value;engineSelect.dispatchEvent(new Event('change',{bubbles:true}));syncEngineMenu();closeEngineMenu()});
      engineMenu.append(item);
    });
  }
  let engineCloseTimer=0;
  function closeEngineMenu(){
    if(engineMenu.hidden)return;
    engineMenu.classList.remove('is-open');
    engineTrigger.setAttribute('aria-expanded','false');
    clearTimeout(engineCloseTimer);
    engineCloseTimer=setTimeout(()=>{if(!engineMenu.classList.contains('is-open'))engineMenu.hidden=true},190);
  }
  engineTrigger.addEventListener('click',()=>{
    const open=engineMenu.hidden;
    if(open){
      clearTimeout(engineCloseTimer);engineMenu.hidden=false;
      requestAnimationFrame(()=>engineMenu.classList.add('is-open'));
      engineTrigger.setAttribute('aria-expanded','true');
      engineMenu.querySelector('[aria-selected="true"]')?.focus();
    }else closeEngineMenu();
  });
  document.addEventListener('click',e=>{if(!enginePicker.contains(e.target))closeEngineMenu()});
  engineTrigger.addEventListener('keydown',e=>{if(e.key==='Escape')closeEngineMenu();if(e.key==='ArrowDown'&&engineMenu.hidden){e.preventDefault();engineTrigger.click()}});
  engineMenu.addEventListener('keydown',e=>{const opts=[...engineMenu.querySelectorAll('.engine-option')],i=opts.indexOf(document.activeElement);if(e.key==='Escape'){closeEngineMenu();engineTrigger.focus()}else if(e.key==='ArrowDown'){e.preventDefault();opts[Math.min(i+1,opts.length-1)]?.focus()}else if(e.key==='ArrowUp'){e.preventDefault();opts[Math.max(i-1,0)]?.focus()}});
  syncEngineMenu();

  // Search engines, autocomplete and voice input.
  if(!ENGINES[S.engine])S.engine='google';$('engine').value=S.engine;
  $('engine').addEventListener('change',()=>{S.engine=$('engine').value;persist()});
  const query=$('q'),suggestions=$('search-suggestions');let suggestTimer=null,suggestItems=[],activeSuggest=-1,suggestRequest=0;
  function closeSuggestions(){suggestions.hidden=true;suggestions.replaceChildren();suggestItems=[];activeSuggest=-1;query.setAttribute('aria-expanded','false')}
  function openSearch(){const term=query.value.trim();if(!term)return;closeSuggestions();const urlLike=/^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/\S*)?$/i.test(term);window.location.href=urlLike?( /^https?:/i.test(term)?term:'https://'+term ):ENGINES[S.engine]+encodeURIComponent(term)}
  function highlightSuggestion(i){if(!suggestItems.length)return;activeSuggest=(i+suggestItems.length)%suggestItems.length;[...suggestions.querySelectorAll('button')].forEach((b,n)=>{b.classList.toggle('active',n===activeSuggest);b.setAttribute('aria-selected',String(n===activeSuggest))})}
  function displaySuggestions(items){suggestItems=items.slice(0,8);activeSuggest=-1;suggestions.replaceChildren();suggestItems.forEach((item,index)=>{const b=document.createElement('button');b.type='button';b.className='suggestion';b.setAttribute('role','option');b.setAttribute('aria-selected','false');const icon=document.createElement('span');icon.className='suggestion-icon';icon.textContent='⌕';const label=document.createElement('span');label.textContent=item;b.append(icon,label);b.addEventListener('click',()=>{query.value=item;openSearch()});suggestions.append(b)});suggestions.hidden=!suggestItems.length;query.setAttribute('aria-expanded',String(!suggestions.hidden))}
  query.addEventListener('input',()=>{
    clearTimeout(suggestTimer);const term=query.value.trim(),request=++suggestRequest;if(term.length<2){closeSuggestions();return}
    suggestTimer=setTimeout(async()=>{try{const endpoint=S.engine==='youtube'?'https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=':'https://suggestqueries.google.com/complete/search?client=firefox&q=';const response=await fetch(endpoint+encodeURIComponent(term));if(!response.ok)throw Error();const data=await response.json();if(request!==suggestRequest||query.value.trim()!==term)return;displaySuggestions((data[1]||[]).filter(x=>typeof x==='string'&&x.toLowerCase()!==term.toLowerCase()))}catch{if(request===suggestRequest)closeSuggestions()}},170);
  });
  query.addEventListener('keydown',e=>{if(suggestions.hidden)return;if(e.key==='ArrowDown'){e.preventDefault();highlightSuggestion(activeSuggest+1)}else if(e.key==='ArrowUp'){e.preventDefault();highlightSuggestion(activeSuggest<0?suggestItems.length-1:activeSuggest-1)}else if(e.key==='Escape')closeSuggestions();else if(e.key==='Enter'&&activeSuggest>=0){e.preventDefault();query.value=suggestItems[activeSuggest];openSearch()}});
  document.addEventListener('click',e=>{if(!e.target.closest('.search-shell'))closeSuggestions()});
  $('search').addEventListener('submit',e=>{e.preventDefault();openSearch()});
  $('voice-search').addEventListener('click',()=>{
    const Speech=window.SpeechRecognition||window.webkitSpeechRecognition;if(!Speech){$('voice-search').title='Voice search is not supported by this browser';return}
    const rec=new Speech();rec.lang=navigator.language||'en-US';rec.interimResults=false;rec.maxAlternatives=1;
    $('voice-search').classList.add('listening');rec.onresult=e=>{query.value=e.results[0][0].transcript;openSearch()};rec.onerror=()=>$('voice-search').classList.remove('listening');rec.onend=()=>$('voice-search').classList.remove('listening');$('voice-search').classList.add('listening');rec.start();
  });

  // Editable quick links with drag-and-drop ordering.
  function actionButton(label,title,handler,disabled=false){const b=document.createElement('button');b.type='button';b.className='ghost mini-action';b.textContent=label;b.title=title;b.disabled=disabled;b.addEventListener('click',handler);return b}
  function reorderArray(list,from,to){if(to<0||to>=list.length||from===to)return;const [item]=list.splice(from,1);list.splice(to,0,item);persist()}
  function renderBookmarks(){
    const bar=$('bookmarks'),editor=$('bookmark-edit');bar.replaceChildren();editor.replaceChildren();
    S.bookmarks.forEach((item,index)=>{
      const a=document.createElement('a');a.href=item.u;a.title=item.u;a.draggable=true;
      const img=document.createElement('img');img.className='bookmark-favicon';img.src='https://www.google.com/s2/favicons?domain_url='+encodeURIComponent(item.u)+'&sz=64';img.alt='';img.onerror=()=>{const f=document.createElement('span');f.className='bookmark-letter';f.textContent=(item.n||'?').slice(0,1).toUpperCase();img.replaceWith(f)};a.append(img,document.createTextNode(item.n));
      a.addEventListener('dragstart',e=>{e.dataTransfer.setData('text/plain',String(index));e.dataTransfer.effectAllowed='move'});a.addEventListener('dragover',e=>{e.preventDefault();a.classList.add('drag-over')});a.addEventListener('dragleave',()=>a.classList.remove('drag-over'));a.addEventListener('drop',e=>{e.preventDefault();a.classList.remove('drag-over');const from=Number(e.dataTransfer.getData('text/plain'));reorderArray(S.bookmarks,from,index);renderBookmarks()});bar.append(a);
      const li=document.createElement('li');li.className='bookmark-editor-row';const fields=document.createElement('div');fields.className='bookmark-fields';const name=document.createElement('input');name.value=item.n;name.placeholder='Name';name.setAttribute('aria-label','Bookmark name');const url=document.createElement('input');url.value=item.u;url.placeholder='https://…';url.setAttribute('aria-label','Bookmark URL');
      const saveEdit=()=>{const normalized=normalizeUrl(url.value);if(!name.value.trim()||!normalized){url.classList.add('invalid');return}url.classList.remove('invalid');S.bookmarks[index]={n:name.value.trim(),u:normalized};persist();renderBookmarks()};name.addEventListener('change',saveEdit);url.addEventListener('change',saveEdit);fields.append(name,url);
      const actions=document.createElement('div');actions.className='bookmark-actions';actions.append(actionButton('↑','Move up',()=>{reorderArray(S.bookmarks,index,index-1);renderBookmarks()},index===0),actionButton('↓','Move down',()=>{reorderArray(S.bookmarks,index,index+1);renderBookmarks()},index===S.bookmarks.length-1),actionButton('×','Remove bookmark',()=>{S.bookmarks.splice(index,1);persist();renderBookmarks()},false));li.append(fields,actions);editor.append(li);
    });
    renderHomepageBookmarkEditor();
  }
  function renderHomepageBookmarkEditor(){
    const list=$('home-bookmark-edit-list');if(!list)return;list.replaceChildren();
    S.bookmarks.forEach((item,index)=>{
      const row=document.createElement('li');row.className='home-bookmark-edit-row';
      const label=document.createElement('span');label.textContent=item.n;label.title=item.u;
      const edit=actionButton('✎','Edit name and URL',()=>{
        const name=prompt('Bookmark name',item.n);if(name===null)return;
        const raw=prompt('Bookmark URL',item.u);if(raw===null)return;
        const url=normalizeUrl(raw);if(!name.trim()||!url){alert('Enter a name and a valid http or https URL.');return}
        S.bookmarks[index]={n:name.trim().slice(0,64),u:url};persist();renderBookmarks();
      });
      const remove=actionButton('×','Delete app',()=>{
        if(!confirm(`Remove “${item.n}” from homepage quick links?`))return;
        S.bookmarks.splice(index,1);persist();renderBookmarks();
      });
      const actions=document.createElement('div');actions.className='bookmark-actions';actions.append(edit,remove);row.append(label,actions);list.append(row);
    });
    if(!S.bookmarks.length){const empty=document.createElement('li');empty.className='bookmark-empty';empty.textContent='No quick links yet. Add an app above.';list.append(empty)}
  }
  $('bookmark-add').addEventListener('click',()=>{const n=$('bookmark-n').value.trim(),u=normalizeUrl($('bookmark-u').value);if(!n||!u){$('bookmark-u').classList.add('invalid');return}$('bookmark-u').classList.remove('invalid');S.bookmarks.push({n,u});persist();renderBookmarks();$('bookmark-n').value=$('bookmark-u').value=''});
  const homeBookmarkEditor=$('homepage-bookmark-editor');
  $('bookmark-edit-toggle').addEventListener('click',()=>{
    homeBookmarkEditor.hidden=!homeBookmarkEditor.hidden;
    $('bookmark-edit-toggle').setAttribute('aria-expanded',String(!homeBookmarkEditor.hidden));
    if(!homeBookmarkEditor.hidden)$('home-bookmark-name').focus();
  });
  $('homepage-bookmark-editor-close').addEventListener('click',()=>{homeBookmarkEditor.hidden=true;$('bookmark-edit-toggle').setAttribute('aria-expanded','false')});
  $('home-bookmark-add').addEventListener('click',()=>{
    const name=$('home-bookmark-name').value.trim(),url=normalizeUrl($('home-bookmark-url').value);
    if(!name||!url){$('home-bookmark-url').classList.add('invalid');return}
    $('home-bookmark-url').classList.remove('invalid');S.bookmarks.push({n:name.slice(0,64),u:url});persist();renderBookmarks();
    $('home-bookmark-name').value='';$('home-bookmark-url').value='';$('home-bookmark-name').focus();
  });
  document.addEventListener('click',e=>{
    if(!homeBookmarkEditor.hidden&&!e.target.closest('#homepage-bookmark-editor')&&!e.target.closest('#bookmark-edit-toggle')){
      homeBookmarkEditor.hidden=true;$('bookmark-edit-toggle').setAttribute('aria-expanded','false');
    }
  });

  // Chrome profile bookmarks. The optional permission prompt is invoked only from the bookmark-button click.
  let browserBookmarks=[];
  function flattenBookmarks(nodes,out=[],folderPath=[]){
    for(const node of nodes||[]){
      if(node.url){
        const url=normalizeUrl(node.url);
        if(url)out.push({id:node.id,title:node.title||url,url,dateAdded:node.dateAdded||0,folder:folderPath.join(' / ')||'Bookmarks'});
      }else if(node.children){
        const nextPath=node.id==='0'||!node.title?folderPath:[...folderPath,node.title];
        flattenBookmarks(node.children,out,nextPath);
      }
    }
    return out;
  }
  function positionBrowserBookmarksPanel(){
    const panel=$('browser-bookmarks-panel');
    const button=$('browser-bookmarks-toggle');
    const margin=14,gap=10;
    const rect=button?.getBoundingClientRect();
    const width=Math.min(390,window.innerWidth-24);
    const maxHeight=Math.min(740,window.innerHeight-margin*2);
    let top=rect ? rect.bottom+gap : 76;
    if(top+maxHeight>window.innerHeight-margin) top=Math.max(margin,window.innerHeight-maxHeight-margin);
    panel.style.setProperty('--bookmark-panel-width',`${width}px`);
    panel.style.setProperty('--bookmark-panel-top',`${top}px`);
    panel.style.setProperty('--bookmark-panel-height',`${Math.max(260,window.innerHeight-top-margin)}px`);
    panel.style.right=`${margin}px`;
    panel.style.left='auto';
    panel.style.bottom='auto';
  }
  function renderBrowserBookmarks(){
    const list=$('browser-bookmark-list');
    const term=$('browser-bookmark-search').value.trim().toLowerCase();
    const sort=$('browser-bookmark-sort').value;
    list.replaceChildren();
    list.classList.add('list-view');
    const rows=browserBookmarks.filter(b=>(b.title+' '+b.url+' '+b.folder).toLowerCase().includes(term));
    rows.sort(sort==='recent'?(a,b)=>b.dateAdded-a.dateAdded:(a,b)=>a.title.localeCompare(b.title));
    if(!rows.length){
      const empty=document.createElement('div');empty.className='bookmark-empty-state';
      const mark=document.createElement('span');mark.className='bookmark-empty-mark';mark.textContent=term?'⌕':'▤';
      const title=document.createElement('strong');title.textContent=browserBookmarks.length?'No matching bookmarks':'Your bookmark library is empty';
      const hint=document.createElement('span');hint.textContent=browserBookmarks.length?'Try another search phrase.':'Bookmarks saved in this Chrome profile will appear here.';
      empty.append(mark,title,hint);list.append(empty);return;
    }
    const groups=new Map();
    rows.forEach(item=>{const key=item.folder||'Bookmarks';if(!groups.has(key))groups.set(key,[]);groups.get(key).push(item)});
    for(const [folder,items] of groups){
      const section=document.createElement('section');section.className='browser-bookmark-group';
      const heading=document.createElement('h3');heading.className='browser-bookmark-folder';
      const folderToggle=document.createElement('button');folderToggle.type='button';
      folderToggle.className='browser-bookmark-folder-toggle';folderToggle.setAttribute('aria-expanded','true');
      const folderIcon=document.createElementNS(NS,'svg');folderIcon.setAttribute('viewBox','0 0 24 24');folderIcon.setAttribute('aria-hidden','true');
      const folderPath=document.createElementNS(NS,'path');folderPath.setAttribute('d','M3.5 7.5A1.5 1.5 0 0 1 5 6h4.2l1.8 2H19a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 19 19H5a1.5 1.5 0 0 1-1.5-1.5z');
      folderIcon.append(folderPath);
      const folderName=document.createElement('span');folderName.className='browser-bookmark-folder-name';folderName.textContent=folder;
      const count=document.createElement('span');count.className='browser-bookmark-count';count.textContent=String(items.length);
      const chevron=document.createElement('span');chevron.className='browser-bookmark-folder-chevron';chevron.textContent='›';chevron.setAttribute('aria-hidden','true');
      folderToggle.append(folderIcon,folderName,count,chevron);heading.append(folderToggle);section.append(heading);
      const bucket=document.createElement('div');bucket.className='browser-bookmark-group-items';
      bucket.id=`bookmark-folder-${items[0].id}`;
      folderToggle.setAttribute('aria-controls',bucket.id);
      folderToggle.addEventListener('click',()=>{
        const collapsed=section.classList.toggle('is-collapsed');
        folderToggle.setAttribute('aria-expanded',String(!collapsed));
        bucket.hidden=collapsed;
      });
      items.forEach(item=>{
        const row=document.createElement('div');row.className='browser-bookmark-item';
        const a=document.createElement('a');a.href=item.url;a.target='_blank';a.rel='noopener noreferrer';
        a.title=item.title;a.textContent=item.title;
        row.append(a);
        const actions=document.createElement('div');actions.className='browser-bookmark-item-actions';
        const edit=actionButton('✎','Edit bookmark',()=>{
          const title=prompt('Bookmark name',item.title);if(title===null)return;
          const rawUrl=prompt('Bookmark URL',item.url);if(rawUrl===null)return;
          const normalized=normalizeUrl(rawUrl);if(!normalized){alert('Enter a valid http or https URL.');return}
          chrome.bookmarks.update(item.id,{title:title.trim()||normalized,url:normalized},refreshBrowserBookmarks);
        });
        const remove=actionButton('×','Delete bookmark',()=>{
          if(confirm(`Delete “${item.title}” from Chrome bookmarks?`))chrome.bookmarks.remove(item.id,refreshBrowserBookmarks);
        });
        actions.append(edit,remove);row.append(actions);bucket.append(row);
      });
      section.append(bucket);list.append(section);
    }
  }
  function refreshBrowserBookmarks(){
    if(!chrome.bookmarks)return;
    $('browser-bookmark-status').textContent='Loading bookmarks from this Chrome profile…';
    chrome.bookmarks.getTree(tree=>{
      if(chrome.runtime.lastError){$('browser-bookmark-status').textContent=`Could not read bookmarks: ${chrome.runtime.lastError.message}`;return}
      browserBookmarks=flattenBookmarks(tree);
      $('browser-bookmark-status').textContent=`${browserBookmarks.length} bookmarks · Chrome profile`;
      renderBrowserBookmarks();
    });
  }
  function closeBrowserBookmarksPanel(){
    const panel=$('browser-bookmarks-panel');panel.hidden=true;panel.setAttribute('aria-hidden','true');
    $('browser-bookmarks-toggle').setAttribute('aria-expanded','false');
  }
  function openBookmarksPanel(){
    const panel=$('browser-bookmarks-panel'),toggle=$('browser-bookmarks-toggle');
    if(!panel.hidden){closeBrowserBookmarksPanel();return}
    panel.hidden=false;panel.setAttribute('aria-hidden','false');toggle.setAttribute('aria-expanded','true');
    positionBrowserBookmarksPanel();
    if(!chrome.permissions){$('browser-bookmark-status').textContent='Chrome does not expose the extensions permission API in this browser.';return}
    chrome.permissions.contains({permissions:['bookmarks']},granted=>{
      if(chrome.runtime.lastError){$('browser-bookmark-status').textContent='Unable to check bookmark permission.';return}
      if(!granted){
        $('browser-bookmark-status').textContent='Bookmark access is not enabled. Open Settings → Chrome bookmark access to grant permission.';
        return;
      }
      if(!chrome.bookmarks){$('browser-bookmark-status').textContent='Permission is granted, but this browser does not expose the Chrome bookmarks API.';return}
      $('browser-bookmark-status').textContent='Permission granted. Loading bookmarks…';
      refreshBrowserBookmarks();
    });
  }
  $('browser-bookmarks-toggle').addEventListener('click',openBookmarksPanel);
  const permissionConfirm=$('bookmark-permission-confirm');
  function updateBookmarkPermissionStatus(){
    if(!chrome.permissions){$('bookmark-permission-status').textContent='Bookmark permissions are unavailable in this browser.';return}
    chrome.permissions.contains({permissions:['bookmarks']},granted=>{
      $('bookmark-permission-start').textContent=granted?'Bookmark access enabled':'Enable bookmark access';
      $('bookmark-permission-status').textContent=granted?'Access is enabled for this extension. You can revoke it anytime in Chrome extension settings.':'Access is currently disabled. Chrome will show its permission prompt after you confirm.';
    });
  }
  $('bookmark-permission-start').addEventListener('click',()=>{
    if(!chrome.permissions){$('bookmark-permission-status').textContent='Chrome does not expose the extensions permission API.';return}
    chrome.permissions.contains({permissions:['bookmarks']},granted=>{
      if(granted){$('bookmark-permission-status').textContent='Bookmark access is already enabled.';return}
      permissionConfirm.hidden=false;
    });
  });
  $('bookmark-permission-cancel').addEventListener('click',()=>{permissionConfirm.hidden=true});
  $('bookmark-permission-allow').addEventListener('click',()=>{
    permissionConfirm.hidden=true;
    if(!chrome.permissions){$('bookmark-permission-status').textContent='Permission API unavailable.';return}
    // This explicit confirmation click is the user gesture that triggers Chrome's native prompt.
    chrome.permissions.request({permissions:['bookmarks']},accepted=>{
      if(chrome.runtime.lastError){$('bookmark-permission-status').textContent=`Permission error: ${chrome.runtime.lastError.message}`;return}
      if(!accepted){$('bookmark-permission-status').textContent='Access was not granted. You can try again anytime.';return}
      $('bookmark-permission-status').textContent='Access granted. Chrome bookmarks are now available.';
      updateBookmarkPermissionStatus();
      if(!$('browser-bookmarks-panel').hidden){$('browser-bookmark-status').textContent='Permission granted. Loading bookmarks…';refreshBrowserBookmarks()}
    });
  });
  $('browser-bookmark-add').addEventListener('click',()=>{
    if(!chrome.bookmarks)return;
    const title=prompt('Bookmark name');if(title===null)return;
    const rawUrl=prompt('Bookmark URL','https://');if(rawUrl===null)return;
    const url=normalizeUrl(rawUrl);if(!url){alert('Enter a valid http or https URL.');return}
    chrome.bookmarks.create({title:title.trim()||url,url},refreshBrowserBookmarks);
  });
  $('browser-bookmarks-close').addEventListener('click',closeBrowserBookmarksPanel);
  $('browser-bookmark-search').addEventListener('input',renderBrowserBookmarks);
  $('browser-bookmark-sort').addEventListener('change',renderBrowserBookmarks);
  document.addEventListener('click',e=>{
    if(!$('browser-bookmarks-panel').hidden&&!e.target.closest('#browser-bookmarks-panel')&&!e.target.closest('#browser-bookmarks-toggle'))closeBrowserBookmarksPanel();
  });
  window.addEventListener('resize',()=>{if(!$('browser-bookmarks-panel').hidden)positionBrowserBookmarksPanel()});
  window.addEventListener('scroll',()=>{if(!$('browser-bookmarks-panel').hidden)positionBrowserBookmarksPanel()},true);

  // AI providers: add/remove/reorder with the floating dock retained.
  function renderAI(){
    $('ai-popover').replaceChildren();$('ai-edit').replaceChildren();
    S.ai.forEach((item,index)=>{
      const link=document.createElement('a');
      link.href=item.u;link.title=`Open ${item.n}`;link.setAttribute('aria-label',`Open ${item.n}`);
      const logoPath=logoFor(item.n)||item.logo||'';
      if(logoPath.startsWith('assets/')){
        const mark=document.createElement('span');mark.className='ai-logo-mask';mark.setAttribute('role','img');mark.setAttribute('aria-label',`${item.n} logo`);
        const assetUrl=chrome.runtime.getURL(logoPath);
        mark.style.setProperty('--ai-logo-url',`url("${assetUrl}")`);
        link.append(mark);
      }else{
        const fallback=document.createElement('span');fallback.className='fallback-logo';fallback.setAttribute('aria-hidden','true');fallback.textContent=item.n.slice(0,1).toUpperCase();link.append(fallback);
      }
      link.append(document.createTextNode(item.n));$('ai-popover').append(link);
      const li=document.createElement('li');li.append(document.createTextNode(item.n));const controls=document.createElement('span');controls.className='bookmark-actions';controls.append(actionButton('↑','Move up',()=>{reorderArray(S.ai,index,index-1);renderAI()},index===0),actionButton('↓','Move down',()=>{reorderArray(S.ai,index,index+1);renderAI()},index===S.ai.length-1),actionButton('×','Remove',()=>{S.ai.splice(index,1);persist();renderAI()}));li.append(controls);$('ai-edit').append(li);
    });
  }
  $('ai-add').addEventListener('click',()=>{const name=$('ai-n').value.trim(),url=normalizeUrl($('ai-u').value);if(!name||!url)return;S.ai.push({n:name,u:url,logo:logoFor(name)});persist();renderAI();$('ai-n').value=$('ai-u').value=''});
  $('ai-toggle').addEventListener('click',()=>{const isOpen=$('ai-popover').hidden;$('ai-popover').hidden=!isOpen;$('ai-toggle').setAttribute('aria-expanded',String(isOpen));$('ai-dock').classList.toggle('open',isOpen)});
  document.addEventListener('click',e=>{if(!$('ai-dock').contains(e.target)&&!$('ai-popover').hidden){$('ai-popover').hidden=true;$('ai-toggle').setAttribute('aria-expanded','false');$('ai-dock').classList.remove('open')}});

  // Allow ordinary mouse-wheel scrolling across the horizontal AI provider rail.
  $('ai-popover').addEventListener('wheel',event=>{
    const rail=$('ai-popover');
    if(Math.abs(event.deltaY)>Math.abs(event.deltaX)&&rail.scrollWidth>rail.clientWidth){
      event.preventDefault();
      rail.scrollLeft+=event.deltaY;
    }
  },{passive:false});

  // Google apps launcher: small monochrome SVG glyphs remain legible on every accent theme.
  const APP_GLYPHS={
    Gmail:'M3 6.5 12 13l9-6.5M4.5 5.5h15A1.5 1.5 0 0 1 21 7v10a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17V7a1.5 1.5 0 0 1 1.5-1.5Z',
    Calendar:'M5 4v4M19 4v4M4 8h16M5 5h14a1 1 0 0 1 1 1v13H4V6a1 1 0 0 1 1-1Z M8 12h2v2H8z M14 12h2v2h-2z M8 16h2v2H8z',
    Drive:'M8.5 4h6L21 15h-6z M8.5 4 2.8 14h6.1l5.6-10z M8.9 14 5.5 20h12l3.5-5.9z',
    Docs:'M6 3.5h8l4 4V21H6z M14 3.5v4h4 M9 12h6M9 16h6',
    Sheets:'M5 4h14v16H5z M5 9h14M5 14h14M10 9v11M15 9v11',
    Slides:'M4 5h16v11H4z M12 16v4M8 20h8 M8 9h8v4H8z',
    Maps:'M3.5 5.5 9 3.5l6 2 5.5-2v15L15 21l-6-2-5.5 2z M9 3.5V19M15 5.5v15 M12 8a2.4 2.4 0 1 0 0 4.8A2.4 2.4 0 0 0 12 8z M12 12.8l-2.2 3',
    Keep:'M12 21v-2M9 18h6M8 14.5a6 6 0 1 1 8 0c-.8.7-1.2 1.4-1.2 2.5h-5.6c0-1.1-.4-1.8-1.2-2.5Z M12 5v2M5.5 11H7M17 11h1.5',
    Photos:'M12 3.5c2.4 0 4.3 2 4.3 4.4 0 1.2-.5 2.2-1.3 3 1.1-.3 2.3-.1 3.3.6 2 1.2 2.6 3.9 1.4 5.8-1.2 2-3.9 2.6-5.8 1.4-1-.6-1.7-1.7-1.9-2.8-.2 1.1-.8 2.1-1.8 2.8-2 1.3-4.6.7-5.9-1.2-1.3-2-.7-4.6 1.2-5.9 1-.7 2.2-.9 3.3-.6-.8-.8-1.3-1.8-1.3-3 0-2.5 2-4.5 4.5-4.5Z',
    YouTube:'M21 8a2.5 2.5 0 0 0-1.8-1.8C17.6 5.8 12 5.8 12 5.8s-5.6 0-7.2.4A2.5 2.5 0 0 0 3 8a25 25 0 0 0-.4 4 25 25 0 0 0 .4 4 2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.2.4 7.2.4s5.6 0 7.2-.4A2.5 2.5 0 0 0 21 16a25 25 0 0 0 .4-4 25 25 0 0 0-.4-4Z M10 9l5 3-5 3z',
    Meet:'M4 7h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z M17 10l5-3v10l-5-3z',
    News:'M4 4.5h16v15H4z M7 8h4v4H7z M14 8h3M14 11h3M7 15h10M7 17h10'
  };
  function createAppGlyph(name){
    const svg=document.createElementNS(NS,'svg');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');
    const path=document.createElementNS(NS,'path');path.setAttribute('d',APP_GLYPHS[name]||'M5 5h14v14H5z M8 12h8');svg.append(path);return svg;
  }
  GOOGLE_APPS.forEach(([name,url])=>{const a=document.createElement('a');a.href=url;a.target='_blank';a.rel='noopener noreferrer';const icon=document.createElement('span');icon.className='app-icon';icon.append(createAppGlyph(name));const label=document.createElement('span');label.textContent=name;a.append(icon,label);$('apps-panel').append(a)});
  $('apps-toggle').addEventListener('click',()=>{
    const panel=$('apps-panel'),toggle=$('apps-toggle'),opening=panel.hidden;
    if(!opening){panel.hidden=true;toggle.setAttribute('aria-expanded','false');return}
    panel.hidden=false;toggle.setAttribute('aria-expanded','true');
    const r=toggle.getBoundingClientRect(),gap=10,margin=12,w=panel.offsetWidth||280,h=panel.offsetHeight||300;
    const left=Math.min(Math.max(margin,r.right-w),window.innerWidth-w-margin);
    let top=r.bottom+gap;if(top+h>window.innerHeight-margin)top=Math.max(margin,r.top-h-gap);
    panel.style.left=`${left}px`;panel.style.top=`${top}px`;panel.style.right='auto';panel.style.bottom='auto';
  });
  window.addEventListener('resize',()=>{if(!$('apps-panel').hidden){$('apps-panel').hidden=true;$('apps-toggle').setAttribute('aria-expanded','false')}});

  document.addEventListener('click',e=>{if(!e.target.closest('#apps-toggle')&&!e.target.closest('#apps-panel')){$('apps-panel').hidden=true;$('apps-toggle').setAttribute('aria-expanded','false')}});

  // To-do list with local persistence, completion, inline editing and cleanup.
  function saveTasks(){save('dt:tasks',tasks)}
  function renderTasks(){
    const list=$('todo-list');list.replaceChildren();
    tasks.forEach((task,index)=>{const li=document.createElement('li');li.className=task.done?'task-done':'';const check=document.createElement('input');check.type='checkbox';check.checked=!!task.done;check.setAttribute('aria-label','Mark task complete');check.addEventListener('change',()=>{tasks[index].done=check.checked;saveTasks();renderTasks()});const text=document.createElement('button');text.type='button';text.className='task-label';text.textContent=task.text;text.title='Click to edit';text.addEventListener('click',()=>{const updated=prompt('Edit task',task.text);if(updated===null)return;if(!updated.trim()){tasks.splice(index,1)}else tasks[index].text=updated.trim();saveTasks();renderTasks()});const remove=actionButton('×','Remove task',()=>{tasks.splice(index,1);saveTasks();renderTasks()});li.append(check,text,remove);list.append(li)});
    const open=tasks.filter(t=>!t.done).length;$('todo-count').textContent=`${open} remaining · ${tasks.length} total`;
  }
  $('todo-form').addEventListener('submit',e=>{e.preventDefault();const text=$('todo-input').value.trim();if(!text)return;tasks.unshift({text,done:false,created:Date.now()});saveTasks();renderTasks();$('todo-input').value=''});
  $('clear-completed').addEventListener('click',()=>{
    const before=tasks.length;
    tasks=tasks.filter(t=>!t.done);
    saveTasks();renderTasks();
    $('todo-count').textContent=before===tasks.length?'No completed tasks to clear':`Cleared ${before-tasks.length} completed task${before-tasks.length===1?'':'s'}`;
  });

  // Quotes and background personalization.
  function showQuote(){const day=Math.floor(Date.now()/86400000),index=(day+Number(load('dt:quote-offset',0)))%QUOTES.length;$('quote-text').textContent=QUOTES[(index+QUOTES.length)%QUOTES.length]}
  $('next-quote').addEventListener('click',()=>{save('dt:quote-offset',Number(load('dt:quote-offset',0))+1);showQuote()});

  // Theme Studio: each mode keeps its own palette and updates live.
  const themeFields={'theme-bg':'bg','theme-surface':'surface','theme-surface2':'surface2','theme-accent':'accent','theme-text':'text','theme-muted':'muted','theme-line':'line','theme-hover':'hover','theme-input':'input','theme-clock':'clock','theme-highlight':'highlight','theme-danger':'danger','theme-shadowLight':'shadowLight','theme-shadowDark':'shadowDark'};
  const cssVars={bg:'--bg',surface:'--surface',surface2:'--surface2',text:'--text',muted:'--muted',accent:'--accent',shadowLight:'--shadow-light',shadowDark:'--shadow-dark',line:'--line',hover:'--hover',input:'--input',clock:'--clock',highlight:'--highlight',danger:'--danger'};
  const prefersLight=window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)');
  function activeThemeKey(){return S.themeMode==='light'||(S.themeMode==='system'&&prefersLight&&prefersLight.matches)?'lightTheme':'theme'}
  function activeTheme(){return S[activeThemeKey()]}
  function syncThemeInputs(){const theme=activeTheme();Object.entries(themeFields).forEach(([id,key])=>{$(id).value=theme[key]||DEFAULT_THEME[key]})}
  function applyLook(){
    const root=document.documentElement.style,theme=activeTheme();Object.entries(theme).forEach(([key,value])=>{if(cssVars[key])root.setProperty(cssVars[key],value)});
    root.setProperty('--dim',Math.max(0,Math.min(90,Number(S.dim)||0))/100);root.setProperty('--widget-opacity',`${Math.max(35,Math.min(100,Number(S.opacity)||100))}%`);
    const ui=S.ui||{};root.setProperty('--ui-radius',`${Math.max(6,Math.min(32,Number(ui.radius)||18))}px`);root.setProperty('--ui-gap',`${Math.max(8,Math.min(30,Number(ui.gap)||16))}px`);root.setProperty('--ui-scale',(Math.max(85,Math.min(115,Number(ui.scale)||100))/100));root.setProperty('--ui-border-opacity',(Math.max(0,Math.min(100,Number(ui.border)||45))/100));root.setProperty('--ui-shadow-opacity',(Math.max(0,Math.min(100,Number(ui.shadow)||0))/100));const fonts={system:'system-ui,-apple-system,"Segoe UI",sans-serif',inter:'Inter,system-ui,sans-serif',rounded:'"Arial Rounded MT Bold",system-ui,sans-serif',mono:'ui-monospace,SFMono-Regular,monospace'};root.setProperty('--font',fonts[ui.font]||fonts.system);
    document.body.dataset.appearance=activeThemeKey()==='lightTheme'?'light':'dark';const wall=typeof S.wall==='string'&&(S.wall.startsWith('data:image/')||S.wall.startsWith('https://'))?S.wall:'';$('wall').style.backgroundImage=wall?`url(${JSON.stringify(wall)})`:'none';$('wall').classList.toggle('on',!!wall);
    const transparentTargets={
      clock:'.clock-card',weather:'.weather-card',notes:'.notes-card',tasks:'.todo-card',
      bookmarks:'.bookmark-toolbar',browserBookmarks:'#browser-bookmarks-panel',
      search:'.search-shell',quote:'.quote-line',ai:'#ai-dock',apps:'#apps-panel'
    };
    Object.entries(transparentTargets).forEach(([key,selector])=>{
      document.querySelectorAll(selector).forEach(el=>el.classList.toggle('transparent-card',!!S.transparentCards?.[key]));
    });
    // Toggle a single root class as well, so nested card surfaces can be styled reliably.
    document.body.classList.toggle('has-transparent-cards',Object.values(S.transparentCards||{}).some(Boolean));
    drawTicks();
  }
  Object.entries(themeFields).forEach(([id,key])=>$(id).addEventListener('input',()=>{S[activeThemeKey()][key]=$(id).value;persist();applyLook()}));
  THEME_PRESETS.forEach(p=>{const b=document.createElement('button');b.type='button';b.title=p.name;b.setAttribute('aria-label',p.name+' theme');b.style.background=`linear-gradient(135deg,${p.v.accent},${p.v.surface})`;b.addEventListener('click',()=>{S.theme={...p.v};S.lightTheme={...LIGHT_THEME,accent:p.v.accent};syncThemeInputs();persist();applyLook()});$('theme-presets').append(b)});
  $('theme-mode').value=S.themeMode||'dark';$('theme-mode').addEventListener('change',()=>{S.themeMode=$('theme-mode').value;syncThemeInputs();persist();applyLook()});
  $('theme-reset').addEventListener('click',()=>{if(activeThemeKey()==='lightTheme')S.lightTheme={...LIGHT_THEME};else S.theme={...DEFAULT_THEME};syncThemeInputs();persist();applyLook()});
  if(prefersLight)prefersLight.addEventListener('change',()=>{if(S.themeMode==='system'){syncThemeInputs();applyLook()}});

  // Module visibility toggles.
  const moduleTargets={clock:'.clock-card',weather:'.weather-card',notes:'.notes-card',tasks:'.todo-card',bookmarks:'.bookmark-toolbar',quotes:'.quote-line',ai:'#ai-dock',apps:'#apps-toggle'};
  function applyModules(){Object.entries(moduleTargets).forEach(([key,selector])=>{const el=document.querySelector(selector);if(el)el.classList.toggle('is-hidden',S.modules[key]===false)})}
  Object.keys(moduleTargets).forEach(key=>{const id='show-'+key,el=$(id);if(el){el.checked=S.modules[key]!==false;el.addEventListener('change',()=>{S.modules[key]=el.checked;persist();applyModules()})}});

  // Settings panel, clock, personal message and wallpaper.
  const panel=$('panel'),togglePanel=open=>{panel.classList.toggle('open',open);panel.setAttribute('aria-hidden',String(!open))};
  $('gear').addEventListener('click',()=>togglePanel(!panel.classList.contains('open')));$('close').addEventListener('click',()=>togglePanel(false));
  document.addEventListener('click',e=>{
    if(panel.classList.contains('open')&&!panel.contains(e.target)&&!e.target.closest('#gear')){
      togglePanel(false);
    }
  });

  document.addEventListener('keydown',e=>{if(e.key==='Escape'){togglePanel(false);closeSuggestions();$('ai-popover').hidden=true;$('apps-panel').hidden=true;closeBrowserBookmarksPanel()}});
  function bindSetting(id,key,type='value',after){const el=$(id);if(type==='check')el.checked=!!S[key];else el.value=S[key];el.addEventListener(type==='text'?'change':'input',()=>{S[key]=type==='check'?el.checked:type==='number'?Number(el.value):el.value;persist();if(after)after()})}
  $('s-h12').value=S.h12?'1':'0';bindSetting('s-name','name','text',greet);bindSetting('s-city','city','text',()=>updateWeather(true));bindSetting('s-units','units','value',()=>updateWeather(true));$('s-h12').addEventListener('change',()=>{S.h12=$('s-h12').value==='1';persist();tick()});$('s-h12').value=S.h12?'1':'0';
  bindSetting('s-secs','secs','check',tick);bindSetting('s-ticks','ticks','check',drawTicks);bindSetting('s-digi','digi','check',tick);bindSetting('s-digital-secs','digitalSecs','check',tick);
  $('s-clock-mode').value=S.clockMode||'analog';$('s-clock-mode').addEventListener('change',()=>{S.clockMode=$('s-clock-mode').value;persist();tick()});
  bindSetting('s-show-greeting','showGreeting','check',greet);bindSetting('s-show-date','showDate','check',greet);
  bindSetting('s-gps','useGps','check',()=>{gpsBlocked=false;updateWeather(true)});
  bindSetting('s-dim','dim','number',applyLook);bindSetting('s-opacity','opacity','number',applyLook);
  $('s-custom-text').value=S.customText||'';$('s-custom-text').addEventListener('input',()=>{S.customText=$('s-custom-text').value;persist();greet()});$('s-custom-text-visible').checked=!!S.customTextVisible;$('s-custom-text-visible').addEventListener('change',()=>{S.customTextVisible=$('s-custom-text-visible').checked;persist();greet()});
  $('s-wall').addEventListener('change',e=>{const file=e.target.files&&e.target.files[0];$('wallpaper-file-name').textContent=file?file.name:'No file selected';if(!file)return;const objectUrl=URL.createObjectURL(file),img=new Image();img.onload=()=>{const scale=Math.min(1,1920/img.width),canvas=document.createElement('canvas');canvas.width=img.width*scale;canvas.height=img.height*scale;canvas.getContext('2d').drawImage(img,0,0,canvas.width,canvas.height);S.wall=canvas.toDataURL('image/jpeg',.84);URL.revokeObjectURL(objectUrl);if(!persist()){S.wall='';alert('That wallpaper is too large to save. Try a smaller image.')}applyLook()};img.onerror=()=>{URL.revokeObjectURL(objectUrl);alert('Could not open that image')};img.src=objectUrl});
  // Per-card transparent backgrounds.
  const transparentCardKeys=['clock','weather','notes','tasks','bookmarks','browserBookmarks','search','quote','ai','apps'];
  transparentCardKeys.forEach(key=>{
    const id='transparent-'+(key==='browserBookmarks'?'browser-bookmarks':key);
    const control=$(id);if(!control)return;
    control.checked=!!S.transparentCards[key];
    control.addEventListener('change',()=>{
      S.transparentCards=S.transparentCards||{...DEF.transparentCards};
      S.transparentCards[key]=control.checked;
      persist();applyLook();
    });
  });

  async function chooseRandomWallpaper(){
    const button=$('wall-random');
    const previous=button.textContent;
    const previousWall=S.wall;
    button.disabled=true;
    button.setAttribute('aria-busy','true');
    button.textContent='Loading…';
    try{
      const response=await fetch(`https://picsum.photos/1920/1080?random=${Date.now()}`,{cache:'no-store',mode:'cors'});
      if(!response.ok)throw new Error(`Image service returned ${response.status}`);
      const blob=await response.blob();
      if(!blob.type.startsWith('image/'))throw new Error('The image service did not return an image');
      const objectUrl=URL.createObjectURL(blob);
      try{
        const image=new Image();
        await new Promise((resolve,reject)=>{
          image.onload=resolve;
          image.onerror=()=>reject(new Error('Could not decode the selected wallpaper'));
          image.src=objectUrl;
        });
        const scale=Math.min(1,1920/image.width,1080/image.height);
        const canvas=document.createElement('canvas');
        canvas.width=Math.max(1,Math.round(image.width*scale));
        canvas.height=Math.max(1,Math.round(image.height*scale));
        const context=canvas.getContext('2d',{alpha:false});
        if(!context)throw new Error('Could not prepare the wallpaper image');
        context.drawImage(image,0,0,canvas.width,canvas.height);
        S.wall=canvas.toDataURL('image/jpeg',.80);
      }finally{
        URL.revokeObjectURL(objectUrl);
      }
      if(!persist()){
        S.wall=previousWall;
        throw new Error('Could not save the wallpaper. Storage may be full.');
      }
      applyLook();
    }catch(error){
      S.wall=previousWall;
      console.error('Manifest Studio random wallpaper:',error);
      alert(`Could not load a random wallpaper. ${error.message||'Please try again.'}`);
    }finally{
      button.disabled=false;
      button.removeAttribute('aria-busy');
      button.textContent=previous;
    }
  }
  $('wall-random').addEventListener('click',chooseRandomWallpaper);
  $('wall-clear').addEventListener('click',()=>{S.wall='';persist();applyLook()});

  // Openverse wallpaper search: anonymous API, openly licensed image results.
  let openversePage=1,openverseQuery='',openverseController=null;
  const wallSearchForm=$('wall-search-form');
  const wallSearchInput=$('wall-search-query');
  const wallSearchResults=$('wall-search-results');
  const wallSearchStatus=$('wall-search-status');
  const wallSearchMore=$('wall-search-more');
  const setWallSearchStatus=message=>{wallSearchStatus.textContent=message};
  function makeOpenverseResult(item){
    const card=document.createElement('article');card.className='openverse-result';
    const preview=document.createElement('img');
    preview.className='openverse-preview';preview.loading='lazy';preview.alt=String(item.title||'Openverse image').slice(0,160);
    preview.src=item.thumbnail||item.url||'';preview.referrerPolicy='no-referrer';
    preview.addEventListener('error',()=>{preview.classList.add('preview-unavailable');preview.alt='Preview unavailable'});
    const body=document.createElement('div');body.className='openverse-result-body';
    const title=document.createElement('div');title.className='openverse-result-title';
    title.textContent=String(item.title||'Untitled image').slice(0,120);
    const creator=document.createElement('div');creator.className='openverse-result-meta';
    creator.textContent=item.creator?`By ${String(item.creator).slice(0,90)}`:'Creator not listed';
    const licence=document.createElement('a');licence.className='openverse-license';
    licence.textContent=String(item.license||'Licence details').toUpperCase()+(item.license_version?' '+item.license_version:'');
    licence.href=item.license_url||item.foreign_landing_url||'https://openverse.org/';
    licence.target='_blank';licence.rel='noopener noreferrer';
    const actions=document.createElement('div');actions.className='openverse-result-actions';
    const use=document.createElement('button');use.type='button';use.className='soft-button openverse-use';use.textContent='Set wallpaper';
    use.addEventListener('click',()=>{
      const imageUrl=String(item.url||'');
      try{
        const parsed=new URL(imageUrl);
        if(parsed.protocol!=='https:')throw new Error('Only secure image links can be used.');
        S.wall=parsed.href;
        if(!persist()){S.wall='';throw new Error('Could not save the wallpaper. Storage may be full.')}
        applyLook();
        setWallSearchStatus(`Wallpaper applied: ${String(item.title||'Selected image').slice(0,100)}. Creator and licence details are shown on its result card.`);
        card.classList.add('is-applied');
      }catch(error){setWallSearchStatus(error.message||'Could not apply this image.')}
    });
    const source=document.createElement('a');source.className='openverse-source';
    source.textContent='View source ↗';source.href=item.foreign_landing_url||'https://openverse.org/';
    source.target='_blank';source.rel='noopener noreferrer';
    actions.append(use,source);
    body.append(title,creator,licence,actions);
    card.append(preview,body);
    return card;
  }
  async function searchOpenverseWallpapers(query,page=1,append=false){
    const clean=String(query||'').trim().slice(0,160);
    if(!clean){setWallSearchStatus('Enter a search term, such as “mountain landscape” or “dark architecture”.');wallSearchInput.focus();return}
    if(openverseController)openverseController.abort();
    openverseController=new AbortController();
    const controller=openverseController;
    openverseQuery=clean;openversePage=page;
    const submit=$('wall-search-submit');
    submit.disabled=true;wallSearchMore.disabled=true;
    if(!append)wallSearchResults.replaceChildren();
    setWallSearchStatus(`Searching Openverse for “${clean}”…`);
    wallSearchMore.hidden=true;
    try{
      const params=new URLSearchParams({q:clean,page:String(page),page_size:'16',mature:'false',filter_dead:'true'});
      const response=await fetch(`https://api.openverse.org/v1/images/?${params.toString()}`,{
        method:'GET',headers:{Accept:'application/json'},signal:controller.signal,cache:'no-store'
      });
      if(!response.ok){
        if(response.status===429)throw new Error('Openverse search limit reached. Please wait a little and try again.');
        throw new Error(`Openverse returned an error (${response.status}). Please try again.`);
      }
      const data=await response.json();
      const results=Array.isArray(data.results)?data.results:[];
      if(!append)wallSearchResults.replaceChildren();
      results.forEach(item=>{if(item&&item.url&&item.url.startsWith('https://'))wallSearchResults.append(makeOpenverseResult(item))});
      const total=Number(data.result_count)||0;
      setWallSearchStatus(results.length?`${total.toLocaleString()} results found. Select any image to set it as your wallpaper.`:'No images found. Try a different search phrase.');
      const hasMore=page<Number(data.page_count||1)&&results.length>0;
      wallSearchMore.hidden=!hasMore;
      wallSearchMore.disabled=false;
    }catch(error){
      if(error.name!=='AbortError'){
        setWallSearchStatus(error.message||'Could not search Openverse. Check your connection and try again.');
        wallSearchMore.hidden=true;
      }
    }finally{
      if(openverseController===controller){submit.disabled=false;wallSearchMore.disabled=false}
    }
  }
  wallSearchForm.addEventListener('submit',event=>{
    event.preventDefault();searchOpenverseWallpapers(wallSearchInput.value,1,false);
  });
  wallSearchMore.addEventListener('click',()=>searchOpenverseWallpapers(openverseQuery,openversePage+1,true));

  // Import/export of Manifest Studio settings and user data.
    const uiControls={ 'ui-font':'font','ui-radius':'radius','ui-gap':'gap','ui-scale':'scale','ui-border':'border','ui-shadow':'shadow' };
  Object.entries(uiControls).forEach(([id,key])=>{const el=$(id);if(!el)return;el.value=(S.ui&&S.ui[key])??DEF.ui[key];el.addEventListener('input',()=>{S.ui=S.ui||{...DEF.ui};S.ui[key]=key==='font'?el.value:Number(el.value);persist();applyLook()})});
$('backup-export').addEventListener('click',()=>{
    const payload={format:'ManifestStudioBackup',version:2,created:new Date().toISOString(),data:{settings:S,note:load('dt:note',''),tasks,quoteOffset:load('dt:quote-offset',0),weather:load('dt:wx',null)}};
    const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`ManifestStudio_Backup_${new Date().toISOString().slice(0,10)}.json`;a.click();URL.revokeObjectURL(url);
  });
  $('backup-import-trigger').addEventListener('click',()=>$('backup-import').click());
  $('backup-import').addEventListener('change',async e=>{const file=e.target.files&&e.target.files[0];if(!file)return;try{const payload=JSON.parse(await file.text());if(!['ManifestStudioBackup','DarkTabBackup'].includes(payload.format)||!payload.data||typeof payload.data!=='object')throw Error('This is not a valid Manifest Studio backup');if(!confirm('Restore this backup? Current Manifest Studio settings and notes will be replaced.'))return;S={...DEF,...payload.data.settings};sanitizeState();S.aiCatalogV14Added=true;save('dt:settings',S);save('dt:note',String(payload.data.note||''));save('dt:tasks',Array.isArray(payload.data.tasks)?payload.data.tasks.filter(t=>t&&typeof t==='object'&&typeof t.text==='string').map(t=>({text:t.text.slice(0,120),done:!!t.done,created:Number(t.created)||Date.now()})):[]);save('dt:quote-offset',Number(payload.data.quoteOffset)||0);if(payload.data.weather)save('dt:wx',payload.data.weather);location.reload()}catch(err){alert(err.message||'Could not restore this backup')}finally{e.target.value=''}});
  $('reset').addEventListener('click',()=>{if(confirm('Reset all Manifest Studio settings, notes and tasks?')){for(let i=localStorage.length-1;i>=0;i--){const key=localStorage.key(i);if(key&&key.startsWith('dt:'))localStorage.removeItem(key)}location.reload()}});

  // Convert every remaining native select into the same custom, animated dropdown.
  function enhanceSelect(select){
    if(!select||select.id==='engine'||select.dataset.customized==='true')return;
    select.dataset.customized='true';
    const wrap=document.createElement('div');wrap.className='custom-select-wrap';
    select.parentNode.insertBefore(wrap,select);
    wrap.appendChild(select);
    select.classList.add('custom-select-source');

    const trigger=document.createElement('button');
    trigger.type='button';trigger.className='custom-select-trigger';
    trigger.setAttribute('aria-haspopup','listbox');trigger.setAttribute('aria-expanded','false');
    const label=select.getAttribute('aria-label')||select.id.replace(/^s-/,'').replace(/-/g,' ');
    trigger.setAttribute('aria-label',`Choose ${label}`);
    const value=document.createElement('span');value.className='custom-select-value';
    const chevron=document.createElementNS(NS,'svg');chevron.setAttribute('viewBox','0 0 12 12');chevron.setAttribute('aria-hidden','true');
    const chevronPath=document.createElementNS(NS,'path');chevronPath.setAttribute('d','m2 4 4 4 4-4');
    chevron.append(chevronPath);trigger.append(value,chevron);

    const menu=document.createElement('div');menu.className='custom-select-menu';menu.hidden=true;
    menu.setAttribute('role','listbox');menu.setAttribute('aria-label',label);
    wrap.append(trigger,menu);

    let closeTimer=0;
    const render=()=>{
      const option=select.options[select.selectedIndex];
      value.textContent=option?option.textContent:'Select…';
      menu.replaceChildren();
      [...select.options].forEach(option=>{
        const item=document.createElement('button');item.type='button';item.className='custom-select-option';
        item.setAttribute('role','option');item.setAttribute('aria-selected',String(option.value===select.value));
        const check=document.createElement('span');check.className='custom-select-check';check.textContent=option.value===select.value?'✓':'';
        item.append(check,document.createTextNode(option.textContent));
        item.addEventListener('click',()=>{
          if(select.value!==option.value){select.value=option.value;select.dispatchEvent(new Event('change',{bubbles:true}))}
          render();close();
        });
        menu.append(item);
      });
    };
    const open=()=>{
      document.querySelectorAll('.custom-select-menu.is-open').forEach(other=>{
        if(other!==menu){other.classList.remove('is-open');const w=other.closest('.custom-select-wrap');w?.querySelector('.custom-select-trigger')?.setAttribute('aria-expanded','false');}
      });
      clearTimeout(closeTimer);menu.hidden=false;
      requestAnimationFrame(()=>menu.classList.add('is-open'));
      trigger.setAttribute('aria-expanded','true');
      menu.querySelector('[aria-selected="true"]')?.focus();
    };
    const close=()=>{
      if(menu.hidden)return;
      menu.classList.remove('is-open');trigger.setAttribute('aria-expanded','false');
      clearTimeout(closeTimer);
      closeTimer=setTimeout(()=>{if(!menu.classList.contains('is-open'))menu.hidden=true},190);
    };
    trigger.addEventListener('click',()=>menu.hidden?open():close());
    trigger.addEventListener('keydown',e=>{
      if(e.key==='ArrowDown'&&!menu.classList.contains('is-open')){e.preventDefault();open()}
      if(e.key==='Escape')close();
    });
    menu.addEventListener('keydown',e=>{
      const options=[...menu.querySelectorAll('.custom-select-option')],index=options.indexOf(document.activeElement);
      if(e.key==='Escape'){e.preventDefault();close();trigger.focus()}
      else if(e.key==='ArrowDown'){e.preventDefault();options[Math.min(index+1,options.length-1)]?.focus()}
      else if(e.key==='ArrowUp'){e.preventDefault();options[Math.max(index-1,0)]?.focus()}
      else if(e.key==='Home'){e.preventDefault();options[0]?.focus()}
      else if(e.key==='End'){e.preventDefault();options.at(-1)?.focus()}
    });
    select.addEventListener('change',render);
    wrap._closeCustomSelect=close;
    render();
  }
  document.querySelectorAll('select:not(#engine)').forEach(enhanceSelect);
  document.addEventListener('click',e=>{
    document.querySelectorAll('.custom-select-wrap').forEach(wrap=>{
      if(!wrap.contains(e.target))wrap._closeCustomSelect?.();
    });
  });
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape')document.querySelectorAll('.custom-select-wrap').forEach(wrap=>wrap._closeCustomSelect?.());
  });

  // First render and periodic refresh.
  $('s-gps').checked=!!S.useGps;updateBookmarkPermissionStatus();syncThemeInputs();greet();renderBookmarks();renderAI();renderTasks();showQuote();applyLook();applyModules();updateWeather();
  setInterval(greet,1000);setInterval(tick,250);setInterval(()=>updateWeather(true),30*60*1000);tick();
})();
