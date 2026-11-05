/* Al Manara English site extras (public website code). Built from Website_Talc_Phase5 / Website_SEO / Website_Nav_Fix sources. */
try{
(function(){
if(window.__amTalc) return; window.__amTalc=1;
if(location.pathname.replace(/\/+$/,'')!=='/am-mining') return;
var WA='201146006496', BASE='https://assets.wuiltweb.com/241623/', IMG={"AM-TL12":"101620260518296ad1b3a59b1c0.webp","AM-TL15":"101620260518436ad1b3b324488.webp","AM-TL20":"101620260518486ad1b3b8b491c.webp","AM-TL24":"101620260518546ad1b3bebd3c6.webp","AM-TL30":"101620260518586ad1b3c2d8184.webp","AM-TL40":"101620260519076ad1b3cb9d01a.webp","AM-TL50":"101620260519096ad1b3cdca367.webp"};
/* code, D50, D97, bulk, tapped, oil, pH, lead-in */
var G=[['AM-TL12','3 ± 0.3','12 ± 1','0.29','0.80','56','8',12],['AM-TL15','3.8 ± 0.2','15 ± 1','0.31','0.83','51','9',15],['AM-TL20','4.2 ± 0.2','20 ± 1','0.35','0.88','43','9',20],
['AM-TL24','4.8 ± 0.2','24 ± 1','0.39','0.92','40','9',24],['AM-TL30','5.8 ± 0.2','30 ± 1','0.42','0.95','38','9',30],['AM-TL40','8.4 ± 0.2','40 ± 2','0.54','1.05','33','9',40],['AM-TL50','11 ± 0.5','50 ± 2','-','-','29','9',50]];
function wa(t){return 'https://wa.me/'+WA+'?text='+encodeURIComponent(t);}
function el(h){var t=document.createElement('div');t.innerHTML=h;return t.firstElementChild;}
var I_LOCK='M6 11h12v10H6zM9 11V8a3 3 0 0 1 6 0v3', I_DOC='M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6';
function ico(p,s){return '<svg viewBox="0 0 24 24" width="'+s+'" height="'+s+'" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="'+p+'"/></svg>';}
var CSS='\
.amt{--n:#0F2B4F;--s:#3B5B78;--o:#F2862E;--l:#F4F7FA;--b:#DCE4EC;font-family:Inter,Poppins,Arial,sans-serif;color:#1D2939;max-width:1180px;margin:0 auto;padding:56px 20px;box-sizing:border-box;line-height:1.55}\
.amt *{box-sizing:border-box}.amt h2{font-family:Montserrat,Inter,sans-serif;color:var(--n);font-size:32px;line-height:1.2;margin:0 0 10px;font-weight:700}\
.amt h3{font-family:Montserrat,Inter,sans-serif;color:var(--n);font-size:20px;margin:0 0 6px}.amt .k{color:var(--o);font-weight:700;letter-spacing:.14em;font-size:12px;text-transform:uppercase;margin-bottom:8px}\
.amt .lead{color:#475467;max-width:780px;margin:0 0 26px;font-size:16px}.amt-blk{margin-top:48px}\
.amt-facts{display:grid;grid-template-columns:repeat(5,1fr);gap:1px;background:var(--b);border:1px solid var(--b);border-radius:14px;overflow:hidden}\
.amt-facts div{background:#fff;padding:20px 12px;text-align:center}.amt-facts b{display:block;font-family:Montserrat,Inter,sans-serif;font-size:22px;white-space:nowrap;color:var(--n)}.amt-facts span{font-size:12px;color:#667085;text-transform:uppercase;letter-spacing:.06em}\
.amt-tw{border:1px solid var(--b);border-radius:14px;overflow:hidden}.amt table{width:100%;border-collapse:collapse;font-size:14px;background:#fff}\
.amt th{background:var(--n);color:#fff;text-align:left;padding:12px 14px;font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:.05em}\
.amt th small{display:block;text-transform:none;letter-spacing:0;font-weight:500;opacity:.8}.amt td{padding:12px 14px;border-top:1px solid #EEF2F6;vertical-align:middle}.amt td.g{font-weight:700;color:var(--n);white-space:nowrap}\
.amt td.bar i{display:block;height:6px;border-radius:3px;background:var(--o);margin-top:6px;opacity:.85}\
.amt-v{all:unset;cursor:pointer;display:inline-flex;align-items:center;gap:6px;padding:7px 12px;border-radius:8px;background:var(--l);color:var(--n);font-weight:600;font-size:13px;white-space:nowrap}.amt-v:hover,.amt-v:focus-visible{background:var(--o);color:#fff}\
.amt-note{font-size:13px;color:#667085;margin:10px 0 0}\
.amt-two{display:grid;grid-template-columns:1fr 1fr;gap:20px}.amt-card{background:#fff;border:1px solid var(--b);border-radius:14px;padding:22px}\
.amt-kv{width:100%}.amt-kv td{padding:9px 0;border-top:1px solid #EEF2F6;font-size:14px}.amt-kv td:last-child{text-align:right;font-weight:600;color:var(--n)}\
.amt-chips span{display:inline-block;background:var(--l);color:var(--n);border-radius:999px;padding:6px 14px;font-size:13px;margin:0 6px 8px 0}\
.amt-docs{display:grid;grid-template-columns:1.4fr 1fr;gap:20px}.amt-doc{background:linear-gradient(135deg,#0F2B4F,#0A1F3A);color:#fff;border-radius:16px;padding:26px}\
.amt-doc h3{color:#fff}.amt-doc p{color:#C9D6E3;font-size:14px;margin:0 0 16px}.amt-doc .row{display:flex;flex-wrap:wrap;gap:8px}\
.amt-doc .amt-v{background:rgba(255,255,255,.1);color:#fff}.amt-doc .amt-v:hover,.amt-doc .amt-v:focus-visible{background:var(--o)}\
.amt-lock{display:inline-flex;align-items:center;gap:6px;font-size:12px;color:#F9C08C;margin-top:14px}\
.amt-cta{display:block;text-decoration:none;border-radius:16px;padding:26px;background:var(--o);color:#fff}.amt-cta b{display:block;font-size:18px;margin-bottom:6px}.amt-cta span{font-size:14px;opacity:.92}\
.amt-m{position:fixed;inset:0;z-index:2147483000;background:rgba(10,31,58,.78);display:none;align-items:flex-start;justify-content:center;overflow:auto;padding:28px 12px}.amt-m.on{display:flex}\
.amt-m .box{position:relative;width:100%;max-width:860px;background:#fff;border-radius:14px;box-shadow:0 30px 80px rgba(0,0,0,.35);overflow:hidden;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;font-family:Inter,Poppins,Arial,sans-serif}\
.amt-m .bar{display:flex;align-items:center;gap:10px;background:#F4F7FA;padding:10px 14px;border-bottom:1px solid #DCE4EC;font-size:13px;color:#475467;position:sticky;top:0;z-index:3}\
.amt-m .bar b{color:#0F2B4F}.amt-m .bar .x{all:unset;cursor:pointer;margin-left:auto;font-size:22px;line-height:1;color:#0F2B4F;padding:0 6px}\
.amt-m .wm{position:absolute;inset:0;pointer-events:none;z-index:2;background-image:url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27340%27 height=%27200%27%3E%3Ctext x=%2710%27 y=%27120%27 transform=%27rotate(-24 170 100)%27 font-family=%27Arial%27 font-size=%2716%27 fill=%27%230F2B4F%27 fill-opacity=%270.07%27%3EVIEW ONLY · manaragrp.com%3C/text%3E%3C/svg%3E")}\
.amt-m .pg{position:relative;z-index:1}.amt-m .im{width:100%;aspect-ratio:1075/1521;background-size:100% auto;background-repeat:no-repeat;background-color:#F4F7FA;-webkit-user-drag:none;display:flex;align-items:center;justify-content:center;text-align:center;color:#667085;font-size:14px;padding:20px}\
.amt-m .im.ok{color:transparent}.amt-m .im button{all:unset;cursor:pointer;margin-top:10px;background:#F2862E;color:#fff;border-radius:8px;padding:9px 16px;font-weight:600}\
.amt-m .act{display:flex;flex-wrap:wrap;gap:10px;padding:16px 24px 0}.amt-m .act a{text-decoration:none;background:#F2862E;color:#fff;border-radius:8px;padding:10px 16px;font-weight:600;font-size:14px}.amt-m .act a.alt{background:#F4F7FA;color:#0F2B4F}\
.amt-m .ft{margin:16px 24px 18px;padding-top:12px;border-top:1px solid #DCE4EC;font-size:12px;color:#667085}\
.amt-sr{position:absolute!important;width:1px!important;height:1px!important;overflow:hidden!important;clip:rect(0 0 0 0)!important;white-space:nowrap!important}\
@media print{.amt-m{display:none!important}}\
@media (max-width:900px){.amt-facts{grid-template-columns:repeat(2,1fr)}.amt-facts div:last-child{grid-column:span 2}.amt-two,.amt-docs{grid-template-columns:1fr}}\
@media (max-width:720px){.amt{padding:36px 16px}.amt h2{font-size:25px}\
.amt-tw table,.amt-tw thead,.amt-tw tbody,.amt-tw tr,.amt-tw td{display:block;width:100%}.amt-tw thead{display:none}.amt-tw tr{border-top:1px solid #EEF2F6;padding:10px 14px;display:grid;grid-template-columns:1fr 1fr;gap:4px 12px}\
.amt-tw td{border:0;padding:2px 0;font-size:13px}.amt-tw td:before{content:attr(data-l);display:block;font-size:11px;color:#98A2B3}\
.amt-tw td.g{grid-column:1/-1;font-size:16px}.amt-tw td.g:before,.amt-tw td.v:before{display:none}.amt-tw td.v{grid-column:1/-1}.amt-m .act{padding:14px 16px 0}.amt-m .ft{margin:14px 16px 16px}}';
function kv(rows){return '<table class="amt-kv">'+rows.map(function(r){return '<tr><td>'+r[0]+'</td><td>'+r[1]+'</td></tr>';}).join('')+'</table>';}
function section(){
var rows=G.map(function(g){
return '<tr><td class="g" data-l="Grade">'+g[0]+'</td><td data-l="Median D50 (µm)">'+g[1]+'</td><td class="bar" data-l="Top cut D97 (µm)">'+g[2]+'<i style="width:'+Math.round(g[7]/50*100)+'%"></i></td>'+
'<td data-l="Oil absorption (g/100 g)">'+g[5]+'</td><td data-l="Bulk density (g/cm³)">'+(g[3]==='-'?'—':g[3])+'</td><td data-l="pH (ISO 787/9)">'+g[6]+'</td>'+
'<td class="v"><button class="amt-v" type="button" data-tds="'+g[0]+'">'+ico(I_DOC,15)+' View TDS</button></td></tr>';}).join('');
var chips=G.map(function(g){return '<button class="amt-v" type="button" data-tds="'+g[0]+'">'+ico(I_DOC,14)+' '+g[0]+'</button>';}).join('');
return '<div class="amt" id="talc-technical-center"><div class="k">Talc powder · Technical center</div><h2>Natural talc powder, seven grades</h2>'+
'<p class="lead">Natural hydrated magnesium silicate with a median size (D50) from 3 to 11 µm. Low in iron and alumina, with consistent whiteness and a smooth lamellar structure for functional filler and reinforcing use. Choose the grade by top cut and open its data sheet in one click.</p>'+
'<div class="amt-facts"><div><b>7</b><span>Grades</span></div><div><b>3–11 µm</b><span>Median D50</span></div><div><b>12–50 µm</b><span>Top cut D97</span></div><div><b>L* 94</b><span>Lightness</span></div><div><b>TDS</b><span>For every grade</span></div></div>'+
'<div class="amt-blk"><div class="k">Grades</div><h3>Technical data by grade</h3><div class="amt-tw"><table><thead><tr><th>Grade</th><th>Median D50<small>(µm)</small></th><th>Top cut D97<small>(µm)</small></th><th>Oil absorption<small>(g/100 g)</small></th><th>Bulk density<small>(g/cm³)</small></th><th>pH</th><th></th></tr></thead><tbody>'+rows+'</tbody></table></div>'+
'<p class="amt-note">Reading the code: AM · TL · top cut D97 in µm, e.g. AM-TL20 = Al Manara talc, top cut about 20 µm. Particle size by sedimentation (Sedigraph III). Typical values, not a specification.</p></div>'+
'<div class="amt-blk amt-two"><div class="amt-card"><h3>Typical chemical analysis</h3>'+kv([['Chemical formula','Mg₃Si₄O₁₀(OH)₂'],['SiO₂','60 – 62 %'],['MgO','31 – 33 %'],['CaO','0.14 – 0.3 %'],['Al₂O₃','0.3 – 0.5 %'],['Fe₂O₃','0.1 – 0.2 %'],['MnO · P₂O₅','0.01 % each'],['Na₂O · K₂O · TiO₂','< 0.01 % each']])+'</div>'+
'<div class="amt-card"><h3>Typical physical properties</h3>'+kv([['Appearance','White fine powder'],['Density (ISO 787/10)','2.7 g/cm³'],['Mohs hardness','1'],['Moisture','≤ 0.2 %'],['Whiteness Ry','86 ± 1'],['Lightness L*','94 ± 1'],['Packing','25 kg bags · jumbo bags'],['Shelf life','12 months']])+
'<p class="amt-note">Same for all grades.</p></div></div>'+
'<div class="amt-blk amt-docs" id="talc-documents"><div class="amt-doc"><h3>Talc technical data sheets</h3><p>One sheet per grade: particle size distribution, physical and chemical data, applications, packing and storage.</p><div class="row">'+chips+'</div><div class="amt-lock">'+ico(I_LOCK,14)+' View-only · protected</div></div>'+
'<a class="amt-cta" target="_blank" rel="noopener" href="'+wa('Hello Al Manara, I would like a quotation for talc powder.\nGrade: \nQuantity: \nDestination port: \nPacking: ')+'"><b>Request a talc quotation</b><span>Tell us the grade, quantity and destination port on WhatsApp.</span></a></div></div>';
}
/* ---------- protected viewer ---------- */
var M, tok=0;
function load(code,done,fail){var u=BASE+IMG[code],n=0;(function go(){var i=new Image();i.onload=function(){done(u);};i.onerror=function(){if(++n<3)setTimeout(go,600*n);else fail();};i.src=u+(n?'?r='+n:'');})();}
function show(code){
var t=++tok, box=M.querySelector('.im');
box.className='im'; box.style.backgroundImage='none'; box.textContent='Loading data sheet…';
load(code,function(u){if(t!==tok)return; box.style.backgroundImage='url('+u+')'; box.className='im ok'; box.textContent='';},
function(){if(t!==tok)return; box.innerHTML='Could not load the data sheet.<br>'; var b=document.createElement('button');b.type='button';b.textContent='Try again';b.onclick=function(){show(code);};box.appendChild(b);});
}
function block(e){e.preventDefault();return false;}
function open(code){
if(!M){M=el('<div class="amt-m" role="dialog" aria-modal="true"><div class="box"><div class="bar">'+ico(I_LOCK,15)+'<b class="t"></b><span>· View-only</span><button class="x" aria-label="Close" type="button">×</button></div><div class="wm"></div><div class="pg"><div class="im" role="img"></div>'+
'<div class="act"></div><div class="ft">View-only copy · Typical values, not a specification. The official TDS is sent with each quotation.</div></div></div></div>');
document.body.appendChild(M); M.addEventListener('click',function(e){if(e.target===M||e.target.classList.contains('x'))close();});
['contextmenu','dragstart','selectstart','copy','cut'].forEach(function(ev){M.addEventListener(ev,block);});}
M.querySelector('.t').textContent='TDS · '+code; M.querySelector('.im').setAttribute('aria-label','Technical data sheet '+code);
M.querySelector('.act').innerHTML='<a href="'+wa('Hello Al Manara, I would like a quotation for talc grade '+code+'.\nQuantity: \nDestination port: \nPacking: ')+'" target="_blank" rel="noopener">Request a quotation for '+code+'</a><a class="alt" href="'+wa('Hello Al Manara technical support, I have a question about talc grade '+code+'.')+'" target="_blank" rel="noopener">Ask technical support</a>';
M.classList.add('on'); M.scrollTop=0; document.documentElement.style.overflow='hidden'; show(code);
try{(window.dataLayer=window.dataLayer||[]).push({event:'talc_tds_view',grade:code});}catch(e){}
}
function close(){if(M){M.classList.remove('on');tok++;M.querySelector('.im').style.backgroundImage='none';document.documentElement.style.overflow='';}}
document.addEventListener('keydown',function(e){if(!M||!M.classList.contains('on'))return;var k=(e.key||'').toLowerCase();
if(k==='escape'){close();return;} if((e.ctrlKey||e.metaKey)&&['s','p','c','u','a','x'].indexOf(k)>=0){e.preventDefault();e.stopPropagation();}},true);
function patchCard(){
var h=[].slice.call(document.querySelectorAll('h3')).filter(function(x){return /^Talc powder$/.test((x.textContent||'').trim());})[0]; if(!h||h.getAttribute('data-amt')) return;
var c=h.parentElement; h.setAttribute('data-amt','1');
var p=c.querySelector('p'); if(p) p.textContent='Natural talc powder, seven grades with D50 from 3 to 11 µm and top cut D97 from 12 to 50 µm: low in iron, consistent whiteness, smooth lamellar structure. Technical data sheet available for every grade.';
var root=c.parentElement; [].slice.call(root.querySelectorAll('span,li,div')).forEach(function(x){if(!x.children.length&&(x.textContent||'').trim()==='Rubber') x.textContent='Paper';});
var a=root.querySelector('a[data-am-wa]'); if(a){a.textContent='View talc data sheets'; a.removeAttribute('target'); a.setAttribute('href','#talc-technical-center'); a.removeAttribute('data-am-wa');
a.addEventListener('click',function(e){e.preventDefault();var s=document.getElementById('talc-technical-center'); if(s) s.scrollIntoView({behavior:'smooth',block:'start'});});}
}
function ld(){
var s=document.createElement('script');s.type='application/ld+json';s.setAttribute('data-amt','1');
s.textContent=JSON.stringify({'@context':'https://schema.org','@type':'ProductGroup','name':'Natural talc powder','brand':{'@type':'Brand','name':'Al Manara Mining'},
'description':'Natural talc (hydrated magnesium silicate) powder, median size D50 3-11 µm, top cut D97 12-50 µm, exported from Egypt.',
'hasVariant':G.map(function(g){return {'@type':'Product','name':g[0]+' talc powder','sku':g[0],'additionalProperty':[{'@type':'PropertyValue','name':'D50','value':g[1]+' µm'},{'@type':'PropertyValue','name':'Top cut D97','value':g[2]+' µm'}]};})});
document.head.appendChild(s);
}
function mount(){
var host=[].slice.call(document.querySelectorAll('[id^="Row:"]')).filter(function(r){return /TALC POWDER PRODUCTS/.test(r.textContent||'');}).pop();
if(!host&&!document.getElementById('talc-technical-center')) return false;
if(!document.getElementById('amt-css')){var st=document.createElement('style');st.id='amt-css';st.textContent=CSS;document.head.appendChild(st);}
if(!document.getElementById('talc-technical-center')){var s=el(section()); host.parentNode.insertBefore(s,host); host.classList.add('amt-sr');
s.addEventListener('click',function(e){var t=e.target.closest('[data-tds]'); if(t) open(t.getAttribute('data-tds'));});
var pre=function(e){var t=e.target.closest&&e.target.closest('[data-tds]'); if(t&&IMG[t.getAttribute('data-tds')]){(new Image()).src=BASE+IMG[t.getAttribute('data-tds')];}};
s.addEventListener('pointerover',pre); s.addEventListener('touchstart',pre,{passive:true}); ld();}
patchCard(); return true;
}
function start(){ mount(); var n=0, iv=setInterval(function(){ mount(); if(++n>40) clearInterval(iv); },500); }
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start); else start();
})();
(function(){
if(window.__amApps) return; window.__amApps=1;
if(location.pathname.replace(/\/+$/,'')!=='/am-mining') return;
var A=function(x){return [].slice.call(x);};
function R(i){var x=Math.sin(i*127.1+311.7)*43758.5453;return x-Math.floor(x);}
/* key, title, text, CaCO3 keywords, talc?, bg1, bg2 */
var APPS=[
['film','Plastic films & sheets','Stearic-coated fine grades disperse evenly in PE and PP and keep film and sheet surfaces smooth.',['Plastic Films','Plastic Sheets'],0,'#0F2B4F','#2F5E8C'],
['mb','Filler masterbatch','Hydrophobic fine grades for CaCO₃ filler masterbatch and compounding.',['Masterbatch'],0,'#0F2B4F','#3B5B78'],
['pvc','PVC pipes & profiles','Coated grades support stiffness, surface finish and dimensional stability in rigid PVC.',['PVC Pipes','PVC Profiles'],0,'#14396B','#0A1F3A'],
['cable','Cables & wires','Fine coated CaCO₃ for PVC cable insulation and sheathing compounds. Talc is also listed for cables.',['Cables'],1,'#0A1F3A','#1F4E79'],
['plast','Injection, molding & compounds','Coated and fine uncoated CaCO₃ as a functional filler in molded parts and plastic compounds. Talc is listed for plastics.',['Injection Molding','Plastic Molding','Plastics'],1,'#1B3A5C','#0F2B4F'],
['paint','Paints & coatings','Uncoated GCC as an extender for whiteness, opacity support and cost control. Talc is listed for paints and coatings.',['Paints','Coatings','Paints & Adhesives'],1,'#2F5E8C','#0F2B4F'],
['adh','Adhesives, sealants & construction','Rheology control in adhesives and sealants, plus wall putties, tile adhesives, plasters and dry-mix products.',['Adhesives','Paints & Adhesives','Construction Chemicals','Wall Putties'],0,'#3B5B78','#0F2B4F'],
['memb','Waterproofing membranes','Mineral filler for waterproofing membranes and roofing compounds.',['Waterproofing Membranes'],0,'#0F2B4F','#1F6F78'],
['paper','Paper','High-whiteness mineral filler for paper filling. Talc is listed for paper.',['Paper'],1,'#1F4E79','#0F2B4F'],
['rubber','Rubber','Filler for technical rubber goods and compounds.',['Rubber'],0,'#0A1F3A','#2B3F55'],
['cer','Ceramics','Natural talc is listed for ceramics, in seven grades from 3 to 11 µm. Selected uncoated CaCO₃ grades are listed for glazes.',['Glaze'],1,'#5B3A1E','#B5651D'],
['fert','Fertilizers','Natural talc listed for fertilizer applications. Ask technical support for the right grade.',[],1,'#0F4C4F','#1F6F78']
];
var O='#F2862E', W='#fff', S='#9DB4C9';
function pel(n,fn){var o='';for(var i=0;i<n;i++)o+=fn(i);return o;}
var ART={
film:function(){return '<path d="M70 118C112 56 160 150 205 92S270 70 330 58V102C280 108 250 132 205 142S112 172 70 150Z" fill="#fff" fill-opacity=".88"/><path d="M96 112C130 76 165 128 205 100S275 84 330 74" fill="none" stroke="#9DB4C9" stroke-width="2" stroke-opacity=".7"/><path d="M96 130C130 98 165 148 205 120S275 104 330 92" fill="none" stroke="#9DB4C9" stroke-width="1.5" stroke-opacity=".5"/><circle cx="66" cy="134" r="38" fill="#fff"/><circle cx="66" cy="134" r="28" fill="none" stroke="#9DB4C9" stroke-width="2"/><circle cx="66" cy="134" r="19" fill="none" stroke="#9DB4C9" stroke-width="2"/><circle cx="66" cy="134" r="9" fill="'+O+'"/>';},
mb:function(){return pel(80,function(i){var x=50+R(i)*220,top=165-86*Math.exp(-Math.pow((x-160)/80,2)),y=top+R(i+99)*(165-top);return '<ellipse cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" rx="7" ry="4.6" transform="rotate('+Math.round(R(i+7)*180)+' '+x.toFixed(1)+' '+y.toFixed(1)+')" fill="'+[W,O,S][i%3]+'"/>';})+pel(7,function(i){return '<ellipse cx="'+(80+i*30)+'" cy="'+(24+R(i+40)*20)+'" rx="6" ry="4" fill="'+[W,O][i%2]+'" fill-opacity=".8"/>';});},
pvc:function(){var c=function(x,y,h){return '<circle cx="'+x+'" cy="'+y+'" r="24" fill="'+(h?O:'#E9EEF4')+'"/><circle cx="'+x+'" cy="'+y+'" r="15" fill="#0A1F3A" fill-opacity=".85"/><path d="M'+(x-17)+' '+(y-8)+'A19 19 0 0 1 '+(x-4)+' '+(y-19)+'" stroke="#fff" stroke-opacity=".7" stroke-width="2" fill="none"/>';},o='';[82,134,186,238].forEach(function(x){o+=c(x,40)+c(x,140);});[108,160,212,264].forEach(function(x){o+=c(x,90,x===160);});return o;},
cable:function(){var p=function(y,w,c,i){return '<path d="M-10 '+(y)+'C60 '+(y-40)+' 110 '+(y+50)+' 180 '+(y+10)+'S280 '+(y-30)+' 340 '+(y+20)+'" fill="none" stroke="'+c+'" stroke-width="'+w+'" stroke-linecap="round"/><path d="M-10 '+y+'C60 '+(y-40)+' 110 '+(y+50)+' 180 '+(y+10)+'S280 '+(y-30)+' 340 '+(y+20)+'" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="'+(w-9)+'" stroke-linecap="round" transform="translate(0,-2)"/>';};return p(50,15,O)+p(85,15,S)+p(120,15,W)+'<circle cx="262" cy="128" r="32" fill="#fff"/><circle cx="262" cy="128" r="26" fill="#0A1F3A" fill-opacity=".8"/>'+pel(7,function(i){var a=i/7*6.283;return '<circle cx="'+(262+Math.cos(a)*14).toFixed(1)+'" cy="'+(128+Math.sin(a)*14).toFixed(1)+'" r="5.5" fill="#F2A65A"/>';})+'<circle cx="262" cy="128" r="6" fill="#F2A65A"/>';},
plast:function(){var g='',n=10;for(var i=0;i<n*2;i++){var a=i/(n*2)*6.283,r=(i%2?40:51);var a2=(i+.5)/(n*2)*6.283;g+=(i?'L':'M')+(110+Math.cos(a)*r).toFixed(1)+' '+(88+Math.sin(a)*r).toFixed(1);}return '<path d="'+g+'Z" fill="#fff"/><circle cx="110" cy="88" r="16" fill="#0F2B4F"/><circle cx="110" cy="88" r="28" fill="none" stroke="#9DB4C9" stroke-width="3"/><circle cx="228" cy="104" r="40" fill="'+O+'"/><circle cx="228" cy="104" r="31" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="3"/>'+pel(12,function(i){var a=i/12*6.283;return '<rect x="'+(228+Math.cos(a)*35-1.5).toFixed(1)+'" y="'+(104+Math.sin(a)*35-4).toFixed(1)+'" width="3" height="8" rx="1" fill="#fff" fill-opacity=".8" transform="rotate('+Math.round(a*57.3+90)+' '+(228+Math.cos(a)*35).toFixed(1)+' '+(104+Math.sin(a)*35).toFixed(1)+')"/>';})+'<rect x="196" y="38" width="64" height="12" rx="6" fill="#fff" fill-opacity=".85"/>';},
paint:function(){return '<rect x="24" y="112" width="214" height="38" rx="19" fill="#fff" transform="rotate(-6 130 130)"/><rect x="24" y="112" width="120" height="38" rx="19" fill="'+O+'" transform="rotate(-6 130 130)" fill-opacity=".9"/><rect x="132" y="30" width="116" height="34" rx="9" fill="'+O+'"/><rect x="132" y="30" width="116" height="10" rx="5" fill="#fff" fill-opacity=".3"/><path d="M190 64v20h-34v26" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/><rect x="146" y="106" width="18" height="30" rx="4" fill="#fff"/>'+pel(3,function(i){return '<rect x="'+(262+i*14)+'" y="'+(46+i*6)+'" width="36" height="86" rx="5" fill="'+[W,S,O][i]+'" transform="rotate('+(-8+i*7)+' '+(280+i*14)+' 90)"/>';});},
adh:function(){var o='';for(var r=0;r<2;r++)for(var c=0;c<4;c++)if(!(r==1&&c==3))o+='<rect x="'+(24+c*72)+'" y="'+(24+r*70)+'" width="66" height="64" rx="5" fill="'+((r+c)%2?'#E9EEF4':W)+'" fill-opacity=".92"/>';return o+pel(7,function(i){return '<rect x="'+(244+(i%2)*0)+'" y="'+(98+i*9)+'" width="52" height="3" rx="1.5" fill="'+O+'"/>';})+'<path d="M200 150L262 120L276 134Z" fill="#9DB4C9"/><rect x="262" y="40" width="9" height="82" rx="4" fill="#fff" transform="rotate(34 266 80)"/>';},
memb:function(){return '<g transform="skewX(-28) translate(70,0)"><rect x="40" y="84" width="200" height="14" rx="3" fill="#fff"/><rect x="40" y="100" width="200" height="14" rx="3" fill="#9DB4C9"/><rect x="40" y="116" width="200" height="14" rx="3" fill="#0A1F3A" fill-opacity=".8"/><rect x="40" y="132" width="200" height="10" rx="3" fill="'+O+'"/></g>'+pel(4,function(i){var x=80+i*58;return '<path d="M'+x+' '+(18+(i%2)*10)+'c8 12 11 18 0 24c-11-6-8-12 0-24z" fill="#fff" fill-opacity=".9"/>';})+'<path d="M40 74Q160 28 280 74" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="2" stroke-dasharray="4 5"/>';},
paper:function(){var o='';for(var i=0;i<4;i++)o+='<rect x="'+(96+i*9)+'" y="'+(30+i*7)+'" width="128" height="104" rx="5" fill="#fff" fill-opacity="'+(.45+i*.15)+'"/>';return o+'<rect x="123" y="50" width="48" height="8" rx="3" fill="'+O+'"/>'+pel(4,function(i){return '<rect x="123" y="'+(70+i*13)+'" width="'+(96-i*10)+'" height="4" rx="2" fill="#9DB4C9"/>';})+'<path d="M232 128l-26 0 26-26z" fill="#9DB4C9"/><circle cx="54" cy="128" r="22" fill="#fff"/><circle cx="54" cy="128" r="9" fill="'+O+'"/>';},
rubber:function(){return '<circle cx="124" cy="88" r="66" fill="#141C28"/>'+pel(26,function(i){var a=i/26*6.283,x=124+Math.cos(a)*66,y=88+Math.sin(a)*66;return '<rect x="'+(x-4).toFixed(1)+'" y="'+(y-6).toFixed(1)+'" width="8" height="12" rx="2" fill="#2B3F55" transform="rotate('+Math.round(a*57.3+90)+' '+x.toFixed(1)+' '+y.toFixed(1)+')"/>';})+'<circle cx="124" cy="88" r="42" fill="#9DB4C9"/><circle cx="124" cy="88" r="34" fill="#fff" fill-opacity=".85"/>'+pel(5,function(i){var a=i/5*6.283;return '<line x1="124" y1="88" x2="'+(124+Math.cos(a)*34).toFixed(1)+'" y2="'+(88+Math.sin(a)*34).toFixed(1)+'" stroke="#9DB4C9" stroke-width="5"/>';})+'<circle cx="124" cy="88" r="11" fill="'+O+'"/><circle cx="252" cy="104" r="30" fill="none" stroke="'+O+'" stroke-width="12"/><circle cx="252" cy="104" r="30" fill="none" stroke="#fff" stroke-opacity=".3" stroke-width="3" transform="translate(-3,-3)"/>';},
cer:function(){var o='';[['#F6E9D4',0,0],[S,52,0],[O,0,52],['#fff',52,52]].forEach(function(t){o+='<rect x="'+(196+t[1])+'" y="'+(34+t[2])+'" width="48" height="48" rx="3" fill="'+t[0]+'"/>';});return '<path d="M104 24h34c0 18-8 22 8 46c22 30 8 78-25 78s-47-48-25-78c16-24 8-28 8-46z" fill="#F6E9D4"/><path d="M96 74q25 12 50 0M92 98q29 14 58 0M96 122q25 12 50 0" fill="none" stroke="'+O+'" stroke-width="4" stroke-linecap="round"/><path d="M114 40c-2 20-14 40-14 70" stroke="#fff" stroke-opacity=".6" stroke-width="5" fill="none" stroke-linecap="round"/><ellipse cx="121" cy="22" rx="20" ry="5" fill="#fff" fill-opacity=".85"/>';},
fert:function(){return '<path d="M160 148V84" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M160 98C132 96 118 78 118 56c26 0 44 14 42 42z" fill="#7ED3B2"/><path d="M160 84C184 84 200 68 202 44c-26 2-44 16-42 40z" fill="#B7EBD3"/>'+pel(46,function(i){var x=50+R(i+3)*220,top=170-30*Math.exp(-Math.pow((x-160)/90,2)),y=top+R(i+55)*(168-top);return '<circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="'+(4+R(i)*3).toFixed(1)+'" fill="'+[W,O,S][i%3]+'"/>';});}
};
function art(a){var k=a[0];return '<svg viewBox="0 0 320 170" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"><defs><linearGradient id="amu-'+k+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="'+a[5]+'"/><stop offset="1" stop-color="'+a[6]+'"/></linearGradient></defs><rect width="320" height="170" fill="url(#amu-'+k+')"/><circle cx="292" cy="-6" r="78" fill="#fff" fill-opacity=".06"/><circle cx="20" cy="180" r="60" fill="#fff" fill-opacity=".05"/>'+ART[k]()+'</svg>';}
var CSS='\
.amu-top{display:flex;flex-wrap:wrap;gap:12px 18px;align-items:center;justify-content:space-between;margin:0 0 20px}.amu-seg{display:flex;gap:6px;background:#F4F7FA;border:1px solid #DCE4EC;border-radius:999px;padding:4px}\
.amu-seg button{all:unset;cursor:pointer;padding:8px 16px;border-radius:999px;font-weight:600;font-size:13px;color:#0F2B4F}.amu-seg button.on{background:#0F2B4F;color:#fff}.amu-seg button:focus-visible{outline:2px solid #F2862E}\
.amu-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}.amu-c{background:#fff;border:1px solid #DCE4EC;border-radius:16px;overflow:hidden;display:flex;flex-direction:column;transition:.25s}.amu-c:hover{border-color:#F2862E;box-shadow:0 12px 30px rgba(15,43,79,.14);transform:translateY(-3px)}\
.amu-c.off{display:none}.amu-c.on{border-color:#F2862E;box-shadow:0 0 0 2px #F2862E}.amu-im{height:128px;overflow:hidden}.amu-im svg{display:block;width:100%;height:100%}\
.amu-in{padding:14px 16px 16px;display:flex;flex-direction:column;flex:1}.amu-in b{display:block;font-family:Montserrat,Inter,sans-serif;color:#0F2B4F;font-size:15px;line-height:1.3;margin-bottom:6px}.amu-in p{margin:0 0 12px;font-size:13px;color:#667085;line-height:1.5;flex:1}\
.amu-p{all:unset;box-sizing:border-box;cursor:pointer;display:block;width:100%;border-radius:9px;padding:7px 10px;margin-top:6px;font-size:12px;font-weight:600;line-height:1.35}.amu-p:focus-visible{outline:2px solid #0F2B4F}\
.amu-p.ca{background:#EEF3F9;color:#0F2B4F}.amu-p.ca:hover{background:#0F2B4F;color:#fff}.amu-p.tl{background:#FFF1E4;color:#8A4308}.amu-p.tl:hover{background:#F2862E;color:#fff}\
.amu-tcbar{display:flex;flex-wrap:wrap;gap:12px 20px;align-items:center;justify-content:space-between;margin-top:56px;margin-bottom:24px}.amu-tcbar h3{margin:0!important}\
.amu-pane .amt{padding:0;max-width:none}\
#amu-tabs,.amu-pane,#caco3-grades,#talc-technical-center,#caco3-documents,#amu-apps{scroll-margin-top:84px}\
body[data-amu="ca"] [data-amp="tl"],body[data-amu="tl"] [data-amp="ca"]{display:none!important}\
.am2-gl .g{display:grid!important;grid-template-columns:repeat(3,1fr)!important;gap:10px 14px!important}.am2-gl .g h5{grid-column:1/-1;margin:8px 0 0;font:700 12px Inter,Poppins,sans-serif;letter-spacing:.16em;text-transform:uppercase}.am2-gl .g h5:first-child{margin-top:0}.am2-gl .g h5.ca{color:#7DB8F0}.am2-gl .g h5.tl{color:#F2862E}.am2-gl .g b{font-size:23px!important;line-height:1.15}.am2-gl .g span{font-size:12px!important}.am2-gl .g .ft{grid-column:1/-1;margin:6px 0 0;font-size:12px;opacity:.75}@media(max-width:520px){.am2-gl .g{gap:8px 8px!important}.am2-gl .g b{font-size:16px!important;white-space:nowrap}.am2-gl .g span{font-size:11px!important}}\
.amu-ord .amu-st{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.amu-ord .amt-card{position:relative}.amu-ord .amt-card span{display:inline-flex;width:28px;height:28px;border-radius:50%;background:#F2862E;color:#fff;font-weight:700;align-items:center;justify-content:center;margin-bottom:10px;font-size:14px}.amu-ord .amt-card b{display:block;color:#0F2B4F;margin-bottom:4px}.amu-ord .amt-card p{margin:0;font-size:13px;color:#667085}@media(max-width:900px){.amu-ord .amu-st{grid-template-columns:repeat(2,1fr)}}@media(max-width:520px){.amu-ord .amu-st{grid-template-columns:1fr}}\
@keyframes amupulse{0%,100%{box-shadow:0 0 0 0 rgba(242,134,46,0)}40%{box-shadow:0 0 0 6px rgba(242,134,46,.45)}}.amu-pulse{animation:amupulse 1.6s ease 1}\
@media (max-width:1000px){.amu-grid{grid-template-columns:repeat(3,1fr)}}@media (max-width:760px){.amu-grid{grid-template-columns:repeat(2,1fr);gap:12px}}\
@media (max-width:520px){.amu-grid{grid-template-columns:1fr;gap:10px}.amu-c{flex-direction:row}.amu-im{width:104px;height:auto;min-height:100%;flex:none}.amu-in{padding:12px}.amu-in p{font-size:12.5px}.amu-seg button{padding:8px 12px}}';
function range(codes){var g={};codes.forEach(function(c){var p=c.slice(3,5);(g[p]=g[p]||[]).push(c);});return Object.keys(g).map(function(p){var a=g[p];return a[0]+(a.length>1?'–'+a[a.length-1].slice(3):'');}).join(' + ');}
function codesFor(kw){return A(document.querySelectorAll('tr[data-code]')).filter(function(r){var t=(r.querySelector('td.ap')||{}).textContent||'';return t.split(', ').some(function(x){return kw.indexOf(x.trim())>=0;});}).map(function(r){return r.getAttribute('data-code');});}
function card(a,codes){
var ca=codes.length?'<button class="amu-p ca" type="button" data-m="ca" data-k="'+a[0]+'">CaCO₃ · '+codes.length+' grade'+(codes.length>1?'s':'')+' · '+range(codes)+' →</button>':'';
var tl=a[4]?'<button class="amu-p tl" type="button" data-m="tl" data-k="'+a[0]+'">Talc · 7 grades · AM-TL12–TL50 →</button>':'';
return '<div class="amu-c" data-k="'+a[0]+'" data-ca="'+(codes.length?1:0)+'" data-tl="'+a[4]+'"><div class="amu-im">'+art(a)+'</div><div class="amu-in"><b>'+a[1]+'</b><p>'+a[2]+'</p>'+ca+tl+'</div></div>';
}
function go(id){var e=document.getElementById(id); if(e) e.scrollIntoView({behavior:'smooth',block:'start'});}
function pickCa(k){
var a=APPS.filter(function(x){return x[0]===k;})[0], codes=codesFor(a[3]), root=document.getElementById('caco3-technical-hub'); if(!root) return;
A(root.querySelectorAll('tr[data-code]')).forEach(function(r){var h=codes.indexOf(r.getAttribute('data-code'))>=0;r.classList.toggle('hit',h);r.classList.toggle('dim',!h);});
var f=root.querySelector('.amh-filter'); if(f){f.querySelector('span').innerHTML='Suggested for <b>'+a[1]+'</b>: '+codes.join(', ');f.classList.add('on');}
if(window.__amTab) window.__amTab('ca');
var t=root.querySelector('.amh-tab[data-tab="'+(codes[0].indexOf('AM-CN')===0?'coated':'uncoated')+'"]'); if(t) t.click();
setTimeout(function(){go('caco3-grades');},40);
}
function pickTl(){if(window.__amTab) window.__amTab('tl'); setTimeout(function(){go('talc-technical-center');},40); var w=document.querySelector('#talc-technical-center .amt-tw'); if(w){w.classList.remove('amu-pulse'); void w.offsetWidth; w.classList.add('amu-pulse');}}
var FAQ_TL=[['Which talc grade should I choose?','The grade number is the top cut D97 in µm: AM-TL12 has a D50 of 3 µm and AM-TL50 a D50 of 11 µm. AM-TL12, AM-TL15 and AM-TL20 are fine, high-brightness grades. Send us your process and target particle size, and our technical support will recommend the grade that fits.'],
['What documents do you provide for talc?','A technical data sheet (TDS) for every talc grade, open in the technical center above. For the safety data sheet and other documents, ask our technical support.'],
['How is talc packed and stored?','25 kg woven PP bags, 25 kg multi-wall paper bags or jumbo bags (FIBC). Shelf life is 12 months from production in the original sealed packing; store dry, away from moisture and contaminants.'],
['Why can I not compare talc and calcium carbonate particle sizes directly?','Talc sizes are measured by sedimentation (Sedigraph III), while our calcium carbonate data uses laser diffraction, so the two sets of values are not directly comparable.']];
function tab(t){
document.body.setAttribute('data-amu',t);
A(document.querySelectorAll('#amu-tabs [data-t]')).forEach(function(b){b.classList.toggle('on',b.getAttribute('data-t')===t);});
}
window.__amTab=tab;
function layout(){
if(document.getElementById('amu-tabs')) return true;
var hub=document.getElementById('caco3-technical-hub'), tc=document.getElementById('talc-technical-center'), ap=document.getElementById('amu-apps'), gr=document.getElementById('caco3-grades'), dc=document.getElementById('caco3-documents');
if(!hub||!tc||!ap||!gr||!dc) return false;
var kids=A(hub.children), facts=hub.querySelector('.amh-facts'), pack=kids[kids.length-1], chem=gr.nextElementSibling;
if(pack===dc||chem===dc||!facts) return false;
kids[0].textContent='Technical center'; var lead=hub.querySelector('.lead'); if(lead) lead.textContent='Fourteen calcium carbonate grades and seven natural talc grades, with typical data from our technical data sheets. Choose your application, then open the data sheet in one click.';
var bar=document.createElement('div'); bar.id='amu-tabs'; bar.className='amh-blk amu-tcbar';
bar.innerHTML='<h3>Grades, data and documents</h3><div class="amu-seg" role="tablist"><button type="button" role="tab" data-t="ca">Calcium carbonate · 14 grades</button><button type="button" role="tab" data-t="tl">Talc powder · 7 grades</button></div>';
var pa=document.createElement('div'), pb=document.createElement('div'); pa.className='amu-pane'; pa.setAttribute('data-amp','ca'); pb.className='amu-pane'; pb.setAttribute('data-amp','tl');
hub.insertBefore(bar,pack); hub.insertBefore(pa,pack); hub.insertBefore(pb,pack);
[facts,gr,chem,dc,pack].forEach(function(x){pa.appendChild(x);}); pb.appendChild(tc); ordering(tc);
A(document.querySelectorAll('.am2-s')).forEach(function(x){if(/HOW WE WORK/.test(x.textContent)&&/limestone/i.test(x.textContent)) x.setAttribute('data-amp','ca');});
bar.addEventListener('click',function(e){var b=e.target.closest('[data-t]'); if(b) tab(b.getAttribute('data-t'));});
tab(location.hash==='#talc-technical-center'?'tl':'ca'); return true;
}
document.addEventListener('click',function(e){
var a=e.target.closest&&e.target.closest('a[href^="#"]'); if(!a) return; var id=a.getAttribute('href').slice(1), el=id&&document.getElementById(id), p=el&&el.closest('.amu-pane');
if(p){tab(p.getAttribute('data-amp')); setTimeout(function(){el.scrollIntoView({behavior:'smooth',block:'start'});},60);}
},true);
function fixCard(){
var c=A(document.querySelectorAll('.am2-c')).filter(function(x){var h=x.querySelector('h3');return h&&/^Talc powder$/.test(h.textContent.trim());})[0]; if(!c) return false;
var a=c.querySelector('a.am2-b'); if(!a) return false; if(a.getAttribute('data-amu')) return true;
a.setAttribute('data-amu','1'); a.removeAttribute('target'); a.removeAttribute('data-am-wa'); a.setAttribute('href','#talc-technical-center'); a.textContent='View talc data sheets'; return true;
}
function fixHero(){
var h=document.querySelector('h1'); if(!h||h.getAttribute('data-amu')) return false; var n=h.firstChild;
if(!n||n.nodeType!==3||!/Calcium carbonate powder/.test(n.textContent)) return false; h.setAttribute('data-amu','1'); n.textContent=n.textContent.replace('Calcium carbonate powder','Calcium carbonate and talc');
var sec=h.closest('section')||h.parentElement.parentElement.parentElement;
A(sec.querySelectorAll('p')).forEach(function(p){if(/Fourteen ground calcium carbonate grades/.test(p.textContent)) p.textContent='Fourteen calcium carbonate grades and seven natural talc grades from Egypt, with a TDS for every grade and an SDS for calcium carbonate.';});
glance(sec);
return true;
}
function glance(sec){
var g=sec.querySelector('.am2-gl .g'); if(!g||g.getAttribute('data-amu')) return;
g.setAttribute('data-amu','1');
function st(b,l){return '<div><b>'+b+'</b><span>'+l+'</span></div>';}
g.innerHTML='<h5 class="ca">Calcium carbonate</h5>'+st('14','Grades · AM-UC, AM-CN')+st('8 - 45 µm','Top cut D98')+st('≥ 99.0 %','CaCO₃ purity')+
'<h5 class="tl">Talc powder</h5>'+st('7','Grades · AM-TL')+st('12 - 50 µm','Top cut D97')+st('3 - 11 µm','Median D50')+
'<p class="ft">TDS for every grade · SDS for calcium carbonate · HS 2836.50 / 2526.20 · Origin Egypt</p>';
}
var ORD=[['Tell us your application','Process, target particle size, quantity and destination.'],['We confirm the grade','Grade and specification agreed with you before loading.'],['Documents prepared','TDS for the grade and the export documents.'],['Packed and shipped','25 kg bags or jumbo bags, loaded in full containers.']];
function ordering(tc){
if(tc.querySelector('.amu-ord')) return;
var d=document.createElement('div'); d.className='amt-blk amu-ord';
d.innerHTML='<div class="k">How to order</div><h3>From grade selection to your port</h3><div class="amu-st">'+ORD.map(function(o,i){return '<div class="amt-card"><span>'+(i+1)+'</span><b>'+o[0]+'</b><p>'+o[1]+'</p></div>';}).join('')+'</div>';
tc.appendChild(d);
}
function viewerGuard(){
document.addEventListener('click',function(e){
var t=e.target.closest&&e.target.closest('#caco3-technical-hub [data-tds]'); if(!t) return;
setTimeout(function(){
var im=document.querySelector('.amh-m.on .amh-img'); if(!im||im.getAttribute('data-amg')) return; im.setAttribute('data-amg','1');
var m=(im.style.backgroundImage||'').match(/url\(["']?([^"')]+)/); if(!m) return; var u=m[1].split('?')[0], n=0;
(function go(){var i=new Image(); i.onload=function(){}; i.onerror=function(){if(++n<4){im.style.backgroundImage='url('+u+'?r='+n+')'; setTimeout(go,700*n);}}; i.src=u+(n?'?r='+n:'');})();
},250);
},true);
}
function faq(){
var root=document.getElementById('caco3-faq'); if(!root) return false; var box=root.querySelector('.amh-faq'); if(!box||box.getAttribute('data-amu')) return !!box; box.setAttribute('data-amu','1');
var h=root.querySelector('h2'); if(h) h.textContent='Common questions'; var k=root.querySelector('.k'); if(k) k.textContent='FAQ';
A(box.querySelectorAll('details')).forEach(function(d){d.setAttribute('data-amp',/specification|quotation/i.test(d.textContent)?'all':'ca');});
var first=box.firstChild;
FAQ_TL.forEach(function(q){var d=document.createElement('details'); d.setAttribute('data-amp','tl'); var s=document.createElement('summary'); s.textContent=q[0]; var p=document.createElement('p'); p.textContent=q[1]; d.appendChild(s); d.appendChild(p); box.insertBefore(d,first);});
A(document.querySelectorAll('script[type="application/ld+json"]')).forEach(function(s){try{var j=JSON.parse(s.textContent),g=j['@graph']||[j],f=g.filter(function(x){return x['@type']==='FAQPage';})[0]; if(f){FAQ_TL.forEach(function(q){f.mainEntity.push({'@type':'Question','name':q[0],'acceptedAnswer':{'@type':'Answer','text':q[1]}});}); s.textContent=JSON.stringify(j);}}catch(e){}});
return true;
}
function mount(){
if(document.getElementById('amu-apps')) return true;
var old=document.getElementById('caco3-applications'); if(!old||!document.querySelector('tr[data-code]')) return false;
var st=document.createElement('style'); st.id='amu-css'; st.textContent=CSS; document.head.appendChild(st);
var n=APPS.filter(function(a){return a[3].length;}).length, nt=APPS.filter(function(a){return a[4];}).length;
var el=document.createElement('div'); el.className='amh-blk'; el.id='amu-apps';
el.innerHTML='<div class="k">Applications</div><h3>Where our calcium carbonate and talc are used</h3><p class="lead">Select an application to see the matching grades. Calcium carbonate grades are highlighted in the tables below; talc data sheets cover all seven grades.</p>'+
'<div class="amu-top"><div class="amu-seg" role="group" aria-label="Filter by product"><button type="button" class="on" data-f="all">All · '+APPS.length+'</button><button type="button" data-f="ca">Calcium carbonate · '+n+'</button><button type="button" data-f="tl">Talc · '+nt+'</button></div></div>'+
'<div class="amu-grid">'+APPS.map(function(a){return card(a,codesFor(a[3]));}).join('')+'</div>';
old.parentNode.insertBefore(el,old); old.style.display='none';
el.addEventListener('click',function(e){
var f=e.target.closest('[data-f]'); if(f){var v=f.getAttribute('data-f'); A(el.querySelectorAll('[data-f]')).forEach(function(b){b.classList.toggle('on',b===f);}); A(el.querySelectorAll('.amu-c')).forEach(function(c){c.classList.toggle('off',v!=='all'&&c.getAttribute('data-'+v)!=='1');}); return;}
var p=e.target.closest('.amu-p'); var c=e.target.closest('.amu-c'); if(!c) return;
var m=p?p.getAttribute('data-m'):(c.getAttribute('data-ca')==='1'?'ca':'tl'); A(el.querySelectorAll('.amu-c')).forEach(function(x){x.classList.toggle('on',x===c);});
if(m==='ca') pickCa(c.getAttribute('data-k')); else pickTl();
});
return true;
}
function step(){var a=mount(); var b=a&&layout(); var c=fixCard(), d=fixHero(), e=faq(); return a&&b&&c&&d&&e;}
viewerGuard();
function start(){ step(); var i=0, iv=setInterval(function(){ if(step()||++i>80) clearInterval(iv); },500); }
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start); else start();
})();
}catch(e){if(window.console)console.warn("AM-EN mining.0",e);}
try{
(function(){
if(window.__amWaq) return; window.__amWaq=1;
var NUM='201146006496', M, ctx={};
var F=[['name','Name *','text','name'],['company','Company','text','organization'],['country','Country','text','country-name'],['phone','Phone / WhatsApp (optional)','tel','tel'],['email','Email (optional)','email','email'],['product','Product / grade','text',''],['qty','Quantity (tons or containers)','text',''],['port','Destination port','text','']];
var CSS='.amq{position:fixed;inset:0;z-index:2147483100;background:rgba(10,31,58,.72);display:none;align-items:flex-start;justify-content:center;overflow:auto;padding:24px 12px;font-family:Inter,Poppins,Arial,sans-serif}.amq.on{display:flex}.amq .b{background:#fff;border-radius:16px;max-width:520px;width:100%;box-shadow:0 30px 80px rgba(0,0,0,.35);overflow:hidden}.amq .h{background:linear-gradient(135deg,#0F2B4F,#0A1F3A);color:#fff;padding:20px 22px;position:relative}.amq .h b{display:block;font-size:18px;margin-bottom:4px}.amq .h span{font-size:13px;color:#C9D6E3}.amq .x{all:unset;position:absolute;top:10px;right:14px;cursor:pointer;font-size:26px;color:#fff}.amq form{padding:18px 22px 22px;display:grid;grid-template-columns:1fr 1fr;gap:12px}.amq label{display:block;font-size:12px;font-weight:600;color:#344054}.amq .f{grid-column:1/-1}.amq input,.amq textarea{width:100%;box-sizing:border-box;margin-top:4px;padding:10px 12px;border:1px solid #D0D5DD;border-radius:8px;font:14px inherit;color:#1D2939}.amq input:focus,.amq textarea:focus{outline:2px solid #F2862E;border-color:#F2862E}.amq .s{grid-column:1/-1;all:unset;box-sizing:border-box;grid-column:1/-1;cursor:pointer;text-align:center;background:#25D366;color:#fff;font-weight:700;border-radius:10px;padding:13px;font-size:15px}.amq .s:hover{background:#1EBE5A}.amq small{grid-column:1/-1;color:#667085;font-size:12px}@media(max-width:520px){.amq form{grid-template-columns:1fr}}@media print{.amq{display:none!important}}';
function esc(s){return String(s).replace(/"/g,'&quot;');}
function build(){
var st=document.createElement('style'); st.textContent=CSS; document.head.appendChild(st);
M=document.createElement('div'); M.className='amq'; M.setAttribute('role','dialog'); M.setAttribute('aria-modal','true');
M.innerHTML='<div class="b"><div class="h"><b>Request a quotation</b><span>Tell us what you need. We reply on WhatsApp within one business day.</span><button class="x" type="button" aria-label="Close">×</button></div><form novalidate>'+
F.map(function(f,i){return '<label'+(i>4?' class="f"':'')+'>'+f[1]+'<input name="'+f[0]+'" type="'+f[2]+'"'+(f[3]?' autocomplete="'+f[3]+'"':'')+'></label>';}).join('')+
'<label class="f">Details (application, specification, timing)<textarea name="notes" rows="3"></textarea></label><button class="s" type="submit">Send on WhatsApp</button><small>Your number is shown to us automatically by WhatsApp. Your details are used only to answer this request.</small></form></div>';
document.body.appendChild(M);
M.addEventListener('click',function(e){if(e.target===M||e.target.classList.contains('x'))close();});
M.querySelector('form').addEventListener('submit',function(e){e.preventDefault();send();});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&M.classList.contains('on'))close();});
}
function close(){if(M)M.classList.remove('on');document.documentElement.style.overflow='';}
function val(n){var e=M.querySelector('[name="'+n+'"]');return e?e.value.trim():'';}
function send(){
var nm=M.querySelector('[name=name]'); if(!val('name')){nm.focus();nm.style.borderColor='#D92D20';return;}
var L=['Hello Al Manara team, I found you on manaragrp.com.'];if(ctx.topic)L.push('Enquiry: '+ctx.topic);L.push('','*Name:* '+val('name'));
[['company','Company'],['country','Country'],['phone','Phone'],['email','Email'],['product','Product / grade'],['qty','Quantity'],['port','Destination port'],['notes','Details']].forEach(function(p){var v=val(p[0]);if(v)L.push('*'+p[1]+':* '+v);});
L.push('','Page: '+location.pathname);
try{(window.dataLayer=window.dataLayer||[]).push({event:'wa_quote_submit',page:location.pathname});}catch(e){}
window.open('https://wa.me/'+NUM+'?text='+encodeURIComponent(L.join('\n')),'_blank','noopener');
close();
}
function open(a){
if(!M) build();
var t=''; try{t=new URL(a.href).searchParams.get('text')||'';}catch(e){}
var g=(t.match(/AM-[A-Z]{2}\d{2}/)||[''])[0]; ctx.topic=t.split(/[.\n]/)[0].replace(/^Hello Al Manara( team)?,?\s*/i,'').replace(/^I (would like|found you)[^.]*$/i,'').slice(0,120);
var pm=t.match(/(?:quotation|information|enquiry|question)\s+(?:for|about)\s+([^.\n]{2,60})/i),p=M.querySelector('[name=product]'); if(p&&!p.value) p.value=g||(pm?pm[1].trim():'');
M.classList.add('on'); document.documentElement.style.overflow='hidden'; setTimeout(function(){var n=M.querySelector('[name=name]');if(n)n.focus();},50);
}
document.addEventListener('click',function(e){
var a=e.target.closest&&e.target.closest('a[href*="wa.me/'+NUM+'"]'); if(!a||a.hasAttribute('data-amwa')||(M&&M.contains(a))||e.ctrlKey||e.metaKey||e.shiftKey) return;
e.preventDefault(); e.stopPropagation(); open(a);
},true);
})();
(function(){var v='';document.addEventListener('submit',function(e){var f=e.target;if(!f||!f.elements)return;v=[].slice.call(f.elements).filter(function(x){return x.value&&x.type!=='submit'}).map(function(x){return x.value}).join(' | ').slice(0,300)},true);new MutationObserver(function(rs){rs.forEach(function(r){[].forEach.call(r.addedNodes,function(n){if(n.nodeType!==1||!/Message sent successfully/.test(n.textContent)||n.querySelector('a[data-amwa]'))return;var a=document.createElement('a');a.setAttribute('data-amwa','1');a.href='https://wa.me/201146006496?text='+encodeURIComponent('Hello Al Manara, I just sent a message from manaragrp.com. '+v);a.target='_blank';a.rel='noopener';a.textContent='Faster reply: continue on WhatsApp';a.style.cssText='display:block;margin-top:8px;font-weight:700;color:#0F2B4F;text-decoration:underline';n.appendChild(a)})})}).observe(document.body,{childList:true,subtree:true})})();
}catch(e){if(window.console)console.warn("AM-EN waq.0",e);}
try{
(function(){try{var p=location.pathname.replace(/\/+$/,'');
var fix=function(){
if(p==='/plastic'){var h=document.querySelector('h1');if(h&&!h.querySelector('.am-seo-h1')&&/AL MANARA PLAST/i.test(h.textContent)){var s=document.createElement('span');s.className='am-seo-h1';s.textContent=' \u2013 Recycled PP & PE pellets from Egypt';s.style.cssText='position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0';h.appendChild(s);}}
if(p==='/contact-us'){var hs=document.querySelectorAll('h1');for(var i=1;i<hs.length;i++){if(!hs[i].getAttribute('role')){hs[i].setAttribute('role','heading');hs[i].setAttribute('aria-level','2');}}}
};
fix();var mo=new MutationObserver(fix);mo.observe(document.body,{childList:true,subtree:true});setTimeout(function(){mo.disconnect()},15000);
}catch(e){}})();
}catch(e){}
try{if(!document.getElementById("am-nav-fix-v1")){var s=document.createElement("style");s.id="am-nav-fix-v1";s.textContent="@media (min-width:992px) and (max-width:1365px){ ul[class*=\"DesktopMenu_navMenu\"]{flex-wrap:nowrap!important} ul[class*=\"DesktopMenu_navMenu\"]>li{padding-left:4px!important;padding-right:4px!important} ul[class*=\"DesktopMenu_navMenu\"] a{font-size:15px!important;white-space:nowrap!important} }";(document.head||document.documentElement).appendChild(s);}}catch(e){}
