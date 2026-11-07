/* Al Manara site code (public website code). Built by build_perf_cdn.py from the blocks that used to sit inline in Wuilt Header/Body.
   Each block is the same IIFE as before (they used to be gunzipped then eval-ed); exposed in window.__amBlk so the REMOUNT scripts can re-run them. */
window.__amBlk=window.__amBlk||{};
(function(){var R=window.__amBlk,P=location.pathname.replace(/\/+$/,"");
function run(k,gate,f){R[k]=f;if(gate!==null&&P!==gate)return;try{f()}catch(e){if(window.console)console.warn("AM-APP "+k,e)}}
run('motion',null,function(){
(function(){
 if(window.__amMotion) return; window.__amMotion=1;
 var css='header{position:fixed!important;top:0;left:0;right:0;width:100%;z-index:60;transition:box-shadow .25s,background .25s}'+
 'header.am-scrolled{background:rgba(255,255,255,.94);backdrop-filter:blur(8px);box-shadow:0 2px 14px rgba(15,43,79,.10)}'+
 '.am-reveal{opacity:0;transform:translateY(16px);transition:opacity .45s ease,transform .45s ease}'+
 '.am-reveal.am-in{opacity:1;transform:none}'+
 'p,[style*="justify"]{text-align:left!important}'+
 '#am-progress{position:fixed;top:0;left:0;height:2px;width:0;background:#F2862E;z-index:70}'+
 '#am-mbar{display:none}'+
 '@media(max-width:767px){#am-mbar{display:flex;position:fixed;bottom:0;left:0;right:0;z-index:65;background:#fff;box-shadow:0 -2px 12px rgba(0,0,0,.12)}'+
 '#am-mbar a{flex:1;text-align:center;padding:13px 6px;font-weight:600;font-size:14px;text-decoration:none}'+
 '#am-mbar .q{background:#F2862E;color:#fff}#am-mbar .w{color:#0F2B4F}body{padding-bottom:52px}[class*="WidgetContainer"]{bottom:64px!important}}'+
 '@media(prefers-reduced-motion:reduce){*{transition:none!important;animation:none!important}.am-reveal{opacity:1;transform:none}}';
 function go(){
  var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
  var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var h=document.querySelector('header');
  if(h&&h.parentElement)h.parentElement.style.height=Math.round(h.getBoundingClientRect().height)+'px';
  var bar=document.createElement('div');bar.id='am-progress';document.body.appendChild(bar);
  addEventListener('scroll',function(){
   if(h)h.classList.toggle('am-scrolled',scrollY>80);
   var d=document.documentElement;bar.style.width=(scrollY/Math.max(1,d.scrollHeight-innerHeight)*100)+'%';
  },{passive:true});
  var C=String.fromCharCode;
  var lang=(location.pathname.split('/')[1]||'').toLowerCase();
  var T={fr:'Demander un devis',es:'Solicitar cotizaci'+C(243)+'n',pt:'Solicitar cota'+C(231)+C(227)+'o'};
  var q=T[lang]||'Request a quote', base=T[lang]?'/'+lang:'';
  var m=document.createElement('div');m.id='am-mbar';
  m.innerHTML='<a class="w" href="https://wa.me/201146006496">WhatsApp</a><a class="q" href="'+base+'/contact-us">'+q+'</a>';
  document.body.appendChild(m);
  function fillAlt(){
   document.querySelectorAll('img').forEach(function(im){
    if((im.getAttribute('alt')||'').trim())return;
    var n=im.parentElement,hd=null;
    for(var i=0;i<6&&n&&!hd;i++){hd=n.querySelector('h1,h2,h3');n=n.parentElement;}
    im.setAttribute('alt',(hd?hd.textContent.trim().replace(/\s+/g,' ').slice(0,90)+' - ':'')+'Al Manara, Egypt');
   });
  }
  [800,2500,6000].forEach(function(ms){setTimeout(fillAlt,ms);});
  addEventListener('load',function(){setTimeout(fillAlt,300);});
  var mt=null;new MutationObserver(function(){clearTimeout(mt);mt=setTimeout(fillAlt,400);}).observe(document.body,{childList:true,subtree:true});
  if(!document.querySelector('script[data-am-org]')){
   var s=document.createElement('script');s.type='application/ld+json';s.setAttribute('data-am-org','1');
   var P=location.pathname.replace(/\/$/,''),U='https://manaragrp.com',lg=document.querySelector('img[src*=wuiltweb]'),G=[{'@type':'Organization','@id':U+'/#org','name':'Al Manara for Investment and Commercial Agencies','alternateName':'Al Manara','url':U+'/','logo':lg?lg.src:undefined,'foundingDate':'2020','numberOfEmployees':{'@type':'QuantitativeValue','minValue':11,'maxValue':50},'areaServed':['Europe','Africa','Middle East'],'knowsAbout':['Recycled polypropylene pellets','Recycled polyethylene pellets','IPP Raffia','Calcium carbonate powder','Bitumen membrane raw materials','Export from Egypt'],'telephone':'+20 11 4600 6496','email':'info@manaragrp.com','contactPoint':[{'@type':'ContactPoint','contactType':'sales','telephone':'+20 11 4600 6496','email':'info@manaragrp.com','availableLanguage':['English','Arabic']}],'address':{'@type':'PostalAddress','streetAddress':'47 Neighborhood 41','addressLocality':'Tenth of Ramadan City','addressCountry':'EG'},'location':{'@type':'Place','name':'Head Office','address':{'@type':'PostalAddress','streetAddress':'E9 Sky Degla1','addressLocality':'Tenth of Ramadan City','addressCountry':'EG'}},'sameAs':['https://www.linkedin.com/company/al-manara-for-investment-and-commercial-agencies/','https://www.youtube.com/channel/UChGF80Wkrd_r7bQpRg-ntqQ'],'description':'Egypt-based exporter of recycled plastic pellets (IPP Raffia, PP, HDPE) and calcium carbonate powder in 14 grades, 8-45 um. TDS and SDS available.'},{'@type':'WebSite','@id':U+'/#site','url':U+'/','name':'Al Manara','publisher':{'@id':U+'/#org'},'inLanguage':'en'},{'@type':'WebPage','url':P?U+P:U+'/','name':document.title,'isPartOf':{'@id':U+'/#site'},'about':{'@id':U+'/#org'},'inLanguage':'en'}];
   if(P)G.push({'@type':'BreadcrumbList','itemListElement':[{'@type':'ListItem','position':1,'name':'Home','item':U+'/'},{'@type':'ListItem','position':2,'name':document.title.split('|')[0].trim(),'item':U+P}]});
   s.textContent=JSON.stringify({'@context':'https://schema.org','@graph':G});
   document.head.appendChild(s);
  }
  [500,2000,5000,9000].forEach(function(ms){setTimeout(function(){[].forEach.call(document.querySelectorAll('a[href]'),function(a){if((a.textContent||'').trim()||a.getAttribute('aria-label'))return;var x=a.href,l=/linkedin/.test(x)?'Al Manara on LinkedIn':/youtube/.test(x)?'Al Manara on YouTube':/wa\.me|whatsapp/.test(x)?'Chat with Al Manara on WhatsApp':/^mailto/.test(x)?'Email Al Manara':/^tel/.test(x)?'Call Al Manara':'';if(l)a.setAttribute('aria-label',l)})},ms)});
  if(rm||!('IntersectionObserver' in window))return;
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('am-in');io.unobserve(e.target);}})},{rootMargin:'0px 0px -8% 0px'});
  setTimeout(function(){
   document.querySelectorAll('h2,h3,p,img').forEach(function(el,i){
    if(el.closest('header,footer,#am-mbar'))return;
    if(el.getBoundingClientRect().top<innerHeight)return;
    el.classList.add('am-reveal');el.style.transitionDelay=(i%4)*60+'ms';io.observe(el);});
  },600);
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();
})();
});
run('sds','/am-mining',function(){
/* AM-SDS v1 (2026-10-13): multilingual SDS center (FR/ES/PT) - protected view-only viewer */
(function(){
 if(window.__amSds) return; window.__amSds=1;
 if(location.pathname.replace(/\/$/,'')!=='/am-mining') return;
 var C=String.fromCharCode, B='https://assets.wuiltweb.com/241623/';
 var M={"FR":["101320261232026ace24c2a20f1.webp","101320261232086ace24c8a2f81.webp","101320261204056ace1e35a9ea5.webp","101320261204186ace1e42a735a.webp","101320261204326ace1e5008ce0.webp","101320261204456ace1e5d81e51.webp","101320261204506ace1e62a87ba.webp","101320261205136ace1e799e23b.webp","101320261205306ace1e8a4d612.webp"],"ES":["101320261232146ace24ce20045.webp","101320261232196ace24d3c6cdd.webp","101320261206176ace1eb9e6e5f.webp","101320261206376ace1ecdc012b.webp","101320261206506ace1edac0e46.webp","101320261209076ace1f6311e74.webp","101320261214166ace2098d61f6.webp","101320261214326ace20a84ca60.webp"],"PT":["101320261232256ace24d93327d.webp","101320261232306ace24dee126e.webp","101320261215186ace20d64be7e.webp","101320261215306ace20e286b33.webp","101320261215446ace20f083bf5.webp","101320261215556ace20fb4b335.webp","101320261216126ace210c19ef2.webp","101320261216346ace212203165.webp"]};
 var L=[
  {k:'FR',n:'Fran'+C(231)+'ais',pair:'English + Fran'+C(231)+'ais',pages:9},
  {k:'ES',n:'Espa'+C(241)+'ol',pair:'English + Espa'+C(241)+'ol',pages:8},
  {k:'PT',n:'Portugu'+C(234)+'s',pair:'English + Portugu'+C(234)+'s',pages:8}
 ];
 var css='.amsds{max-width:1180px;margin:0 auto;padding:8px 20px 56px;box-sizing:border-box;font-family:Inter,Poppins,Arial,sans-serif}'+
 '.amsds *{box-sizing:border-box}'+
 '.amsds .k{color:#F2862E;font-weight:700;font-size:12px;letter-spacing:.12em}'+
 '.amsds h3{font-family:Montserrat,Inter,sans-serif;color:#0F2B4F;font-size:26px;margin:4px 0 6px;line-height:1.2}'+
 '.amsds .sub{color:#475467;font-size:15px;margin:0 0 20px;max-width:760px}'+
 '.amsds-g{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}'+
 '.amsds-c{position:relative;overflow:hidden;background:linear-gradient(135deg,#0F2B4F,#0A1F3A);color:#fff;border-radius:16px;padding:24px;display:flex;flex-direction:column;gap:6px;min-height:230px;transition:transform .3s ease,box-shadow .3s ease}'+
 '.amsds-c:hover{transform:translateY(-4px);box-shadow:0 14px 30px rgba(15,43,79,.28)}'+
 '.amsds-c:after{content:"";position:absolute;right:-40px;top:-40px;width:150px;height:150px;border-radius:50%;background:rgba(242,134,46,.16)}'+
 '.amsds-c .code{font-family:Montserrat,Inter,sans-serif;font-weight:800;font-size:44px;line-height:1;color:#F2862E}'+
 '.amsds-c .nm{font-size:20px;font-weight:700;margin-top:2px}'+
 '.amsds-c .pr{color:#C9D6E3;font-size:14px}'+
 '.amsds-c .mt{color:#9FB3C8;font-size:12.5px;margin-top:auto}'+
 '.amsds-b{display:inline-flex;align-items:center;gap:8px;align-self:flex-start;margin-top:12px;background:#F2862E;color:#fff;border:0;border-radius:999px;padding:11px 20px;font-weight:700;font-size:14px;cursor:pointer;transition:transform .2s,box-shadow .2s;position:relative;z-index:1}'+
 '.amsds-b:hover{transform:translateY(-2px);box-shadow:0 6px 16px rgba(242,134,46,.4)}'+
 '.amsds-lk{font-size:12px;color:#F9C08C;margin-top:10px}'+
 '.amsds-m{position:fixed;inset:0;z-index:2147483200;background:rgba(10,31,58,.86);display:none;flex-direction:column}'+
 '.amsds-m.on{display:flex}'+
 '.amsds-h{display:flex;align-items:center;gap:12px;flex-wrap:wrap;padding:12px 16px;background:#0F2B4F;color:#fff}'+
 '.amsds-h .t{font-weight:700;font-size:15px;flex:1;min-width:180px}'+
 '.amsds-tabs{display:flex;gap:6px}'+
 '.amsds-tabs button{border:1px solid rgba(255,255,255,.3);background:transparent;color:#fff;border-radius:999px;padding:7px 14px;font-weight:700;font-size:13px;cursor:pointer}'+
 '.amsds-tabs button.on{background:#F2862E;border-color:#F2862E}'+
 '.amsds-x{border:0;background:rgba(255,255,255,.12);color:#fff;width:36px;height:36px;border-radius:50%;font-size:20px;cursor:pointer}'+
 '.amsds-x:hover{background:#F2862E}'+
 '.amsds-s{flex:1;overflow:auto;padding:18px 10px 40px;-webkit-user-select:none;user-select:none}'+
 '.amsds-s img{display:block;width:100%;max-width:900px;margin:0 auto 14px;border-radius:6px;background:#fff;box-shadow:0 6px 24px rgba(0,0,0,.35);pointer-events:none;-webkit-user-drag:none}'+
 '.amsds-n{text-align:center;color:#C9D6E3;font-size:12.5px;padding:6px 0 0}'+
 '@media(max-width:860px){.amsds-g{grid-template-columns:1fr}.amsds-c{min-height:0}.amsds h3{font-size:22px}}'+
 '@media print{.amsds-m{display:none!important}}';
 var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
 var modal=null;
 function build(){
  modal=document.createElement('div');modal.className='amsds-m';
  modal.innerHTML='<div class="amsds-h"><div class="t"></div><div class="amsds-tabs"></div><button class="amsds-x" aria-label="Close">×</button></div><div class="amsds-s"></div>';
  document.body.appendChild(modal);
  var tabs=modal.querySelector('.amsds-tabs');
  L.forEach(function(l){var b=document.createElement('button');b.textContent=l.k;b.setAttribute('data-k',l.k);b.onclick=function(){show(l.k)};tabs.appendChild(b)});
  modal.querySelector('.amsds-x').onclick=close;
  modal.addEventListener('click',function(e){if(e.target===modal)close()});
  ['contextmenu','dragstart','copy','cut'].forEach(function(ev){modal.addEventListener(ev,function(e){e.preventDefault()})});
 }
 function show(k){
  var l=L.filter(function(x){return x.k===k})[0],s=modal.querySelector('.amsds-s');
  modal.querySelector('.t').textContent='SDS - Calcium carbonate | '+l.pair;
  modal.querySelectorAll('.amsds-tabs button').forEach(function(b){b.classList.toggle('on',b.getAttribute('data-k')===k)});
  s.innerHTML='';s.scrollTop=0;
  for(var i=0;i<l.pages;i++){var im=new Image();im.alt='Safety data sheet calcium carbonate '+l.pair+' page '+(i+1);im.loading='lazy';im.draggable=false;im.src=B+M[k][i];s.appendChild(im)}
  var n=document.createElement('div');n.className='amsds-n';n.textContent='View-only document. Rev. 02 - 01/09/2026. For the latest version or a signed copy, contact us on WhatsApp +20 11 4600 6496.';s.appendChild(n);
 }
 function open(k){if(!modal)build();show(k);modal.classList.add('on');document.documentElement.style.overflow='hidden'}
 function close(){modal.classList.remove('on');document.documentElement.style.overflow=''}
 addEventListener('keydown',function(e){
  if(modal&&modal.classList.contains('on')){
   if(e.key==='Escape')close();
   if((e.ctrlKey||e.metaKey)&&/^[spcu]$/i.test(e.key))e.preventDefault();
  }
 });
 function mount(){
  var docs=document.querySelector('.amh-docs');
  if(!docs||document.getElementById('am-sds-center'))return !!document.getElementById('am-sds-center');
  var w=document.createElement('div');w.id='am-sds-center';w.className='amsds';
  var h='<div class="k">SAFETY DATA SHEET | MULTILINGUAL</div><h3>SDS in your language</h3><p class="sub">The same 16-section GHS safety data sheet for calcium carbonate, shown side by side in English and your language. Open it here for reading.</p><div class="amsds-g">';
  L.forEach(function(l){h+='<div class="amsds-c"><div class="code">'+l.k+'</div><div class="nm">'+l.n+'</div><div class="pr">'+l.pair+'</div><button class="amsds-b" data-k="'+l.k+'">View SDS</button><div class="amsds-lk">View-only | protected</div><div class="mt">'+l.pages+' pages | Rev. 02 | 01/09/2026</div></div>'});
  w.innerHTML=h+'</div>';
  docs.parentNode.insertBefore(w,docs.nextSibling);
  w.querySelectorAll('.amsds-b').forEach(function(b){b.onclick=function(){open(b.getAttribute('data-k'))}});
  return true;
 }
 var n=0,iv=setInterval(function(){if(mount()||++n>60)clearInterval(iv)},500);
})();
});
run('plast',null,function(){
/* AM-PLAST v1 (2026-10-13): unified Recycled PP & PE page (data-driven). Edit the G array to change grades / MFR. */
(function(){
 if(window.__amPlast) return; window.__amPlast=1;
 var P=location.pathname.replace(/\/$/,'');
 if(P==='/polypropylene-pellets'||P==='/polyethylene-pellets'){
  var tgt=P==='/polypropylene-pellets'?'#polypropylene':'#polyethylene';
  location.replace('/plastic'+tgt);return;
 }
 function fixLinks(){document.querySelectorAll('a[href$="/polypropylene-pellets"]').forEach(function(a){a.setAttribute('href','/plastic#polypropylene')});document.querySelectorAll('a[href$="/polyethylene-pellets"]').forEach(function(a){a.setAttribute('href','/plastic#polyethylene')});}
 fixLinks();addEventListener('load',function(){fixLinks();setTimeout(fixLinks,1500)});
 document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a');if(!a)return;var h=a.getAttribute('href')||'';if(/\/polypropylene-pellets$/.test(h)){e.preventDefault();location.href='/plastic#polypropylene'}else if(/\/polyethylene-pellets$/.test(h)){e.preventDefault();location.href='/plastic#polyethylene'}},true);
 if(P!=='/plastic') return;
 var C=String.fromCharCode,B='https://assets.wuiltweb.com/241623/',D=C(176)+'C',MU=C(181);
 var T1='g/10 min (2.16 kg @ 230'+D+')', T2='g/10 min (2.16 kg @ 190'+D+')';
 var G=[
  {id:'ipp',f:'PP',n:'IPP Raffia',c:'Black',src:'Woven sacks and jumbo bags',proc:['Bitumen membranes'],mfr:'7 - 10',t:T1,img:'0814202213411462f8fb7a15b9b.jpg'},
  {id:'pph-t',f:'PP',n:'PP Homopolymer',c:'Transparent',src:'Industrial waste',proc:['Injection'],mfr:'16.0 - 21.0',t:T1,img:'0814202214514462f90c0092e57.jpg'},
  {id:'pph-w',f:'PP',n:'PP Homopolymer',c:'White',src:'Consumer and industrial waste',proc:['Injection'],mfr:'12.0 - 18.0',t:T1,img:'0814202214524262f90c3addce6.jpg'},
  {id:'pph-c',f:'PP',n:'PP Homopolymer',c:'Blue, red, green and other colours',src:'Consumer and industrial waste',proc:['Injection','Extrusion'],mfr:'14.0 - 18.0',t:T1,img:'0814202214534162f90c757422e.jpg'},
  {id:'ppc',f:'PP',n:'PP Copolymer',c:'Black',src:'Battery and industrial waste',proc:['Injection'],mfr:'10.0 - 12.0',t:T1,img:'0814202214284662f9069e97a38.jpg'},
  {id:'ld-c',f:'PE',n:'LDPE',c:'Different colours',src:'Consumer and industrial films',proc:['Film'],mfr:'0.55 - 1.1',t:T2,img:'101420261233326acf769ca8ea7.webp'},
  {id:'ld-b',f:'PE',n:'LDPE Black GR',c:'Black',src:'Irrigation hose',proc:['Extrusion'],mfr:'1.35 - 1.6',t:T2,img:'0814202214284662f9069e97a38.jpg'},
  {id:'ld-bc',f:'PE',n:'LDPE',c:'Black',src:'Consumer and industrial films',proc:['Film'],mfr:'0.65 - 0.89',t:T2,img:'101420261249486acf7a6cd5d00.webp'},
  {id:'hd-c',f:'PE',n:'HDPE',c:'Blue and red',src:'Jerry cans',proc:['Extrusion','Blow moulding'],mfr:'0.35 - 0.60',t:T2,img:'0814202214313662f90748ce60d.jpg'},
  {id:'hd-g',f:'PE',n:'HDPE',c:'Green and blue',src:'Bottle caps',proc:['Injection'],mfr:'3.50 - 4.50',t:T2,img:'0814202213352762f8fa1f7b405.jpg'},
  {id:'hd-w',f:'PE',n:'HDPE',c:'White',src:'White bottles',proc:['Extrusion','Blow moulding'],mfr:'0.25 - 0.35',t:T2,img:'0814202214333062f907ba3f7a7.jpg'}
 ];
 var PROCS=['Injection','Extrusion','Blow moulding','Film','Bitumen membranes'];
 var FAQ=[
  ['Which recycled grade is used for bitumen waterproofing membranes?','IPP Raffia (black), an isotactic polypropylene raffia grade made from woven sacks and jumbo bags, with an MFR of about 7 - 10 g/10 min. We also supply a thin HDPE surface film for membranes.'],
  ['How are the grades defined?','Each grade is defined by polymer type (PP or PE), colour, source material and melt flow rate (MFR). The exact grade and MFR range are confirmed with each customer before loading.'],
  ['Which processes are the pellets suited for?','Injection moulding (crates, chairs, pallets, housewares), extrusion (mats, pipes, sheet), blow moulding (bottles and containers), film, and the polymer component of bitumen membranes.'],
  ['How is the material packed and shipped?','In woven bags or jumbo bags, depending on your requirement, loaded in full container loads from Egypt.'],
  ['How do I request a quote?','Send us the grade, MFR range, quantity and destination port through the contact page or on WhatsApp. We reply within one business day.']
 ];
 var css='.amp{max-width:1180px;margin:0 auto;padding:56px 20px;box-sizing:border-box;font-family:Inter,Poppins,Arial,sans-serif;color:#1D2939;line-height:1.55}.amp *{box-sizing:border-box}'+
 '.amp h2{font-family:Montserrat,Inter,sans-serif;color:#0F2B4F;font-size:32px;line-height:1.2;margin:0 0 10px;font-weight:700}.amp h3{font-family:Montserrat,Inter,sans-serif;color:#0F2B4F;font-size:20px;margin:0 0 6px}'+
 '.amp .k{color:#F2862E;font-weight:700;font-size:12px;letter-spacing:.12em;margin-bottom:6px}.amp .lead{color:#475467;font-size:16px;max-width:780px;margin:0 0 28px}'+
 '.amp-st{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin:0 0 36px}.amp-st div{background:#F4F7FA;border-radius:14px;padding:18px;border:1px solid #DCE4EC}.amp-st b{display:block;font-family:Montserrat,Inter,sans-serif;font-size:28px;color:#0F2B4F;line-height:1.1}.amp-st span{font-size:12.5px;color:#475467;letter-spacing:.04em}'+
 '.amp-bar{position:sticky;top:112px;z-index:30;background:rgba(255,255,255,.96);backdrop-filter:blur(8px);padding:12px 0;margin:0 0 18px;border-bottom:1px solid #DCE4EC;display:flex;gap:8px;flex-wrap:wrap;align-items:center}'+
 '.amp-bar button{border:1px solid #DCE4EC;background:#fff;color:#0F2B4F;border-radius:999px;padding:8px 16px;font-weight:600;font-size:13.5px;cursor:pointer;transition:all .2s}.amp-bar button:hover{border-color:#F2862E}.amp-bar button.on{background:#0F2B4F;border-color:#0F2B4F;color:#fff}.amp-bar .sp{flex:1}.amp-bar .cnt{font-size:13px;color:#667085}'+
 '.amp-g{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}'+
 '.amp-c{background:#fff;border:1px solid #DCE4EC;border-radius:16px;overflow:hidden;display:flex;flex-direction:column;transition:transform .3s,box-shadow .3s}.amp-c:hover{transform:translateY(-4px);box-shadow:0 14px 30px rgba(15,43,79,.14)}.amp-c.hide{display:none}'+
 '.amp-im{position:relative;aspect-ratio:4/3;overflow:hidden;background:#EEF2F6}.amp-im img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s}.amp-c:hover .amp-im img{transform:scale(1.05)}'+
 '.amp-bd{position:absolute;left:12px;top:12px;background:#0F2B4F;color:#fff;font-weight:700;font-size:12px;letter-spacing:.08em;padding:5px 11px;border-radius:999px}.amp-bd.pe{background:#F2862E}'+
 '.amp-in{padding:18px;display:flex;flex-direction:column;gap:8px;flex:1}.amp-in h3{margin:0}.amp-cl{font-size:13px;color:#667085}'+
 '.amp-sp{display:grid;grid-template-columns:auto 1fr;gap:4px 12px;font-size:13.5px;margin:6px 0}.amp-sp dt{color:#667085}.amp-sp dd{margin:0;font-weight:600;color:#0F2B4F}'+
 '.amp-mf{background:#FFF4EA;border-radius:10px;padding:10px 12px;margin-top:auto}.amp-mf b{font-size:20px;color:#0F2B4F;font-family:Montserrat,Inter,sans-serif}.amp-mf span{font-size:11.5px;color:#667085;display:block}'+
 '.amp-ac{display:flex;gap:8px;margin-top:10px}.amp-ac a{flex:1;text-align:center;text-decoration:none;border-radius:999px;padding:10px 8px;font-weight:700;font-size:13px;transition:all .2s}.amp-ac .a1{background:#F2862E;color:#fff}.amp-ac .a1:hover{box-shadow:0 6px 16px rgba(242,134,46,.4)}.amp-ac .a2{border:1px solid #0F2B4F;color:#0F2B4F}.amp-ac .a2:hover{background:#0F2B4F;color:#fff}'+
 '.amp-sec{margin-top:64px}.amp-tw{overflow:auto;border:1px solid #DCE4EC;border-radius:14px}.amp-t{width:100%;border-collapse:collapse;font-size:14px;min-width:720px}.amp-t th{background:#0F2B4F;color:#fff;text-align:left;padding:12px 14px;font-size:12.5px;letter-spacing:.06em}.amp-t td{padding:12px 14px;border-top:1px solid #EEF2F6}.amp-t tr:nth-child(even) td{background:#F8FAFC}.amp-t td:last-child{font-weight:700;color:#0F2B4F;white-space:nowrap}.amp-note{font-size:12.5px;color:#667085;margin-top:10px}'+
 '.amp-ft{display:grid;grid-template-columns:1.05fr 1fr;gap:0;border-radius:18px;overflow:hidden;background:linear-gradient(135deg,#0F2B4F,#0A1F3A);color:#fff}.amp-ft .tx{padding:34px}.amp-ft h2{color:#fff}.amp-ft p{color:#C9D6E3;margin:0 0 14px}.amp-ft .im{min-height:280px;background-size:cover;background-position:center}.amp-ft ul{margin:0 0 16px;padding:0;list-style:none}.amp-ft li{padding:8px 0;border-top:1px solid rgba(255,255,255,.14);font-size:14.5px}.amp-ft li b{color:#F2862E}'+
 '.amp-ap{display:flex;flex-wrap:wrap;gap:10px}.amp-ap span{background:#F4F7FA;border:1px solid #DCE4EC;border-radius:999px;padding:9px 16px;font-weight:600;font-size:14px;color:#0F2B4F}'+
 '.amp-pk{display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:stretch}.amp-pk .im{border-radius:16px;min-height:260px;background-size:cover;background-position:center}.amp-pk .bx{background:#F4F7FA;border-radius:16px;padding:26px;border:1px solid #DCE4EC}.amp-pk li{margin:8px 0}'+
 '.amp-fq details{background:#fff;border:1px solid #DCE4EC;border-radius:12px;margin-bottom:10px;padding:0 18px}.amp-fq summary{cursor:pointer;list-style:none;padding:16px 0;font-weight:600;color:#0F2B4F;display:flex;justify-content:space-between;gap:12px}.amp-fq summary::-webkit-details-marker{display:none}.amp-fq summary:after{content:"+";color:#F2862E;font-size:22px;line-height:1}.amp-fq details[open] summary:after{content:"-"}.amp-fq p{margin:0 0 16px;color:#475467;font-size:14.5px}'+
 '.amp-cta{display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;background:#F2862E;color:#fff;border-radius:18px;padding:30px 34px}.amp-cta h3{color:#fff;font-size:24px;margin:0 0 4px}.amp-cta p{margin:0;opacity:.92}.amp-cta .b{display:flex;gap:10px;flex-wrap:wrap}.amp-cta a{text-decoration:none;font-weight:700;border-radius:999px;padding:12px 22px;font-size:14.5px}.amp-cta .w{background:#fff;color:#0F2B4F}.amp-cta .o{border:2px solid #fff;color:#fff}'+
 '@media(max-width:980px){.amp-g{grid-template-columns:repeat(2,1fr)}.amp-st{grid-template-columns:repeat(2,1fr)}.amp-ft,.amp-pk{grid-template-columns:1fr}}'+
 '@media(max-width:620px){.amp-bar{flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch;padding:10px 0}.amp-bar button{white-space:nowrap;flex:none}.amp-bar .sp,.amp-bar .cnt{display:none}.amp-im{aspect-ratio:16/10}.amp{padding:36px 16px}.amp h2{font-size:25px}.amp-g{grid-template-columns:1fr}.amp-ft .tx{padding:24px}.amp-cta{padding:24px}}'+
 '@media(prefers-reduced-motion:reduce){.amp *{transition:none!important}}';
 var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
 function wa(t){return 'https://wa.me/201146006496?text='+encodeURIComponent('Hello Al Manara team, I found you on manaragrp.com. I am interested in: '+t+'. Quantity: ... / Destination: ...')}
 function card(g){
  var ac=g.f==='PP'?'':'pe';
  return '<div class="amp-c" data-f="'+g.f+'" data-p="'+g.proc.join('|')+'" id="amp-'+g.id+'"><div class="amp-im"><img loading="lazy" alt="Recycled '+g.n+' pellets, '+g.c+' - Al Manara, Egypt" src="'+B+g.img+'"><span class="amp-bd '+ac+'">'+g.f+'</span></div><div class="amp-in"><div><h3>'+g.n+'</h3><div class="amp-cl">'+g.c+'</div></div><dl class="amp-sp"><dt>Source</dt><dd>'+g.src+'</dd><dt>Process</dt><dd>'+g.proc.join(', ')+'</dd></dl><div class="amp-mf"><span>MFR</span><b>'+g.mfr+'</b><span>'+g.t+'</span></div><div class="amp-ac"><a class="a1" href="'+wa(g.n+' '+g.c)+'" target="_blank" rel="noopener">Request quote</a><a class="a2" href="/contact-us">Contact</a></div></div></div>';
 }
 function build(){
  var h='<div class="k">RECYCLED POLYPROPYLENE & POLYETHYLENE</div><h2>One range. Every grade, clearly defined.</h2><p class="lead">Recycled PP and PE pellets from Egypt, defined by polymer, colour, source and melt flow rate, for injection moulding, extrusion, blow moulding, film and bitumen waterproofing membranes.</p>';
  h+='<div class="amp-st"><div><b>'+G.length+'</b><span>GRADES</span></div><div><b>2</b><span>POLYMER FAMILIES · PP & PE</span></div><div><b>5</b><span>PROCESSES</span></div><div><b>FCL</b><span>FULL CONTAINER LOADS</span></div></div>';
  h+='<div class="amp-bar" id="amp-bar"><button class="on" data-f="ALL">All grades</button><button data-f="PP">Polypropylene (PP)</button><button data-f="PE">Polyethylene (PE)</button><span class="sp"></span>'+PROCS.map(function(p){return '<button data-p="'+p+'">'+p+'</button>'}).join('')+'<span class="cnt" id="amp-cnt"></span></div>';
  h+='<div class="amp-g" id="amp-grid">'+G.map(card).join('')+'</div>';
  h+='<div class="amp-sec" id="amp-compare"><div class="k">COMPARE</div><h2>All grades at a glance</h2><div class="amp-tw"><table class="amp-t"><thead><tr><th>GRADE</th><th>POLYMER</th><th>COLOUR</th><th>SOURCE</th><th>PROCESS</th><th>MFR (g/10 min)</th></tr></thead><tbody>'+G.map(function(g){return '<tr><td>'+g.n+'</td><td>'+g.f+'</td><td>'+g.c+'</td><td>'+g.src+'</td><td>'+g.proc.join(', ')+'</td><td>'+g.mfr+'</td></tr>'}).join('')+'</tbody></table></div><p class="amp-note">MFR: PP at 230'+D+' / 2.16 kg, PE at 190'+D+' / 2.16 kg. Typical ranges; the exact grade and MFR range are confirmed with each customer before loading.</p></div>';
  h+='<div class="amp-sec"><div class="amp-ft"><div class="tx"><div class="k">BITUMEN WATERPROOFING MEMBRANES</div><h2>Materials for membrane manufacturers</h2><p>Two products for the membrane line: recycled IPP Raffia for the polymer compound, and a thin HDPE surface film.</p><ul><li><b>IPP Raffia (black)</b> · MFR 7 - 10 g/10 min, from woven sacks and jumbo bags</li><li><b>HDPE surface film</b> · thickness 7 ± 2 '+MU+'m, unit weight 7 ± 0.5 g/m²</li><li>Heat resistance ≥ 120 '+D+' · elongation ≥ 200 % (longitudinal)</li><li>Tension ≥ 3.0 N/10 mm (longitudinal) · about 130,000 m² per ton · one- or two-colour printing</li></ul><a href="'+wa('IPP Raffia / HDPE surface film for bitumen membranes')+'" target="_blank" rel="noopener" style="display:inline-block;background:#F2862E;color:#fff;text-decoration:none;font-weight:700;border-radius:999px;padding:12px 22px">Ask about membrane materials</a></div><div class="im" style="background-image:url('+B+'bitumen-app-membrane-500x500.jpg)"></div></div></div>';
  h+='<div class="amp-sec"><div class="k">APPLICATIONS</div><h2>Where these pellets are used</h2><div class="amp-ap"><span>Injection moulding: crates, chairs, tables, pallets, housewares</span><span>Blow moulding: detergent bottles, containers</span><span>Extrusion: mats, agricultural pipes, sheet</span><span>Film</span><span>Raffia and woven bags</span><span>Bitumen waterproofing membranes</span></div></div>';
  h+='<div class="amp-sec"><div class="amp-pk"><div class="im" style="background-image:url('+B+'101420261249506acf7a6e59405.webp)"></div><div class="bx"><div class="k">PACKING & LOADING</div><h2>Packed for export</h2><ul style="padding-left:18px;margin:0"><li>Woven bags or jumbo bags, according to your requirement</li><li>Loaded in full container loads from Egypt</li><li>Grade and MFR range confirmed with you before loading</li></ul></div></div></div>';
  h+='<div class="amp-sec amp-fq"><div class="k">FAQ</div><h2>Recycled PP & PE: common questions</h2>'+FAQ.map(function(q){return '<details><summary>'+q[0]+'</summary><p>'+q[1]+'</p></details>'}).join('')+'</div>';
  h+='<div class="amp-sec"><div class="amp-cta"><div><h3>Tell us your grade, MFR and destination</h3><p>Our technical support team recommends a suitable grade and confirms availability. Reply within one business day.</p></div><div class="b"><a class="w" href="'+wa('recycled PP / PE pellets')+'" target="_blank" rel="noopener">WhatsApp technical support</a><a class="o" href="/contact-us">Request a quote</a></div></div></div>';
  return h;
 }
 function filt(w){
  var f='ALL',p=null;
  function apply(){var n=0;w.querySelectorAll('#amp-grid .amp-c').forEach(function(c){var ok=(f==='ALL'||c.getAttribute('data-f')===f)&&(!p||c.getAttribute('data-p').split('|').indexOf(p)>-1);c.classList.toggle('hide',!ok);if(ok)n++});w.querySelector('#amp-cnt').textContent=n+' of '+G.length+' grades';
   w.querySelectorAll('#amp-bar button').forEach(function(b){var on=b.hasAttribute('data-f')?(!p&&b.getAttribute('data-f')===f):(b.getAttribute('data-p')===p);b.classList.toggle('on',on)})}
  w.querySelectorAll('#amp-bar button').forEach(function(b){b.onclick=function(){if(b.hasAttribute('data-f')){f=b.getAttribute('data-f');p=null}else{p=(p===b.getAttribute('data-p'))?null:b.getAttribute('data-p');f='ALL'}apply()}});
  apply();
  window.__ampSet=function(x){f=x;p=null;apply()};
 }
 function ld(){
  var s=document.createElement('script');s.type='application/ld+json';s.setAttribute('data-am-plast','1');
  s.textContent=JSON.stringify({'@context':'https://schema.org','@graph':[{'@type':'FAQPage','mainEntity':FAQ.map(function(q){return {'@type':'Question','name':q[0],'acceptedAnswer':{'@type':'Answer','text':q[1]}}})},{'@type':'ItemList','name':'Recycled PP and PE pellets - Al Manara Plast','itemListElement':G.map(function(g,i){return {'@type':'ListItem','position':i+1,'name':g.n+' '+g.c+' (MFR '+g.mfr+' '+g.t+')'}})}]});
  document.head.appendChild(s);
 }
 function mount(){
  if(document.getElementById('am-plast')) return true;
  var ws=[].slice.call(document.querySelectorAll('.section-preview-wrapper'));
  var hide=ws.filter(function(e){var t=(e.innerText||'').trim();return /^Your Future Partners/.test(t)||/^OUR Materials/i.test(t)||/^Recycled Plastic Pellets/.test(t)});
  var contact=ws.filter(function(e){return /^Contact Us\s*\n?\s*Address/i.test((e.innerText||'').trim())})[0];
  if(false||!contact) return false;
  hide.forEach(function(e){e.style.display='none'});
  var w=document.createElement('div');w.id='am-plast';w.className='amp';w.innerHTML=build();
  var a=contact;while(a.parentElement&&a.parentElement.children.length<2)a=a.parentElement;
  a.parentElement.insertBefore(w,a);
  filt(w);ld();
  function go(){var m={'#polypropylene':'PP','#polyethylene':'PE'}[location.hash];if(m){window.__ampSet(m);var b=w.querySelector('#amp-bar');if(b)b.scrollIntoView({behavior:'smooth',block:'start'})}}
  go();addEventListener('hashchange',go);
  return true;
 }
 var n=0,iv=setInterval(function(){if(mount()||++n>60)clearInterval(iv)},400);
})();
});
run('hq',null,function(){
(function(){
 if(window.__amHQ) return; window.__amHQ=1;
 function mk(p,html){var n=p.cloneNode(true);n.setAttribute('data-am-hq','1');n.classList.remove('am-reveal','am-in');n.style.opacity='1';n.style.transform='none';var s=n.querySelector('span');if(s){s.innerHTML=html}else{n.innerHTML=html}return n}
 function hq(){
  document.querySelectorAll('p').forEach(function(p){
   var t=(p.textContent||'').trim();
   var prev=p.previousElementSibling;
   if(prev&&prev.getAttribute('data-am-hq'))return;
   if(p.getAttribute('data-am-hq'))return;
   if(/^Neighborhood 41, Build 47, Tenth of Ramadan City/.test(t)||/^Tenth of Ramadan City, Egypt/.test(t)){
    p.parentNode.insertBefore(mk(p,'<b>Head Office:</b> E9 Sky Degla1, Tenth of Ramadan City'),p);
   }
  });
 }
 function fixForm(){
  if(location.pathname.replace(/\/$/,'')!=='/contact-us')return;
  var hqp=document.querySelector('[data-am-hq]'),fm=document.querySelector('form');if(!hqp||!fm)return;
  var last=hqp.parentElement.lastElementChild.getBoundingClientRect().bottom;
  var ft=fm.getBoundingClientRect().top;
  var dd=Math.ceil(last+20-ft);
  if(dd<=0)return;
  var e=fm,ab=null;while(e&&e!==document.body){if(getComputedStyle(e).position==='absolute'){ab=e;break}e=e.parentElement}
  if(!ab)return;
  ab.style.top=(parseFloat(getComputedStyle(ab).top)+dd)+'px';
  var r=ab.parentElement;for(var i=0;i<3&&r;i++){if(getComputedStyle(r).position==='relative'){r.style.height=(r.getBoundingClientRect().height+dd)+'px'}r=r.parentElement}
 }
 function go(){hq();fixForm();setTimeout(fixForm,800);setTimeout(fixForm,2500);addEventListener('resize',function(){setTimeout(fixForm,300)});var mt=null;new MutationObserver(function(){clearTimeout(mt);mt=setTimeout(hq,400)}).observe(document.body,{childList:true,subtree:true});}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go();
})();
});
run('ethics','/business-ethics',function(){
/* AM-ETHICS v1 (2026-10-13): redesigned Business Ethics page */
(function(){
 if(window.__amEthics) return; window.__amEthics=1;
 if(location.pathname.replace(/\/$/,'')!=='/business-ethics') return;
 var B='https://assets.wuiltweb.com/241623/';
 var WA='https://wa.me/201146006496?text='+encodeURIComponent('Hello Al Manara team, I have a question about your business practices.');
 var IC={
  doc:'<path d="M7 3h7l5 5v13H7zM14 3v5h5M9.5 14l2 2 3.5-4"/>',
  lock:'<path d="M6 11h12v9H6zM8 11V8a4 4 0 018 0v3"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  scale:'<path d="M12 4v16M6 20h12M5 7h14M5 7l-3 7a3 3 0 006 0zM19 7l-3 7a3 3 0 006 0z"/>',
  shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  chat:'<path d="M4 5h16v11H9l-5 4z"/>'
 };
 function ic(n){return '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">'+IC[n]+'</svg>'}
 var PR=[
  ['doc','Honest specifications','We describe every material with its real grade, specifications and documents. What you approve is what we load.'],
  ['lock','Confidentiality','Customer, supplier and pricing information stays confidential. We never share one customer\'s details with another.'],
  ['globe','Export compliance','We comply with Egyptian export regulations and with the import requirements of each destination country.'],
  ['scale','Fair dealing','We deal transparently and fairly in every quotation, contract and shipment, with clear terms from the start.'],
  ['shield','Safety and responsible handling','A Safety Data Sheet for every calcium carbonate grade, safe packing and loading practices, and partners who respect workplace health and safety.'],
  ['chat','Open dialogue','We answer questions directly, share the information buyers need to decide, and build long-term relationships based on trust and respect.']
 ];
 var ST=[
  ['Confirm','We confirm the grade, specification and quantity with you before anything is loaded.'],
  ['Document','TDS for every grade, SDS for calcium carbonate, and a clear set of shipping documents.'],
  ['Pack and load','Woven or jumbo bags, loaded safely in full container loads, with loading checked.'],
  ['Ship','Commercial invoice, packing list, bill of lading and certificate of origin, in order.'],
  ['Follow up','We stay in touch after delivery to make sure the material matches what you approved.']
 ];
 var FAQ=[
  ['Do you share my company or pricing information?','No. Customer, supplier and pricing information is confidential. We do not share it with other customers or third parties.'],
  ['What documents do I receive with a shipment?','Commercial invoice, packing list, bill of lading and certificate of origin. We also provide a TDS for every calcium carbonate and talc grade, and an SDS for every calcium carbonate grade.'],
  ['How do you make sure the material matches what I approved?','We confirm the grade, specification and, for recycled pellets, the MFR range with you before loading, and we describe the material by its real grade.'],
  ['Who do I contact with a concern or complaint?','Write to our technical support manager on WhatsApp +20 11 4600 6496 or by e-mail. We reply within one business day and treat every message confidentially.']
 ];
 var css='.ae{font-family:Inter,Poppins,Arial,sans-serif;color:#1D2939;line-height:1.55}.ae *{box-sizing:border-box}.ae-w{max-width:1180px;margin:0 auto;padding:0 20px}'+
 '.ae h1,.ae h2,.ae h3{font-family:Montserrat,Inter,sans-serif;margin:0;font-weight:700}.ae h2{color:#0F2B4F;font-size:34px;line-height:1.2;margin-bottom:12px}.ae .k{color:#F2862E;font-weight:700;font-size:12px;letter-spacing:.14em;margin-bottom:8px}.ae .lead{color:#475467;font-size:16.5px;max-width:760px;margin:0}'+
 '.ae-hero{position:relative;color:#fff;background:#0A1F3A;overflow:hidden}.ae-hero:before{content:"";position:absolute;inset:0;background:url('+B+'101420261249516acf7a6fa9a20.webp) center/cover;opacity:.32}.ae-hero:after{content:"";position:absolute;inset:0;background:linear-gradient(110deg,#0A1F3A 25%,rgba(10,31,58,.55))}'+
 '.ae-hero .ae-w{position:relative;z-index:1;padding:150px 20px 84px}.ae-hero h1{font-size:50px;line-height:1.1;font-weight:800;max-width:780px}.ae-hero h1 span{color:#F2862E}.ae-hero p{color:#C9D6E3;font-size:18px;max-width:640px;margin:18px 0 28px}'+
 '.ae-b{display:inline-block;text-decoration:none;font-weight:700;border-radius:999px;padding:13px 26px;font-size:15px;transition:all .25s;margin:0 10px 10px 0}.ae-b.o{background:#F2862E;color:#fff}.ae-b.o:hover{box-shadow:0 8px 20px rgba(242,134,46,.45);transform:translateY(-2px)}.ae-b.g{border:2px solid rgba(255,255,255,.55);color:#fff}.ae-b.g:hover{background:#fff;color:#0F2B4F}'+
 '.ae-tr{background:#fff;margin-top:-34px;position:relative;z-index:2}.ae-tr .ae-w{display:grid;grid-template-columns:repeat(4,1fr);gap:0;background:#fff;border-radius:16px;box-shadow:0 12px 34px rgba(15,43,79,.14);padding:0;overflow:hidden;max-width:1140px}.ae-tr div.i{padding:22px 22px;border-right:1px solid #EEF2F6}.ae-tr div.i:last-child{border:0}.ae-tr b{display:block;color:#0F2B4F;font-family:Montserrat,Inter,sans-serif;font-size:15px}.ae-tr span{font-size:13px;color:#667085}'+
 '.ae-s{padding:80px 0}.ae-s.l{background:#F4F7FA}'+
 '.ae-pg{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:34px}.ae-p{background:#fff;border:1px solid #DCE4EC;border-radius:16px;padding:26px;position:relative;overflow:hidden;transition:transform .3s,box-shadow .3s}.ae-p:hover{transform:translateY(-5px);box-shadow:0 16px 34px rgba(15,43,79,.13)}.ae-p .n{position:absolute;right:18px;top:12px;font-family:Montserrat,Inter,sans-serif;font-weight:800;font-size:46px;color:#EEF2F6}.ae-p .ico{width:52px;height:52px;border-radius:14px;background:#0F2B4F;color:#F2862E;display:flex;align-items:center;justify-content:center;margin-bottom:16px}.ae-p h3{color:#0F2B4F;font-size:18px;margin-bottom:8px;position:relative}.ae-p p{margin:0;color:#475467;font-size:14.5px;position:relative}'+
 '.ae-sp{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center}.ae-im{border-radius:20px;min-height:380px;background-size:cover;background-position:center;box-shadow:0 18px 40px rgba(15,43,79,.18)}.ae-ck{list-style:none;margin:20px 0 0;padding:0}.ae-ck li{padding:11px 0 11px 34px;position:relative;border-top:1px solid #DCE4EC;font-size:15px;color:#344054}.ae-ck li:before{content:"";position:absolute;left:0;top:13px;width:20px;height:20px;border-radius:50%;background:#F2862E url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27white%27 stroke-width=%273%27%3E%3Cpath d=%27M6 12l4 4 8-8%27/%3E%3C/svg%3E") center/14px no-repeat}'+
 '.ae-tl{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;margin-top:40px;position:relative}.ae-tl:before{content:"";position:absolute;left:5%;right:5%;top:24px;height:2px;background:linear-gradient(90deg,#F2862E,#0F2B4F)}.ae-st{position:relative;text-align:center;padding:0 6px}.ae-st .d{width:48px;height:48px;border-radius:50%;background:#fff;border:2px solid #F2862E;color:#0F2B4F;font-family:Montserrat,Inter,sans-serif;font-weight:800;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;position:relative;z-index:1}.ae-st h3{color:#0F2B4F;font-size:16px;margin-bottom:6px}.ae-st p{margin:0;font-size:13.5px;color:#475467}'+
 '.ae-pt{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:30px}.ae-pt div{background:#0F2B4F;border-radius:18px;padding:30px;color:#fff}.ae-pt div.b{background:#fff;border:1px solid #DCE4EC;color:#1D2939}.ae-pt h3{color:#fff;font-size:20px;margin-bottom:10px}.ae-pt .b h3{color:#0F2B4F}.ae-pt ul{margin:0;padding-left:18px}.ae-pt li{margin:8px 0;font-size:14.5px;color:#C9D6E3}.ae-pt .b li{color:#475467}'+
 '.ae-fq details{background:#fff;border:1px solid #DCE4EC;border-radius:12px;margin-bottom:10px;padding:0 20px}.ae-fq summary{cursor:pointer;list-style:none;padding:17px 0;font-weight:600;color:#0F2B4F;display:flex;justify-content:space-between;gap:12px}.ae-fq summary::-webkit-details-marker{display:none}.ae-fq summary:after{content:"+";color:#F2862E;font-size:22px;line-height:1}.ae-fq details[open] summary:after{content:"-"}.ae-fq p{margin:0 0 16px;color:#475467;font-size:14.5px}'+
 '.ae-cta{background:linear-gradient(135deg,#0F2B4F,#0A1F3A);border-radius:22px;padding:44px;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap;color:#fff}.ae-cta h2{color:#fff;font-size:28px;margin-bottom:6px}.ae-cta p{margin:0;color:#C9D6E3;max-width:560px}'+
 '.ae-r{opacity:0;transform:translateY(18px);transition:opacity .6s ease,transform .6s ease}.ae-r.in{opacity:1;transform:none}'+
 '@media(max-width:980px){.ae-pg{grid-template-columns:repeat(2,1fr)}.ae-sp{grid-template-columns:1fr;gap:28px}.ae-tr .ae-w{grid-template-columns:repeat(2,1fr)}.ae-tr div.i:nth-child(2){border:0}.ae-tl{grid-template-columns:1fr;gap:20px}.ae-tl:before{display:none}.ae-st{display:grid;grid-template-columns:48px 1fr;gap:0 16px;text-align:left}.ae-st .d{margin:0;grid-row:span 2}.ae-pt{grid-template-columns:1fr}}'+
 '@media(max-width:620px){.ae-hero h1{font-size:34px}.ae-hero .ae-w{padding:120px 20px 64px}.ae-hero p{font-size:16px}.ae h2{font-size:26px}.ae-s{padding:56px 0}.ae-pg{grid-template-columns:1fr}.ae-im{min-height:260px}.ae-cta{padding:28px}.ae-tr .ae-w{margin:0 16px}}'+
 '@media(prefers-reduced-motion:reduce){.ae-r{opacity:1;transform:none;transition:none}.ae *{transition:none!important}}';
 var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
 function build(){
  var h='<section class="ae-hero"><div class="ae-w"><div class="k" style="color:#F2862E;font-weight:700;font-size:12px;letter-spacing:.14em;margin-bottom:12px">BUSINESS ETHICS & COMPLIANCE</div><h1>How we do business: <span>honest, confidential, compliant.</span></h1><p>Accurate specifications, protected information, lawful exports and fair dealing in every quotation, contract and shipment.</p><a class="ae-b o" href="#ae-principles">Read our principles</a><a class="ae-b g" href="'+WA+'" target="_blank" rel="noopener">Ask us a question</a></div></section>';
  h+='<div class="ae-tr ae-r"><div class="ae-w"><div class="i"><b>TDS for every grade</b><span>SDS for calcium carbonate</span></div><div class="i"><b>Grade confirmed</b><span>with you before every loading</span></div><div class="i"><b>Confidential</b><span>customer, supplier and pricing data</span></div><div class="i"><b>1 business day</b><span>reply to every message</span></div></div></div>';
  h+='<section class="ae-s" id="ae-principles"><div class="ae-w"><div class="k">OUR PRINCIPLES</div><h2>Six commitments we work by</h2><p class="lead">These are the principles every member of our team follows when working with customers, suppliers and partners.</p><div class="ae-pg">'+PR.map(function(p,i){return '<div class="ae-p ae-r"><span class="n">0'+(i+1)+'</span><div class="ico">'+ic(p[0])+'</div><h3>'+p[1]+'</h3><p>'+p[2]+'</p></div>'}).join('')+'</div></div></section>';
  h+='<section class="ae-s l"><div class="ae-w"><div class="ae-sp"><div class="ae-im ae-r" style="background-image:url('+B+'101420261233316acf769b4cd30.webp)"></div><div class="ae-r"><div class="k">CIRCULAR ECONOMY</div><h2>A second life for plastic</h2><p class="lead">Our recycled PP and PE pellets give post-industrial and post-consumer plastic a second life as raw material for new products.</p><ul class="ae-ck"><li>Helps manufacturers reduce their use of virgin polymer</li><li>Grades defined by polymer, colour, source and MFR</li><li>Used in injection, extrusion, blow moulding, film and bitumen membranes</li></ul></div></div></div></section>';
  h+='<section class="ae-s"><div class="ae-w"><div class="k">IN PRACTICE</div><h2>From inquiry to delivery</h2><p class="lead">How these commitments show up in every order.</p><div class="ae-tl">'+ST.map(function(s,i){return '<div class="ae-st ae-r"><div class="d">'+(i+1)+'</div><h3>'+s[0]+'</h3><p>'+s[1]+'</p></div>'}).join('')+'</div></div></section>';
  h+='<section class="ae-s l"><div class="ae-w"><div class="ae-sp"><div class="ae-r"><div class="k">SAFETY & RESPONSIBLE HANDLING</div><h2>Safe from packing to port</h2><p class="lead">We provide a Safety Data Sheet for every calcium carbonate grade, follow safe packing and loading practices, and work with partners who respect workplace health and safety.</p><ul class="ae-ck"><li>16-section GHS safety data sheet, in English, French, Spanish and Portuguese</li><li>Woven bags or jumbo bags, loaded in full containers</li><li>Clear handling and storage guidance in every data sheet</li></ul></div><div class="ae-im ae-r" style="background-image:url('+B+'101420261249506acf7a6e59405.webp)"></div></div></div></section>';
  h+='<section class="ae-s"><div class="ae-w"><div class="k">PARTNERSHIP</div><h2>Built on mutual respect</h2><div class="ae-pt"><div class="ae-r"><h3>What you can expect from us</h3><ul><li>The real grade and specification, in writing</li><li>Confidential handling of your information</li><li>Complete, accurate shipping documents</li><li>Direct answers, within one business day</li></ul></div><div class="b ae-r"><h3>What we ask of our partners</h3><ul><li>Accurate information about your requirements</li><li>Respect for confidentiality on both sides</li><li>Compliance with the laws that apply to the trade</li><li>Open communication if anything changes</li></ul></div></div></div></section>';
  h+='<section class="ae-s l"><div class="ae-w ae-fq"><div class="k">QUESTIONS</div><h2>Common questions</h2><div style="margin-top:24px">'+FAQ.map(function(q){return '<details class="ae-r"><summary>'+q[0]+'</summary><p>'+q[1]+'</p></details>'}).join('')+'</div></div></section>';
  h+='<section class="ae-s"><div class="ae-w"><div class="ae-cta ae-r"><div><h2>Have a question or a concern?</h2><p>Write to our technical support manager. Every message is handled confidentially and answered within one business day.</p></div><div><a class="ae-b o" href="'+WA+'" target="_blank" rel="noopener">WhatsApp +20 11 4600 6496</a><a class="ae-b g" href="/contact-us">Contact page</a></div></div></div></section>';
  return h;
 }
 function reveal(w){
  var els=[].slice.call(w.querySelectorAll('.ae-r'));
  if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){els.forEach(function(e){e.classList.add('in')});return}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var t=e.target;var i=[].indexOf.call(t.parentNode.children,t);t.style.transitionDelay=(i%4)*70+'ms';t.classList.add('in');io.unobserve(t)}})},{rootMargin:'0px 0px -6% 0px'});
  els.forEach(function(e){io.observe(e)});
 }
 function ld(){
  var s=document.createElement('script');s.type='application/ld+json';s.setAttribute('data-am-ethics','1');
  s.textContent=JSON.stringify({'@context':'https://schema.org','@type':'FAQPage','mainEntity':FAQ.map(function(q){return {'@type':'Question','name':q[0],'acceptedAnswer':{'@type':'Answer','text':q[1]}}})});
  document.head.appendChild(s);
 }
 function mount(){
  if(document.getElementById('am-ethics')) return true;
  var ws=[].slice.call(document.querySelectorAll('.section-preview-wrapper'));
  var foot=ws.filter(function(e){return /^HOME\s*\n?\s*ABOUT US/i.test((e.innerText||'').trim())}).pop();
  var hide=ws.filter(function(e){return e!==foot&&!e.contains(foot)&&!foot.contains(e)});
  if(!foot||false) return false;
  hide.forEach(function(e){e.style.display='none'});
  var w=document.createElement('div');w.id='am-ethics';w.className='ae';w.innerHTML=build();
  var a=foot;while(a.parentElement&&a.parentElement.children.length<2)a=a.parentElement;
  a.parentElement.insertBefore(w,a);
  reveal(w);ld();
  return true;
 }
 var n=0,iv=setInterval(function(){if(mount()||++n>60)clearInterval(iv)},400);
})();
});
run('min','/am-mining',function(){
(function(){
 if(window.__amMin) return; window.__amMin=1;
 var B='https://assets.wuiltweb.com/241623/',MU=String.fromCharCode(181);
 var WA='https://wa.me/201146006496?text='+encodeURIComponent('Hello Al Manara team, I would like a quotation for calcium carbonate. Grade: ... / Quantity: ... / Destination: ...');
 var WT='https://wa.me/201146006496?text='+encodeURIComponent('Hello Al Manara team, I would like information about talc powder.');
 var CAT='mailto:waleed@manaragrp.com?subject='+encodeURIComponent('Ask for CaCo3 Catalog');
 var IMG={ucs:'10312023161119654127271861b.jpg',cn:'10312023161120654127287f0ba.jpg',tc:'101420261249556acf7a73c05c3.webp',h:'101420261331346acf8436c0bf5.webp',m1:'101420261328466acf838ebd4b4.webp',m2:'101420261328486acf83905011c.webp',m3:'101420261328496acf83916c26e.webp'};
 var css='.am2{font-family:Inter,Poppins,Arial,sans-serif;color:#1D2939;line-height:1.55}.am2 *{box-sizing:border-box}.am2-w{max-width:1180px;margin:0 auto;padding:0 20px}'+
 '.am2 h1,.am2 h2,.am2 h3{font-family:Montserrat,Inter,sans-serif;margin:0;font-weight:700}.am2 h2{color:#0F2B4F;font-size:34px;line-height:1.2;margin-bottom:12px}.am2 .k{color:#F2862E;font-weight:700;font-size:12px;letter-spacing:.14em;margin-bottom:8px}.am2 .lead{color:#475467;font-size:16.5px;max-width:760px;margin:0}'+
 '.am2-hero{position:relative;color:#fff;background:#0A1F3A;overflow:hidden}.am2-hero:before{content:"";position:absolute;inset:0;background:url('+B+IMG.h+') center/cover;opacity:.28}.am2-hero:after{content:"";position:absolute;inset:0;background:linear-gradient(105deg,#0A1F3A 30%,rgba(10,31,58,.6))}'+
 '.am2-hero .am2-w{position:relative;z-index:1;padding:150px 20px 90px;display:grid;grid-template-columns:1.25fr 1fr;gap:48px;align-items:center}.am2-hero h1{font-size:48px;line-height:1.1;font-weight:800}.am2-hero h1 span{color:#F2862E}.am2-hero p.s{color:#C9D6E3;font-size:17.5px;max-width:600px;margin:18px 0 28px}'+
 '.am2-b{display:inline-block;text-decoration:none;font-weight:700;border-radius:999px;padding:13px 26px;font-size:15px;transition:all .25s;margin:0 10px 10px 0;cursor:pointer;border:0}.am2-b.o{background:#F2862E;color:#fff}.am2-b.o:hover{box-shadow:0 8px 20px rgba(242,134,46,.45);transform:translateY(-2px)}.am2-b.g{border:2px solid rgba(255,255,255,.55);color:#fff;background:transparent}.am2-b.g:hover{background:#fff;color:#0F2B4F}.am2-b.n{background:#0F2B4F;color:#fff}.am2-b.n:hover{background:#F2862E}'+
 '.am2-gl{background:rgba(255,255,255,.08);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.18);border-radius:20px;padding:26px}.am2-gl .t{font-size:12px;letter-spacing:.14em;color:#F2862E;font-weight:700;margin-bottom:14px}.am2-gl .g{display:grid;grid-template-columns:1fr 1fr;gap:16px 18px}.am2-gl b{display:block;font-family:Montserrat,Inter,sans-serif;font-size:26px;line-height:1.1}.am2-gl span{font-size:12.5px;color:#C9D6E3}'+
 '.am2-s{padding:80px 0}.am2-s.l{background:#F4F7FA}'+
 '.am2-pg{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:34px}.am2-c{background:#fff;border:1px solid #DCE4EC;border-radius:18px;overflow:hidden;display:flex;flex-direction:column;transition:transform .3s,box-shadow .3s}.am2-c:hover{transform:translateY(-6px);box-shadow:0 18px 38px rgba(15,43,79,.15)}.am2-c .im{height:210px;background-size:cover;background-position:center;position:relative}.am2-c .im:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 55%,rgba(10,31,58,.55))}.am2-c .bd{position:absolute;left:14px;bottom:12px;z-index:1;color:#fff;font-family:Montserrat,Inter,sans-serif;font-weight:800;font-size:22px}.am2-c .in{padding:22px;display:flex;flex-direction:column;gap:10px;flex:1}.am2-c p{margin:0;color:#475467;font-size:14.5px}.am2-ch{display:flex;flex-wrap:wrap;gap:6px}.am2-ch span{background:#F4F7FA;border:1px solid #DCE4EC;border-radius:999px;padding:4px 11px;font-size:12px;font-weight:600;color:#0F2B4F}.am2-c .am2-b{margin:auto 0 0;align-self:flex-start}'+
 '.am2-wk{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center}.am2-st{counter-reset:s;list-style:none;margin:22px 0 24px;padding:0}.am2-st li{counter-increment:s;position:relative;padding:12px 0 12px 56px;border-top:1px solid #DCE4EC;color:#344054;font-size:15px}.am2-st li:before{content:counter(s);position:absolute;left:0;top:9px;width:38px;height:38px;border-radius:50%;background:#0F2B4F;color:#F2862E;font-family:Montserrat,Inter,sans-serif;font-weight:800;display:flex;align-items:center;justify-content:center}.am2-st b{color:#0F2B4F;display:block}'+
 '.am2-mo{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:12px;min-height:440px}.am2-mo div{border-radius:16px;background-size:cover;background-position:center;box-shadow:0 12px 28px rgba(15,43,79,.16)}.am2-mo div:nth-child(1){grid-row:span 2}'+
 '.am2-fx{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:44px}.am2-fx div{background:#0F2B4F;color:#fff;border-radius:16px;padding:20px 22px}.am2-fx b{display:block;font-family:Montserrat,Inter,sans-serif;font-size:22px;color:#F2862E}.am2-fx span{font-size:13px;color:#C9D6E3}'+
 '.am2-r{opacity:0;transform:translateY(18px);transition:opacity .6s ease,transform .6s ease}.am2-r.in{opacity:1;transform:none}'+
 '@media(max-width:980px){.am2-hero .am2-w{grid-template-columns:1fr;gap:30px}.am2-pg{grid-template-columns:1fr}.am2-wk{grid-template-columns:1fr;gap:28px}.am2-fx{grid-template-columns:repeat(2,1fr)}.am2-hero h1{font-size:38px}}'+
 '@media(max-width:620px){.am2-hero .am2-w{padding:120px 20px 60px}.am2-hero h1{font-size:32px}.am2 h2{font-size:26px}.am2-s{padding:56px 0}.am2-mo{min-height:320px}}'+
 '@media(prefers-reduced-motion:reduce){.am2-r{opacity:1;transform:none;transition:none}.am2 *{transition:none!important}}';
 var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
 function chips(a){return '<div class="am2-ch">'+a.map(function(x){return '<span>'+x+'</span>'}).join('')+'</div>'}
 function topHTML(){
  var h='<section class="am2-hero"><div class="am2-w"><div class="am2-r"><div class="k">AL MANARA MINING &middot; CALCIUM CARBONATE &amp; TALC</div><h1>Calcium carbonate powder, <span>matched to your process.</span></h1><p class="s">Fourteen ground calcium carbonate grades from Egypt, uncoated and stearic-acid coated, top cut 8 - 45 '+MU+'m, with a TDS and an SDS for every grade.</p><a class="am2-b o" href="#caco3-technical-hub" data-go="hub">Open the technical center</a><a class="am2-b g" href="'+WA+'" target="_blank" rel="noopener">Request a quote</a></div>';
  h+='<div class="am2-gl am2-r"><div class="t">AT A GLANCE</div><div class="g"><div><b>14</b><span>grades, AM-UC and AM-CN</span></div><div><b>8 - 45 '+MU+'m</b><span>top cut D98</span></div><div><b>&ge; 99.0 %</b><span>CaCO&#8323; purity</span></div><div><b>&ge; 97 %</b><span>whiteness</span></div><div><b>TDS + SDS</b><span>for every grade</span></div><div><b>2836.50</b><span>HS code &middot; origin Egypt</span></div></div></div></div></section>';
  h+='<section class="am2-s"><div class="am2-w"><div class="k">PRODUCT LINES</div><h2>Three lines, one technical standard</h2><p class="lead">Choose by application: uncoated grades for paints, coatings and construction chemicals, coated grades for plastics and polymers, and talc for high-brightness applications.</p><div class="am2-pg">';
  h+='<div class="am2-c am2-r"><div class="im" style="background-image:url('+B+IMG.ucs+')"><span class="bd">AM-UC</span></div><div class="in"><h3>Uncoated calcium carbonate</h3><p>Seven uncoated grades, AM-UC08 to AM-UC45 (top cut 8 - 45 '+MU+'m), for paints, coatings, adhesives, paper, wall putties, construction chemicals and waterproofing membranes.</p>'+chips(['Paints','Coatings','Adhesives','Paper','Putties','Membranes'])+'<a class="am2-b n" href="#caco3-grades" data-go="UC">See uncoated grades</a></div></div>';
  h+='<div class="am2-c am2-r"><div class="im" style="background-image:url('+B+IMG.cn+')"><span class="bd">AM-CN</span></div><div class="in"><h3>Coated calcium carbonate</h3><p>Seven stearic-acid coated grades, AM-CN08 to AM-CN45, for plastic films and sheets, masterbatch, PVC pipes and profiles, cables and injection molding. The coating improves dispersion and compatibility with polymers.</p>'+chips(['Films','Masterbatch','PVC','Cables','Injection'])+'<a class="am2-b n" href="#caco3-grades" data-go="CN">See coated grades</a></div></div>';
  h+='<div class="am2-c am2-r"><div class="im" style="background-image:url('+B+IMG.tc+')"><span class="bd">TALC</span></div><div class="in"><h3>Talc powder</h3><p>A white, soft and lamellar mineral filler with low loss on ignition and low iron, for paints and coatings, plastics, rubber, cables, paper and ceramics. Technical data sheet coming soon.</p>'+chips(['Paints','Plastics','Rubber','Cables','Ceramics'])+'<a class="am2-b n" href="'+WT+'" target="_blank" rel="noopener">Ask about talc</a></div></div>';
  return h+'</div></div></section>';
 }
 function botHTML(){
  var h='<section class="am2-s l"><div class="am2-w"><div class="am2-wk"><div class="am2-r"><div class="k">HOW WE WORK</div><h2>From limestone to your port</h2><p class="lead">Al Manara sources calcium carbonate from selected limestone deposits in Upper Egypt through qualified partner mills, and ships it under the Al Manara Mining brand.</p><ol class="am2-st"><li><b>Tell us your application</b>Process, target particle size and quantity.</li><li><b>We confirm the grade</b>Grade and specification agreed with you before loading.</li><li><b>Documents prepared</b>TDS, SDS and the export documents.</li><li><b>Packed and shipped</b>Bags or jumbo bags, loaded and shipped from Egyptian ports.</li></ol><a class="am2-b o" href="'+WA+'" target="_blank" rel="noopener">Request a quote</a><a class="am2-b n" href="'+CAT+'">Ask for our mining catalog</a></div><div class="am2-mo am2-r"><div style="background-image:url('+B+IMG.m1+')"></div><div style="background-image:url('+B+IMG.m2+')"></div><div style="background-image:url('+B+IMG.m3+')"></div></div></div>';
  h+='<div class="am2-fx"><div class="am2-r"><b>~ 27 t</b><span>per 20 ft container, in bags</span></div><div class="am2-r"><b>25 kg / 1 t</b><span>woven or paper bags, jumbo bags</span></div><div class="am2-r"><b>HS 2836.50</b><span>origin Egypt</span></div><div class="am2-r"><b>1 day</b><span>reply to every inquiry</span></div></div></div></section>';
  return h;
 }
 function reveal(w){
  var els=[].slice.call(w.querySelectorAll('.am2-r'));
  if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){els.forEach(function(e){e.classList.add('in')});return}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var t=e.target;var i=[].indexOf.call(t.parentNode.children,t);t.style.transitionDelay=(i%4)*70+'ms';t.classList.add('in');io.unobserve(t)}})},{rootMargin:'0px 0px -6% 0px'});
  els.forEach(function(e){io.observe(e)});
 }
 function goHub(k){
  var hub=document.getElementById('caco3-technical-hub');if(!hub)return;
  if(k==='UC'||k==='CN'){var bt=[].slice.call(hub.querySelectorAll('button')).filter(function(b){return new RegExp(k==='UC'?'^Uncoated':'^Coated','i').test((b.textContent||'').trim())})[0];if(bt)bt.click()}
  var t=document.getElementById('caco3-grades')||hub;var y=t.getBoundingClientRect().top+scrollY-130;window.scrollTo({top:y,behavior:'smooth'});
 }
 function mount(){
  if(document.getElementById('am2-top')) return true;
  var ws=[].slice.call(document.querySelectorAll('.section-preview-wrapper'));
  var hub=document.getElementById('caco3-technical-hub');
  var hide=ws.filter(function(e){var t=(e.innerText||'').trim();return /^AL MANARA MINING/.test(t)||/^Calcium Carbonate & Talc Powders/.test(t)||/^Our Categories/.test(t)});
  var how=ws.filter(function(e){return /^HOW WE WORK/.test((e.innerText||'').trim())})[0];
  if(!hub||false||!how) return false;
  var sec=how.querySelector('section');if(!sec) return false;
  hide.forEach(function(e){e.style.display='none'});
  var hw=hub.closest('.section-preview-wrapper');
  var top=document.createElement('div');top.id='am2-top';top.className='am2';top.innerHTML=topHTML();
  var a=hw||hub;while(a.parentElement&&a.parentElement.children.length<2)a=a.parentElement;
  a.parentElement.insertBefore(top,a);
  sec.style.display='none';
  var bot=document.createElement('div');bot.id='am2-bot';bot.className='am2';bot.innerHTML=botHTML();
  sec.parentNode.insertBefore(bot,sec);
  reveal(top);reveal(bot);
  document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('[data-go]');if(!a)return;e.preventDefault();goHub(a.getAttribute('data-go'))});
  return true;
 }
 var n=0,iv=setInterval(function(){if(mount()||++n>80)clearInterval(iv)},400);
})();
});
run('home','',function(){
(function(){
 if(window.__amHome) return; window.__amHome=1;(function(){function k(){[].forEach.call(document.querySelectorAll('.section-preview-wrapper'),function(e){if(e.__am)return;var t=(e.innerText||'').trim();if(/^ISO 9001/i.test(t)||/^HOME\s*\n?\s*ABOUT US/i.test(t))return;e.__am=1;e.style.display='none'})}try{new MutationObserver(k).observe(document.documentElement,{childList:true,subtree:true});k()}catch(e){}})();
 var B='https://assets.wuiltweb.com/241623/';
 try{if(location.pathname.replace(/\/$/,'')===''){var pl=document.createElement('link');pl.rel='preload';pl.as='image';pl.href=B+'101420261249526acf7a70c19a5.webp';document.head.appendChild(pl)}}catch(e){}
 var P={hero:'101420261249526acf7a70c19a5.webp',mw:'101320261345266ace35f627748.webp',mh:'101320261345286ace35f8af012.webp',me:'101320261345336ace35fdc5467.webp',plS:'101320261345376ace360123de0.webp',caP:'101320261347126ace36601d4ca.webp',caB:'101420261249546acf7a72cc18c.webp',jb:'101320261347166ace3664d45b3.webp',ls:'101320261347206ace3668edc3a.webp',wo:'101320261347236ace366b188f9.webp',wc:'101320261347246ace366cc6cd0.webp'};
 function wa(t){return 'https://wa.me/201146006496?text='+encodeURIComponent('Hello Al Manara team, I found you on manaragrp.com. '+t+' Quantity: ... / Destination: ...')}
 var WA=wa('I would like a quotation.');
 var LIN='https://www.linkedin.com/company/al-manara-for-investment-and-commercial-agencies/';
 function lii(n){return '<svg viewBox="0 0 24 24" width="'+n+'" height="'+n+'" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>'}
 var C=String.fromCharCode,MU=C(181);
 var IC={
  doc:'<path d="M7 3h7l5 5v13H7zM14 3v5h5M9.5 14l2 2 3.5-4"/>',chat:'<path d="M4 5h16v11H9l-5 4z"/>',box:'<path d="M3 8l9-5 9 5v8l-9 5-9-5zM3 8l9 5 9-5M12 13v8"/>',ship:'<path d="M3 17l2 3h14l2-3zM6 17V9h12v8M12 9V4h4"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',check:'<path d="M5 12l4 4 10-10"/>',eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'
 };
 function ic(n,s){return '<svg viewBox="0 0 24 24" width="'+(s||26)+'" height="'+(s||26)+'" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+IC[n]+'</svg>'}
 var TICK=['IPP Raffia','PP Copolymer','PP Homopolymer','HDPE','LDPE','Calcium carbonate AM-UC','Calcium carbonate AM-CN','Talc powder','Bitumen membranes','Full container loads','TDS + SDS','Exporting from Egypt'];
 var APP=[
  ['Bitumen membranes','Bitumen waterproofing membranes','Recycled polymer for the membrane compound and surface film, plus mineral filler for the formulation.',[['IPP Raffia, black','Isotactic PP raffia grade for membrane compounds','/plastic#polypropylene'],['HDPE surface film, 7 '+MU+'m','Thin film for the membrane surface, printing available','/plastic'],['Uncoated CaCO3, AM-UC20 to UC45','Mineral filler, top cut 20 - 45 '+MU+'m','/am-mining']]],
  ['Injection moulding','Injection moulding','Crates, chairs, tables, pallets and housewares.',[['PP homopolymer and copolymer','Transparent, white, coloured and black grades','/plastic#polypropylene'],['HDPE, bottle-cap grade','Green and blue, for injection','/plastic#polyethylene'],['Talc powder, AM-TL12 to TL50','Listed for plastics, D50 3 to 11 '+MU+'m','/am-mining#talc-technical-center']]],
  ['Film and sheet','Film and sheet extrusion','Recycled PE for film, and coated calcium carbonate as a functional filler.',[['LDPE film grades','Coloured and black, from used films','/plastic#polyethylene'],['Coated CaCO3, AM-CN08 to CN25','Dispersion in PE and PP, smooth surface','/am-mining'],['Talc powder, AM-TL12 to TL50','Listed for plastics, ask us for the right grade','/am-mining#talc-technical-center']]],
  ['Blow moulding','Blow moulding','Recycled HDPE for bottles and industrial containers.',[['HDPE, white and coloured','From white bottles and jerry cans','/plastic#polyethylene'],['Talc powder, AM-TL12 to TL50','Listed for plastics, ask us for the right grade','/am-mining#talc-technical-center']]],
  ['PVC and cables','PVC pipes, profiles and cables','Stearic-acid coated grades for stiffness, surface finish and dispersion.',[['Coated CaCO3, AM-CN08 to CN45','PVC pipes and profiles','/am-mining'],['Coated CaCO3, AM-CN08 to CN20','PVC cable insulation and sheathing','/am-mining'],['Talc powder, AM-TL12 to TL50','Listed for cables, TDS for every grade','/am-mining#talc-technical-center']]],
  ['Masterbatch','Filler masterbatch and compounding','Hydrophobic fine grades for CaCO3 filler masterbatch.',[['Coated CaCO3, AM-CN08 to CN10','Fine, hydrophobic grades','/am-mining'],['Talc powder, AM-TL12 to TL50','Listed for plastics, ask us for the right grade','/am-mining#talc-technical-center']]],
  ['Paints and coatings','Paints, coatings and construction chemicals','Uncoated grades for whiteness, opacity support and cost control.',[['Uncoated CaCO3, AM-UC08 to UC45','Whiteness 97 % or higher','/am-mining'],['Talc powder, AM-TL12 to TL50','Listed for paints and coatings, TDS for every grade','/am-mining#talc-technical-center']]]
 ,['Paper','Paper filling','Mineral fillers for paper filling.',[['Uncoated CaCO3, AM-UC08 to UC15','High-whiteness filler','/am-mining'],['Talc powder, AM-TL12 to TL50','Listed for paper, TDS for every grade','/am-mining#talc-technical-center']]],['Ceramics','Ceramics and glazes','Talc for ceramics, and selected uncoated calcium carbonate for glazes.',[['Talc powder, AM-TL12 to TL50','Listed for ceramics, D50 3 to 11 '+MU+'m','/am-mining#talc-technical-center'],['Uncoated CaCO3, AM-UC20, UC25, UC45','Listed for glazes','/am-mining']]],['Fertilizers','Fertilizers','Natural talc for fertilizer applications.',[['Talc powder, AM-TL12 to TL50','Listed for fertilizers, ask us for the right grade','/am-mining#talc-technical-center']]]];
 var GAL=[[P.jb,'Jumbo bags loaded in a container'],[P.ls,'Secured with lashing straps for sea freight'],[P.wo,'Woven bags ready before loading'],[P.caP,'Branded 25 kg calcium carbonate bags, palletised']];
 var ST=[['Send your application','Process, target grade or particle size, quantity and destination.'],['We recommend and confirm','The grade that fits your process, confirmed with you before anything is loaded.'],['Documents in your hands','TDS for every grade, SDS for calcium carbonate, and a clear quotation.'],['Packed and shipped','Loaded in full containers, with the complete shipping document set.']];
 var css='.ah{font-family:Inter,Poppins,Arial,sans-serif;color:#1D2939;line-height:1.55}.ah *{box-sizing:border-box}.ah-w{max-width:1200px;margin:0 auto;padding:0 20px}'+
 '.ah h1,.ah h2,.ah h3{font-family:Montserrat,Inter,sans-serif;margin:0;font-weight:700}.ah h2{color:#0F2B4F;font-size:36px;line-height:1.18;margin-bottom:12px}.ah .k{color:#F2862E;font-weight:700;font-size:12px;letter-spacing:.14em;margin-bottom:8px}.ah .lead{color:#475467;font-size:17px;max-width:760px;margin:0}'+
 '.ah-hero{position:relative;color:#fff;background:#0A1F3A;overflow:hidden;min-height:92vh;display:flex;align-items:center}.ah-hero .bg{position:absolute;inset:0;background:url('+B+P.hero+') center/cover;transform:scale(1.04);animation:ahz 22s ease-in-out infinite alternate}@keyframes ahz{to{transform:scale(1.14)}}.ah-hero:after{content:"";position:absolute;inset:0;background:linear-gradient(100deg,rgba(7,22,42,.96) 28%,rgba(10,31,58,.62) 62%,rgba(10,31,58,.35))}'+
 '.ah-hero .ah-w{position:relative;z-index:1;padding:150px 20px 90px;display:grid;grid-template-columns:1.35fr 1fr;gap:52px;align-items:center;width:100%}.ah-pill{display:inline-flex;align-items:center;gap:8px;background:rgba(242,134,46,.16);border:1px solid rgba(242,134,46,.5);color:#FFB777;border-radius:999px;padding:7px 16px;font-size:12.5px;font-weight:700;letter-spacing:.08em;margin-bottom:22px}.ah-pill i{width:8px;height:8px;border-radius:50%;background:#F2862E;box-shadow:0 0 0 0 rgba(242,134,46,.6);animation:ahp 2s infinite}@keyframes ahp{70%{box-shadow:0 0 0 10px rgba(242,134,46,0)}100%{box-shadow:0 0 0 0 rgba(242,134,46,0)}}'+
 '.ah-hero h1{font-size:56px;line-height:1.06;font-weight:800;letter-spacing:-.01em}.ah-hero h1 span{color:#F2862E}.ah-hero p.s{color:#D5DFEA;font-size:18.5px;max-width:620px;margin:22px 0 22px}.ah-bl{list-style:none;margin:0 0 30px;padding:0}.ah-bl li{display:flex;gap:10px;align-items:center;padding:5px 0;font-size:15.5px;color:#E4EBF3}.ah-bl svg{color:#F2862E;flex:none}'+
 '.ah-b{display:inline-flex;align-items:center;gap:8px;text-decoration:none;font-weight:700;border-radius:999px;padding:15px 30px;font-size:15.5px;transition:all .25s;margin:0 12px 12px 0;cursor:pointer;border:0}.ah-b.o{background:#F2862E;color:#fff;box-shadow:0 10px 26px rgba(242,134,46,.35)}.ah-b.o:hover{transform:translateY(-3px);box-shadow:0 14px 32px rgba(242,134,46,.5)}.ah-b.g{border:2px solid rgba(255,255,255,.5);color:#fff;background:rgba(255,255,255,.04)}.ah-b.g:hover{background:#fff;color:#0F2B4F}.ah-b.n{background:#0F2B4F;color:#fff}.ah-b.n:hover{background:#F2862E}.ah-b svg{transition:transform .25s}.ah-b:hover svg{transform:translateX(4px)}'+
 '.ah-gl{background:rgba(255,255,255,.09);backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.2);border-radius:24px;padding:30px}.ah-gl .t{font-size:12px;letter-spacing:.16em;color:#F2862E;font-weight:700;margin-bottom:18px}.ah-gl .g{display:grid;grid-template-columns:1fr 1fr;gap:24px 20px}.ah-gl b{display:block;font-family:Montserrat,Inter,sans-serif;font-size:42px;line-height:1;font-weight:800}.ah-gl span{font-size:13px;color:#C9D6E3;display:block;margin-top:6px}.ah-gl .f{margin-top:22px;padding-top:18px;border-top:1px solid rgba(255,255,255,.18);font-size:13px;color:#C9D6E3}'+
 '.ah-mq{background:#0A1F3A;border-top:1px solid rgba(255,255,255,.08);overflow:hidden;padding:18px 0}.ah-mq .tr{display:flex;width:max-content;animation:ahm 46s linear infinite}.ah-mq:hover .tr{animation-play-state:paused}.ah-mq span{color:#C9D6E3;font-weight:600;font-size:14px;letter-spacing:.06em;padding:0 26px;white-space:nowrap;display:flex;align-items:center;gap:26px}.ah-mq span:after{content:"";width:6px;height:6px;border-radius:50%;background:#F2862E}@keyframes ahm{to{transform:translateX(-50%)}}'+
 '.ah-b.li{background:#0A66C2;color:#fff;box-shadow:0 10px 26px rgba(10,102,194,.35)}.ah-b.li:hover{background:#0B73DB;transform:translateY(-3px)}.ah-s.d.sc{background:linear-gradient(135deg,#0A1F3A,#0F2B4F);position:relative;overflow:hidden}.ah-s.d.sc:before{content:"";position:absolute;right:-120px;top:-120px;width:420px;height:420px;border-radius:50%;background:radial-gradient(circle,rgba(10,102,194,.35),transparent 70%)}.ah-sc{position:relative;display:grid;grid-template-columns:1.15fr 1fr;gap:56px;align-items:center}.ah-sc .ey{font-size:12px;letter-spacing:.18em;color:#F2862E;font-weight:700;margin-bottom:12px}.ah-sc h2{color:#fff;margin:0 0 14px;font-size:36px}.ah-sc p{color:#C9D6E3;margin:0 0 22px;max-width:540px}.ah-sc ul{list-style:none;margin:0 0 28px;padding:0;display:grid;gap:12px}.ah-sc li{display:flex;gap:12px;align-items:center;color:#fff;font-weight:600;font-size:15.5px}.ah-sc li svg{flex:none;color:#F2862E}.ah-sc .ah-b{margin:0}.ah-lk{background:#fff;border-radius:22px;overflow:hidden;box-shadow:0 30px 70px rgba(0,0,0,.35)}.ah-lk .bn{height:96px;background:linear-gradient(135deg,#0A66C2,#0F2B4F)}.ah-lk .bd2{padding:0 30px 30px}.ah-lk .av{width:84px;height:84px;margin-top:-42px;border-radius:18px;background:#fff;border:4px solid #fff;box-shadow:0 8px 22px rgba(15,43,79,.2);display:flex;align-items:center;justify-content:center;font-family:Montserrat,Inter,sans-serif;font-weight:800;font-size:26px;color:#0F2B4F;letter-spacing:.02em}.ah-lk h3{margin:16px 0 4px;font-size:19px;line-height:1.3;color:#0F2B4F}.ah-lk .sb{color:#667085;font-size:14px;margin:0 0 20px}.ah-lk .ah-b{width:100%;justify-content:center;margin:0}.ah-lk .in2{display:flex;align-items:center;gap:8px;margin-top:16px;color:#667085;font-size:13px}.ah-lk .in2 svg{color:#0A66C2}@media(max-width:1020px){.ah-sc{grid-template-columns:1fr;gap:34px}.ah-sc h2{font-size:29px}}'+
 '.ah-s{padding:92px 0}.ah-s.l{background:#F4F7FA}.ah-s.d{background:#0A1F3A;color:#fff}.ah-s.d h2{color:#fff}.ah-s.d .lead{color:#C9D6E3}'+
 '.ah-ln{display:grid;grid-template-columns:1fr 1fr;gap:26px;margin-top:38px}.ah-lc{position:relative;border-radius:24px;overflow:hidden;min-height:520px;color:#fff;display:flex;align-items:flex-end;box-shadow:0 16px 40px rgba(15,43,79,.16);transition:transform .35s,box-shadow .35s}.ah-lc:hover{transform:translateY(-8px);box-shadow:0 28px 56px rgba(15,43,79,.3)}.ah-lc .ph{position:absolute;inset:0;background-size:cover;background-position:center;transition:transform .8s}.ah-lc:hover .ph{transform:scale(1.07)}.ah-lc:before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(10,31,58,0) 20%,rgba(10,31,58,.94) 78%)}.ah-lc .in{position:relative;z-index:2;padding:32px;width:100%}.ah-lc h3{font-size:28px;margin-bottom:8px;color:#fff}.ah-lc p{margin:0 0 16px;color:#DCE4EC;font-size:15.5px}.ah-lc ul{list-style:none;margin:0 0 20px;padding:0;display:flex;flex-wrap:wrap;gap:8px}.ah-lc li{background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.28);border-radius:999px;padding:5px 13px;font-size:12.5px;font-weight:600}'+
 '.ah-fd{display:grid;grid-template-columns:330px 1fr;gap:26px;margin-top:38px;align-items:stretch}.ah-tabs{display:flex;flex-direction:column;gap:8px}.ah-tab{text-align:left;background:#fff;border:1px solid #DCE4EC;border-radius:14px;padding:15px 18px;font-weight:700;font-size:15px;color:#0F2B4F;cursor:pointer;transition:all .2s;display:flex;justify-content:space-between;align-items:center;font-family:inherit}.ah-tab:hover{border-color:#F2862E}.ah-tab.on{background:#0F2B4F;color:#fff;border-color:#0F2B4F;box-shadow:0 10px 24px rgba(15,43,79,.25)}.ah-tab svg{opacity:0;transition:opacity .2s}.ah-tab.on svg{opacity:1;color:#F2862E}'+
 '.ah-pn{background:#fff;border:1px solid #DCE4EC;border-radius:20px;padding:34px;box-shadow:0 14px 34px rgba(15,43,79,.08)}.ah-pn h3{font-size:24px;color:#0F2B4F;margin-bottom:8px}.ah-pn .d{color:#475467;margin:0 0 22px}.ah-it{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:15px 0;border-top:1px solid #EEF2F6}.ah-it b{display:block;color:#0F2B4F;font-size:15.5px}.ah-it span{font-size:13.5px;color:#667085}.ah-it a{flex:none;text-decoration:none;color:#F2862E;font-weight:700;font-size:14px;display:inline-flex;gap:6px;align-items:center}.ah-pn .ac{margin-top:22px;display:flex;gap:10px;flex-wrap:wrap}'+
 '.ah-ex{display:grid;grid-template-columns:1fr 1.25fr;gap:52px;align-items:center}.ah-ph3{display:grid;grid-template-columns:1.2fr 1fr;grid-template-rows:1fr 1fr;gap:12px;min-height:470px}.ah-ph3 div{border-radius:18px;background-size:cover;background-position:center;box-shadow:0 14px 34px rgba(0,0,0,.35);transition:transform .5s}.ah-ph3 div:hover{transform:scale(1.02)}.ah-ph3 div:nth-child(1){grid-row:span 2}.ah-fc{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:26px 0 28px}.ah-fc div{border-left:3px solid #F2862E;padding:2px 0 2px 14px}.ah-fc b{display:block;font-family:Montserrat,Inter,sans-serif;font-size:19px;color:#fff}.ah-fc span{font-size:13.5px;color:#C9D6E3}'+
 '.ah-gal{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:36px}.ah-g{position:relative;border-radius:18px;overflow:hidden;aspect-ratio:3/4;background-size:cover;background-position:center;box-shadow:0 12px 30px rgba(15,43,79,.15)}.ah-g:nth-child(even){transform:translateY(24px)}.ah-g:before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 55%,rgba(10,31,58,.9))}.ah-g span{position:absolute;left:14px;right:14px;bottom:14px;color:#fff;font-weight:600;font-size:14px;line-height:1.35}.ah-gs{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:56px}.ah-gs div{background:#fff;border:1px solid #DCE4EC;border-radius:14px;padding:16px 20px;display:flex;gap:12px;align-items:center;color:#0F2B4F;font-weight:700;font-size:14.5px}.ah-gs svg{color:#F2862E;flex:none}'+
 '.ah-tl{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:40px;position:relative}.ah-tl:before{content:"";position:absolute;left:6%;right:6%;top:25px;height:2px;background:linear-gradient(90deg,#F2862E,#0F2B4F)}.ah-st{position:relative;text-align:center}.ah-st .n{width:52px;height:52px;border-radius:50%;background:#fff;border:2px solid #F2862E;color:#0F2B4F;font-family:Montserrat,Inter,sans-serif;font-weight:800;font-size:20px;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;position:relative;z-index:1}.ah-st h3{color:#0F2B4F;font-size:17px;margin-bottom:6px}.ah-st p{margin:0;font-size:14px;color:#475467}'+
 '.ah-dc{display:grid;grid-template-columns:1.2fr 1fr;gap:0;border-radius:24px;overflow:hidden;background:linear-gradient(135deg,#0F2B4F,#0A1F3A);color:#fff;margin-top:6px}.ah-dc .tx{padding:44px}.ah-dc h2{color:#fff}.ah-dc p{color:#C9D6E3;margin:0 0 18px}.ah-dc .bd{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:24px}.ah-dc .bd span{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.22);border-radius:999px;padding:6px 14px;font-size:13px;font-weight:700}.ah-dc .im{min-height:300px;background-size:cover;background-position:center}'+
 '.ah-wy{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:36px}.ah-y{padding:6px 4px;border-top:3px solid #F2862E}.ah-y .ico{color:#0F2B4F;margin:16px 0 10px}.ah-y h3{color:#0F2B4F;font-size:17px;margin-bottom:6px}.ah-y p{margin:0;color:#475467;font-size:14.5px}'+
 '.ah-cta{background:linear-gradient(135deg,#F2862E,#E06B10);border-radius:26px;padding:52px;display:flex;align-items:center;justify-content:space-between;gap:26px;flex-wrap:wrap;color:#fff}.ah-cta h2{color:#fff;font-size:32px;margin-bottom:8px}.ah-cta p{margin:0;opacity:.95;max-width:600px}.ah-cta .ah-b.w{background:#fff;color:#0F2B4F}.ah-cta .ah-b.w:hover{transform:translateY(-3px)}.ah-cta .ah-b.g2{border:2px solid #fff;color:#fff}.ah-cta .ah-b.g2:hover{background:#fff;color:#E06B10}'+
 '.ah-r{opacity:0;transform:translateY(22px);transition:opacity .7s ease,transform .7s ease}.ah-r.in{opacity:1;transform:none}'+
 '@media(max-width:1020px){.ah-hero .ah-w{grid-template-columns:1fr;gap:34px}.ah-hero h1{font-size:44px}.ah-ln,.ah-ex,.ah-dc{grid-template-columns:1fr}.ah-fd{grid-template-columns:1fr}.ah-tabs{flex-direction:row;overflow-x:auto;padding-bottom:6px}.ah-tab{flex:none;white-space:nowrap}.ah-gal{grid-template-columns:repeat(2,1fr)}.ah-g:nth-child(even){transform:none}.ah-tl{grid-template-columns:repeat(2,1fr)}.ah-tl:before{display:none}.ah-wy{grid-template-columns:repeat(2,1fr)}.ah-gs{grid-template-columns:1fr}}'+
 '@media(max-width:620px){.ah-hero{min-height:0}.ah-hero .ah-w{padding:118px 20px 56px}.ah-hero h1{font-size:34px}.ah-hero p.s{font-size:16.5px}.ah h2{font-size:27px}.ah-s{padding:60px 0}.ah-lc{min-height:430px}.ah-pn{padding:24px}.ah-ph3{min-height:330px}.ah-fc,.ah-wy,.ah-tl{grid-template-columns:1fr}.ah-cta{padding:30px}.ah-dc .tx{padding:28px}.ah-gl b{font-size:34px}.ah-gal{gap:10px}}'+
 '@media(prefers-reduced-motion:reduce){.ah-r{opacity:1;transform:none;transition:none}.ah *,.ah-hero .bg{transition:none!important;animation:none!important}}';
 var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
 function pill(t){return '<span class="ah-pill"><i></i>'+t+'</span>'}
 function hero(){
  return '<section class="ah-hero"><div class="bg"></div><div class="ah-w"><div class="ah-r">'+pill('EXPORTING FROM EGYPT TO MORE THAN 10 COUNTRIES')+'<h1>The raw materials behind <span>your production line.</span></h1><p class="s">Recycled PP and PE pellets, calcium carbonate and talc powder, with clear specifications, technical data sheets and reliable full-container supply from Egypt.</p><ul class="ah-bl"><li>'+ic('check',20)+'IPP Raffia and fillers for bitumen membrane lines</li><li>'+ic('check',20)+'14 calcium carbonate grades, 8 - 45 '+MU+'m, plus 7 talc grades</li><li>'+ic('check',20)+'TDS for every grade, SDS for calcium carbonate</li></ul><a class="ah-b o" href="'+WA+'" target="_blank" rel="noopener">Request a quote '+ic('arrow',18)+'</a><a class="ah-b g" href="#ah-find">Find your material</a><a class="ah-b li" href="'+LIN+'" target="_blank" rel="noopener" aria-label="Follow Al Manara on LinkedIn">'+lii(20)+'Follow us on LinkedIn</a></div>'+
  '<div class="ah-gl ah-r"><div class="t">AT A GLANCE</div><div class="g"><div><b data-n="11">0</b><span>Recycled PP and PE grades</span></div><div><b data-n="21">0</b><span>Calcium carbonate and talc grades</span></div><div><b data-n="10" data-pre="+">+0</b><span>Export countries</span></div><div><b data-n="1">0</b><span>Business day to reply</span></div></div><div class="f">Al Manara Plast &middot; Al Manara Mining</div></div></div></section>'+
  '<div class="ah-mq"><div class="tr">'+[0,1].map(function(){return TICK.map(function(x){return '<span>'+x.toUpperCase()+'</span>'}).join('')}).join('')+'</div></div>';
 }
 function lines(){
  return '<section class="ah-s"><div class="ah-w"><div class="k">OUR BUSINESS LINES</div><h2>Two product lines, one standard of clarity</h2><p class="lead">Each material is presented by its grade, application and technical information, so you can select with confidence.</p><div class="ah-ln">'+
  '<a class="ah-lc ah-r" href="/plastic" style="text-decoration:none"><div class="ph" style="background-image:url('+B+P.plS+')"></div><div class="in"><h3>Al Manara Plast</h3><p>Recycled PP and PE pellets in 11 clearly defined grades, including IPP Raffia for bitumen waterproofing membranes.</p><ul><li>PP</li><li>PE</li><li>IPP Raffia</li><li>HDPE</li><li>LDPE</li></ul><span class="ah-b o">View recycled PP and PE '+ic('arrow',18)+'</span></div></a>'+
  '<a class="ah-lc ah-r" href="/am-mining" style="text-decoration:none"><div class="ph" style="background-image:url('+B+P.caP+')"></div><div class="in"><h3>Al Manara Mining</h3><p>Ground calcium carbonate in 14 uncoated and coated grades, top cut 8 - 45 '+MU+'m, plus natural talc in 7 grades. TDS for every grade, SDS for calcium carbonate.</p><ul><li>AM-UC</li><li>AM-CN</li><li>Talc AM-TL</li><li>TDS + SDS</li></ul><span class="ah-b o">View calcium carbonate and talc '+ic('arrow',18)+'</span></div></a></div></div></section>';
 }
 function finder(){
  return '<section class="ah-s l" id="ah-find"><div class="ah-w"><div class="k">FIND YOUR MATERIAL</div><h2>What are you producing?</h2><p class="lead">Choose your application and see the grades that fit it.</p><div class="ah-fd ah-r"><div class="ah-tabs">'+APP.map(function(a,i){return '<button class="ah-tab'+(i?'':' on')+'" data-i="'+i+'">'+a[0]+ic('arrow',18)+'</button>'}).join('')+'</div><div class="ah-pn" id="ah-pn"></div></div></div></section>';
 }
 function expertise(){
  return '<section class="ah-s d"><div class="ah-w"><div class="ah-ex"><div class="ah-r"><div class="k">WE KNOW THE PRODUCTION LINE</div><h2>Built on production-line experience</h2><p class="lead">Our team has supervised and assembled a complete bitumen-membrane production line, end to end. We understand what the line needs from its raw materials.</p><div class="ah-fc"><div><b>IPP Raffia</b><span>for the membrane compound</span></div><div><b>HDPE film</b><span>7 '+MU+'m surface film</span></div><div><b>CaCO&#8323; filler</b><span>uncoated, top cut 20 - 45 '+MU+'m</span></div><div><b>One supplier</b><span>for polymer and filler</span></div></div><a class="ah-b o" href="/plastic#polypropylene">Materials for membrane lines '+ic('arrow',18)+'</a></div><div class="ah-ph3 ah-r"><div style="background-image:url('+B+P.mw+')"></div><div style="background-image:url('+B+P.mh+')"></div><div style="background-image:url('+B+P.me+')"></div></div></div></div></section>';
 }
 function gallery(){
  return '<section class="ah-s"><div class="ah-w"><div class="k">READY FOR EXPORT</div><h2>Packed, secured and loaded</h2><p class="lead">Real loads from our shipments: woven bags, jumbo bags and branded 25 kg bags, loaded in full containers.</p><div class="ah-gal">'+GAL.map(function(g){return '<div class="ah-g ah-r" style="background-image:url('+B+g[0]+')"><span>'+g[1]+'</span></div>'}).join('')+'</div><div class="ah-gs"><div>'+ic('box',22)+'Woven bags, jumbo bags or 25 kg bags</div><div>'+ic('ship',22)+'Full container loads from Egyptian ports</div><div>'+ic('doc',22)+'Complete shipping documents</div></div></div></section>';
 }
 function steps(){
  return '<section class="ah-s l"><div class="ah-w"><div class="k">HOW TO START</div><h2>From inquiry to your port in four steps</h2><div class="ah-tl">'+ST.map(function(s,i){return '<div class="ah-st ah-r"><div class="n">'+(i+1)+'</div><h3>'+s[0]+'</h3><p>'+s[1]+'</p></div>'}).join('')+'</div><div style="text-align:center;margin-top:36px"><a class="ah-b o" href="'+WA+'" target="_blank" rel="noopener">Start with a quote request '+ic('arrow',18)+'</a></div></div></section>';
 }
 function docs(){
  return '<section class="ah-s"><div class="ah-w"><div class="ah-dc ah-r"><div class="tx"><div class="k">DOCUMENTS BEFORE YOU DECIDE</div><h2>Technical data you can review today</h2><p>Open the TDS of every calcium carbonate and talc grade, and the calcium carbonate safety data sheet in English, French, Spanish and Portuguese, right on our site.</p><div class="bd"><span>14 CaCO3 TDS</span><span>7 Talc TDS</span><span>SDS EN</span><span>SDS FR</span><span>SDS ES</span><span>SDS PT</span></div><a class="ah-b o" href="/am-mining">Open the technical center '+ic('arrow',18)+'</a></div><div class="im" style="background-image:url('+B+P.caB+');background-size:contain;background-repeat:no-repeat;background-color:#EEF2F6"></div></div></div></section>';
 }
 function why(){
  var W=[['doc','Clear technical information','Grade, particle size, MFR, colour and application for every material.'],['chat','Application-focused sourcing','We understand your process first, then recommend the grade that fits.'],['box','Flexible supply','Packing, quantities and shipment arranged around your order.'],['ship','Export coordination','Commercial and shipping coordination from Egypt, with full documents.']];
  return '<section class="ah-s l"><div class="ah-w"><div class="k">WHY AL MANARA</div><h2>Why industrial buyers work with us</h2><div class="ah-wy">'+W.map(function(a){return '<div class="ah-y ah-r"><div class="ico">'+ic(a[0],30)+'</div><h3>'+a[1]+'</h3><p>'+a[2]+'</p></div>'}).join('')+'</div></div></section>';
 }
 function social(){return '<section class="ah-s d sc"><div class="ah-w"><div class="ah-sc ah-r"><div><div class="ey">STAY CONNECTED</div><h2>Follow Al Manara on LinkedIn</h2><p>Technical insight on calcium carbonate, talc and recycled polymers, export know-how and company news, straight from our team.</p><ul><li>'+ic('check',20)+'Calcium carbonate and talc grades and applications</li><li>'+ic('check',20)+'Recycled PP and PE for industrial production</li><li>'+ic('check',20)+'Exporting full containers from Egypt</li></ul><a class="ah-b li" href="'+LIN+'" target="_blank" rel="noopener">'+lii(20)+'Follow our page</a></div><div class="ah-lk"><div class="bn"></div><div class="bd2"><div class="av">AM</div><h3>Al Manara for Investment and Commercial Agencies</h3><p class="sb">International Trade &amp; Development &middot; Egypt</p><a class="ah-b li" href="'+LIN+'" target="_blank" rel="noopener" aria-label="Follow Al Manara on LinkedIn">'+lii(20)+'Follow on LinkedIn</a><div class="in2">'+lii(16)+'Company page on LinkedIn</div></div></div></div></div></section>'}
 function cta(){return '<section class="ah-s"><div class="ah-w"><div class="ah-cta ah-r"><div><h2>Ready to discuss your requirement?</h2><p>Send your application, grade and destination. Our technical support team recommends a suitable grade and confirms availability within one business day.</p></div><div><a class="ah-b w" href="'+WA+'" target="_blank" rel="noopener">WhatsApp +20 11 4600 6496</a><a class="ah-b g2" href="/contact-us">Contact page</a></div></div></div></section>'}
 function panel(i){
  var a=APP[i];
  return '<h3>'+a[1]+'</h3><p class="d">'+a[2]+'</p>'+a[3].map(function(x){return '<div class="ah-it"><div><b>'+x[0]+'</b><span>'+x[1]+'</span></div><a href="'+x[2]+'">View '+ic('arrow',16)+'</a></div>'}).join('')+'<div class="ac"><a class="ah-b o" href="'+wa('Application: '+a[0]+'.')+'" target="_blank" rel="noopener">Request a quote for '+a[0].toLowerCase()+'</a></div>';
 }
 function bindFinder(w){
  var pn=w.querySelector('#ah-pn');if(!pn)return;pn.innerHTML=panel(0);
  w.querySelectorAll('.ah-tab').forEach(function(b){b.addEventListener('click',function(){w.querySelectorAll('.ah-tab').forEach(function(x){x.classList.remove('on')});b.classList.add('on');pn.style.opacity=0;setTimeout(function(){pn.innerHTML=panel(+b.getAttribute('data-i'));pn.style.opacity=1},160)})});
  pn.style.transition='opacity .16s';
 }
 function counters(w){
  var els=[].slice.call(w.querySelectorAll('[data-n]'));
  function run(e){var to=+e.getAttribute('data-n'),p=e.getAttribute('data-pre')||'',t0=null;function f(t){t0=t0||t;var k=Math.min((t-t0)/1400,1);e.textContent=p+Math.round(to*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)}requestAnimationFrame(f)}
  if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){els.forEach(function(e){e.textContent=(e.getAttribute('data-pre')||'')+e.getAttribute('data-n')});return}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){run(e.target);io.unobserve(e.target)}})},{threshold:.4});els.forEach(function(e){io.observe(e)});
 }
 function reveal(w){
  var els=[].slice.call(w.querySelectorAll('.ah-r'));
  if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){els.forEach(function(e){e.classList.add('in')});return}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var t=e.target;var i=[].indexOf.call(t.parentNode.children,t);t.style.transitionDelay=(i%4)*80+'ms';t.classList.add('in');io.unobserve(t)}})},{rootMargin:'0px 0px -6% 0px'});
  els.forEach(function(e){io.observe(e)});
 }
/* AM-HOME native-content patch (2026-10-14): reads text/links/images from the Wuilt editor sections (10 sections, in order) and applies them over the built-in design. Falls back to built-in text if sections are missing. */
 function applyNative(top,c,N){try{
  if(!N||N.length!==10||!N[0].h)return;
  var q=function(r,s){return r?r.querySelector(s):null};
  function T(e,t){if(e&&t)e.textContent=t}
  function L(a,t){if(!a||!t)return;var s=a.querySelector('svg');a.textContent=t+' ';if(s)a.appendChild(s)}
  function H(a,h){if(!a||!h)return;var m=h.match(/^https:\/\/(?:www\.)?manaragrp\.com(\/.*)?$/);if(m){a.setAttribute('href',m[1]||'/');a.removeAttribute('target')}else a.setAttribute('href',h)}
  function I(e,s){if(e&&s&&/^https?:/.test(s))e.style.backgroundImage='url('+s+')'}
  function B(a,b){if(b){L(a,b.t);H(a,b.h)}}
  var S=[].slice.call(top.querySelectorAll('section.ah-s')),C=[].slice.call(c.querySelectorAll('section.ah-s')),n=N[0],h=q(top,'.ah-hero h1');
  if(h&&n.h){var w=n.h.split(' '),k=Math.min(3,w.length-1),sp=document.createElement('span');h.textContent=w.slice(0,w.length-k).join(' ')+' ';sp.textContent=w.slice(w.length-k).join(' ');h.appendChild(sp)}
  T(q(top,'.ah-hero p.s'),n.p);B(q(top,'.ah-hero a.ah-b.o'),n.b[0]);if(n.b[1])L(q(top,'.ah-hero a.ah-b.g'),n.b[1].t);
  [1,2,3,4].forEach(function(i){var s=S[i-1],x=N[i];if(s&&x){T(q(s,'h2'),x.h);T(q(s,'.lead'),x.p)}});
  B(q(S[2],'a.ah-b.o'),N[3].b[0]);I(q(S[2],'.ah-ph3 div'),N[3].i);
  T(q(S[4],'h2'),N[5].h);B(q(S[4],'a.ah-b.o'),N[5].b[0]);
  T(q(S[5],'.tx h2'),N[6].h);T(q(S[5],'.tx p'),N[6].p);B(q(S[5],'a.ah-b.o'),N[6].b[0]);
  T(q(S[6],'h2'),N[7].h);
  T(q(C[0],'.ah-sc h2'),N[8].h);T(q(C[0],'.ah-sc p'),N[8].p);B(q(C[0],'.ah-sc a.ah-b.li'),N[8].b[0]);
  T(q(C[1],'.ah-cta h2'),N[9].h);T(q(C[1],'.ah-cta p'),N[9].p);B(q(C[1],'a.ah-b.w'),N[9].b[0]);B(q(C[1],'a.ah-b.g2'),N[9].b[1]);
 }catch(e){}}
 function readNative(ws,iso,foot){return ws.filter(function(e){return e!==iso&&e!==foot}).map(function(e){var h=e.querySelector('h1,h2,h3'),p=e.querySelector('p'),m=e.querySelector('img');return{h:h?h.textContent.trim():'',p:p?p.textContent.trim():'',i:m?(m.currentSrc||m.getAttribute('src')||''):'',b:[].slice.call(e.querySelectorAll('a[href]')).filter(function(a){return a.textContent.trim()}).map(function(a){return{t:a.textContent.trim(),h:a.getAttribute('href')}})}})}
 function mount(){
  if(document.getElementById('ah-top')) return true;
  var ws=[].slice.call(document.querySelectorAll('.section-preview-wrapper'));
  var iso=ws.filter(function(e){return /^ISO 9001/i.test((e.innerText||'').trim())})[0];
  var foot=ws.filter(function(e){return /^HOME\s*\n?\s*ABOUT US/i.test((e.innerText||'').trim())}).pop();
  var hide=ws.filter(function(e){return e!==iso&&e!==foot});
  if(!iso||!foot||false) return false;
  var N=readNative(ws,iso,foot);
  hide.forEach(function(e){e.style.display='none'});
  var a=iso;while(a.parentElement&&a.parentElement.children.length<2)a=a.parentElement;
  var top=document.createElement('div');top.id='ah-top';top.className='ah';top.innerHTML=hero()+lines()+finder()+expertise()+gallery()+steps()+docs()+why();
  a.parentElement.insertBefore(top,a);
  var f=foot;while(f.parentElement&&!f.parentElement.contains(iso))f=f.parentElement;
  var c=document.createElement('div');c.id='ah-cta';c.className='ah';c.innerHTML=social()+cta();
  f.parentElement.insertBefore(c,f);
  applyNative(top,c,N); [].slice.call(top.querySelectorAll('.ah-dc .tx p')).forEach(function(p){p.textContent='Open the TDS of every calcium carbonate and talc grade, and the calcium carbonate safety data sheet in English, French, Spanish and Portuguese, right on our site.';}); [top,c].forEach(function(r){[].slice.call(r.querySelectorAll('p')).forEach(function(p){var x=p.textContent; if(x.indexOf('pellets and calcium carbonate powder')>-1) p.textContent=x.replace('pellets and calcium carbonate powder','pellets, calcium carbonate and talc powder'); else if(x.indexOf('calcium carbonate and recycled polymers')>-1) p.textContent=x.replace('calcium carbonate and recycled polymers','calcium carbonate, talc and recycled polymers');});});
  bindFinder(top);counters(top);reveal(top);reveal(c);
  return true;
 }
 var n=0,iv=setInterval(function(){if(mount()||++n>80)clearInterval(iv)},400);
 window.__ahMount=mount;
})();
});
run('contact','/contact-us',function(){
(function(){
 if(window.__amContact) return; window.__amContact=1;
 var WA='https://wa.me/201146006496?text='+encodeURIComponent('Hello Al Manara team, I found you on manaragrp.com. Product / grade: ... / Application: ... / Quantity: ... / Destination port: ...');
 function ic(d,s){return '<svg viewBox="0 0 24 24" width="'+(s||24)+'" height="'+(s||24)+'" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+d+'</svg>'}
 var I={wa:'<path d="M4 20l1.3-4.2A8 8 0 1 1 8.4 18.8z"/><path d="M9 9.5c.3 2.2 2.3 4.2 4.6 4.9l1.2-1.3-1.8-.9-.8.6c-.9-.4-1.6-1.1-2-2l.6-.8-.9-1.8z"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',pin:'<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.6"/>',arw:'<path d="M5 12h14M13 6l6 6-6 6"/>',box:'<path d="M3 8l9-5 9 5v8l-9 5-9-5zM3 8l9 5 9-5M12 13v8"/>',gear:'<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/>',scale:'<path d="M12 3v18M5 21h14M6 7l-3 7a3 3 0 0 0 6 0zM18 7l-3 7a3 3 0 0 0 6 0zM6 7h12"/>',ship:'<path d="M3 17l2 3h14l2-3zM6 17V9h12v8M12 9V4h4"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'};
 var css='.ct{font-family:Inter,Poppins,Arial,sans-serif;color:#1D2939;line-height:1.55}.ct *{box-sizing:border-box}.ct-w{max-width:1200px;margin:0 auto;padding:0 20px}.ct h1,.ct h2,.ct h3{font-family:Montserrat,Inter,sans-serif;margin:0;line-height:1.15}'+
 '.ct-r{opacity:0;transform:translateY(22px);transition:opacity .7s ease,transform .7s ease}.ct-r.in{opacity:1;transform:none}'+
 '.ct-hero{position:relative;background:linear-gradient(135deg,#0A1F3A,#0F2B4F 60%,#143a66);color:#fff;overflow:hidden;padding:150px 0 130px}.ct-hero:before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.09) 1.2px,transparent 1.4px);background-size:26px 26px;-webkit-mask-image:linear-gradient(90deg,#000,transparent 80%);mask-image:linear-gradient(90deg,#000,transparent 80%)}.ct-hero:after{content:"";position:absolute;right:-140px;top:-140px;width:520px;height:520px;border-radius:50%;background:radial-gradient(circle,rgba(242,134,46,.28),transparent 68%)}.ct-hero .ct-w{position:relative;z-index:1}'+
 '.ct-pill{display:inline-block;border:1px solid rgba(255,255,255,.3);border-radius:999px;padding:7px 16px;font-size:12px;letter-spacing:.16em;font-weight:700;color:#F2862E;margin-bottom:22px}.ct-hero h1{font-size:50px;font-weight:800;max-width:800px}.ct-hero h1 span{color:#F2862E}.ct-hero p{font-size:18px;color:#C9D6E3;max-width:640px;margin:20px 0 0}'+
 '.ct-main{background:#F4F7FA;padding:0 0 70px}.ct-g{display:grid;grid-template-columns:1fr 1.15fr;gap:28px;margin-top:-70px;position:relative;z-index:2;align-items:start}.ct-col{display:grid;gap:18px}'+
 '.ct-cd{display:flex;gap:18px;align-items:flex-start;background:#fff;border:1px solid #DCE4EC;border-radius:20px;padding:24px 26px;box-shadow:0 14px 34px rgba(15,43,79,.08);text-decoration:none;color:inherit}.ct-ic{flex:none;width:54px;height:54px;border-radius:15px;background:#0F2B4F;color:#fff;display:flex;align-items:center;justify-content:center}.ct-cd h3{font-size:12px;letter-spacing:.14em;color:#667085;font-weight:700;margin-bottom:6px}.ct-cd b{display:block;color:#0F2B4F;font-size:18px;font-weight:700}.ct-cd a{color:#0F2B4F;text-decoration:none;font-weight:700;font-size:16.5px;display:block;margin-top:2px}.ct-cd a:hover{color:#F2862E}.ct-cd small{display:block;color:#667085;font-size:14px;margin-top:4px}'+
 '.ct-wa{background:linear-gradient(135deg,#0F2B4F,#0A1F3A);border:0;color:#fff;position:relative;overflow:hidden;transition:transform .3s}.ct-wa:hover{transform:translateY(-4px)}.ct-wa:after{content:"";position:absolute;right:-40px;bottom:-40px;width:160px;height:160px;border-radius:50%;background:radial-gradient(circle,rgba(37,211,102,.35),transparent 70%)}.ct-wa .ct-ic{background:#25D366}.ct-wa h3{color:#8FD3A8}.ct-wa b{color:#fff;font-size:22px}.ct-wa small{color:#C9D6E3}.ct-wa .go{display:inline-flex;gap:8px;align-items:center;margin-top:14px;background:#25D366;color:#0A1F3A;font-weight:700;border-radius:999px;padding:10px 20px;font-size:14.5px;position:relative;z-index:1}'+
 '.ct-fm{background:#fff;border:1px solid #DCE4EC;border-radius:24px;padding:34px;box-shadow:0 22px 50px rgba(15,43,79,.12)}.ct-fm h2{font-size:26px;color:#0F2B4F;margin-bottom:6px}.ct-fm>p{color:#667085;margin:0 0 20px;font-size:15px}.ct-fm form{width:100%}.ct-fm .ct-nt{font-size:13px;color:#667085;margin-top:14px}'+
 '.ct-s{padding:80px 0 20px;background:#F4F7FA}.ct-s h2{font-size:34px;color:#0F2B4F;font-weight:800}.ct-k{font-size:12px;letter-spacing:.18em;color:#F2862E;font-weight:700;margin-bottom:12px}.ct-st{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;margin-top:30px}.ct-sp{background:#fff;border:1px solid #DCE4EC;border-radius:18px;padding:22px 18px;text-align:center;transition:all .3s}.ct-sp:hover{transform:translateY(-6px);border-color:#F2862E;box-shadow:0 18px 36px rgba(15,43,79,.12)}.ct-sp .ct-ic{margin:0 auto 12px;background:#EAF2FB;color:#0F2B4F;border-radius:50%}.ct-sp b{display:block;color:#0F2B4F;font-size:15.5px}.ct-sp span{font-size:13.5px;color:#667085}'+
 '.ct-fq{background:#F4F7FA;padding:50px 0 90px}.ct-fq details{background:#fff;border:1px solid #DCE4EC;border-radius:16px;padding:0 24px;margin-top:12px}.ct-fq summary{cursor:pointer;list-style:none;display:flex;justify-content:space-between;gap:16px;align-items:center;padding:20px 0;font-weight:700;color:#0F2B4F;font-size:16.5px}.ct-fq summary::-webkit-details-marker{display:none}.ct-fq summary:after{content:"+";font-size:24px;color:#F2862E;transition:transform .3s}.ct-fq details[open] summary:after{transform:rotate(45deg)}.ct-fq details p{margin:0 0 20px;color:#475467}'+
 '@media(prefers-reduced-motion:reduce){.ct-r{opacity:1;transform:none;transition:none}}'+
 '@media(max-width:1020px){.ct-g{grid-template-columns:1fr}.ct-st{grid-template-columns:repeat(3,1fr)}.ct-hero h1{font-size:40px}}'+
 '@media(max-width:620px){.ct-hero{padding:118px 0 110px}.ct-hero h1{font-size:30px}.ct-hero p{font-size:16.5px}.ct-fm{padding:22px}.ct-st{grid-template-columns:1fr 1fr}.ct-s h2{font-size:27px}.ct-cd{padding:20px}.ct-s{padding:56px 0 10px}.ct-fq{padding:36px 0 60px}}';
 var STEPS=[['box','Product and grade','Calcium carbonate grade or polymer type'],['gear','Application','What you produce with it'],['scale','Quantity','Per shipment or per month'],['ship','Destination','Country and port'],['clock','Timing','When you need it']];
 var FAQ=[['What should I include in my enquiry?','The product or grade, your application, the quantity you need, the destination country and port, and the timing. The more we know, the faster we can recommend a suitable material.'],['Do you provide technical and safety data sheets?','Yes. Every calcium carbonate grade has a technical data sheet (TDS) and a safety data sheet (SDS). The safety data sheets are available in English, French, Spanish and Portuguese.'],['Which languages can we work in?','Our team works in English and Arabic. Safety data sheets and catalogues are also available in French, Spanish and Portuguese.'],['How do you ship?','We supply full container loads from Egyptian ports and coordinate packing, documents and shipping with you, from quotation to loading.']];
 function hero(){return '<section class="ct-hero"><div class="ct-w ct-r"><div class="ct-pill">CONTACT AL MANARA</div><h1>Tell us what you need. <span>We reply within one business day.</span></h1><p>Share your material, application, quantity and destination. Our technical support team will come back with the relevant supply information.</p></div></section>'}
 function main(){
  return '<section class="ct-main"><div class="ct-w"><div class="ct-g"><div class="ct-col ct-r">'+
  '<a class="ct-cd ct-wa" href="'+WA+'" target="_blank" rel="noopener"><div class="ct-ic">'+ic(I.wa,28)+'</div><div><h3>FASTEST WAY TO REACH US</h3><b>WhatsApp +20 11 4600 6496</b><small>Technical support team</small><span class="go">Start a chat '+ic(I.arw,16)+'</span></div></a>'+
  '<div class="ct-cd"><div class="ct-ic">'+ic(I.mail,24)+'</div><div><h3>EMAIL</h3><a href="mailto:info@manaragrp.com">info@manaragrp.com</a><a href="mailto:waleed@manaragrp.com">waleed@manaragrp.com</a></div></div>'+
  '<div class="ct-cd"><div class="ct-ic">'+ic(I.pin,24)+'</div><div><h3>HEAD OFFICE</h3><b style="font-size:16.5px">E9 Sky Degla1, Tenth of Ramadan City, Egypt</b><small>Registered address: 47 Neighborhood 41, Tenth of Ramadan City</small></div></div></div>'+
  '<div class="ct-fm ct-r"><h2>Send us your requirement</h2><p>Fill in the form and we will reply by email or WhatsApp.</p><div id="ct-slot"></div><div class="ct-nt">We use your details only to reply to your enquiry.</div></div></div></div></section>';
 }
 function steps(){return '<section class="ct-s"><div class="ct-w"><div class="ct-k">FOR A FASTER REPLY</div><h2>What to include in your message</h2><div class="ct-st">'+STEPS.map(function(s){return '<div class="ct-sp ct-r"><div class="ct-ic">'+ic(I[s[0]],24)+'</div><b>'+s[1]+'</b><span>'+s[2]+'</span></div>'}).join('')+'</div></div></section>'}
 function faq(){return '<section class="ct-fq"><div class="ct-w"><div class="ct-k" style="margin-top:50px">QUICK ANSWERS</div><h2 style="font-size:30px;color:#0F2B4F">Before you write to us</h2>'+FAQ.map(function(f,i){return '<details'+(i?'':' open')+'><summary>'+f[0]+'</summary><p>'+f[1]+'</p></details>'}).join('')+'</div></section>'}
 function reveal(w){var els=[].slice.call(w.querySelectorAll('.ct-r'));if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){els.forEach(function(e){e.classList.add('in')});return}var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{rootMargin:'0px 0px -6% 0px'});els.forEach(function(e){io.observe(e)})}
 function mount(){
  if(document.getElementById('ct-top')) return true;
  var ws=[].slice.call(document.querySelectorAll('.section-preview-wrapper'));var T=function(e){return (e.innerText||'').trim()};
  var s1=ws.filter(function(e){return /^CONTACT US\s*$/i.test(T(e))})[0],s2=ws.filter(function(e){return /^Talk to Our Technical Support/i.test(T(e))})[0];
  if(!s1||!s2) return false;var f=s2.querySelector('form');if(!f) return false;
  var node=f;while(node.parentElement&&node.parentElement.querySelectorAll('form').length===1&&!/Talk to/.test(node.parentElement.innerText||'')&&node.parentElement!==s2)node=node.parentElement;
  var st=document.createElement('style');st.id='ct-css';st.textContent=css;document.head.appendChild(st);
  var top=document.createElement('div');top.id='ct-top';top.className='ct';top.innerHTML=hero()+main()+steps()+faq();
  var a=s1;while(a.parentElement&&!a.parentElement.contains(s2))a=a.parentElement;
  a.parentElement.insertBefore(top,a);
  top.querySelector('#ct-slot').appendChild(node);node.style.cssText='position:static!important;width:100%!important;margin:0!important;height:auto!important;min-height:0!important;top:auto!important;left:auto!important;';
  s1.style.display='none';s2.style.display='none';reveal(top);return true;
 }
 var n=0,iv=setInterval(function(){if(mount()||++n>80)clearInterval(iv)},400);
})();
});
run('polish',null,function(){
/* AM-POLISH v1.5: LinkedIn logo, footer menu, WhatsApp links, header behaviour */
(function(){
  if(window.__amPolish) return; window.__amPolish=1;
  var SQ='<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>';
  function fix(){
    var s=document.querySelectorAll('a[href*="linkedin.com"] svg');
    for(var i=0;i<s.length;i++){
      var p=s[i].querySelector('path'); if(!p||s[i].getAttribute('data-am-li')) continue;
      var d=p.getAttribute('d')||'';
      if(d.indexOf('M20.45 20.45h-3.55')===0){ s[i].setAttribute('viewBox','0 0 24 24'); s[i].innerHTML=SQ; s[i].setAttribute('data-am-li','1'); }
    }
  }
  function footer(){
    var ul=document.querySelector('footer ul[class*="footerLinks"]'); if(!ul||ul.getAttribute('data-am-ft')) return;
    var lis=ul.querySelectorAll('li'); if(lis.length<3) return;
    var tpl=lis[1], last=lis[lis.length-1];
    [['AM-PLAST','/plastic'],['AM-MINING','/am-mining'],['BUSINESS ETHICS','/business-ethics']].forEach(function(it){
      var c=tpl.cloneNode(true), a=c.querySelector('a'), n=c.querySelector('[class*="NavMenu_pageName"]'); if(!a||!n) return;
      a.setAttribute('href',it[1]); n.textContent=it[0]; ul.insertBefore(c,last);
    });
    ul.setAttribute('data-am-ft','1');
  }
  var DEF='Hello Al Manara team, I would like to enquire about your products.';
  function wa(){
    document.querySelectorAll('a[href*="wa.me/"]').forEach(function(a){
      if(a.getAttribute('data-am-wa')) return;
      try{
        var u=new URL(a.getAttribute('href').replace(/ /g,'%20')), ph=u.pathname.replace(/^\/+/,'').replace(/^0+/,''), t=u.searchParams.get('text')||DEF;
        a.setAttribute('href','https://wa.me/'+ph+'?text='+encodeURIComponent(t)); a.setAttribute('data-am-wa','1');
      }catch(e){}
    });
  }
  /* header: quote button + current-page marker */
  function hdr(){
    var h=document.querySelector('header[class*="_navBar_"]'); if(!h) return;
    var c=h.querySelector(':scope>.container');
    if(c&&!c.querySelector('.am-cta')){ var b=document.createElement('a'); b.className='am-cta'; b.href='/contact-us'; b.textContent='Request a quote'; c.appendChild(b); }
    var p=location.pathname.replace(/\/+$/,'')||'/';
    h.querySelectorAll('[class*="_desktopMenu_"] a[href]').forEach(function(a){
      var ap=(a.getAttribute('href')||'').split('#')[0].replace(/\/+$/,'')||'/', d=a.querySelector('[class*="NavMenu_menuItem"]');
      if(d) d.classList.toggle('am-act',ap===p);
    });
  }
  /* images: no empty cards - load now, retry on failure, replace the dead widget avatar */
  var AV='data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><rect width="96" height="96" fill="#0F2B4F"/><text x="48" y="60" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="40" fill="#fff">AM</text><rect x="26" y="70" width="44" height="4" rx="2" fill="#F2862E"/></svg>');
  var RT={};
  function bump(u,n){ return u.split('?')[0]+'?r='+n; }
  function imgs(){
    document.querySelectorAll('img').forEach(function(i){
      if(i.getAttribute('data-am-ig')) return; i.setAttribute('data-am-ig','1');
      var s=i.currentSrc||i.src||''; if(!s) return;
      if(/cloudfront\.net\/491017\//.test(s)){ i.src=AV; return; }
      if(i.loading==='lazy'&&i.getClientRects().length) i.loading='eager';
      i.addEventListener('error',function(){ var n=(RT[s]=(RT[s]||0)+1); if(n<=3&&s.indexOf('data:')!==0) setTimeout(function(){ i.src=bump(s,n); },1200*n); });
    });
  }
  function bgs(){
    document.querySelectorAll('[style*="background-image"]').forEach(function(e){
      if(e.getAttribute('data-am-bg')) return; e.setAttribute('data-am-bg','1');
      var m=(e.getAttribute('style')||'').match(/url\(["']?([^"')]+)["']?\)/); if(!m) return;
      var u=m[1], tries=0, ct=String(e.className);
      e.setAttribute('data-am-url',u); e.classList.add('am-sk'); if(/yd|hero|_header_/.test(ct)) e.classList.add('dk');
      function done(){ e.classList.remove('am-sk','dk'); }
      function probe(v){
        var p=new Image(); p.onload=done;
        p.onerror=function(){ if(++tries<=3) setTimeout(function(){ var nu=bump(u,tries); e.style.setProperty('background-image','url("'+nu+'")','important'); e.setAttribute('data-am-url',nu); probe(nu); },1200*tries); else done(); };
        p.src=v;
      }
      probe(u);
    });
  }
  /* if a re-render wipes a background, put it back */
  function bgHeal(){
    document.querySelectorAll('[data-am-url]').forEach(function(e){
      if(getComputedStyle(e).backgroundImage==='none') e.style.setProperty('background-image','url("'+e.getAttribute('data-am-url')+'")','important');
    });
  }
  /* sentence case for short labels and captions inside our sections (never leave a lowercase first letter) */
  var CAPROOTS='#ah-top,#ah-cta,#ab-top,#am-plast,#am2-top,#am2-bot,#am-ethics,#ct-top';
  var SKIP=/^(pH|g\/10|kg|µ|mm|cm|nm|ml|wt|cP|mPa|www|http|e\.g\.|i\.e\.)/;
  function isBlk(x){ return /^(block|flex|grid|list-item)$/.test(getComputedStyle(x).display); }
  function cap(){
    document.querySelectorAll(CAPROOTS).forEach(function(root){
      root.querySelectorAll('span,i,small,b,strong,p,li,div').forEach(function(e){
        if(e.getAttribute('data-am-cap')) return;
        var n=e.firstChild; if(!n||n.nodeType!==3) return;
        var t=n.textContent, s=t.replace(/^\s+/,''); if(!s) return;
        e.setAttribute('data-am-cap','1');
        if(!/^[a-z]/.test(s)||SKIP.test(s)||s.indexOf('@')>-1) return;
        var pt=e.previousSibling; if(pt&&pt.nodeType===3&&pt.textContent.trim()) return;
        var pe=e.previousElementSibling;
        if(!(isBlk(e)||(pe&&isBlk(pe)))) return;
        n.textContent=t.replace(/^(\s*)([a-z])/,function(x,a,b){return a+b.toUpperCase();});
      });
    });
  }
  function all(){ fix(); footer(); wa(); hdr(); imgs(); bgs(); cap(); }
  var t=0,iv=setInterval(function(){all(); if(++t>60) clearInterval(iv);},500);
  var th=0,hv=setInterval(function(){bgHeal(); if(++th>25) clearInterval(hv);},1500);
  new MutationObserver(function(){ cap(); if(!all.q){ all.q=1; setTimeout(function(){all.q=0;all();},300);} }).observe(document.documentElement,{childList:true,subtree:true});
  /* header: hide while reading down, show when scrolling up */
  var last=0,acc=0,R=document.documentElement;
  window.addEventListener('scroll',function(){
    var y=window.pageYOffset||0, dy=y-last; last=y; if(!dy) return;
    R.classList.toggle('am-sc',y>8);
    acc=(dy>0)===(acc>0)?acc+dy:dy;
    if(y>260&&acc>50) R.classList.add('am-hide'); else if(acc<-25||y<=260) R.classList.remove('am-hide');
  },{passive:true});
  document.addEventListener('focusin',function(e){ var h=document.querySelector('header[class*="_navBar_"]'); if(h&&h.contains(e.target)) R.classList.remove('am-hide'); });
})();
});
run('stack',null,function(){
(function(){
if(window.__amStack) return; window.__amStack=1;
var css='@media (max-width:767px){.am-stack{display:flex!important;flex-direction:column!important;height:auto!important;gap:14px!important;padding:24px 0!important}.am-stack>div{position:relative!important;top:auto!important;left:auto!important;height:auto!important;width:100%!important;margin:0!important}}';
var AFTER={'Button:C8d8z5aX5bcN17Ph-Khfw':'Text:Mh8F0IHglCLWflFJ_H2jc'};
function idx(info,id){for(var i=0;i<info.length;i++){if(info[i].c.querySelector('[id="'+id+'"]'))return i;}return -1;}
function overlaps(kids){
var r=kids.filter(function(c){return (c.innerText||'').trim()&&!c.querySelector('img,video,iframe');}).map(function(c){var a=c.getBoundingClientRect();return {l:a.left,r:a.right,t:a.top,b:a.top+Math.max(a.height,c.scrollHeight)};});
for(var i=0;i<r.length;i++)for(var j=i+1;j<r.length;j++){
if(Math.min(r[i].r,r[j].r)-Math.max(r[i].l,r[j].l)>4&&Math.min(r[i].b,r[j].b)-Math.max(r[i].t,r[j].t)>4)return true;}
return false;
}
function addCss(){var s=document.createElement('style');s.textContent=css;document.head.appendChild(s);}
function aboutHero(){
var t=document.getElementById('Text:6nQcXje4Wt4PFmyM1Jng9'); if(!t) return;
var e=t; while(e&&e!==document.body&&getComputedStyle(e).backgroundImage.indexOf('url(')<0) e=e.parentElement;
if(!e||e===document.body||e.getAttribute('data-am-hero')) return;
var bg=getComputedStyle(e).backgroundImage, u=bg.slice(bg.indexOf('url('));
e.style.setProperty('background-image','linear-gradient(rgba(10,31,58,.72),rgba(10,31,58,.55)), '+u,'important');
e.setAttribute('data-am-hero','1');
var s=document.createElement('style');s.textContent='[data-am-hero] h1,[data-am-hero] h2,[data-am-hero] p,[data-am-hero] span{text-shadow:0 1px 3px rgba(0,0,0,.45)}';document.head.appendChild(s);
}
function isText(c){return !!(c.innerText||'').trim()&&!c.querySelector('img,video,iframe');}
function pushDown(){
var grids=document.querySelectorAll('div[style*="grid-template-rows"]');
for(var gi=0;gi<grids.length;gi++){
var g=grids[gi]; if(g.getAttribute('data-am-push')) continue;
var kids=[].slice.call(g.children).filter(function(c){return /position:\s*absolute/.test(c.getAttribute('style')||'');});
if(!kids.length||!overlaps(kids)) continue;
g.setAttribute('data-am-push','1');
var gr=g.getBoundingClientRect(), maxOrig=0;
var info=kids.map(function(c){var r=c.getBoundingClientRect(), t=parseFloat(c.style.top)||0, h=Math.max(r.height,c.scrollHeight);
maxOrig=Math.max(maxOrig,t+r.height); return {c:c,t:t,nt:t,h:h,l:r.left,r:r.right,tx:isText(c)};});
info.sort(function(a,b){return a.t-b.t;});
var cum=0, GAP=14;
info.forEach(function(a,i){
a.nt=a.t+cum;
if(!a.tx) return;
for(var j=0;j<i;j++){var b=info[j];
if(!b.tx||Math.min(a.r,b.r)-Math.max(a.l,b.l)<=4) continue;
var need=b.nt+b.h+GAP; if(a.nt<need&&a.t>=b.t){var d=need-a.nt; cum+=d; a.nt+=d;}
}
});
var maxNew=0;
info.forEach(function(a){a.c.style.setProperty('top',a.nt+'px','important'); maxNew=Math.max(maxNew,a.nt+a.h);});
var extra=Math.max(0,maxNew-maxOrig);
if(extra>0) g.style.setProperty('height',(gr.height+extra)+'px','important');
}
}
function fix(){
aboutHero();
if(window.innerWidth>767){pushDown();return;}
var grids=document.querySelectorAll('div[style*="grid-template-rows"]');
for(var gi=0;gi<grids.length;gi++){
var g=grids[gi]; if(g.getAttribute('data-am-stack')) continue;
var kids=[].slice.call(g.children).filter(function(c){return /position:\s*absolute/.test(c.getAttribute('style')||'');});
if(!kids.length||!overlaps(kids)) continue;
g.setAttribute('data-am-stack','1');
var info=kids.map(function(c){return {c:c,t:parseFloat(c.style.top)||0,l:parseFloat(c.style.left)||0,h:parseFloat(c.style.height)||0,hd:!!c.querySelector('h1,h2,h3,h4,h5,h6')};});
info.forEach(function(a){a.k=a.t; if(a.hd){info.forEach(function(b){if(b!==a&&!b.hd&&b.t<=a.t&&a.t<b.t+b.h-5&&b.t-0.5<a.k)a.k=b.t-0.5;});}});
info.sort(function(a,b){return (a.k-b.k)||(a.l-b.l);});
Object.keys(AFTER).forEach(function(id){
var i=idx(info,id), j=idx(info,AFTER[id]); if(i<0||j<0) return;
var m=info.splice(i,1)[0]; j=idx(info,AFTER[id]); info.splice(j+1,0,m);
});
info.forEach(function(a,i){a.c.style.minHeight=a.h+'px';a.c.style.order=i;});
g.classList.add('am-stack');
}
}
function start(){addCss();fix();new MutationObserver(fix).observe(document.body,{childList:true,subtree:true});window.addEventListener('load',fix);setTimeout(fix,1500);setTimeout(fix,4000);}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
});
run('hub',null,function(){
/* Al Manara - CaCO3 Technical Hub for the AM-MINING page (Phase 3, 2026-10-12).
   Mounts only where the grades row contains "TDS & SDS available" (draft text) -> inert on the live site until Publish.
   Documents are rendered as protected view-only sheets: no PDF file is exposed, so there is nothing to download. */
(function(){
  if(window.__amHub) return; window.__amHub=1;
  var D={"grades":[{"code":"AM-UC08","series":"uncoated","doc":"TDS-AM-008 \u00b7 Rev. 01","issue":"01/10/2026","description":"AM-UC08 is a fine, high-brightness natural calcium carbonate powder derived from high-purity limestone deposits and processed with state-of- the-art grinding and classification technology. It is mechanically ground to a top cut of approximately 8 \u03bcm, delivering consistent whiteness and particle distribution as a functional filler and extender.","d50":"2.2","d98":"8 \u00b1 1","sg":"2.7","bulk":"0.50 \u2013 0.65","oil":"","white":"97","coating":"","moisture":"0.2","ph":"9","chem":{"CaCO\u2083":"\u2265 99.0 %","CaO":"\u2264 55.64 %","MgO":"\u2264 0.15 %","Fe\u2082O\u2083":"\u2264 0.01 %","SiO\u2082":"\u2264 0.3 %","HCl insoluble":"\u2264 0.3 %","Loss on ignition (900 \u00b0C)":"43.5 \u2013 44.5 %","Refractive index":"1.59"},"psd":[["0.5","10"],["1","25"],["2","46"],["3","62"],["4","74"],["6","90"],["8","98"],["10","100"]],"apps":["Plastics","Paints","Coatings","Adhesives","Paper","Industrial Applications"],"packing":"25 kg woven PP bags, 25 kg multi-wall paper bags or 1,000 \u2013 1,375 kg jumbo bags (FIBC).","shelf":"12 months from production date, stored dry in original sealed packaging."},{"code":"AM-UC10","series":"uncoated","doc":"TDS-AM-010 \u00b7 Rev. 01","issue":"01/10/2026","description":"AM-UC10 is a fine, high-brightness natural calcium carbonate powder derived from high-purity limestone deposits and processed with state-of- the-art grinding and classification technology. It is mechanically ground to a top cut of approximately 10 \u03bcm, delivering consistent whiteness and particle distribution as a functional filler and extender.","d50":"2.6","d98":"10 \u00b1 1","sg":"2.7","bulk":"0.55 \u2013 0.70","oil":"","white":"97","coating":"","moisture":"0.2","ph":"9","chem":{"CaCO\u2083":"\u2265 99.0 %","CaO":"\u2264 55.64 %","MgO":"\u2264 0.15 %","Fe\u2082O\u2083":"\u2264 0.01 %","SiO\u2082":"\u2264 0.3 %","HCl insoluble":"\u2264 0.3 %","Loss on ignition (900 \u00b0C)":"43.5 \u2013 44.5 %","Refractive index":"1.59"},"psd":[["0.5","8"],["1","22"],["2","40"],["3","55"],["5","76"],["8","93"],["10","98"],["12","100"]],"apps":["Plastics","Paints","Coatings","Adhesives","Paper","Industrial Applications"],"packing":"25 kg woven PP bags, 25 kg multi-wall paper bags or 1,000 \u2013 1,375 kg jumbo bags (FIBC).","shelf":"12 months from production date, stored dry in original sealed packaging."},{"code":"AM-UC12","series":"uncoated","doc":"TDS-AM-012 \u00b7 Rev. 01","issue":"01/10/2026","description":"AM-UC12 is a fine, high-brightness natural calcium carbonate powder derived from high-purity limestone deposits and processed with state-of- the-art grinding and classification technology. It is mechanically ground to a top cut of approximately 12 \u03bcm, delivering consistent whiteness and particle distribution as a functional filler and extender.","d50":"3.0","d98":"12 \u00b1 1","sg":"2.7","bulk":"0.60 \u2013 0.75","oil":"","white":"97","coating":"","moisture":"0.2","ph":"9","chem":{"CaCO\u2083":"\u2265 99.0 %","CaO":"\u2264 55.64 %","MgO":"\u2264 0.15 %","Fe\u2082O\u2083":"\u2264 0.01 %","SiO\u2082":"\u2264 0.3 %","HCl insoluble":"\u2264 0.3 %","Loss on ignition (900 \u00b0C)":"43.5 \u2013 44.5 %","Refractive index":"1.59"},"psd":[["0.5","7"],["1","18"],["2","36"],["3","50"],["5","68"],["8","86"],["12","98"],["15","100"]],"apps":["Plastics","Paints","Coatings","Adhesives","Paper","Industrial Applications"],"packing":"25 kg woven PP bags, 25 kg multi-wall paper bags or 1,000 \u2013 1,375 kg jumbo bags (FIBC).","shelf":"12 months from production date, stored dry in original sealed packaging."},{"code":"AM-UC15","series":"uncoated","doc":"TDS-AM-015 \u00b7 Rev. 01","issue":"01/10/2026","description":"AM-UC15 is a fine, high-brightness natural calcium carbonate powder derived from high-purity limestone deposits and processed with state-of- the-art grinding and classification technology. It is mechanically ground to a top cut of approximately 15 \u03bcm, delivering consistent whiteness and particle distribution as a functional filler and extender.","d50":"3.5","d98":"15 \u00b1 1","sg":"2.7","bulk":"0.65 \u2013 0.80","oil":"","white":"97","coating":"","moisture":"0.2","ph":"9","chem":{"CaCO\u2083":"\u2265 99.0 %","CaO":"\u2264 55.64 %","MgO":"\u2264 0.15 %","Fe\u2082O\u2083":"\u2264 0.01 %","SiO\u2082":"\u2264 0.3 %","HCl insoluble":"\u2264 0.3 %","Loss on ignition (900 \u00b0C)":"43.5 \u2013 44.5 %","Refractive index":"1.59"},"psd":[["1","14"],["2","30"],["3","43"],["5","62"],["8","80"],["12","93"],["15","98"],["20","100"]],"apps":["Plastics","Paints","Coatings","Adhesives","Paper","Industrial Applications"],"packing":"25 kg woven PP bags, 25 kg multi-wall paper bags or 1,000 \u2013 1,375 kg jumbo bags (FIBC).","shelf":"12 months from production date, stored dry in original sealed packaging."},{"code":"AM-UC20","series":"uncoated","doc":"TDS-AM-020 \u00b7 Rev. 01","issue":"01/10/2026","description":"AM-UC20 is a fine, high-brightness natural calcium carbonate powder derived from high-purity limestone deposits and processed with state-of- the-art grinding and classification technology. It is mechanically ground to a top cut of approximately 20 \u03bcm, delivering consistent whiteness and particle distribution as a functional filler and extender.","d50":"5.0","d98":"20 \u00b1 1","sg":"2.7","bulk":"0.70 \u2013 0.90","oil":"","white":"97","coating":"","moisture":"0.2","ph":"9","chem":{"CaCO\u2083":"\u2265 99.0 %","CaO":"\u2264 55.64 %","MgO":"\u2264 0.15 %","Fe\u2082O\u2083":"\u2264 0.01 %","SiO\u2082":"\u2264 0.3 %","HCl insoluble":"\u2264 0.3 %","Loss on ignition (900 \u00b0C)":"43.5 \u2013 44.5 %","Refractive index":"1.59"},"psd":[["1","18"],["2","32"],["5","50"],["8","66"],["10","74"],["15","89"],["20","98"],["25","100"]],"apps":["Rubber","Waterproofing Membranes","Construction Chemicals","Wall Putties","Glaze","Paints & Adhesives","Environmental Protection"],"packing":"25 kg woven PP bags, 25 kg multi-wall paper bags or 1,000 \u2013 1,375 kg jumbo bags (FIBC).","shelf":"12 months from production date, stored dry in original sealed packaging."},{"code":"AM-UC25","series":"uncoated","doc":"TDS-AM-025 \u00b7 Rev. 01","issue":"01/10/2026","description":"AM-UC25 is a fine, high-brightness natural calcium carbonate powder derived from high-purity limestone deposits and processed with state-of- the-art grinding and classification technology. It is mechanically ground to a top cut of approximately 25 \u03bcm, delivering consistent whiteness and particle distribution as a functional filler and extender.","d50":"5.7","d98":"25 \u00b1 1","sg":"2.7","bulk":"0.75 \u2013 0.95","oil":"","white":"97","coating":"","moisture":"0.2","ph":"9","chem":{"CaCO\u2083":"\u2265 99.0 %","CaO":"\u2264 55.64 %","MgO":"\u2264 0.15 %","Fe\u2082O\u2083":"\u2264 0.01 %","SiO\u2082":"\u2264 0.3 %","HCl insoluble":"\u2264 0.3 %","Loss on ignition (900 \u00b0C)":"43.5 \u2013 44.5 %","Refractive index":"1.59"},"psd":[["1","16"],["2","30"],["5","46"],["10","66"],["15","80"],["20","91"],["25","98"],["32","100"]],"apps":["Rubber","Waterproofing Membranes","Construction Chemicals","Wall Putties","Glaze","Paints & Adhesives","Environmental Protection"],"packing":"25 kg woven PP bags, 25 kg multi-wall paper bags or 1,000 \u2013 1,375 kg jumbo bags (FIBC).","shelf":"12 months from production date, stored dry in original sealed packaging."},{"code":"AM-UC45","series":"uncoated","doc":"TDS-AM-045 \u00b7 Rev. 01","issue":"01/10/2026","description":"AM-UC45 is a fine, high-brightness natural calcium carbonate powder derived from high-purity limestone deposits and processed with state-of- the-art grinding and classification technology. It is mechanically ground to a top cut of approximately 45 \u03bcm, delivering consistent whiteness and particle distribution as a functional filler and extender.","d50":"9.5","d98":"45 \u00b1 1","sg":"2.7","bulk":"0.85 \u2013 1.05","oil":"","white":"97","coating":"","moisture":"0.2","ph":"9","chem":{"CaCO\u2083":"\u2265 99.0 %","CaO":"\u2264 55.64 %","MgO":"\u2264 0.15 %","Fe\u2082O\u2083":"\u2264 0.01 %","SiO\u2082":"\u2264 0.3 %","HCl insoluble":"\u2264 0.3 %","Loss on ignition (900 \u00b0C)":"43.5 \u2013 44.5 %","Refractive index":"1.59"},"psd":[["1","9"],["2","18"],["5","33"],["10","52"],["20","74"],["30","87"],["45","98"],["63","100"]],"apps":["Rubber","Waterproofing Membranes","Construction Chemicals","Wall Putties","Glaze","Paints & Adhesives","Environmental Protection"],"packing":"25 kg woven PP bags, 25 kg multi-wall paper bags or 1,000 \u2013 1,375 kg jumbo bags (FIBC).","shelf":"12 months from production date, stored dry in original sealed packaging."},{"code":"AM-CN08","series":"coated","doc":"TDS-AM-C08 \u00b7 Rev. 01","issue":"01/10/2026","description":"AM-CN08 is a premium surface-coated calcium carbonate produced from high-purity, high-brightness limestone. The ultrafine ground powder (top cut \u2248 8 \u03bcm) is uniformly treated with stearic acid, turning the particle surface hydrophobic for excellent compatibility and dispersion in polymer matrices.","d50":"2.2","d98":"8 \u00b1 1","sg":"2.7","bulk":"0.75 \u2013 0.80","oil":"","white":"97","coating":"11 \u2013 12","moisture":"0.2","ph":"9","chem":{"CaCO\u2083":"\u2265 99.0 %","CaO":"\u2264 55.64 %","MgO":"\u2264 0.15 %","Fe\u2082O\u2083":"\u2264 0.01 %","SiO\u2082":"\u2264 0.3 %","HCl insoluble":"\u2264 0.3 %","Loss on ignition (900 \u00b0C)":"43.5 \u2013 44.5 %","Refractive index":"1.59"},"psd":[["0.5","10"],["1","25"],["2","46"],["3","62"],["4","74"],["6","90"],["8","98"],["10","100"]],"apps":["Plastic Films","Plastic Sheets","PVC Profiles","Cables","Masterbatch"],"packing":"25 kg woven PP bags, 25 kg multi-wall paper bags or 1,000 \u2013 1,375 kg jumbo bags (FIBC).","shelf":"12 months from production date, stored dry in original sealed packaging."},{"code":"AM-CN10","series":"coated","doc":"TDS-AM-C10 \u00b7 Rev. 01","issue":"01/10/2026","description":"AM-CN10 is a premium surface-coated calcium carbonate produced from high-purity, high-brightness limestone. The ultrafine ground powder (top cut \u2248 10 \u03bcm) is uniformly treated with stearic acid, turning the particle surface hydrophobic for excellent compatibility and dispersion in polymer matrices.","d50":"2.6","d98":"10 \u00b1 1","sg":"2.7","bulk":"0.80 \u2013 0.90","oil":"","white":"97","coating":"10 \u2013 11","moisture":"0.2","ph":"9","chem":{"CaCO\u2083":"\u2265 99.0 %","CaO":"\u2264 55.64 %","MgO":"\u2264 0.15 %","Fe\u2082O\u2083":"\u2264 0.01 %","SiO\u2082":"\u2264 0.3 %","HCl insoluble":"\u2264 0.3 %","Loss on ignition (900 \u00b0C)":"43.5 \u2013 44.5 %","Refractive index":"1.59"},"psd":[["0.5","8"],["1","22"],["2","40"],["3","55"],["5","76"],["8","93"],["10","98"],["12","100"]],"apps":["Plastic Films","Plastic Sheets","PVC Profiles","Cables","Masterbatch"],"packing":"25 kg woven PP bags, 25 kg multi-wall paper bags or 1,000 \u2013 1,375 kg jumbo bags (FIBC).","shelf":"12 months from production date, stored dry in original sealed packaging."},{"code":"AM-CN12","series":"coated","doc":"TDS-AM-C12 \u00b7 Rev. 01","issue":"01/10/2026","description":"AM-CN12 is a premium surface-coated calcium carbonate produced from high-purity, high-brightness limestone. The ultrafine ground powder (top cut \u2248 12 \u03bcm) is uniformly treated with stearic acid, turning the particle surface hydrophobic for excellent compatibility and dispersion in polymer matrices.","d50":"3.0","d98":"12 \u00b1 1","sg":"","bulk":"0.85 \u2013 0.95","oil":"17","white":"97","coating":"9.5 \u2013 11","moisture":"0.2","ph":"9","chem":{"CaCO\u2083":"\u2265 99.0 %","CaO":"\u2264 55.64 %","MgO":"\u2264 0.15 %","Fe\u2082O\u2083":"\u2264 0.01 %","SiO\u2082":"\u2264 0.3 %","HCl insoluble":"\u2264 0.3 %","Loss on ignition (900 \u00b0C)":"43.5 \u2013 44.5 %","Refractive index":"1.59"},"psd":[["0.5","7"],["1","19"],["2","37"],["3","52"],["5","71"],["8","88"],["12","98"],["15","100"]],"apps":["Plastic Films","Plastic Sheets","PVC Profiles","Cables","Plastic Molding"],"packing":"25 kg woven PP bags, 25 kg multi-wall paper bags or 1,000 \u2013 1,375 kg jumbo bags (FIBC).","shelf":"12 months from production date, stored dry in original sealed packaging."},{"code":"AM-CN15","series":"coated","doc":"TDS-AM-C15 \u00b7 Rev. 01","issue":"01/10/2026","description":"AM-CN15 is a premium surface-coated calcium carbonate produced from high-purity, high-brightness limestone. The ultrafine ground powder (top cut \u2248 15 \u03bcm) is uniformly treated with stearic acid, turning the particle surface hydrophobic for excellent compatibility and dispersion in polymer matrices.","d50":"3.5","d98":"15 \u00b1 1","sg":"","bulk":"0.90 \u2013 1.00","oil":"16","white":"97","coating":"8.5 \u2013 9.5","moisture":"0.2","ph":"9","chem":{"CaCO\u2083":"\u2265 99.0 %","CaO":"\u2264 55.64 %","MgO":"\u2264 0.15 %","Fe\u2082O\u2083":"\u2264 0.01 %","SiO\u2082":"\u2264 0.3 %","HCl insoluble":"\u2264 0.3 %","Loss on ignition (900 \u00b0C)":"43.5 \u2013 44.5 %","Refractive index":"1.59"},"psd":[["1","14"],["2","30"],["3","43"],["5","62"],["8","80"],["12","93"],["15","98"],["20","100"]],"apps":["Plastic Films","Plastic Sheets","PVC Profiles","Cables","Plastic Molding"],"packing":"25 kg woven PP bags, 25 kg multi-wall paper bags or 1,000 \u2013 1,375 kg jumbo bags (FIBC).","shelf":"12 months from production date, stored dry in original sealed packaging."},{"code":"AM-CN20","series":"coated","doc":"TDS-AM-C20 \u00b7 Rev. 01","issue":"01/10/2026","description":"AM-CN20 is a premium surface-coated calcium carbonate produced from high-purity, high-brightness limestone. The ultrafine ground powder (top cut \u2248 20 \u03bcm) is uniformly treated with stearic acid, turning the particle surface hydrophobic for excellent compatibility and dispersion in polymer matrices.","d50":"5.0","d98":"20 \u00b1 1","sg":"2.7","bulk":"0.95 \u2013 1.05","oil":"","white":"97","coating":"8 \u2013 9","moisture":"0.2","ph":"9","chem":{"CaCO\u2083":"\u2265 99.0 %","CaO":"\u2264 55.64 %","MgO":"\u2264 0.15 %","Fe\u2082O\u2083":"\u2264 0.01 %","SiO\u2082":"\u2264 0.3 %","HCl insoluble":"\u2264 0.3 %","Loss on ignition (900 \u00b0C)":"43.5 \u2013 44.5 %","Refractive index":"1.59"},"psd":[["1","12"],["2","24"],["5","50"],["8","66"],["12","81"],["16","92"],["20","98"],["25","100"]],"apps":["PVC Pipes","PVC Profiles","Plastic Sheets","Cables","Injection Molding"],"packing":"25 kg woven PP bags, 25 kg multi-wall paper bags or 1,000 \u2013 1,375 kg jumbo bags (FIBC).","shelf":"12 months from production date, stored dry in original sealed packaging."},{"code":"AM-CN25","series":"coated","doc":"TDS-AM-C25 \u00b7 Rev. 01","issue":"01/10/2026","description":"AM-CN25 is a premium surface-coated calcium carbonate produced from high-purity, high-brightness limestone. The ultrafine ground powder (top cut \u2248 25 \u03bcm) is uniformly treated with stearic acid, turning the particle surface hydrophobic for excellent compatibility and dispersion in polymer matrices.","d50":"5.7","d98":"25 \u00b1 1","sg":"2.7","bulk":"1.00 \u2013 1.10","oil":"","white":"97","coating":"7 \u2013 8","moisture":"0.2","ph":"9","chem":{"CaCO\u2083":"\u2265 99.0 %","CaO":"\u2264 55.64 %","MgO":"\u2264 0.15 %","Fe\u2082O\u2083":"\u2264 0.01 %","SiO\u2082":"\u2264 0.3 %","HCl insoluble":"\u2264 0.3 %","Loss on ignition (900 \u00b0C)":"43.5 \u2013 44.5 %","Refractive index":"1.59"},"psd":[["1","11"],["2","22"],["5","45"],["8","62"],["12","77"],["18","90"],["25","98"],["30","100"]],"apps":["PVC Pipes","PVC Profiles","Plastic Sheets","Injection Molding"],"packing":"25 kg woven PP bags, 25 kg multi-wall paper bags or 1,000 \u2013 1,375 kg jumbo bags (FIBC).","shelf":"12 months from production date, stored dry in original sealed packaging."},{"code":"AM-CN45","series":"coated","doc":"TDS-AM-C45 \u00b7 Rev. 01","issue":"01/10/2026","description":"AM-CN45 is a premium surface-coated calcium carbonate produced from high-purity, high-brightness limestone. The fine ground powder (top cut \u2248 45 \u03bcm) is uniformly treated with stearic acid, turning the particle surface hydrophobic for excellent compatibility and dispersion in polymer matrices.","d50":"9.5","d98":"45 \u00b1 1","sg":"2.7","bulk":"1.05 \u2013 1.20","oil":"","white":"97","coating":"6 \u2013 7","moisture":"0.2","ph":"9","chem":{"CaCO\u2083":"\u2265 99.0 %","CaO":"\u2264 55.64 %","MgO":"\u2264 0.15 %","Fe\u2082O\u2083":"\u2264 0.01 %","SiO\u2082":"\u2264 0.3 %","HCl insoluble":"\u2264 0.3 %","Loss on ignition (900 \u00b0C)":"43.5 \u2013 44.5 %","Refractive index":"1.59"},"psd":[["1","9"],["2","18"],["5","33"],["10","51"],["20","74"],["30","87"],["45","98"],["63","100"]],"apps":["PVC Pipes","PVC Profiles","Injection Molding"],"packing":"25 kg woven PP bags, 25 kg multi-wall paper bags or 1,000 \u2013 1,375 kg jumbo bags (FIBC).","shelf":"12 months from production date, stored dry in original sealed packaging."}]};
  var WA='201146006496';
  var MARK='TDS & SDS available';
  function wa(t){return 'https://wa.me/'+WA+'?text='+encodeURIComponent(t);}
  /* entities are built at runtime: Wuilt decodes literal HTML entities inside Custom Code when saving */
  var A='&';
  function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':A+'amp;','<':A+'lt;','>':A+'gt;','"':A+'quot;'}[c];});}
  function el(h){var t=document.createElement('div');t.innerHTML=h;return t.firstElementChild;}

  var APPS=[
    ['film','Plastic films & sheets','Stearic-coated fine grades disperse evenly in PE and PP and keep film and sheet surfaces smooth.',['Plastic Films','Plastic Sheets'],'M4 7h16M4 12h16M4 17h10'],
    ['mb','Filler masterbatch','Hydrophobic fine grades for CaCO\u2083 filler masterbatch and compounding.',['Masterbatch'],'M12 3l8 4.5v9L12 21l-8-4.5v-9z'],
    ['pvc','PVC pipes & profiles','Coated grades support stiffness, surface finish and dimensional stability in rigid PVC.',['PVC Pipes','PVC Profiles'],'M3 9h18v6H3zM7 9v6M17 9v6'],
    ['cable','Cables & wires','Fine coated grades for PVC cable insulation and sheathing compounds.',['Cables'],'M4 12c4-6 12 6 16 0M4 16c4-6 12 6 16 0'],
    ['mold','Injection & molding','Coated grades as a functional filler in molded polymer parts.',['Injection Molding','Plastic Molding'],'M5 4h14v6H5zM8 10v10h8V10'],
    ['plast','Plastic compounds','Uncoated fine grades for general plastic compounds.',['Plastics'],'M12 3a9 9 0 1 0 .01 0zM12 8v8M8 12h8'],
    ['paint','Paints & coatings','Uncoated GCC as an extender: whiteness, opacity support and formulation cost control.',['Paints','Coatings','Paints & Adhesives'],'M4 4h12v6H4zM16 7h3v6h-7v7'],
    ['adh','Adhesives & sealants','Viscosity and rheology control in adhesive and sealant systems.',['Adhesives','Paints & Adhesives'],'M8 3h8l-1 6H9zM12 9v12'],
    ['paper','Paper','High-whiteness mineral filler for paper filling.',['Paper'],'M6 3h9l3 3v15H6zM9 10h6M9 14h6'],
    ['rubber','Rubber','Filler for technical rubber goods and compounds.',['Rubber'],'M12 3a9 9 0 1 0 .01 0zM12 7a5 5 0 1 0 .01 0z'],
    ['memb','Waterproofing membranes','Mineral filler for waterproofing membranes and roofing compounds.',['Waterproofing Membranes'],'M3 15l9-9 9 9M6 18h12'],
    ['cons','Construction chemicals','Wall putties, tile adhesives, plasters and dry-mix products.',['Construction Chemicals','Wall Putties'],'M4 20V10l8-6 8 6v10zM10 20v-6h4v6']
  ];
  function gradesFor(key){
    var a=APPS.filter(function(x){return x[0]===key;})[0]; if(!a) return [];
    return D.grades.filter(function(g){return g.apps.some(function(p){return a[3].indexOf(p)>=0;});}).map(function(g){return g.code;});
  }
  function ico(p,s){return '<svg viewBox="0 0 24 24" width="'+(s||22)+'" height="'+(s||22)+'" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="'+p+'"/></svg>';}
  var I_DOC='M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6', I_EYE='M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 9a3 3 0 1 0 .01 0z',
      I_LOCK='M6 11h12v10H6zM9 11V8a3 3 0 0 1 6 0v3', I_WA='M5 19l1.2-3.6A7.5 7.5 0 1 1 9 18.6z';

  var CSS='\
.amh{--n:#0F2B4F;--s:#3B5B78;--d:#0A1F3A;--o:#F2862E;--l:#F4F7FA;--b:#DCE4EC;font-family:Inter,Poppins,Arial,sans-serif;color:#1D2939;max-width:1180px;margin:0 auto;padding:56px 20px;box-sizing:border-box;line-height:1.55}\
.amh *{box-sizing:border-box}.amh h2{font-family:Montserrat,Inter,sans-serif;color:var(--n);font-size:32px;line-height:1.2;margin:0 0 10px;font-weight:700}\
.amh h3{font-family:Montserrat,Inter,sans-serif;color:var(--n);font-size:20px;margin:0 0 6px}.amh .k{color:var(--o);font-weight:700;letter-spacing:.14em;font-size:12px;text-transform:uppercase;margin-bottom:8px}\
.amh .lead{color:#475467;max-width:760px;margin:0 0 26px;font-size:16px}.amh-blk{margin-top:64px}\
.amh-facts{display:grid;grid-template-columns:repeat(5,1fr);gap:1px;background:var(--b);border:1px solid var(--b);border-radius:14px;overflow:hidden}\
.amh-facts div{background:#fff;padding:20px 16px;text-align:center}.amh-facts b{display:block;font-family:Montserrat,Inter,sans-serif;font-size:26px;color:var(--n)}.amh-facts span{font-size:12px;color:#667085;text-transform:uppercase;letter-spacing:.06em}\
.amh-apps{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}\
.amh-app{all:unset;cursor:pointer;display:block;background:#fff;border:1px solid var(--b);border-radius:14px;padding:18px;transition:.2s;box-sizing:border-box}\
.amh-app:hover,.amh-app.on{border-color:var(--o);box-shadow:0 8px 24px rgba(15,43,79,.10);transform:translateY(-2px)}\
.amh-app .ic{width:42px;height:42px;border-radius:10px;background:var(--l);color:var(--n);display:flex;align-items:center;justify-content:center;margin-bottom:12px}.amh-app.on .ic{background:var(--o);color:#fff}\
.amh-app b{display:block;color:var(--n);font-size:15px;margin-bottom:4px}.amh-app p{margin:0 0 10px;font-size:13px;color:#667085}.amh-app i{font-style:normal;font-size:12px;color:var(--s);font-weight:600}\
.amh-tabs{display:flex;gap:8px;margin:0 0 16px;flex-wrap:wrap}.amh-tab{all:unset;cursor:pointer;padding:10px 18px;border-radius:999px;border:1px solid var(--b);font-weight:600;font-size:14px;color:var(--n)}\
.amh-tab.on{background:var(--n);color:#fff;border-color:var(--n)}.amh-note{font-size:13px;color:#667085;margin:8px 0 0}\
.amh-filter{display:none;align-items:center;gap:10px;background:#FFF4EA;border:1px solid #F9D2AE;color:#7A3E06;padding:10px 14px;border-radius:10px;margin-bottom:14px;font-size:14px}.amh-filter.on{display:flex}.amh-filter button{all:unset;cursor:pointer;margin-left:auto;font-weight:700}\
.amh-tw{border:1px solid var(--b);border-radius:14px;overflow:hidden}.amh table{width:100%;border-collapse:collapse;font-size:14px;background:#fff}\
.amh th{background:var(--n);color:#fff;text-align:left;padding:12px 14px;font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:.05em}\
.amh td{padding:12px 14px;border-top:1px solid #EEF2F6;vertical-align:middle}.amh tr.dim td{opacity:.32}.amh tr.hit,.amh tr.hit td{background:#FFF8F1}\
.amh td.g{font-weight:700;color:var(--n);white-space:nowrap}.amh td.ap{color:#475467;font-size:13px}\
.amh-v{all:unset;cursor:pointer;display:inline-flex;align-items:center;gap:6px;padding:7px 12px;border-radius:8px;background:var(--l);color:var(--n);font-weight:600;font-size:13px;white-space:nowrap}.amh-v:hover{background:var(--o);color:#fff}\
.amh-two{display:grid;grid-template-columns:1fr 1fr;gap:20px}.amh-card{background:#fff;border:1px solid var(--b);border-radius:14px;padding:22px}\
.amh-kv{width:100%}.amh-kv td{padding:9px 0;border-top:1px solid #EEF2F6;font-size:14px}.amh-kv td:last-child{text-align:right;font-weight:600;color:var(--n)}\
.amh-docs{display:grid;grid-template-columns:1.4fr 1fr;gap:20px}.amh-doc{background:linear-gradient(135deg,#0F2B4F,#0A1F3A);color:#fff;border-radius:16px;padding:26px}\
.amh-doc h3{color:#fff}.amh-doc p{color:#C9D6E3;font-size:14px;margin:0 0 16px}.amh-doc .row{display:flex;flex-wrap:wrap;gap:8px}\
.amh-doc .amh-v{background:rgba(255,255,255,.1);color:#fff}.amh-doc .amh-v:hover{background:var(--o)}\
.amh-lock{display:inline-flex;align-items:center;gap:6px;font-size:12px;color:#F9C08C;margin-top:14px}\
.amh-pk{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.amh-pk div{background:var(--l);border-radius:12px;padding:16px}.amh-pk b{display:block;color:var(--n);margin-bottom:4px}.amh-pk span{font-size:13px;color:#475467}\
.amh-faq details{background:#fff;border:1px solid var(--b);border-radius:12px;margin-bottom:10px;padding:0 18px}\
.amh-faq summary{cursor:pointer;list-style:none;padding:16px 0;font-weight:600;color:var(--n);display:flex;justify-content:space-between;gap:12px}.amh-faq summary::-webkit-details-marker{display:none}\
.amh-faq summary:after{content:"+";color:var(--o);font-size:22px;line-height:1}.amh-faq details[open] summary:after{content:"\u2212"}.amh-faq details p{margin:0 0 16px;color:#475467;font-size:14px}\
.amh-cta{display:grid;grid-template-columns:1fr 1fr;gap:16px}.amh-cta a{display:block;text-decoration:none;border-radius:14px;padding:22px;border:1px solid var(--b);background:#fff;color:var(--n)}\
.amh-cta a:first-child{background:var(--o);border-color:var(--o);color:#fff}.amh-cta b{display:block;font-size:17px;margin-bottom:4px}.amh-cta span{font-size:13px;opacity:.85}\
.amh-m{position:fixed;inset:0;z-index:2147483000;background:rgba(10,31,58,.78);display:none;align-items:flex-start;justify-content:center;overflow:auto;padding:28px 12px}.amh-m.on{display:flex}\
.amh-m .box{position:relative;width:100%;max-width:860px;background:#fff;border-radius:14px;box-shadow:0 30px 80px rgba(0,0,0,.35);overflow:hidden;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}\
.amh-m .bar{display:flex;align-items:center;gap:10px;background:#F4F7FA;padding:10px 14px;border-bottom:1px solid var(--b);font-size:13px;color:#475467;position:sticky;top:0;z-index:3}\
.amh-m .bar b{color:var(--n)}.amh-m .bar .x{all:unset;cursor:pointer;margin-left:auto;font-size:22px;line-height:1;color:var(--n);padding:0 6px}\
.amh-m .wm{position:absolute;inset:0;pointer-events:none;z-index:2;background-image:url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27340%27 height=%27200%27%3E%3Ctext x=%2710%27 y=%27120%27 transform=%27rotate(-24 170 100)%27 font-family=%27Arial%27 font-size=%2716%27 fill=%27%230F2B4F%27 fill-opacity=%270.07%27%3EVIEW ONLY \u00b7 manaragrp.com%3C/text%3E%3C/svg%3E")}\
.amh-sh{position:relative;z-index:1;padding:0 0 18px}.amh-sh .hd{background:linear-gradient(135deg,#0F2B4F,#0A1F3A);color:#fff;padding:26px 30px}\
.amh-sh .hd small{display:block;letter-spacing:.3em;font-size:11px;color:#F9C08C}.amh-sh .hd h4{margin:6px 0 2px;font:700 30px Montserrat,Inter,sans-serif;color:#fff}\
.amh-sh .hd p{margin:0;color:#C9D6E3;font-size:14px}.amh-sh .meta{display:flex;flex-wrap:wrap;gap:6px 18px;font-size:12px;color:#C9D6E3;margin-top:12px}\
.amh-sh .kp{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--b)}.amh-sh .kp div{background:#fff;padding:14px;text-align:center}\
.amh-sh .kp b{display:block;font:700 20px Montserrat,Inter,sans-serif;color:var(--n)}.amh-sh .kp span{font-size:11px;color:#667085;text-transform:uppercase;letter-spacing:.06em}\
.amh-sh .sc{padding:16px 30px 0}.amh-sh .sc h5{margin:0 0 8px;font:700 13px Inter,sans-serif;color:var(--o);letter-spacing:.12em;text-transform:uppercase}\
.amh-sh .sc p{margin:0;font-size:14px;color:#344054}.amh-sh .chips span{display:inline-block;background:var(--l);color:var(--n);border-radius:999px;padding:5px 12px;font-size:13px;margin:0 6px 6px 0}\
.amh-sh .cols{display:grid;grid-template-columns:1fr 1fr;gap:24px}.amh-sh .ft{margin:18px 30px 0;padding-top:12px;border-top:1px solid var(--b);font-size:12px;color:#667085}\
.amh-sh .act{display:flex;flex-wrap:wrap;gap:10px;padding:16px 30px 0}.amh-sh .act a{text-decoration:none;background:var(--o);color:#fff;border-radius:8px;padding:10px 16px;font-weight:600;font-size:14px}\
.amh-sh .act a.alt{background:var(--l);color:var(--n)}\
.amh-img{width:100%;aspect-ratio:1075/1521;background-size:100% auto;background-repeat:no-repeat;background-color:#fff;-webkit-user-drag:none}\
.amh-sh .kv2 td{vertical-align:top}.amh-sh .kv2 td:first-child{width:34%;color:#475467;padding-right:14px}.amh-sh .kv2 td:last-child{text-align:left;font-weight:500;color:#1D2939}\
.amh-sr{position:absolute!important;width:1px!important;height:1px!important;overflow:hidden!important;clip:rect(0 0 0 0)!important;white-space:nowrap!important}\
@media print{.amh-m{display:none!important}}\
@media (max-width:900px){.amh-apps{grid-template-columns:repeat(2,1fr)}.amh-facts{grid-template-columns:repeat(2,1fr)}.amh-facts div:last-child{grid-column:span 2}.amh-two,.amh-docs,.amh-cta{grid-template-columns:1fr}.amh-pk{grid-template-columns:1fr}}\
@media (max-width:720px){.amh{padding:36px 16px}.amh h2{font-size:25px}.amh-apps{gap:10px}.amh-app{padding:14px}.amh-app p{display:none}\
.amh-tw table,.amh-tw thead,.amh-tw tbody,.amh-tw tr,.amh-tw td{display:block;width:100%}.amh-tw thead{display:none}.amh-tw tr{border-top:1px solid #EEF2F6;padding:10px 14px;display:grid;grid-template-columns:1fr 1fr;gap:4px 12px}\
.amh-tw td{border:0;padding:2px 0;font-size:13px}.amh-tw td:before{content:attr(data-l);display:block;font-size:10px;text-transform:uppercase;letter-spacing:.06em;color:#98A2B3}\
.amh-tw tr.hit td{background:transparent}.amh-tw td.g{grid-column:1/-1;font-size:16px}.amh-tw td.g:before{display:none}.amh-tw td.ap{grid-column:1/-1}.amh-tw td.v{grid-column:1/-1}.amh-tw td.v:before{display:none}\
.amh-sh .hd,.amh-sh .sc{padding-left:18px;padding-right:18px}.amh-sh .kp{grid-template-columns:repeat(2,1fr)}.amh-sh .cols{grid-template-columns:1fr}.amh-sh .ft{margin:18px}.amh-sh .act{padding:16px 18px 0}}';

  /* ---------- page blocks ---------- */
  function facts(){return '<div class="amh-facts"><div><b>14</b><span>Grades</span></div><div><b>8\u201345 \u00b5m</b><span>Top cut D98</span></div><div><b>\u2265 99.0 %</b><span>CaCO\u2083 purity</span></div><div><b>\u2265 97 %</b><span>Whiteness</span></div><div><b>TDS + SDS</b><span>For every grade</span></div></div>';}
  function apps(){
    return APPS.map(function(a){var n=gradesFor(a[0]);return '<button class="amh-app" data-app="'+a[0]+'"><div class="ic">'+ico(a[4])+'</div><b>'+a[1]+'</b><p>'+a[2]+'</p><i>'+n.length+' grade'+(n.length>1?'s':'')+' \u00b7 '+n[0]+(n.length>1?' \u2013 '+n[n.length-1].slice(3):'')+' \u2192</i></button>';}).join('');
  }
  function row(g){
    var c=g.series==='coated', ap=g.apps.join(', ');
    return '<tr data-code="'+g.code+'"><td class="g" data-l="Grade">'+g.code+'</td><td data-l="Top cut D98">'+g.d98+' \u00b5m</td><td data-l="D50">'+g.d50+' \u00b5m</td>'+
      (c?'<td data-l="Stearic acid">'+g.coating+' kg/t</td>':'')+'<td data-l="Whiteness">\u2265 '+g.white+' %</td><td data-l="Bulk density">'+g.bulk+' g/cm\u00b3</td><td class="ap" data-l="Typical applications">'+esc(ap)+'</td>'+
      '<td class="v"><button class="amh-v" data-tds="'+g.code+'" title="View the technical data sheet">'+ico(I_DOC,16)+' TDS '+ico(I_EYE,15)+'</button></td></tr>';
  }
  function table(series){
    var c=series==='coated';
    return '<div class="amh-tw"><table><thead><tr><th>Grade</th><th>Top cut D98</th><th>D50</th>'+(c?'<th>Stearic acid</th>':'')+'<th>Whiteness</th><th>Bulk density</th><th>Typical applications</th><th>Data sheet</th></tr></thead><tbody>'+
      D.grades.filter(function(g){return g.series===series;}).map(row).join('')+'</tbody></table></div>';
  }
  function kv(o,cl){return '<table class="amh-kv'+(cl?' '+cl:'')+'">'+o.map(function(r){return '<tr><td>'+r[0]+'</td><td>'+r[1]+'</td></tr>';}).join('')+'</table>';}
  var g0=D.grades[0];
  var CHEM=[['CaCO\u2083',g0.chem['CaCO\u2083']],['MgO',g0.chem['MgO']],['Fe\u2082O\u2083',g0.chem['Fe\u2082O\u2083']],['SiO\u2082',g0.chem['SiO\u2082']],['HCl insoluble',g0.chem['HCl insoluble']],['Loss on ignition (900 \u00b0C)',g0.chem['Loss on ignition (900 \u00b0C)']]];
  var PHYS=[['Appearance','White fine powder'],['Specific gravity','~ 2.7 g/cm\u00b3'],['Mohs hardness','3'],['Refractive index',g0.chem['Refractive index']],['pH (10 % slurry)','~ 9'],['Moisture','\u2264 0.2 %']];
  var FAQ=[
    ['What is the difference between coated and uncoated calcium carbonate?','Uncoated (natural) ground calcium carbonate is used as a filler and extender in water-based systems such as paints, adhesives, paper and construction products. Coated grades are surface-treated with stearic acid, which makes the particles hydrophobic so they disperse evenly in polymers such as PE, PP and PVC and pick up less moisture.'],
    ['Which grade should I use for filler masterbatch or plastic film?','Fine coated grades are typically used: AM-CN08 and AM-CN10 for masterbatch, AM-CN08 to AM-CN15 for films, and AM-CN08 to AM-CN25 for sheets. Open each TDS above to compare particle size distribution, then confirm the grade with our technical support for your process.'],
    ['Which grade is suitable for PVC pipes and profiles?','Coated grades AM-CN20, AM-CN25 and AM-CN45 are listed for PVC pipes; AM-CN08 to AM-CN45 are listed for PVC profiles. The final choice depends on your formulation, filler loading and surface-finish requirements.'],
    ['What documents do you provide?','Every grade has a technical data sheet (TDS) and the product is covered by a 16-section GHS safety data sheet (SDS), available in English with French, Spanish or Portuguese versions on request. Export shipments include the commercial invoice, packing list, bill of lading and certificate of origin.'],
    ['How is the product packed and shipped?','25 kg woven PP bags, 25 kg multi-wall paper bags, or 1,000\u20131,375 kg jumbo bags (FIBC). A 20 ft container typically carries about 27 tonnes in bags. HS code 2836.50, origin Egypt.'],
    ['Are the values on the TDS a specification?','No. The values are typical values. Grade, specification and packing are confirmed in writing for each order before shipment.'],
    ['How do I request a quotation?','Send us the grade (or your application), quantity, destination port and preferred packing on WhatsApp +20 11 4600 6496 or through the contact page. Our technical support replies within one business day.']
  ];
  function faq(){return FAQ.map(function(q){return '<details><summary>'+q[0]+'</summary><p>'+q[1]+'</p></details>';}).join('');}

  function hub(){
    return '<div class="amh" id="caco3-technical-hub">'+
     '<div class="k">Calcium carbonate \u00b7 Technical center</div><h2>Find the right grade for your process</h2>'+
     '<p class="lead">Fourteen ground calcium carbonate grades in two series, with typical data from our technical data sheets. Choose your application to highlight the matching grades, then open the data sheet in one click.</p>'+facts()+
     '<div class="amh-blk" id="caco3-applications"><div class="k">Applications</div><h3>Where our calcium carbonate is used</h3><p class="lead">Select an application to see the suggested grades in the tables below.</p><div class="amh-apps">'+apps()+'</div></div>'+
     '<div class="amh-blk" id="caco3-grades"><div class="k">Grades</div><h3>Technical data by grade</h3>'+
     '<div class="amh-filter"><span></span><button type="button">Show all \u2715</button></div>'+
     '<div class="amh-tabs"><button class="amh-tab on" data-tab="uncoated">Uncoated series \u00b7 AM-UC</button><button class="amh-tab" data-tab="coated">Coated series \u00b7 AM-CN (stearic acid)</button></div>'+
     '<div data-pane="uncoated">'+table('uncoated')+'</div><div data-pane="coated" style="display:none">'+table('coated')+'</div>'+
     '<p class="amh-note">Typical values from each grade\u2019s TDS (Rev. 01). Grade and specification are confirmed for every order.</p></div>'+
     '<div class="amh-blk"><div class="amh-two"><div class="amh-card"><div class="k">All grades</div><h3>Typical chemical analysis</h3>'+kv(CHEM)+'</div><div class="amh-card"><div class="k">All grades</div><h3>Typical physical properties</h3>'+kv(PHYS)+'</div></div></div>'+
     '<div class="amh-blk" id="caco3-documents"><div class="k">Document center</div><h3>Technical & safety data sheets</h3><p class="lead">Documents open in a protected viewer for reading on this page.</p><div class="amh-docs">'+
       '<div class="amh-doc"><h3>TDS \u00b7 Technical data sheets</h3><p>One sheet per grade: particle size distribution, physical and chemical data, applications, packing and storage.</p><div class="row">'+
         D.grades.map(function(g){return '<button class="amh-v" data-tds="'+g.code+'">'+ico(I_DOC,15)+' '+g.code+'</button>';}).join('')+'</div>'+
         '<div class="amh-lock">'+ico(I_LOCK,14)+' View-only \u00b7 protected</div></div>'+
       '<div class="amh-doc"><h3>SDS \u00b7 Safety data sheet</h3><p>Calcium carbonate (coated & uncoated grades) \u00b7 16-section GHS format \u00b7 Rev. 02. French, Spanish and Portuguese versions on request.</p><div class="row"><button class="amh-v" data-sds="1">'+ico(I_DOC,15)+' View SDS '+ico(I_EYE,15)+'</button></div>'+
         '<div class="amh-lock">'+ico(I_LOCK,14)+' View-only \u00b7 protected</div></div></div></div>'+
     '<div class="amh-blk"><div class="k">Packing & export</div><h3>Ready for export from Egypt</h3><div class="amh-pk">'+
       '<div><b>Packing</b><span>25 kg woven PP or multi-wall paper bags \u00b7 1,000\u20131,375 kg jumbo bags (FIBC) \u00b7 palletised on request</span></div>'+
       '<div><b>Loading</b><span>About 27 t per 20 ft container in bags \u00b7 HS code 2836.50 \u00b7 origin Egypt</span></div>'+
       '<div><b>Documents</b><span>Commercial invoice \u00b7 packing list \u00b7 bill of lading \u00b7 certificate of origin \u00b7 TDS & SDS</span></div></div></div>'+
     '</div>';
  }
  function tail(){
    return '<div class="amh" id="caco3-faq"><div class="k">FAQ</div><h2>Calcium carbonate: common questions</h2><div class="amh-faq">'+faq()+'</div>'+
     '<div class="amh-blk amh-cta"><a href="'+wa('Hello Al Manara, I would like a quotation for calcium carbonate.\nGrade / application: \nQuantity: \nDestination port: \nPacking: ')+'" target="_blank" rel="noopener"><b>Request a quotation \u2192</b><span>Grade, quantity and destination: we reply within one business day.</span></a>'+
     '<a href="'+wa('Hello Al Manara technical support, I need help choosing a calcium carbonate grade.\nApplication / process: ')+'" target="_blank" rel="noopener"><b>Talk to technical support \u2192</b><span>Help selecting the right grade for your formulation.</span></a></div></div>';
  }

  /* ---------- protected viewer ---------- */
  var M;
  function psdSvg(p){
    var W=520,H=190,L=34,B=24,lx=function(v){return L+(Math.log(v)-Math.log(0.5))/(Math.log(100)-Math.log(0.5))*(W-L-10);},ly=function(v){return H-B-(v/100)*(H-B-10);};
    var pts=p.map(function(q){return lx(+q[0]).toFixed(1)+','+ly(+q[1]).toFixed(1);}).join(' ');
    var grid=[0,25,50,75,100].map(function(v){return '<line x1="'+L+'" x2="'+(W-10)+'" y1="'+ly(v)+'" y2="'+ly(v)+'" stroke="#E4E7EC"/><text x="'+(L-6)+'" y="'+(ly(v)+4)+'" font-size="10" text-anchor="end" fill="#98A2B3">'+v+'</text>';}).join('')+
      [0.5,1,2,5,10,20,50,100].map(function(v){return '<text x="'+lx(v)+'" y="'+(H-6)+'" font-size="10" text-anchor="middle" fill="#98A2B3">'+v+'</text>';}).join('');
    return '<svg viewBox="0 0 '+W+' '+H+'" width="100%" style="max-width:'+W+'px">'+grid+'<polyline fill="none" stroke="#F2862E" stroke-width="2.5" points="'+pts+'"/>'+
      p.map(function(q){return '<circle cx="'+lx(+q[0])+'" cy="'+ly(+q[1])+'" r="3" fill="#0F2B4F"/>';}).join('')+'</svg><p style="font-size:11px;color:#98A2B3;margin:2px 0 0">Cumulative passing (%) vs particle size (\u00b5m, log scale) \u00b7 laser diffraction'+(p.coated?' \u00b7 measured before coating':'')+'</p>';
  }
  /* Original TDS design shown as a protected image (watermarked render, no PDF on the site) */
  var IMG={"base":"https://assets.wuiltweb.com/241623/","map":{"AM-UC08":"101320260526496acdc119eae4c.webp","AM-UC10":"101320260527046acdc128f1e74.webp","AM-UC12":"101320260527146acdc132a75d8.webp","AM-UC15":"101320260527226acdc13ad79b8.webp","AM-UC20":"101320260527316acdc143f03d2.webp","AM-UC25":"101320260527436acdc14fce2ec.webp","AM-UC45":"101320260527536acdc1598e846.webp","AM-CN08":"101320260528026acdc16218862.webp","AM-CN10":"101320260528136acdc16d14a20.webp","AM-CN12":"101320260528216acdc17563ac6.webp","AM-CN15":"101320260528316acdc17fc3d9d.webp","AM-CN20":"101320260528406acdc188b2899.webp","AM-CN25":"101320260528486acdc190b6ccb.webp","AM-CN45":"101320260528576acdc199bdca6.webp"}};
  function tdsView(g){
    var f=IMG.map[g.code]; if(!f) return tdsHtml(g);
    return '<div class="amh-sh"><div class="amh-img" style="background-image:url('+IMG.base+f+')" role="img" aria-label="Technical data sheet '+g.code+'"></div>'+
      '<div class="act"><a href="'+wa('Hello Al Manara, I would like a quotation for calcium carbonate grade '+g.code+'.\nQuantity: \nDestination port: \nPacking: ')+'" target="_blank" rel="noopener">Request a quotation for '+g.code+'</a>'+
      '<a class="alt" href="'+wa('Hello Al Manara technical support, I have a question about grade '+g.code+'.')+'" target="_blank" rel="noopener">Ask technical support</a></div>'+
      '<div class="ft">View-only copy \u00b7 Typical values, not a specification. The official TDS is sent with each quotation.</div></div>';
  }
  function tdsHtml(g){
    var c=g.series==='coated', desc=g.description.replace('state-of- the-art','state-of-the-art');
    var phys=[['Appearance','White fine powder']];
    if(c) phys.push(['Stearic acid coating',g.coating+' kg/ton']);
    phys.push(['Particle size D50','~ '+g.d50+' \u00b5m'],['Top cut D98',g.d98+' \u00b5m']);
    if(g.oil) phys.push(['Oil absorption','~ '+g.oil+' g/100 g']);
    if(g.sg) phys.push(['Specific gravity','~ '+g.sg+' g/cm\u00b3']);
    phys.push(['Bulk density',g.bulk+' g/cm\u00b3'],['Whiteness','\u2265 '+g.white+' %'],['Mohs hardness','3'],['pH value (10 % slurry)','~ '+g.ph],['Moisture','\u2264 '+g.moisture+' %']);
    var chem=[['Chemical formula','CaCO\u2083']].concat(Object.keys(g.chem).map(function(k){return [k==='CaCO\u2083'?'Purity (CaCO\u2083)':k,g.chem[k]];}));
    var psd=g.psd.slice(); psd.coated=c;
    return '<div class="amh-sh"><div class="hd"><small>TECHNICAL DATA SHEET</small><h4>'+g.code+'</h4><p>'+(c?'Stearic-acid coated calcium carbonate \u00b7 CaCO\u2083 \u00b7 hydrophobic polymer grade':'Natural uncoated ground calcium carbonate \u00b7 CaCO\u2083')+'</p>'+
      '<div class="meta"><span>Doc. '+esc(g.doc)+'</span><span>Issue '+g.issue+'</span><span>CAS 471-34-1</span><span>HS 2836.50</span></div></div>'+
      '<div class="kp"><div><b>'+g.d50+' \u00b5m</b><span>Mean D50</span></div><div><b>'+g.d98+' \u00b5m</b><span>Top cut D98</span></div><div><b>'+(c?g.coating+' kg/t':'\u2265 99.0 %')+'</b><span>'+(c?'Coating level':'CaCO\u2083 purity')+'</span></div><div><b>\u2265 '+g.white+' %</b><span>Whiteness</span></div></div>'+
      '<div class="sc"><h5>01 \u00b7 Description</h5><p>'+esc(desc)+'</p></div>'+
      '<div class="sc chips"><h5>02 \u00b7 Applications</h5>'+g.apps.map(function(a){return '<span>'+esc(a)+'</span>';}).join('')+'</div>'+
      '<div class="sc cols"><div><h5>03 \u00b7 Physical properties</h5>'+kv(phys)+'</div><div><h5>04 \u00b7 Chemical analysis</h5>'+kv(chem)+'</div></div>'+
      '<div class="sc"><h5>05 \u00b7 Particle size distribution</h5>'+psdSvg(psd)+'</div>'+
      '<div class="sc cols"><div><h5>06 \u00b7 Packing & storage</h5><p>'+esc(g.packing)+' Keep dry, away from moisture and contaminants. Shelf life: '+esc(g.shelf)+'</p></div>'+
      '<div><h5>07 \u00b7 Health, safety & environment</h5><p>Non-toxic and chemically stable. Dust may irritate the respiratory tract: use masks and ventilation. Handle per local safety regulations (CAS 471-34-1).</p></div></div>'+
      '<div class="act"><a href="'+wa('Hello Al Manara, I would like a quotation for calcium carbonate grade '+g.code+'.\nQuantity: \nDestination port: \nPacking: ')+'" target="_blank" rel="noopener">Request a quotation for '+g.code+'</a>'+
      '<a class="alt" href="'+wa('Hello Al Manara technical support, I have a question about grade '+g.code+'.')+'" target="_blank" rel="noopener">Ask technical support</a></div>'+
      '<div class="ft">Typical values, not a specification. Customers should test products before use. \u00b7 Al Manara for Investment & Commercial Agencies (Al Manara Mining) \u00b7 Tenth of Ramadan City, Egypt \u00b7 +20 11 4600 6496 \u00b7 www.manaragrp.com</div></div>';
  }
  var SDS=[["Identification",[["Product name","Calcium carbonate powder \u2014 natural ground calcium carbonate (GCC)"],["Trade names","Uncoated: AM-UC08 \u00b7 UC10 \u00b7 UC12 \u00b7 UC15 \u00b7 UC20 \u00b7 UC25 \u00b7 UC45 | Coated: AM-CN08 \u00b7 CN10 \u00b7 CN12 \u00b7 CN15 \u00b7 CN20 \u00b7 CN25 \u00b7 CN45"],["Formula / identifiers","CaCO\u2083 \u00b7 CAS 471-34-1 \u00b7 EC 207-439-9 \u00b7 molar mass 100.09 g/mol"],["Recommended uses","Mineral filler and extender for plastics, PVC, masterbatch, paints & coatings, adhesives & sealants, rubber, paper and construction materials."],["Uses advised against","Food, pharmaceutical or cosmetic use unless supplied with a specific grade certificate."],["Supplier","Al Manara for Investment & Commercial Agencies (Al Manara Mining) \u00b7 Tenth of Ramadan City, Egypt \u00b7 www.manaragrp.com"],["Technical support","+20 11 4600 6496 (phone & WhatsApp), Mon\u2013Sat 08:00\u201317:00 (GMT+2)"]]],["Hazard identification",[["Classification","Not classified as hazardous under UN GHS Rev. 10 and OSHA HCS (29 CFR 1910.1200)."],["Label elements","Pictogram: none \u00b7 Signal word: none \u00b7 Hazard statements: none \u00b7 Precautionary statements: not required."],["Other hazards","Fine dust may cause temporary mechanical irritation of eyes and upper respiratory tract. Non-combustible; does not form explosive dust/air mixtures."]]],["Composition",[["Type","Substance \u2014 naturally occurring mineral (calcite)."],["Main constituent","Calcium carbonate \u00b7 CAS 471-34-1 \u00b7 \u2265 99.0 % w/w (grade values on each TDS)."],["Natural impurities","MgO, SiO\u2082, Al\u2082O\u2083, Fe\u2082O\u2083 \u2014 total \u2264 1.0 %. Crystalline silica (quartz, CAS 14808-60-7) < 0.1 %."],["Surface treatment (AM-CN only)","Stearic acid \u00b7 CAS 57-11-4 \u00b7 EC 200-313-4 \u00b7 0.6 \u2013 1.2 % w/w. Not classified."],["Hazardous ingredients","None above disclosure thresholds."]]],["First-aid measures",[["Inhalation","Move to fresh air. If coughing or irritation persists, seek medical advice."],["Skin contact","Wash with soap and water. No specific treatment required."],["Eye contact","Rinse with plenty of water for at least 15 min, holding eyelids open. Do not rub. Seek medical advice if irritation persists."],["Ingestion","Rinse mouth and drink water. Do not induce vomiting. Seek medical advice if discomfort occurs."],["Note to physician","Temporary mechanical irritation (coughing, sneezing, watering eyes). Treat symptomatically; no specific antidote."]]],["Fire-fighting measures",[["Flammability","Non-combustible and non-flammable."],["Extinguishing media","Product does not burn. Use media suitable for the surrounding fire."],["Specific hazards","Above \u2248 825 \u00b0C decomposes to calcium oxide (CaO) and carbon dioxide (CO\u2082)."],["Protective equipment","Standard fire-fighting gear; self-contained breathing apparatus in enclosed spaces."]]],["Accidental release measures",[["Personal precautions","Avoid dust generation; wear PPE per Section 8. Wet powder makes floors slippery."],["Environmental precautions","No special measures. Avoid discharge of large quantities into drains or watercourses (turbidity)."],["Clean-up","Vacuum, or sweep after light dampening. Collect in closed containers for reuse or disposal. Do not use compressed air."]]],["Handling and storage",[["Safe handling","Minimise dust; provide local exhaust at filling and discharge points. Do not eat, drink or smoke in work areas; wash hands after handling."],["Storage","Dry, covered, ventilated area in closed original packaging, on pallets. Protect from moisture. Keep away from acids."],["Shelf life","12 months from production date, stored dry in original sealed packaging."]]],["Exposure controls / PPE",[["OSHA PEL (8 h TWA)","15 mg/m\u00b3 total dust \u00b7 5 mg/m\u00b3 respirable fraction (29 CFR 1910.1000, Table Z-1)."],["NIOSH REL (10 h TWA)","10 mg/m\u00b3 total \u00b7 5 mg/m\u00b3 respirable."],["ACGIH TLV","No specific TLV. Particles not otherwise specified: 10 mg/m\u00b3 inhalable \u00b7 3 mg/m\u00b3 respirable."],["Crystalline silica (trace)","Respirable: OSHA PEL 0.05 mg/m\u00b3 \u00b7 ACGIH TLV 0.025 mg/m\u00b3."],["Engineering controls","Local exhaust ventilation and dust collection at transfer, bagging and mixing points."],["Personal protection","Eyes: safety glasses with side shields. Hands: work gloves for prolonged contact. Respiratory: N95 or equivalent if limits are exceeded."]]],["Physical & chemical properties",[["Appearance / odour","White fine powder \u00b7 odourless"],["pH","\u2248 9 (10 % aqueous slurry, 20 \u00b0C)"],["Melting / boiling point","Not applicable \u2014 decomposes at \u2248 825 \u00b0C before melting"],["Flash point / auto-ignition","Not applicable (inorganic, non-combustible)"],["Density","\u2248 2.7 g/cm\u00b3 (20 \u00b0C) \u00b7 bulk 0.5 \u2013 1.2 g/cm\u00b3 (grade-dependent)"],["Solubility","Water \u2248 0.014 g/L (20 \u00b0C), practically insoluble. Soluble in dilute acids with CO\u2082 release. Coated grades: hydrophobic."],["Hardness / refractive index","Mohs 3 \u00b7 1.59"],["Particle characteristics","D50 2.2 \u2013 9.5 \u00b5m \u00b7 top cut D98 8 \u2013 45 \u00b5m, per grade (see TDS)"]]],["Stability and reactivity",[["Stability","Chemically stable under normal storage and handling conditions."],["Hazardous reactions","Reacts with acids, releasing CO\u2082 (pressure build-up in closed vessels)."],["Conditions to avoid","Moisture (caking); temperatures above 825 \u00b0C."],["Incompatible materials","Strong acids, fluorine, ammonium salts."],["Decomposition products","Calcium oxide (CaO), carbon dioxide (CO\u2082)."]]],["Toxicological information",[["Acute toxicity","Oral LD50 (rat) > 2 000 mg/kg \u00b7 Dermal LD50 (rat) > 2 000 mg/kg \u00b7 Inhalation LC50 (rat, 4 h) > 3 mg/L"],["Skin / eye irritation","Not irritating (OECD 404 / 405). Not classified."],["Sensitisation","Not sensitising (OECD 429)."],["Mutagenicity / reproduction","Negative in in-vitro tests \u00b7 no reproductive effects. Not classified."],["Carcinogenicity","Not listed by IARC, NTP, OSHA or ACGIH."]]],["Ecological information",[["Aquatic toxicity","No effects up to water solubility: fish LC50 96 h, Daphnia EC50 48 h, algae EC50 72 h all > saturation (OECD 203 / 202 / 201)."],["Persistence / bioaccumulation","Not applicable to inorganic minerals \u00b7 not bioaccumulative."],["Mobility in soil","Low; natural constituent of soils and rocks."]]],["Disposal considerations",[["Product","Non-hazardous industrial waste. Reuse where possible; otherwise dispose per local rules."],["Packaging","Empty bags completely; recycle or dispose of as non-hazardous waste."]]],["Transport information",[["UN number / class","Not regulated \u00b7 no UN number, class or packing group."],["Regulations","Not dangerous goods under IMDG Code, IATA DGR, US DOT (49 CFR) and ADR/RID."],["Marine pollutant","No."],["Special precautions","Keep packages dry and protected from rain during transit."]]],["Regulatory information",[["EU","REACH: natural mineral, exempt from registration (Annex V.7) when not chemically modified. CLP: not classified."],["USA","TSCA Inventory: listed (active). SARA 311/312: no hazard categories \u00b7 SARA 313: not listed. California Prop 65: may contain trace respirable crystalline silica."],["Other inventories","Listed: DSL (Canada), AICIS (Australia), IECSC (China), ENCS (Japan), KECI (Korea)."]]],["Other information",[["Revision","Rev. 02 (01/09/2026): full 16-section GHS format. Supersedes 01/01/2021."],["References","ECHA registration dossier (calcium carbonate) \u00b7 UN GHS Rev. 10 \u00b7 OSHA 29 CFR 1910 \u00b7 NIOSH Pocket Guide \u00b7 ACGIH TLVs."],["Customs","HS code 2836.50 (calcium carbonate) \u00b7 origin Egypt."]]]];
  function sdsHtml(){
    return '<div class="amh-sh"><div class="hd"><small>SAFETY DATA SHEET</small><h4>Calcium Carbonate</h4><p>Ground calcium carbonate (GCC) powders \u00b7 uncoated AM-UC and coated AM-CN grades</p>'+
      '<div class="meta"><span>Doc. SDS-AM-CC-001 \u00b7 Rev. 02</span><span>Issue 01/09/2026</span><span>CAS 471-34-1 \u00b7 EC 207-439-9</span><span>UN GHS Rev. 10 \u00b7 OSHA HCS</span></div></div>'+
      '<div class="kp"><div><b>Not classified</b><span>GHS classification</span></div><div><b>None</b><span>Pictogram</span></div><div><b>None</b><span>Signal word</span></div><div><b>Not regulated</b><span>Transport</span></div></div>'+
      SDS.map(function(s,i){return '<div class="sc"><h5>'+(i<9?'0':'')+(i+1)+' \u00b7 '+s[0]+'</h5>'+kv(s[1].map(function(r){return [r[0],esc(r[1])];}),'kv2')+'</div>';}).join('')+
      '<div class="act"><a href="'+wa('Hello Al Manara, please send the calcium carbonate SDS in (English-French / English-Spanish / English-Portuguese).')+'" target="_blank" rel="noopener">Request the SDS in FR / ES / PT</a></div>'+
      '<div class="ft">The information is given in good faith and describes the product with regard to safety requirements only; it is not a specification or warranty of quality. \u00b7 Al Manara for Investment & Commercial Agencies (Al Manara Mining) \u00b7 www.manaragrp.com</div></div>';
  }
  function block(e){e.preventDefault();return false;}
  function keys(e){if(!M||!M.classList.contains('on'))return; var k=(e.key||'').toLowerCase();
    if(k==='escape'){close();return;} if((e.ctrlKey||e.metaKey)&&['s','p','c','u','a','x'].indexOf(k)>=0){e.preventDefault();e.stopPropagation();}}
  function open(title,html){
    if(!M){M=el('<div class="amh-m" role="dialog" aria-modal="true"><div class="box"><div class="bar">'+ico(I_LOCK,15)+'<b class="t"></b><span>\u00b7 View-only</span><button class="x" aria-label="Close">\u00d7</button></div><div class="wm"></div><div class="ct"></div></div></div>');
      document.body.appendChild(M); M.addEventListener('click',function(e){if(e.target===M||e.target.classList.contains('x'))close();});
      ['contextmenu','dragstart','selectstart','copy','cut'].forEach(function(ev){M.addEventListener(ev,block);});}
    M.querySelector('.t').textContent=title; M.querySelector('.ct').innerHTML=html; M.classList.add('on'); M.scrollTop=0; document.documentElement.style.overflow='hidden';
  }
  function close(){if(M){M.classList.remove('on');M.querySelector('.ct').innerHTML='';document.documentElement.style.overflow='';}}
  document.addEventListener('keydown',keys,true);

  /* ---------- behaviour ---------- */
  function wire(root){
    root.addEventListener('click',function(e){
      var t=e.target.closest('[data-tds],[data-sds],[data-app],[data-tab],.amh-filter button'); if(!t) return;
      if(t.dataset.tds){var g=D.grades.filter(function(x){return x.code===t.dataset.tds;})[0]; open('TDS \u00b7 '+g.code, tdsView(g));}
      else if(t.dataset.sds){open('SDS \u00b7 Calcium carbonate', sdsHtml());}
      else if(t.dataset.tab){tab(root,t.dataset.tab);}
      else if(t.dataset.app){pick(root,t.dataset.app);}
      else {pick(root,null);}
    });
  }
  function tab(root,s){root.querySelectorAll('.amh-tab').forEach(function(b){b.classList.toggle('on',b.dataset.tab===s);});root.querySelectorAll('[data-pane]').forEach(function(p){p.style.display=p.dataset.pane===s?'':'none';});}
  function pick(root,key){
    var codes=key?gradesFor(key):[], f=root.querySelector('.amh-filter');
    root.querySelectorAll('.amh-app').forEach(function(b){b.classList.toggle('on',b.dataset.app===key);});
    root.querySelectorAll('tr[data-code]').forEach(function(r){var h=codes.indexOf(r.dataset.code)>=0;r.classList.toggle('hit',!!key&&h);r.classList.toggle('dim',!!key&&!h);});
    if(!key){f.classList.remove('on');return;}
    var a=APPS.filter(function(x){return x[0]===key;})[0];
    f.querySelector('span').innerHTML='Suggested for <b>'+a[1]+'</b>: '+codes.join(', ');
    f.classList.add('on'); tab(root,codes.length&&codes[0].indexOf('AM-CN')===0?'coated':'uncoated');
    root.querySelector('#caco3-grades').scrollIntoView({behavior:'smooth',block:'start'});
  }

  function ld(){
    var s=document.createElement('script');s.type='application/ld+json';
    s.textContent=JSON.stringify({'@context':'https://schema.org','@graph':[
      {'@type':'FAQPage','mainEntity':FAQ.map(function(q){return {'@type':'Question','name':q[0],'acceptedAnswer':{'@type':'Answer','text':q[1]}};})},
      {'@type':'ProductGroup','name':'Ground calcium carbonate (GCC) powder','brand':{'@type':'Brand','name':'Al Manara Mining'},
       'description':'Uncoated and stearic-acid coated ground calcium carbonate, top cut 8\u201345 \u00b5m, CaCO\u2083 \u2265 99.0 %, whiteness \u2265 97 %, exported from Egypt.',
       'hasVariant':D.grades.map(function(g){return {'@type':'Product','name':g.code+' '+(g.series==='coated'?'coated':'uncoated')+' calcium carbonate','sku':g.code,
         'additionalProperty':[{'@type':'PropertyValue','name':'Top cut D98','value':g.d98+' \u00b5m'},{'@type':'PropertyValue','name':'D50','value':g.d50+' \u00b5m'},{'@type':'PropertyValue','name':'Whiteness','value':'\u2265 '+g.white+' %'}]};})}
    ]});
    document.head.appendChild(s);
  }

  /* Talc grade buttons (AM#T\u2026): inactive until the talc TDS are added - no link, no jump to top */
  function talc(){
    [].slice.call(document.querySelectorAll('a[id^="Button:"]')).forEach(function(a){
      if(!/^AM#T/.test((a.innerText||'').trim())||a.getAttribute('data-am-off')) return;
      a.setAttribute('data-am-off','1'); a.removeAttribute('href'); a.setAttribute('aria-disabled','true');
      a.setAttribute('title','Talc TDS coming soon - ask our technical support on WhatsApp');
      a.style.setProperty('cursor','default','important');
      a.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();},true);
    });
  }
  function mount(){
    talc();
    if(document.getElementById('caco3-technical-hub')) return true;
    var rows=[].slice.call(document.querySelectorAll('[id^="Row:"]')).filter(function(r){return (r.innerText||r.textContent||'').indexOf(MARK)>=0;});
    var host=rows[rows.length-1]; if(!host) return false;
    var st=document.createElement('style'); st.textContent=CSS; document.head.appendChild(st);
    var top=el(hub()), bottom=el(tail());
    host.parentNode.insertBefore(top,host); host.classList.add('amh-sr');
    var how=[].slice.call(document.querySelectorAll('.section-editor-wrapper,section')).filter(function(s){return /HOW WE WORK/.test(s.innerText||'');}).pop();
    if(how&&how.parentNode) how.parentNode.insertBefore(bottom,how.nextSibling); else top.parentNode.insertBefore(bottom,top.nextSibling);
    wire(top); ld(); return true;
  }
  function start(){ if(mount()) return; var n=0, iv=setInterval(function(){ if(mount()||++n>40) clearInterval(iv); },500); }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start); else start();
})();
});
run('ga4',null,function(){
/* AM-GA4 v1.1 (2026-10-14): conversion events -> GA4 (G-5NK3FB294D via Wuilt Analytics). Events: whatsapp_click, email_click, phone_click, generate_lead (contact form) */
(function(){
  if(window.__amGA4) return; window.__amGA4=1;
  var DBG=false; try{DBG=localStorage.getItem('am_ga4_debug')==='1';}catch(e){}
  function log(){ if(DBG&&window.console) console.log.apply(console,['[AM-GA4]'].concat([].slice.call(arguments))); }
  var last={};
  function send(name,params){
    var k=name+'|'+(params.link_url||params.form_id||''), now=Date.now();
    if(last[k]&&now-last[k]<1200) return; last[k]=now;
    params.page_path=location.pathname;
    log(name,params);
    if(typeof window.gtag==='function'){ params.transport_type='beacon'; window.gtag('event',name,params); }
    else { (window.dataLayer=window.dataLayer||[]).push(Object.assign({event:name},params)); }
  }
  function where(el){
    if(el.closest('[class*="WhatsAppWidget"],[class*="WidgetApps"]')) return 'floating_widget';
    if(el.closest('footer,[id*="footer" i]')) return 'footer';
    if(el.closest('[class*="ct-"],[id^="ct-"]')) return 'contact_page';
    return 'page_body';
  }
  function kind(h){
    h=(h||'').toLowerCase();
    if(/^https?:\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com|chat\.whatsapp\.com|whatsapp\.com\/send)/.test(h)) return 'whatsapp_click';
    if(h.indexOf('mailto:')===0) return 'email_click';
    if(h.indexOf('tel:')===0) return 'phone_click';
    return '';
  }
  function track(href,el){
    var n=kind(href); if(!n) return;
    var p={link_url:href.split('?')[0].slice(0,100),link_location:where(el),link_text:((el.innerText||el.getAttribute('aria-label')||'').trim().replace(/\s+/g,' ')).slice(0,60)};
    if(n==='email_click') p.link_url=href.replace(/^mailto:/i,'mailto:').split('?')[0];
    send(n,p);
  }
  /* 1) links: capture phase so we run before the page navigates / opens a new tab */
  document.addEventListener('click',function(e){
    var a=e.target&&e.target.closest?e.target.closest('a[href]'):null;
    if(a) track(a.href||a.getAttribute('href'),a);
  },true);
  /* 2) buttons that open WhatsApp through window.open (some widgets do) */
  var _open=window.open;
  window.open=function(u){ try{ if(u&&kind(String(u))) track(String(u),document.activeElement||document.body); }catch(e){} return _open.apply(this,arguments); };

  /* 3) contact form: count a lead only after the server accepted it */
  var pending=null;
  var OK=/thank you|thanks for|message (has been )?sent|successfully|شكرا|تم الإرسال|تم ارسال/;
  function boxText(f){var b=f&&f.closest?f.closest('section,div'):null;return (b&&b.innerText||'').toLowerCase();}
  function lead(src){
    if(!pending||pending.done) return; pending.done=true;
    send('generate_lead',{lead_source:'contact_form',form_id:pending.id,detect:src});
    pending=null;
  }
  document.addEventListener('submit',function(e){
    var f=e.target; if(!f||f.tagName!=='FORM') return;
    pending={id:(location.pathname.replace(/^\/|\/$/g,'').replace(/[^a-z0-9]+/gi,'_')||'home')+'_form',t:Date.now(),done:false,form:f};
    pending.base=OK.test(boxText(f));
    log('form submit event',pending.id);
    setTimeout(function(){ if(pending&&Date.now()-pending.t>=25000) pending=null; },25500);
  },true);
  var SKIP=/google|doubleclick|googletagmanager|facebook|tidio|onesignal|sentry|hotjar|clarity|bing|analytics|collect/i;
  var _fetch=window.fetch;
  if(_fetch) window.fetch=function(){
    var a=arguments, p=_fetch.apply(this,a);
    try{
      if(pending&&Date.now()-pending.t<25000){
        var req=a[0], u=String((req&&req.url)||req), m=String((a[1]&&a[1].method)||(req&&req.method)||'GET').toUpperCase();
        if(m==='POST'&&!SKIP.test(u)){
          p.then(function(r){
            log('POST',u.split('?')[0],r&&r.status);
            if(!r||!r.ok) return;
            r.clone().text().then(function(t){ if(!/"errors"\s*:\s*\[/.test(t)) lead('fetch'); },function(){});
          },function(){});
        }
      }
    }catch(e){}
    return p;
  };
  var X=window.XMLHttpRequest&&XMLHttpRequest.prototype;
  if(X){
    var _o=X.open,_s=X.send;
    X.open=function(m,u){ this.__am={m:String(m).toUpperCase(),u:String(u)}; return _o.apply(this,arguments); };
    X.send=function(){
      var x=this;
      try{
        if(pending&&x.__am&&x.__am.m==='POST'&&!SKIP.test(x.__am.u)&&Date.now()-pending.t<25000){
          x.addEventListener('load',function(){ if(x.status>=200&&x.status<300&&!/"errors"\s*:\s*\[/.test(x.responseText||'')) lead('xhr'); });
        }
      }catch(e){}
      return _s.apply(this,arguments);
    };
  }
  /* 4) fallback: success message appears inside the form area after a submit */
  new MutationObserver(function(){
    if(!pending||pending.done) return;
    if(!pending.base&&Date.now()-pending.t>400&&OK.test(boxText(pending.form))) lead('dom');
  }).observe(document.documentElement,{childList:true,subtree:true,characterData:true});
})();
});
run('about','/about-us',function(){
(function(){

 if(window.__amAbout) return; window.__amAbout=1;

 var B='https://assets.wuiltweb.com/241623/';

 var IMG={f:'101620260713396ad1cea3528fa.webp',y:'101320261430596ace40a3254c6.webp'};

 var MAP='15,3,7,1,1,6,7,11,5,15,6,2,6,3,18|11,3,1,1,1,5,4,8,6,29,7,1,29|08,4,13,4,28,7,3,29|09,4,15,1,28,8,2,2,2,25|08,9,34,1,6,1,2,3,4,28|12,7,9,33,2,6,1,1,3,2,30|16,2,12,29,1,1,2,6,1,6,30|16,2,13,28,5,3,39|17,1,14,29,4,1,40|115,1,1,3,1,33,42|113,1,2,3,4,28,45|119,34,19,1,2,1,20|115,1,1,36,8,2,8,3,1,1,20|113,36,7,4,2,2,7,7,18|112,37,6,7,2,2,5,2,3,2,18|110,39,5,5,1,3,1,2,2,2,26|19,40,5,7,3,3,1,2,26|110,40,1,3,6,11,1,1,1,1,21|19,41,10,13,1,1,21|17,42,12,14,21|16,42,16,2,5,1,1,1,22|12,3,1,42,34,2,12|05,2,39,28,1,8,2,11|06,1,39,28,2,8,4,8|08,1,36,30,1,8,2,2,6,2|05,2,38,30,2,12,6,1|01,2,5,2,34,32,1,12,6,1|01,2,8,2,32,31,2,10,8|12,43,32,2,8,9|15,39,33,2,6,11|15,39,39,13|03,2,39,36,16|04,1,5,4,3,1,27,35,1,3,12|05,1,1,1,1,9,28,38,12|08,12,27,36,13|09,14,25,6,3,26,13|09,15,35,23,14|08,16,36,21,15|07,18,35,20,16|06,21,32,20,17|07,23,30,18,18|06,26,29,16,19|06,28,27,16,19|07,27,28,15,19|08,25,29,16,18|08,24,30,16,18|09,23,30,16,5,1,12|09,22,30,17,4,2,12|011,20,30,17,2,3,13|013,18,30,15,4,3,13|013,18,31,13,5,3,13|013,17,32,13,5,3,13|013,15,35,12,5,2,14|013,13,37,11,6,2,14|012,14,37,10,23';

 var CY='#6EC1FF',OR='#F2862E';

 function ic(d,s){return '<svg viewBox="0 0 24 24" width="'+(s||22)+'" height="'+(s||22)+'" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+d+'</svg>'}

 var PIN='<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.6"/>';

 var ARW='<path d="M5 12h14M13 6l6 6-6 6"/>';

 var css='.ab{font-family:Inter,Poppins,Arial,sans-serif;color:#1D2939;line-height:1.55}.ab *{box-sizing:border-box}.ab-w{max-width:1200px;margin:0 auto;padding:0 20px}.ab h1,.ab h2,.ab h3{font-family:Montserrat,Inter,sans-serif;margin:0;line-height:1.12}'+

 '.ab-k{font-size:12px;letter-spacing:.18em;color:#F2862E;font-weight:700;margin-bottom:12px}.ab h2{font-size:38px;color:#0F2B4F;font-weight:800;max-width:760px}.ab-lead{font-size:17.5px;color:#475467;max-width:680px;margin:14px 0 0}'+

 '.ab-r{opacity:0;transform:translateY(22px);transition:opacity .7s ease,transform .7s ease}.ab-r.in{opacity:1;transform:none}'+

 '.ab-b{display:inline-flex;align-items:center;gap:8px;text-decoration:none;font-weight:700;border-radius:999px;padding:15px 30px;font-size:15.5px;transition:all .25s;margin:0 12px 12px 0}.ab-b.o{background:#F2862E;color:#fff;box-shadow:0 10px 26px rgba(242,134,46,.35)}.ab-b.o:hover{transform:translateY(-3px)}.ab-b.g{border:2px solid rgba(255,255,255,.5);color:#fff}.ab-b.g:hover{background:#fff;color:#0F2B4F}.ab-b.n{background:#0F2B4F;color:#fff}.ab-b.n:hover{background:#F2862E}'+

 '.ab-hero{position:relative;background:linear-gradient(135deg,#0A1F3A,#0F2B4F 60%,#143a66);color:#fff;overflow:hidden}.ab-hero:before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.09) 1.2px,transparent 1.4px);background-size:26px 26px;-webkit-mask-image:linear-gradient(90deg,#000,transparent 75%);mask-image:linear-gradient(90deg,#000,transparent 75%)}.ab-hero:after{content:"";position:absolute;right:-160px;top:-160px;width:560px;height:560px;border-radius:50%;background:radial-gradient(circle,rgba(242,134,46,.28),transparent 68%)}'+

 '.ab-hg{position:relative;z-index:1;display:grid;grid-template-columns:1.15fr 1fr;gap:56px;align-items:center;padding-top:150px;padding-bottom:56px}.ab-pill{display:inline-block;border:1px solid rgba(255,255,255,.3);border-radius:999px;padding:7px 16px;font-size:12px;letter-spacing:.16em;font-weight:700;color:#F2862E;margin-bottom:22px}.ab-hero h1{font-size:54px;font-weight:800;color:#fff}.ab-hero h1 span{color:#F2862E}.ab-hero p.s{font-size:18px;color:#C9D6E3;margin:22px 0 30px;max-width:580px}'+

 '.ab-fr{position:relative}.ab-ph{height:470px;border-radius:26px;background-size:cover;background-position:center 18%;box-shadow:0 30px 70px rgba(0,0,0,.45);border:1px solid rgba(255,255,255,.18)}.ab-chip{position:absolute;left:-22px;bottom:26px;background:rgba(10,31,58,.82);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.22);border-radius:16px;padding:14px 18px;max-width:300px;font-size:14px;font-weight:600;line-height:1.4}.ab-chip i{display:block;font-style:normal;font-size:11px;letter-spacing:.14em;color:#F2862E;margin-bottom:4px}'+

 '.ab-st{position:relative;z-index:1;display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid rgba(255,255,255,.14);background:rgba(10,31,58,.5)}.ab-st div{padding:26px 20px;border-right:1px solid rgba(255,255,255,.1);text-align:center}.ab-st div:last-child{border:0}.ab-st b{display:block;font-family:Montserrat,Inter,sans-serif;font-size:40px;font-weight:800;color:#fff;line-height:1}.ab-st span{font-size:13.5px;color:#C9D6E3;display:block;margin-top:8px}'+

 '.ab-s{padding:96px 0}.ab-s.l{background:#F4F7FA}.ab-s.d{background:linear-gradient(160deg,#0A1F3A,#0F2B4F);color:#fff}.ab-s.d h2{color:#fff}.ab-s.d .ab-lead{color:#C9D6E3}'+

 '.ab-tl{display:grid;grid-template-columns:repeat(5,1fr);gap:20px;position:relative;margin-top:56px}.ab-tl:before{content:"";position:absolute;left:0;right:0;top:9px;height:3px;background:linear-gradient(90deg,#F2862E,#0F2B4F);transform:scaleX(0);transform-origin:left;transition:transform 1.8s ease}.ab-tl.in:before{transform:scaleX(1)}.ab-ti{position:relative;padding-top:38px}.ab-ti:before{content:"";position:absolute;top:0;left:0;width:21px;height:21px;border-radius:50%;background:#fff;border:4px solid #F2862E;box-shadow:0 0 0 6px rgba(242,134,46,.16)}.ab-ti b{display:block;font-family:Montserrat,Inter,sans-serif;font-size:34px;font-weight:800;color:#0F2B4F;line-height:1}.ab-ti h3{font-size:16.5px;color:#0F2B4F;margin:10px 0 8px}.ab-ti p{margin:0;font-size:14.5px;color:#475467}'+

 '.ab-map{position:relative;margin-top:34px;border:1px solid rgba(255,255,255,.12);border-radius:24px;background:rgba(255,255,255,.03);padding:10px}.ab-map svg{width:100%;height:auto;display:block}.ab-dots{stroke:rgba(255,255,255,.2);stroke-width:5;stroke-linecap:round}.ab-arc{fill:none;stroke-width:2.2;stroke-linecap:round;stroke-dasharray:1;stroke-dashoffset:1}.ab-map.in .ab-arc{animation:abd 1.8s ease forwards;animation-delay:calc(var(--i)*.28s)}@keyframes abd{to{stroke-dashoffset:0}}.ab-pn{opacity:0;transition:opacity .6s}.ab-map.in .ab-pn{opacity:1;transition-delay:calc(var(--i)*.28s + 1.2s)}.ab-hub{fill:#F2862E}.ab-pulse{fill:none;stroke:#F2862E;stroke-width:2;transform-box:fill-box;transform-origin:center;animation:abp 2.4s ease-out infinite}@keyframes abp{0%{transform:scale(.6);opacity:.9}100%{transform:scale(3.2);opacity:0}}.ab-lb{font:700 13px Inter,Arial,sans-serif;fill:#fff;paint-order:stroke;stroke:#0A1F3A;stroke-width:4px}'+

 '.ab-lg{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:22px}.ab-lg div{display:flex;gap:12px;align-items:center;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:14px;padding:12px 16px;font-size:14.5px}.ab-lg i{flex:none;width:12px;height:12px;border-radius:50%}.ab-lg b{display:block;font-size:15px}.ab-lg span{color:#C9D6E3;font-size:13px}'+

 '.ab-yd{position:relative;min-height:420px;display:flex;align-items:center;background-size:cover;background-position:center;background-attachment:fixed;color:#fff}.ab-yd:before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(10,31,58,.92),rgba(10,31,58,.55) 55%,rgba(10,31,58,.1))}.ab-yd .ab-w{position:relative;z-index:1}.ab-yd h2{color:#fff;font-size:40px;max-width:560px}.ab-yd p{max-width:520px;color:#E1E9F1;font-size:17px;margin:14px 0 0}'+

 '.ab-fg{display:grid;grid-template-columns:1.25fr 1fr;gap:34px;margin-top:40px;align-items:start}.ab-fc{background:#fff;border:1px solid #DCE4EC;border-radius:22px;padding:8px 30px;box-shadow:0 14px 34px rgba(15,43,79,.07)}.ab-fr2{display:grid;grid-template-columns:170px 1fr;gap:16px;padding:16px 0;border-bottom:1px solid #EEF2F6}.ab-fr2:last-child{border:0}.ab-fr2 span{font-size:12px;letter-spacing:.12em;font-weight:700;color:#667085;text-transform:uppercase;padding-top:3px}.ab-fr2 b{color:#0F2B4F;font-size:15.5px;font-weight:600}'+

 '.ab-of{background:linear-gradient(135deg,#0F2B4F,#0A1F3A);color:#fff;border-radius:22px;padding:28px 30px;margin-bottom:20px;position:relative;overflow:hidden}.ab-of:after{content:"";position:absolute;right:-50px;bottom:-50px;width:170px;height:170px;border-radius:50%;background:radial-gradient(circle,rgba(242,134,46,.3),transparent 70%)}.ab-of .t{display:flex;gap:10px;align-items:center;color:#F2862E;font-size:12px;letter-spacing:.14em;font-weight:700;margin-bottom:10px}.ab-of p{margin:0;font-size:17px;font-weight:600;line-height:1.45;position:relative;z-index:1}.ab-of span{display:block;color:#C9D6E3;font-size:14px;font-weight:400;margin-top:6px}'+

 '@media(prefers-reduced-motion:reduce){.ab-r{opacity:1;transform:none;transition:none}.ab *{animation:none!important;transition:none!important}.ab-arc{stroke-dashoffset:0}.ab-pn{opacity:1}.ab-tl:before{transform:none}.ab-yd{background-attachment:scroll}}'+

 '@media(max-width:1020px){.ab-hg,.ab-fg{grid-template-columns:1fr}.ab-hero h1{font-size:42px}.ab-ph{height:360px}.ab-chip{left:14px}.ab-tl{grid-template-columns:1fr;gap:0;padding-left:34px}.ab-tl:before{left:9px;right:auto;top:0;bottom:0;width:3px;height:auto;transform:scaleY(0);transform-origin:top}.ab-tl.in:before{transform:scaleY(1)}.ab-ti{padding:0 0 30px}.ab-ti:before{left:-34px}.ab-lg{grid-template-columns:1fr 1fr}.ab-yd{background-attachment:scroll}}'+

 '@media(max-width:620px){.ab-hg{padding-top:118px;padding-bottom:40px;gap:34px}.ab-hero h1{font-size:33px}.ab-hero p.s{font-size:16.5px}.ab h2{font-size:27px}.ab-s{padding:60px 0}.ab-st{grid-template-columns:1fr 1fr}.ab-st div:nth-child(2){border-right:0}.ab-st div:nth-child(-n+2){border-bottom:1px solid rgba(255,255,255,.1)}.ab-st b{font-size:32px}.ab-ph{height:300px}.ab-lg{grid-template-columns:1fr}.ab-lb{display:none}.ab-yd{min-height:340px}.ab-yd h2{font-size:27px}.ab-fr2{grid-template-columns:1fr;gap:4px}.ab-fc{padding:6px 20px}}';

 var DEST=[['C&ocirc;te d&#39;Ivoire',-4,5.3,'m','Export destination',10,4],['Italy',12.5,42.5,'m','Export destination',10,-8],['Morocco',-7,32,'m','Export destination',-10,4],['Tunisia',9.5,34,'m','Export destination',10,18],['Qatar',51.2,25.3,'m','Export destination',-4,-14],['Venezuela',-66,8,'m','Export destination',12,4],['Spain',-3.7,40.4,'m','Export destination',10,-8],['Portugal',-8,39.5,'m','Export destination',-10,-8],['Algeria',2.6,28,'m','Export destination',-10,18],['Libya',17,27,'m','Export destination',10,18],['Saudi Arabia',45,24,'m','Export destination',-10,22],['UAE',54.4,24.3,'m','Export destination',12,16]];

 var K=1.7,L0=-92,B1=66,EG=[30,29];

 function xy(lo,la){return [(lo-L0)/K*10,(B1-la)/K*10]}

 function mapSvg(){

  var rows=MAP.split('|'),d='';

  rows.forEach(function(r,j){var v=r.charAt(0)==='1',x=0;r.slice(1).split(',').forEach(function(n){n=+n;if(v){for(var i=0;i<n;i++)d+='M'+((x+i)*10+5)+' '+(j*10+5)+'h0'}x+=n;v=!v})});

  var e=xy(EG[0],EG[1]),arcs='',pins='';

  DEST.forEach(function(t,i){

   var p=xy(t[1],t[2]),mx=(e[0]+p[0])/2,my=(e[1]+p[1])/2,dist=Math.sqrt(Math.pow(e[0]-p[0],2)+Math.pow(e[1]-p[1],2)),cy=my-dist*.3;

   var col=t[3]==='b'?CY:t[3]==='m'?'#F6C98D':OR;

   arcs+='<path class="ab-arc" pathLength="1" style="--i:'+i+'" stroke="'+col+'" d="M'+e[0].toFixed(1)+' '+e[1].toFixed(1)+' Q'+mx.toFixed(1)+' '+cy.toFixed(1)+' '+p[0].toFixed(1)+' '+p[1].toFixed(1)+'"/>';

   pins+='<g class="ab-pn" style="--i:'+i+'"><circle cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="7" fill="'+(t[3]==='b'?OR:t[3]==='m'?'url(#abg)':col)+'" stroke="'+(t[3]==='b'?CY:'#fff')+'" stroke-width="3"/><text class="ab-lb" x="'+(p[0]+t[5]).toFixed(1)+'" y="'+(p[1]+t[6]).toFixed(1)+'"'+(t[5]<0?' text-anchor="end"':'')+'>'+t[0]+'</text></g>';

  });

  var hub='<circle class="ab-pulse" cx="'+e[0].toFixed(1)+'" cy="'+e[1].toFixed(1)+'" r="9"/><circle class="ab-hub" cx="'+e[0].toFixed(1)+'" cy="'+e[1].toFixed(1)+'" r="9" stroke="#fff" stroke-width="3"/><text class="ab-lb" x="'+(e[0]+14).toFixed(1)+'" y="'+(e[1]+22).toFixed(1)+'" style="font-size:15px">EGYPT</text>';

  return '<svg id="ab-svg" viewBox="0 0 960 550" role="img" aria-label="Map of export destinations from Egypt"><defs><linearGradient id="abg" x1="0" y1="0" x2="1" y2="0"><stop offset="50%" stop-color="'+OR+'"/><stop offset="50%" stop-color="'+CY+'"/></linearGradient></defs><path class="ab-dots" d="'+d+'"/>'+arcs+hub+pins+'</svg>';

 }

 function hero(){

  return '<section class="ab-hero"><div class="ab-w ab-hg"><div class="ab-r"><div class="ab-pill">ABOUT AL MANARA</div><h1>Rooted in manufacturing, <span>focused on reliable supply.</span></h1><p class="s">Our family owned a plastics factory producing a wide range of products. That hands-on manufacturing experience is the foundation of Al Manara, founded in 2020 to supply recycled polymers, calcium carbonate and talc from Egypt to manufacturers across Europe, Africa and the Middle East.</p><a class="ab-b o" href="#ab-story">Read our story '+ic(ARW,18)+'</a><a class="ab-b g" href="/contact-us">Talk to our team</a></div>'+

  '<div class="ab-r ab-fr"><div class="ab-ph" role="img" aria-label="Al Manara team member beside a production line control panel" style="background-image:url('+B+IMG.f+')"></div><div class="ab-chip"><i>ON SITE</i>Hands-on with the production lines our materials go into</div></div></div>'+

  '<div class="ab-st"><div><b>1999</b><span>Family manufacturing begins</span></div><div><b>2020</b><span>Al Manara is founded</span></div><div><b data-n="10" data-pre="+">+10</b><span>Export countries</span></div><div><b data-n="2">2</b><span>Business lines, one standard</span></div></div></section>';

 }

 var TL=[['1999','Family manufacturing begins','Our family starts manufacturing plastic products. Years of hands-on production give us the technical experience we bring to every order.'],['2020','Al Manara is founded','A limited liability company registered in Egypt, built on that manufacturing experience and focused on import, export and commercial agencies.'],['2021','Export orders begin','Our order records start: container loads leave Egypt for industrial buyers abroad.'],['2022','New export markets','Our export range grows, with every shipment coordinated from loading in Egypt to the documents your customs office needs.'],['2026','Two brands, one library','Al Manara Plast and Al Manara Mining, with technical data sheets for every calcium carbonate and talc grade, and safety data sheets for calcium carbonate.']];

 function story(){

  return '<section class="ab-s l" id="ab-story"><div class="ab-w"><div class="ab-k">OUR STORY</div><h2>From a family factory to an export company</h2><p class="ab-lead">We understand what a production line needs because our family has run one. That experience guides how we source, pack and ship every order.</p><div class="ab-tl ab-r">'+TL.map(function(t){return '<div class="ab-ti"><b>'+t[0]+'</b><h3>'+t[1]+'</h3><p>'+t[2]+'</p></div>'}).join('')+'</div></div></section>';

 }

 function route(){

  return '<section class="ab-s d"><div class="ab-w"><div class="ab-k">WHERE WE SHIP</div><h2>Materials leaving Egypt for manufacturers abroad</h2><p class="ab-lead">Selected destinations from our shipping records. Every shipment is coordinated by us, from loading in Egypt to the documents your customs office needs.</p><div class="ab-map ab-r" id="ab-map">'+mapSvg()+'</div>'+

  '</div></section>';

 }

 function yard(){

  return '<section class="ab-yd" role="img" aria-label="Calcium carbonate being loaded into export containers" style="background-image:url('+B+IMG.y+')"><div class="ab-w"><div class="ab-r"><div class="ab-k">LOADING DAY</div><h2>Where an order becomes a container</h2><p>Bagged calcium carbonate going into export containers at the plant yard, ready for the port.</p></div></div></section>';

 }

 var FACTS=[['Company','Al Manara for Investment and Commercial Agencies'],['Legal form','Limited liability company, Egypt'],['Established','2020, with family manufacturing roots since 1999'],['Team','11 to 50 people'],['Business lines','Al Manara Plast and Al Manara Mining'],['Export regions','Europe, Africa and the Middle East'],['Safety data sheets','English, French, Spanish and Portuguese'],['Response time','Within one business day']];

 function facts(){

  return '<section class="ab-s l"><div class="ab-w"><div class="ab-k">COMPANY FACTS</div><h2>Know who you are dealing with</h2><div class="ab-fg"><div class="ab-fc ab-r">'+FACTS.map(function(f){return '<div class="ab-fr2"><span>'+f[0]+'</span><b>'+f[1]+'</b></div>'}).join('')+'</div><div class="ab-r"><div class="ab-of"><div class="t">'+ic(PIN,18)+'REGISTERED ADDRESS</div><p>47 Neighborhood 41, Tenth of Ramadan City, Egypt</p></div><div class="ab-of"><div class="t">'+ic(PIN,18)+'HEAD OFFICE</div><p>E9 Sky Degla1, Tenth of Ramadan City, Egypt<span>Meetings by appointment</span></p></div><a class="ab-b n" href="/contact-us">Contact us '+ic(ARW,18)+'</a></div></div></div></section>';

 }

 function counters(w){

  [].slice.call(w.querySelectorAll('[data-n]')).forEach(function(e){

   var go=function(){var to=+e.getAttribute('data-n'),p=e.getAttribute('data-pre')||'',t0=null;function f(t){t0=t0||t;var k=Math.min((t-t0)/1300,1);e.textContent=p+Math.round(to*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)}requestAnimationFrame(f)};

   if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches)return;

   var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){go();io.disconnect()}})},{threshold:.5});io.observe(e);

  });

 }

 function reveal(w){

  var els=[].slice.call(w.querySelectorAll('.ab-r'));

  if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){els.forEach(function(e){e.classList.add('in')});return}

  var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{rootMargin:'0px 0px -8% 0px'});

  els.forEach(function(e){io.observe(e)});

 }

 function fit(){var s=document.getElementById('ab-svg');if(s)s.setAttribute('viewBox',innerWidth<700?'100 100 800 290':'0 0 960 550')}

 function mount(){

  if(document.getElementById('ab-top')) return true;

  var ws=[].slice.call(document.querySelectorAll('.section-preview-wrapper'));

  var T=function(e){return (e.innerText||'').trim()};

  var form=ws.filter(function(e){return /^Looking for a Reliable Material/i.test(T(e))})[0];

  var hide=ws.filter(function(e){return /^(ABOUT US|Who We Are|Connecting Industry|WHAT DO WE DO|How We Create|Quality . Technical|Where We Are Going|From Egypt to Global)/i.test(T(e))});

  if(!form||false) return false;

  hide.forEach(function(e){e.style.display='none'});

  var a=form;while(a.parentElement&&a.parentElement.children.length<2)a=a.parentElement;

  var s=document.createElement('style');s.id='ab-css';s.textContent=css;document.head.appendChild(s);

  var top=document.createElement('div');top.id='ab-top';top.className='ab';top.innerHTML=hero()+story()+route()+yard()+facts();

  a.parentElement.insertBefore(top,a);

  fit();addEventListener('resize',fit);counters(top);reveal(top);

  return true;

 }

 var n=0,iv=setInterval(function(){if(mount()||++n>80)clearInterval(iv)},400);

})();
});
})();
