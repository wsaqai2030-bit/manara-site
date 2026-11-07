/* Al Manara French site (public website code). Built from Website_ES sources. */
try{
/* AM-ES-SEO v1 (2026-11-04): titles/descriptions/canonical for /es pages + hreflang pairs EN<->ES. Appended to AM-ES-GUARD tag. */
(function(){
  if(window.__amFrSeo) return; window.__amFrSeo=1;
  var O='https://manaragrp.com';
  var P=[ // [en, es(decoded), title, description]
   ['/','/fr','Al Manara — Carbonate de calcium et plastiques','Exportateur égyptien de carbonate de calcium, de talc et de granulés recyclés de PP/PE. Conteneurs complets, TDS et SDS pour chaque grade.'],
   ['/plastic','/fr/notre-produit','Granulés recyclés de PP et PE — Al Manara','Granulés recyclés de PP et PE par polymère, couleur, origine et MFR. Chargements complets depuis les ports égyptiens.'],
   ['/am-mining','/fr/commerce-de-manara','Carbonate de calcium et talc — Al Manara','Carbonate de calcium enrobé et non enrobé et talc pour les plastiques, les peintures et la construction. Fiches TDS et SDS.'],
   ['/about-us','/fr/à-propos-de-nous','Qui sommes-nous — Al Manara','Entreprise égyptienne exportatrice de minéraux industriels et de plastiques recyclés. Découvrez notre équipe et notre façon de travailler.'],
   ['/business-ethics',"/fr/l'éthique-des-affaires",'Éthique des affaires — Al Manara','Spécifications honnêtes, confidentialité et conformité dans chaque devis, contrat et expédition.'],
   ['/contact-us','/fr/nous-contacter','Contact — Al Manara','Écrivez-nous par WhatsApp, e-mail ou formulaire. Nous répondons sous un jour ouvré.']
  ];
  function n(p){p=decodeURIComponent(p||'').toLowerCase().replace(/\/+$/,'');return p||'/';}
  var cur=n(location.pathname),row=null,isEs=false;
  for(var i=0;i<P.length;i++){if(n(P[i][0])===cur){row=P[i];break;} if(n(P[i][1])===cur){row=P[i];isEs=true;break;}}
  if(!row) return;
  var ESP={'/':'/es','/plastic':'/es/nuestro-producto','/am-mining':'/es/comercio-de-manara','/about-us':'/es/sobre-nosotros','/business-ethics':'/es/'+'%C3%A9tica-de-negocios','/contact-us':'/es/cont%C3%A1ctenos'};var enU=O+(row[0]==='/'?'/':row[0]), esU=O+encodeURI(row[1]);
  function link(rel,hl,href){
    var sel='link[rel="'+rel+'"]'+(hl?'[hreflang="'+hl+'"]':''),e=document.head.querySelector(sel);
    if(!e){e=document.createElement('link');e.rel=rel;if(hl)e.hreflang=hl;document.head.appendChild(e);}
    e.href=href;
  }
  function meta(attr,key,val){
    var e=document.head.querySelector('meta['+attr+'="'+key+'"]');
    if(!e){e=document.createElement('meta');e.setAttribute(attr,key);document.head.appendChild(e);}
    e.setAttribute('content',val);
  }
  function apply(){
    link('alternate','en',enU);link('alternate','es',O+ESP[row[0]]);link('alternate','fr',esU);link('alternate','x-default',enU);
    if(isEs){
      document.title=row[2];meta('name','description',row[3]);
      meta('property','og:title',row[2]);meta('property','og:description',row[3]);meta('property','og:url',esU);
      link('canonical','',esU);
    }
  }
  apply();
  [1500,4000,9000].forEach(function(ms){setTimeout(apply,ms);});
})();

/* AM-ES-GUARD v1 (draft 2026-11-04): self-heal for the Spanish pages only. Complements AM-GUARD v1 (links/back-forward are already handled by it).
   If the page's design marker is missing after load, reload once (max 2 per page, 20 s apart). Runs only on /es paths. */
(function(){
  if(window.__amFrGuard) return; window.__amFrGuard=1;
  var M={'/fr':'ah-top','/notre-produit':'am-plast','/commerce-de-manara':'am-min-fr','/à-propos-de-nous':'ab-top',"/l'éthique-des-affaires":'am-ethics','/nous-contacter':'ct-top'};
  function norm(p){p=decodeURIComponent(p||'').toLowerCase().replace(/\/+$/,'');if(p==='/fr')return p;return (p.replace(/^\/fr(?=\/)/,''))||'/';}
  var isEs=/^\/fr(\/|$)/i.test(location.pathname)||/^fr/i.test(document.documentElement.lang||''); if(!isEs) return;
  var path=norm(location.pathname); if(!M[path]) return;
  function ss(k,v){try{if(v===undefined)return sessionStorage.getItem(k);sessionStorage.setItem(k,v);}catch(e){}return null;}
  function ok(){return !!document.getElementById(M[norm(location.pathname)]);}
  function heal(){
    if(norm(location.pathname)!==path||ok()) return;
    var k='am_esheal_'+path, n=+(ss(k)||0), t=+(ss(k+'_t')||0);
    if(n>=2||Date.now()-t<20000) return;
    ss(k,String(n+1)); ss(k+'_t',String(Date.now()));
    location.reload();
  }
  [4000,8000,14000,22000].forEach(function(ms){setTimeout(heal,ms);});
})();
}catch(e){if(window.console)console.warn("AM-FR v8_guard.0",e);}
try{
/* AM-ES-CHROME v2 (2026-11-04): Spanish header/footer = English header design; legacy pages redirected. /es pages only. */
(function(){
  if(window.__amFrChrome) return;
  /* mobile menu: language switcher must sit above the bottom bar (all languages) */
  try{var m0=document.createElement('style');m0.id='am-mm-fix';m0.textContent='@media(max-width:991.98px){[class*="MobileMenu_fixedBottom"]{padding-bottom:64px!important}}';(document.head||document.documentElement).appendChild(m0);}catch(e){}
  var isEs=/^\/fr(\/|$)/i.test(location.pathname)||/^fr/i.test(document.documentElement.lang||'');
  if(!isEs) return; window.__amFrChrome=8;
  /* v7: old Spanish form IDs do not deliver: use the working forms, and never fail silently */
  (function(){
    var oF=window.fetch;if(!oF)return;
    var T={'295868':['1248775','Minerales'],'295869':['7634089','Contact']};
    function fail(){
      var f=document.querySelector('form');if(!f||document.getElementById('am-form-fail'))return;
      var d=document.createElement('div');d.id='am-form-fail';d.setAttribute('role','alert');
      d.style.cssText='margin-top:12px;padding:12px 14px;border:1px solid #F2862E;border-radius:8px;background:#FFF6EE;color:#0F2B4F;font-size:14px;line-height:1.5';
      d.innerHTML='Nous n\'avons pas pu envoyer votre message. Écrivez-nous sur <a href="https://wa.me/201146006496" target="_blank" rel="noopener" style="color:#0F2B4F;font-weight:600;text-decoration:underline">WhatsApp +20 11 4600 6496</a> ou à <a href="mailto:info@manaragrp.com" style="color:#0F2B4F;font-weight:600;text-decoration:underline">info@manaragrp.com</a>.';
      f.appendChild(d);
    }
    window.fetch=function(u,o){
      var U=typeof u==='string'?u:'';
      var m=U.match(/api\.wuilt\.com\/(\d+)\/submitv2/);
      if(!m)return oF.apply(this,arguments);
      var e=document.getElementById('am-form-fail');if(e)e.parentNode.removeChild(e);
      var t=T[m[1]];
      if(t){
        U=U.replace('/'+m[1]+'/','/'+t[0]+'/');
        try{var b=JSON.parse(o.body);b.subject='Site FR - '+t[1];o=Object.assign({},o,{body:JSON.stringify(b)});}catch(x){}
      }
      var p=oF.call(this,U,o);
      p.then(function(r){if(!r.ok)fail();},fail);
      return p;
    };
  })();

  /* Spanish theme loads Karla only: load the same brand fonts the English site uses */
  if(!document.getElementById('am-fr-fonts')){var fl=document.createElement('link');fl.id='am-fr-fonts';fl.rel='stylesheet';fl.href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap';(document.head||document.documentElement).appendChild(fl);}
  var CT='/fr/nous-contacter', ET='/fr/l%27%C3%A9thique-des-affaires';
  function path(){ var p=location.pathname; try{p=decodeURI(p);}catch(e){} return p.replace(/\/+$/,'').toLowerCase(); }
  /* Legacy Spanish pages with no English counterpart -> send to the new equivalents */
  var RED={'/fr/académie':'/fr','/es/contact-us':'/fr/nous-contacter','/fr/mélange-maître-de-remplissage':'/fr/notre-produit','/es/plastico':'/fr/notre-produit','/es/am-mining':'/fr/commerce-de-manara','/es/contacto':'/fr/nous-contacter','/es/quienes-somos':'/fr/à-propos-de-nous','/es/etica-empresarial':"/fr/l'%C3%A9thique-des-affaires"};
  if(RED[path()]){ location.replace(RED[path()]); return; }
  /* Header design identical to the English site (white bar, one row, orange active underline, orange CTA) */
  var css='html.am-fr header[class*="_navBar_"]{background:#fff!important;box-shadow:0 1px 0 rgba(15,43,79,.09);transition:transform .3s ease,box-shadow .3s ease}'
  +'html.am-fr header[class*="_navBar_"] [class*="DesktopMenu_navItem"] a>div,html.am-fr header[class*="_navBar_"] [class*="DesktopMenu_navItem"] a{color:#5B6B82!important;font:500 13px/1.2 Montserrat,Inter,Arial,sans-serif!important;letter-spacing:.02em;text-transform:uppercase}'
  +'html.am-fr header[class*="_navBar_"] [class*="LanguageSwitcher_wrapper"]{background:#fff}'
  +'html.am-fr header[class*="_navBar_"] .am-cta{display:none}'
  +'html.am-fr .am-fr-hide{display:none!important}'
  +'html.am-fr .ah h1,html.am-fr .am2 h1,html.am-fr .ae h1{color:#fff}'
  +'html.am-fr .am2 .in h3{color:#1D2939}'
  +'html.am-fr .amh h3,html.am-fr .amt h3{font-weight:500}'
  +'html.am-fr .ae h2,html.am-fr .ae h3{font-weight:700}'
  +'html.am-fr [class*="_sectionTitle_zufwj"]{font-weight:500;color:#000}'
  +'html.am-fr footer [class*="_linkItem_"]{text-transform:uppercase}'
  +'@media(min-width:768px){html.am-fr [class*="_container_zufwj"]{max-width:1140px!important;display:grid;grid-template-columns:5fr 6fr;column-gap:70px;align-items:start}html.am-fr [class*="_container_zufwj"]>[class*="_intro_zufwj"],html.am-fr [class*="_container_zufwj"]>[class*="_contactInfo_zufwj"]{grid-column:1}html.am-fr [class*="_container_zufwj"]>.formContainer{grid-column:2;grid-row:1/span 3}html.am-fr [class*="_contactInfo_zufwj"]{flex-direction:column;align-items:flex-start}html.am-fr [class*="_intro_zufwj"],html.am-fr [class*="_intro_zufwj"] *{text-align:left!important}}'
  +'html.am-fr [class*="_actionContainer_"]{justify-content:flex-start!important;text-align:left!important}'
  +'html.am-fr [class*="_intro_zufwj"] [class*="_sectionTitle_zufwj"]{text-transform:uppercase}'
  +'html.am-fr #navbar-wrapper-container{position:relative!important}'
  +'html.am-fr .aos-init{opacity:1!important;transform:none!important;transition:none!important}'
  +'html.am-fr footer,html.am-fr footer *:not(svg):not(path),html.am-fr form,html.am-fr form *{font-family:Inter,-apple-system,"Segoe UI",Arial,sans-serif}'
  +'html.am-fr form button:not([class*="_closeButton_"]),html.am-fr form input[type=submit]{background:#0F2B4F!important;color:#fff!important;border:0!important;border-radius:8px!important;padding:12px 20px!important;height:48px;font:400 16px/1.5 Montserrat,Inter,Arial,sans-serif!important;letter-spacing:.1px;cursor:pointer;display:block;margin:0 auto 0 0!important;align-self:flex-start}'
  +'html.am-fr form button:not([class*="_closeButton_"]):hover,html.am-fr form input[type=submit]:hover{background:#F2862E!important}'
  +'@media(min-width:1200px){html.am-fr footer [class*="_linkItem_"]{padding-left:5px!important;padding-right:5px!important}}'
  +'@media(min-width:992px){html.am-fr #navbar-wrapper-container{height:76px!important}'
  +'html.am-fr header[class*="_navBar_"]>.container{display:flex!important;align-items:center;justify-content:space-between;max-width:1320px;height:76px;padding-top:0!important;padding-bottom:0!important}'
  +'html.am-fr header[class*="_navBar_"]>.container>.d-flex{flex:0 0 auto;width:auto}'
  +'html.am-fr header [class*="_logoImg_"]{justify-content:flex-start!important;flex:0 0 auto!important}'
  +'html.am-fr header [class*="_logoImg_"] img{height:50px!important;max-height:50px!important;width:auto!important}'
  +'html.am-fr header [class*="_desktopMenu_"]{justify-content:flex-end!important}'
  +'html.am-fr header [class*="DesktopMenu_navMenu"]{gap:0;margin:0;padding-top:0!important;flex-wrap:nowrap}'
  +'html.am-fr header [class*="DesktopMenu_navItem"] a>div{padding:8px 6px!important;white-space:nowrap}'
  +'html.am-fr header .am-act{box-shadow:inset 0 -2px 0 #F2862E}'
  +'html.am-fr header[class*="_navBar_"] .am-cta{display:inline-flex;align-items:center;margin-left:4px;padding:10px 16px;border-radius:999px;background:#F2862E;color:#fff!important;font:600 13.5px/1 Montserrat,Inter,Arial,sans-serif;letter-spacing:.02em;text-decoration:none;white-space:nowrap}'
  +'html.am-fr header[class*="_navBar_"] .am-cta:hover{background:#E0731B}}'
  +'@media(min-width:992px) and (max-width:1329.98px){html.am-fr header [class*="DesktopMenu_navItem"] a>div{font-size:11px!important;padding:8px 4px!important;letter-spacing:0!important}html.am-fr header[class*="_navBar_"] .am-cta{display:none!important}html.am-fr header [class*="_logoImg_"] img{height:40px!important;max-height:40px!important}html.am-fr header[class*="_navBar_"]>.container{padding-left:10px!important;padding-right:10px!important}html.am-fr header [class*="LanguageSwitcher_labelWrapper"]{min-width:0!important;padding-left:4px!important;padding-right:4px!important}}'
  +'@media(max-width:991.98px){html.am-fr #navbar-wrapper-container{height:64px!important}'
  +'html.am-fr header [class*="_logoImg_"] img{height:42px!important;max-height:42px!important;width:auto!important}}';
  function addCss(){
    document.documentElement.classList.add('am-fr');
    if(document.getElementById('am-fr-chrome-css')) return;
    var s=document.createElement('style'); s.id='am-fr-chrome-css'; s.textContent=css;
    (document.head||document.documentElement).appendChild(s);
  }
  addCss();
  /* label/href rules by the English-structure equivalents */
  var MAP={'/plastic':['/fr/notre-produit',null],
           '/am-mining':['/fr/commerce-de-manara',null],
           '/business-ethics':[ET,'L\'ÉTHIQUE DES AFFAIRES'],
           '/contact-us':[CT,null]};
  function norm(t){return (t||'').replace(/\s+/g,' ').trim().toLowerCase();}
  function setLabel(a,txt){
    var d=a.querySelector('[class*="pageName"]')||a.querySelector('div')||a;
    while(d.firstElementChild && d.children.length===1 && d.firstElementChild.children.length) d=d.firstElementChild;
    if(d.firstElementChild) d=d.firstElementChild;
    if(d.textContent!==txt) d.textContent=txt;
  }
  function apply(){
    try{
      if(!/^\/fr(\/|$)/i.test(location.pathname)) return;
      addCss();
      var cur=path();
      var q=document.querySelectorAll('a.am-cta');
      for(var i=0;i<q.length;i++){
        if(q[i].getAttribute('href')!==CT) q[i].setAttribute('href',CT);
        if(/request a quote/i.test(q[i].textContent)) q[i].textContent='Demander un devis';
      }
      /* mobile bar quote button + brand logo, same as English */
      [].forEach.call(document.querySelectorAll('a[href$="/es/contact-us"],#am-mbar a[href="/contact-us"]'),function(x){x.setAttribute('href',CT);});
      [].forEach.call(document.querySelectorAll('img[src*="08312022083631630f1d8fa749e"],img[src*="08312022092505630f28f121fce"]'),function(x){x.removeAttribute('srcset');x.src='https://assets.wuiltweb.com/241623/101220261315126accdd60c343d.webp';});
      var L=document.querySelectorAll('[class*="LanguageSwitcher_languageName"]');
      for(var j=0;j<L.length;j++) if(L[j].textContent.trim()==='French') L[j].textContent='Français';
      var A=document.querySelectorAll('header a[href],footer a[href]');
      for(var k=0;k<A.length;k++){
        var a=A[k], h=a.getAttribute('href')||'', m=MAP[h];
        if(m){ a.setAttribute('href',m[0]); if(m[1]) setLabel(a,m[1]); continue; }
        var dh=h; try{dh=decodeURI(h);}catch(e){}
        dh=dh.toLowerCase();
        var li=a.closest('li')||a.parentElement;
        var t=norm(a.textContent);
        if(dh==='/fr/académie'||dh==='/fr/mélange-maître-de-remplissage'){ if(li) li.classList.add('am-fr-hide'); a.classList.add('am-fr-hide'); continue; }
        if(dh==='/fr/commerce-de-manara'){ if(t!=='am-mining') setLabel(a,'AM-MINING'); }
        else if(dh==='/fr/notre-produit'){ if(t!=='am-plast') setLabel(a,'AM-PLAST'); }
        else if(dh==='/fr'||dh==='/fr/'||(t==='page d\'accueil')){ if(/^page d.accueil$/i.test(t)) { setLabel(a,'ACCUEIL'); if(!h||h==='') a.setAttribute('href','/fr'); } }
        /* active underline mirrors the English site */
        if(a.closest('header')){
          var on=(dh===cur)||(dh==='/fr/notre-produit'&&(cur==='/fr/notre-produit'||cur==='/fr/granulés-de-polypropylène'||cur==='/fr/granulés-de-polyéthylène'));
          var tgt=a.querySelector('div')||a;
          if(on&&/\/fr\/(notre|commerce|à-propos|l'éthique|nous-contacter)/.test(dh)) tgt.classList.add('am-act'); else tgt.classList.remove('am-act');
        }
      }
      /* footer identical to English: one entry per page, real social links */
      var ftr=document.querySelector('footer');
      if(ftr){
        var seen={};[].forEach.call(ftr.querySelectorAll('li'),function(li){
          var fa=li.querySelector('a');if(fa&&!fa.getAttribute('href')&&/^accueil$/.test(norm(fa.textContent)))fa.setAttribute('href','/fr');
          if(li.classList.contains('am-fr-hide')||(fa&&fa.classList.contains('am-fr-hide')))return;
          var key=norm(li.textContent);if(fa&&fa.getAttribute('href')){key=fa.getAttribute('href');try{key=decodeURI(key);}catch(e){}key=key.toLowerCase();}
          if(seen[key])li.classList.add('am-fr-hide');else seen[key]=1;
        });
        var SOC=[['https://www.linkedin.com/company/al-manara-for-investment-and-commercial-agencies/','LinkedIn','M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z'],['https://www.youtube.com/channel/UChGF80Wkrd_r7bQpRg-ntqQ','YouTube','M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6z']];
        [].slice.call(ftr.querySelectorAll('a[href="#"]')).slice(0,2).forEach(function(sa,i){
          sa.setAttribute('href',SOC[i][0]);sa.setAttribute('target','_blank');sa.setAttribute('rel','noopener');sa.setAttribute('aria-label',SOC[i][1]);
          var sv=sa.querySelector('svg');if(sv){sv.setAttribute('viewBox','0 0 24 24');sv.innerHTML='<path fill="currentColor" d="'+SOC[i][2]+'"/>';}
        });
        [].forEach.call(ftr.querySelectorAll('a[href*="linkedin.com"],a[href*="youtube.com"]'),function(sa){
          var sv=sa.querySelector('svg');if(!sv||sv.getAttribute('data-am'))return;
          sv.setAttribute('data-am','1');sv.setAttribute('viewBox','0 0 50 50');sv.setAttribute('width','30');sv.setAttribute('height','30');
          sv.innerHTML='<path fill="currentColor" d="'+(/linkedin/.test(sa.href)?'M41 4H9C6.24 4 4 6.24 4 9V41C4 43.76 6.24 46 9 46H41C43.76 46 46 43.76 46 41V9C46 6.24 43.76 4 41 4ZM17 20V39H11V20H17ZM11 14.47C11 13.07 12.2 12 14 12C15.8 12 16.93 13.07 17 14.47C17 15.87 15.88 17 14 17C12.2 17 11 15.87 11 14.47ZM39 39H33C33 39 33 29.74 33 29C33 27 32 25 29.5 24.96H29.42C27 24.96 26 27.02 26 29C26 29.91 26 39 26 39H20V20H26V22.56C26 22.56 27.93 20 31.81 20C35.78 20 39 22.73 39 28.26V39Z':'M44.8984 14.5C44.5 12.3008 42.6016 10.6992 40.3984 10.1992C37.1016 9.5 31 9 24.3984 9C17.8008 9 11.6016 9.5 8.30078 10.1992C6.10156 10.6992 4.19922 12.1992 3.80078 14.5C3.39844 17 3 20.5 3 25C3 29.5 3.39844 33 3.89844 35.5C4.30078 37.6992 6.19922 39.3008 8.39844 39.8008C11.8984 40.5 17.8984 41 24.5 41C31.1016 41 37.1016 40.5 40.6016 39.8008C42.8008 39.3008 44.6992 37.8008 45.1016 35.5C45.5 33 46 29.3984 46.1016 25C45.8984 20.5 45.3984 17 44.8984 14.5ZM19 32V18L31.1992 25L19 32Z')+'"/>';
        });
      }
      /* home item has no link in Wuilt's Spanish menu: make it one */
      var items=document.querySelectorAll('header [class*="DesktopMenu_navItem"],header [class*="MobileMenu_navLink"],footer li');
      for(var n=0;n<items.length;n++){
        var tx=norm(items[n].textContent);
        if(/^(page d.accueil|accueil)$/.test(tx)&&!items[n].querySelector('a[href]')){
          items[n].style.cursor='pointer';
          if(!items[n].__amH){items[n].__amH=1;items[n].addEventListener('click',function(){location.href='/fr';});}
          var lf=[].slice.call(items[n].querySelectorAll('*')).filter(function(e){return e.children.length===0&&/^page d.accueil$/i.test(e.textContent.trim());}); lf.forEach(function(e){e.textContent='ACCUEIL';});
          if(cur==='/fr'||cur==='') (items[n].querySelector('div')||items[n]).classList.add('am-act');
        }
      }
    }catch(e){}
  }
  var t=null;
  function sched(){ if(t) return; t=setTimeout(function(){t=null;apply();},150); }
  apply();
  new MutationObserver(sched).observe(document.documentElement,{childList:true,subtree:true});
  [500,1500,4000,8000].forEach(function(ms){setTimeout(apply,ms);});
})();
}catch(e){if(window.console)console.warn("AM-FR v8_guard.1",e);}
try{
(function(){if(location.pathname.replace(/\/+$/,'')!=='/fr')return;
(function(){
 if(window.__amHomeFR) return; window.__amHomeFR=1;
 var B='https://assets.wuiltweb.com/241623/';
 var P={hero:'101320261345226ace35f2b3669.webp',mw:'101320261345266ace35f627748.webp',mh:'101320261345286ace35f8af012.webp',me:'101320261345336ace35fdc5467.webp',plS:'101320261345376ace360123de0.webp',caP:'101320261347126ace36601d4ca.webp',caB:'101320261347146ace3662a27e5.webp',jb:'101320261347166ace3664d45b3.webp',ls:'101320261347206ace3668edc3a.webp',wo:'101320261347236ace366b188f9.webp',wc:'101320261347246ace366cc6cd0.webp'};
 function wa(t){return 'https://wa.me/201146006496?text='+encodeURIComponent('Bonjour l\'équipe Al Manara, je vous ai trouvés sur manaragrp.com. '+t+' Quantité : ... / Destination : ...')}
 var WA=wa('Je souhaiterais recevoir un devis.');
 var LIN='https://www.linkedin.com/company/al-manara-for-investment-and-commercial-agencies/';
 function lii(n){return '<svg viewBox="0 0 24 24" width="'+n+'" height="'+n+'" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>'}
 var C=String.fromCharCode,MU=C(181);
 var IC={
  doc:'<path d="M7 3h7l5 5v13H7zM14 3v5h5M9.5 14l2 2 3.5-4"/>',chat:'<path d="M4 5h16v11H9l-5 4z"/>',box:'<path d="M3 8l9-5 9 5v8l-9 5-9-5zM3 8l9 5 9-5M12 13v8"/>',ship:'<path d="M3 17l2 3h14l2-3zM6 17V9h12v8M12 9V4h4"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',check:'<path d="M5 12l4 4 10-10"/>',eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'
 };
 function ic(n,s){return '<svg viewBox="0 0 24 24" width="'+(s||26)+'" height="'+(s||26)+'" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+IC[n]+'</svg>'}
 var TICK=['PP raffia (IPP)','Copolymère de PP','Homopolymère de PP','HDPE','LDPE','Carbonate de calcium AM-UC','Carbonate de calcium AM-CN','Talc en poudre','Membranes bitumineuses','Conteneurs complets','TDS + SDS','Export depuis l\'Égypte'];
 var APP=[
  ['Membranes bitumineuses','Membranes bitumineuses d\'étanchéité','Polymère recyclé pour le compound et le film de surface de la membrane, plus une charge minérale pour la formulation.',[['PP raffia (IPP), noir','Grade de PP raffia isotactique pour compounds de membranes','/fr/notre-produit#polypropylene'],['Film de surface HDPE, 7 '+MU+'m','Film mince pour la surface de la membrane, avec option d\'impression','/fr/notre-produit'],['CaCO3 non enrobé, AM-UC20 à UC45','Charge minérale, coupe supérieure 20 - 45 '+MU+'m','/fr/commerce-de-manara']]],
  ['Moulage par injection','Moulage par injection','Caisses, chaises, tables, palettes et articles ménagers.',[['Homopolymère et copolymère de PP','Grades transparent, blanc, coloré et noir','/fr/notre-produit#polypropylene'],['HDPE, grade bouchons de bouteille','Vert et bleu, pour l\'injection','/fr/notre-produit#polyethylene']]],
  ['Film et feuille','Extrusion de film et de feuille','PE recyclé pour film et carbonate de calcium enrobé comme charge fonctionnelle.',[['Grades de LDPE pour film','Coloré et noir, issu de films usagés','/fr/notre-produit#polyethylene'],['CaCO3 enrobé, AM-CN08 à CN25','Dispersion dans le PE et le PP, surface lisse','/fr/commerce-de-manara']]],
  ['Soufflage','Soufflage','HDPE recyclé pour bouteilles et emballages industriels.',[['HDPE, blanc et coloré','Issu de bouteilles blanches et de bidons','/fr/notre-produit#polyethylene']]],
  ['PVC et câbles','Tubes, profilés et câbles en PVC','Grades enrobés d\'acide stéarique pour la rigidité, l\'aspect de surface et la dispersion.',[['CaCO3 enrobé, AM-CN08 à CN45','Tubes et profilés en PVC','/fr/commerce-de-manara'],['CaCO3 enrobé, AM-CN08 à CN20','Isolation et gaine de câbles en PVC','/fr/commerce-de-manara']]],
  ['Masterbatch','Masterbatch de charge et compounds','Grades fins hydrophobes pour masterbatch de carbonate de calcium.',[['CaCO3 enrobé, AM-CN08 à CN10','Grades fins et hydrophobes','/fr/commerce-de-manara']]],
  ['Peintures et revêtements','Peintures, revêtements et produits chimiques pour la construction','Grades non enrobés pour la blancheur, le soutien de l\'opacité et la maîtrise des coûts.',[['CaCO3 non enrobé, AM-UC08 à UC45','Blancheur de 97 % ou plus','/fr/commerce-de-manara'],['Talc en poudre','Pour applications à haute brillance, TDS bientôt disponible','/fr/commerce-de-manara']]]
 ];
 var GAL=[[P.jb,'Big bags chargés dans un conteneur'],[P.ls,'Arrimés par des sangles pour le fret maritime'],[P.wo,'Sacs tissés prêts avant le chargement'],[P.caP,'Sacs de 25 kg de carbonate de calcium à notre marque, palettisés']];
 var ST=[['Envoyez-nous votre application','Procédé, grade ou granulométrie recherchés, quantité et destination.'],['Nous recommandons et confirmons','Le grade adapté à votre procédé, confirmé avec vous avant tout chargement.'],['Les documents entre vos mains','TDS et SDS du carbonate de calcium, et un devis clair.'],['Emballé et expédié','Chargé en conteneurs complets, avec le jeu complet de documents d\'expédition.']];
 var css='.ah{font-family:Inter,Poppins,Arial,sans-serif;color:#1D2939;line-height:1.55}.ah *{box-sizing:border-box}.ah-w{max-width:1200px;margin:0 auto;padding:0 20px}'+
 '.ah h1,.ah h2,.ah h3{font-family:Montserrat,Inter,sans-serif;margin:0;font-weight:700}.ah h2{color:#0F2B4F;font-size:36px;line-height:1.18;margin-bottom:12px}.ah .k{color:#F2862E;font-weight:700;font-size:12px;letter-spacing:.14em;margin-bottom:8px}.ah .lead{color:#475467;font-size:17px;max-width:760px;margin:0}'+
 '.ah-hero{position:relative;color:#fff;background:#0A1F3A;overflow:hidden;min-height:92vh;display:flex;align-items:center}.ah-hero .bg{position:absolute;inset:0;background:url('+B+P.hero+') center/cover;transform:scale(1.04);animation:ahz 22s ease-in-out infinite alternate}@keyframes ahz{to{transform:scale(1.14)}}.ah-hero:after{content:"";position:absolute;inset:0;background:linear-gradient(100deg,rgba(7,22,42,.96) 28%,rgba(10,31,58,.62) 62%,rgba(10,31,58,.35))}'+
 '.ah-hero .ah-w{position:relative;z-index:1;padding:150px 20px 90px;display:grid;grid-template-columns:1.35fr 1fr;gap:52px;align-items:center;width:100%}.ah-pill{display:inline-flex;align-items:center;gap:8px;background:rgba(242,134,46,.16);border:1px solid rgba(242,134,46,.5);color:#FFB777;border-radius:999px;padding:7px 16px;font-size:12.5px;font-weight:700;letter-spacing:.08em;margin-bottom:22px}.ah-pill i{width:8px;height:8px;border-radius:50%;background:#F2862E;box-shadow:0 0 0 0 rgba(242,134,46,.6);animation:ahp 2s infinite}@keyframes ahp{70%{box-shadow:0 0 0 10px rgba(242,134,46,0)}100%{box-shadow:0 0 0 0 rgba(242,134,46,0)}}'+
 '.ah-hero h1{font-size:56px;line-height:1.06;font-weight:800;letter-spacing:-.01em}.ah-hero h1 span{color:#F2862E}.ah-hero p.s{color:#D5DFEA;font-size:18.5px;max-width:620px;margin:22px 0 22px}.ah-bl{list-style:none;margin:0 0 30px;padding:0}.ah-bl li{display:flex;gap:10px;align-items:center;padding:5px 0;font-size:15.5px;color:#E4EBF3}.ah-bl svg{color:#F2862E;flex:none}'+
 '.ah-b{display:inline-flex;align-items:center;gap:8px;text-decoration:none;font-weight:700;border-radius:999px;padding:15px 30px;font-size:15.5px;transition:all .25s;margin:0 12px 12px 0;cursor:pointer;border:0}.ah-b.o{background:#F2862E;color:#fff;box-shadow:0 10px 26px rgba(242,134,46,.35)}.ah-b.o:hover{transform:translateY(-3px);box-shadow:0 14px 32px rgba(242,134,46,.5)}.ah-b.g{border:2px solid rgba(255,255,255,.5);color:#fff;background:rgba(255,255,255,.04)}.ah-b.g:hover{background:#fff;color:#0F2B4F}.ah-b.n{background:#0F2B4F;color:#fff}.ah-b.n:hover{background:#F2862E}.ah-b svg{transition:transform .25s}.ah-b:hover svg{transform:translateX(4px)}'+
 '.ah-gl{background:rgba(255,255,255,.09);backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.2);border-radius:24px;padding:30px}.ah-gl .t{font-size:12px;letter-spacing:.16em;color:#F2862E;font-weight:700;margin-bottom:18px}.ah-gl .g{display:grid;grid-template-columns:1fr 1fr;gap:24px 20px}.ah-gl b{display:block;font-family:Montserrat,Inter,sans-serif;font-size:42px;line-height:1;font-weight:800}.ah-gl span{font-size:13px;color:#C9D6E3;display:block;margin-top:6px}.ah-gl .f{margin-top:22px;padding-top:18px;border-top:1px solid rgba(255,255,255,.18);font-size:13px;color:#C9D6E3}'+
 '.ah-mq{background:#0A1F3A;border-top:1px solid rgba(255,255,255,.08);overflow:hidden;padding:18px 0}.ah-mq .tr{display:flex;width:max-content;animation:ahm 46s linear infinite}.ah-mq:hover .tr{animation-play-state:paused}.ah-mq span{color:#C9D6E3;font-weight:600;font-size:14px;letter-spacing:.06em;padding:0 26px;white-space:nowrap;display:flex;align-items:center;gap:26px}.ah-mq span:after{content:"";width:6px;height:6px;border-radius:50%;background:#F2862E}@keyframes ahm{to{transform:translateX(-50%)}}'+
 '.ah-b.li{background:#0A66C2;color:#fff;box-shadow:0 10px 26px rgba(10,102,194,.35)}.ah-b.li:hover{background:#0B73DB;transform:translateY(-3px)}.ah-sc{display:grid;grid-template-columns:auto 1fr auto;gap:34px;align-items:center;background:#fff;border:1px solid #DCE4EC;border-left:6px solid #0A66C2;border-radius:24px;padding:38px 44px;box-shadow:0 16px 40px rgba(15,43,79,.1)}.ah-sc .lg{width:92px;height:92px;border-radius:22px;background:#0A66C2;color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 12px 28px rgba(10,102,194,.35)}.ah-sc h2{margin:0 0 8px;font-size:30px;color:#0F2B4F}.ah-sc p{margin:0 0 14px;color:#475467;max-width:620px}.ah-sc .tg{display:flex;flex-wrap:wrap;gap:8px}.ah-sc .tg span{background:#EAF2FB;color:#0A66C2;border-radius:999px;padding:6px 14px;font-size:13px;font-weight:700}.ah-sc .ah-b{margin:0}@media(max-width:1020px){.ah-sc{grid-template-columns:1fr;padding:30px;text-align:left}}'+
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
  return '<section class="ah-hero"><div class="bg"></div><div class="ah-w"><div class="ah-r">'+pill('NOUS EXPORTONS D\'ÉGYPTE VERS PLUS DE 10 PAYS')+'<h1>Les matières premières de <span>votre ligne de production.</span></h1><p class="s">Granulés recyclés de PP et PE et carbonate de calcium en poudre, avec des spécifications claires, des fiches techniques et un approvisionnement fiable en conteneurs complets depuis l\'Égypte.</p><ul class="ah-bl"><li>'+ic('check',20)+'PP raffia (IPP) et charges pour lignes de membranes bitumineuses</li><li>'+ic('check',20)+'14 grades de carbonate de calcium, 8 - 45 '+MU+'m, plus 7 de talc</li><li>'+ic('check',20)+'TDS et SDS pour chaque grade de carbonate de calcium</li></ul><a class="ah-b o" href="'+WA+'" target="_blank" rel="noopener">Demander un devis '+ic('arrow',18)+'</a><a class="ah-b g" href="#ah-find">Trouvez votre matériau</a><a class="ah-b li" href="'+LIN+'" target="_blank" rel="noopener" aria-label="Suivez Al Manara sur LinkedIn">'+lii(20)+'Suivez-nous sur LinkedIn</a></div>'+
  '<div class="ah-gl ah-r"><div class="t">EN UN COUP D\'ŒIL</div><div class="g"><div><b data-n="11">0</b><span>grades de PP et PE recyclés</span></div><div><b data-n="21">0</b><span>grades de carbonate de calcium et de talc</span></div><div><b data-n="10" data-pre="+">+0</b><span>pays d\'exportation</span></div><div><b data-n="1">0</b><span>jour ouvré pour répondre</span></div></div><div class="f">Al Manara Plast &middot; Al Manara Mining</div></div></div></section>'+
  '<div class="ah-mq"><div class="tr">'+[0,1].map(function(){return TICK.map(function(x){return '<span>'+x.toUpperCase()+'</span>'}).join('')}).join('')+'</div></div>';
 }
 function lines(){
  return '<section class="ah-s"><div class="ah-w"><div class="k">NOS LIGNES D\'ACTIVITÉ</div><h2>Deux gammes de produits, un même niveau de clarté</h2><p class="lead">Chaque matériau est présenté avec son grade, son application et ses informations techniques, pour que vous choisissiez en toute confiance.</p><div class="ah-ln">'+
  '<a class="ah-lc ah-r" href="/fr/notre-produit" style="text-decoration:none"><div class="ph" style="background-image:url('+B+P.plS+')"></div><div class="in"><h3>Al Manara Plast</h3><p>Granulés recyclés de PP et PE en 11 grades clairement définis, dont le PP raffia (IPP) pour les membranes bitumineuses d\'étanchéité.</p><ul><li>PP</li><li>PE</li><li>PP raffia (IPP)</li><li>HDPE</li><li>LDPE</li></ul><span class="ah-b o">Voir les PP et PE recyclés '+ic('arrow',18)+'</span></div></a>'+
  '<a class="ah-lc ah-r" href="/fr/commerce-de-manara" style="text-decoration:none"><div class="ph" style="background-image:url('+B+P.caP+')"></div><div class="in"><h3>Al Manara Mining</h3><p>Carbonate de calcium broyé en 14 grades non enrobés et enrobés, coupe supérieure 8 - 45 '+MU+'m, ainsi que du talc. TDS et SDS pour chaque grade de carbonate de calcium.</p><ul><li>AM-UC</li><li>AM-CN</li><li>Talc</li><li>TDS + SDS</li></ul><span class="ah-b o">Voir le carbonate de calcium '+ic('arrow',18)+'</span></div></a></div></div></section>';
 }
 function finder(){
  return '<section class="ah-s l" id="ah-find"><div class="ah-w"><div class="k">TROUVEZ VOTRE MATÉRIAU</div><h2>Que produisez-vous ?</h2><p class="lead">Choisissez votre application et découvrez les grades qui lui correspondent.</p><div class="ah-fd ah-r"><div class="ah-tabs">'+APP.map(function(a,i){return '<button class="ah-tab'+(i?'':' on')+'" data-i="'+i+'">'+a[0]+ic('arrow',18)+'</button>'}).join('')+'</div><div class="ah-pn" id="ah-pn"></div></div></div></section>';
 }
 function expertise(){
  return '<section class="ah-s d"><div class="ah-w"><div class="ah-ex"><div class="ah-r"><div class="k">NOUS CONNAISSONS LA LIGNE DE PRODUCTION</div><h2>Une expérience qui va au-delà du négoce</h2><p class="lead">Notre équipe a supervisé et monté une ligne complète de production de membranes bitumineuses, de bout en bout. Nous savons ce que la ligne attend de ses matières premières.</p><div class="ah-fc"><div><b>PP raffia (IPP)</b><span>pour le compound de la membrane</span></div><div><b>Film HDPE</b><span>film de surface de 7 '+MU+'m</span></div><div><b>Carga de CaCO&#8323;</b><span>non enrobé, coupe supérieure 20 - 45 '+MU+'m</span></div><div><b>Un seul fournisseur</b><span>pour le polymère et la charge</span></div></div><a class="ah-b o" href="/fr/notre-produit#polypropylene">Matériaux pour lignes de membranes '+ic('arrow',18)+'</a></div><div class="ah-ph3 ah-r"><div style="background-image:url('+B+P.mw+')"></div><div style="background-image:url('+B+P.mh+')"></div><div style="background-image:url('+B+P.me+')"></div></div></div></div></section>';
 }
 function gallery(){
  return '<section class="ah-s"><div class="ah-w"><div class="k">PRÊT POUR L\'EXPORT</div><h2>Emballé, assuré et chargé</h2><p class="lead">De vraies charges issues de nos expéditions : sacs tissés, big bags et sacs de 25 kg à notre marque, chargés en conteneurs complets.</p><div class="ah-gal">'+GAL.map(function(g){return '<div class="ah-g ah-r" style="background-image:url('+B+g[0]+')"><span>'+g[1]+'</span></div>'}).join('')+'</div><div class="ah-gs"><div>'+ic('box',22)+'Sacs tissés, big bags ou sacs de 25 kg</div><div>'+ic('ship',22)+'Conteneurs complets depuis les ports égyptiens</div><div>'+ic('doc',22)+'Documents d\'expédition complets</div></div></div></section>';
 }
 function steps(){
  return '<section class="ah-s l"><div class="ah-w"><div class="k">COMMENT DÉMARRER</div><h2>De la demande à votre port en quatre étapes</h2><div class="ah-tl">'+ST.map(function(s,i){return '<div class="ah-st ah-r"><div class="n">'+(i+1)+'</div><h3>'+s[0]+'</h3><p>'+s[1]+'</p></div>'}).join('')+'</div><div style="text-align:center;margin-top:36px"><a class="ah-b o" href="'+WA+'" target="_blank" rel="noopener">Commencez par une demande de devis '+ic('arrow',18)+'</a></div></div></section>';
 }
 function docs(){
  return '<section class="ah-s"><div class="ah-w"><div class="ah-dc ah-r"><div class="tx"><div class="k">DES DOCUMENTS AVANT DE DÉCIDER</div><h2>Des données techniques à consulter dès aujourd\'hui</h2><p>Ouvrez la TDS de chaque grade de carbonate de calcium et la fiche de données de sécurité en anglais, français, espagnol et portugais, directement sur notre site.</p><div class="bd"><span>14 TDS</span><span>SDS EN</span><span>SDS FR</span><span>SDS ES</span><span>SDS PT</span></div><a class="ah-b o" href="/fr/commerce-de-manara">Ouvrir le centre technique '+ic('arrow',18)+'</a></div><div class="im" style="background-image:url('+B+P.caB+');background-size:contain;background-repeat:no-repeat;background-color:#EEF2F6"></div></div></div></section>';
 }
 function why(){
  var W=[['doc','Des informations techniques claires','Grade, granulométrie, MFR, couleur et application de chaque matériau.'],['chat','Un approvisionnement selon l\'application','Nous comprenons d\'abord votre procédé, puis nous recommandons le grade adapté.'],['box','Un approvisionnement flexible','Emballage, quantités et expédition organisés autour de votre commande.'],['ship','Coordination de l\'export','Coordination commerciale et logistique depuis l\'Égypte, avec une documentation complète.']];
  return '<section class="ah-s l"><div class="ah-w"><div class="k">POURQUOI AL MANARA</div><h2>Pourquoi les acheteurs industriels travaillent avec nous</h2><div class="ah-wy">'+W.map(function(a){return '<div class="ah-y ah-r"><div class="ico">'+ic(a[0],30)+'</div><h3>'+a[1]+'</h3><p>'+a[2]+'</p></div>'}).join('')+'</div></div></section>';
 }
 function iso(){return '<section class="ah-s"><div class="ah-w"><div class="ah-iso"><div class="ah-r"><div class="k">QUALITÉ</div><h2>ISO 9001:2015 Management de la qualité</h2><p>Al Manara applique un système de management de la qualité ISO 9001:2015 pour l\'export, l\'import et les agences commerciales. Il définit la façon dont nous confirmons les spécifications avec chaque client, documentons chaque expédition et assurons le suivi après la livraison, afin que le matériau que vous recevez corresponde à celui que vous avez approuvé.</p></div><div class="ah-r im" style="background-image:url('+B+'101220261305116accdb0786b53.webp)" role="img" aria-label="ISO 9001:2015"></div></div></div></section>'}
 function social(){var C2='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l4 4 10-10"/></svg>';return '<section class="ah-s d sc"><div class="ah-w"><div class="ah-sc2 ah-r"><div><div class="ey">RESTONS EN CONTACT</div><h2>Suivez Al Manara sur LinkedIn</h2><p>Savoir-faire technique sur le carbonate de calcium, le talc et les polymères recyclés, expérience de l\'export et actualités de l\'entreprise, directement de notre équipe.</p><ul><li>'+C2+'Grades et applications du carbonate de calcium et du talc</li><li>'+C2+'PP et PE recyclés pour la production industrielle</li><li>'+C2+'Export de conteneurs complets depuis l\'Égypte</li></ul><a class="ah-b li" href="'+LIN+'" target="_blank" rel="noopener">'+lii(20)+'Suivez notre page</a></div><div class="ah-lk"><div class="bn"></div><div class="bd2"><div class="av">AM</div><h3>Al Manara for Investment and Commercial Agencies</h3><p class="sb">Commerce international et développement · Égypte</p><a class="ah-b li" href="'+LIN+'" target="_blank" rel="noopener" aria-label="Suivez Al Manara sur LinkedIn">'+lii(20)+'Suivre sur LinkedIn</a><div class="in2">'+lii(16)+'Page de l\'entreprise sur LinkedIn</div></div></div></div></div></section>'}
 function cta(){return '<section class="ah-s"><div class="ah-w"><div class="ah-cta ah-r"><div><h2>Prêt à parler de votre besoin ?</h2><p>Envoyez-nous votre application, votre grade et votre destination. Notre équipe de support technique recommande un grade adapté et confirme la disponibilité sous un jour ouvré.</p></div><div><a class="ah-b w" href="'+WA+'" target="_blank" rel="noopener">WhatsApp +20 11 4600 6496</a><a class="ah-b g2" href="/fr/nous-contacter">Page de contact</a></div></div></div></section>'}
 function panel(i){
  var a=APP[i];
  return '<h3>'+a[1]+'</h3><p class="d">'+a[2]+'</p>'+a[3].map(function(x){return '<div class="ah-it"><div><b>'+x[0]+'</b><span>'+x[1]+'</span></div><a href="'+x[2]+'">Ver '+ic('arrow',16)+'</a></div>'}).join('')+'<div class="ac"><a class="ah-b o" href="'+wa('Application : '+a[0]+'.')+'" target="_blank" rel="noopener">Demander un devis pour '+a[0].toLowerCase()+'</a></div>';
 }
 function bindFinder(w){
  var pn=w.querySelector('#ah-pn');if(!pn)return;pn.innerHTML=panel(0);
  w.querySelectorAll('.ah-tab').forEach(function(b){b.addEventListener('click',function(){w.querySelectorAll('.ah-tab').forEach(function(x){x.classList.remove('on')});b.classList.add('on');pn.style.opacity=0;setTimeout(function(){pn.innerHTML=panel(+b.getAttribute('data-i'));pn.style.opacity=1},160)})});
  pn.style.transition='opacity .16s';
 }
 function counters(w){
  var els=[].slice.call(w.querySelectorAll('[data-n]'));
  function run(e){var to=+e.getAttribute('data-n'),p=e.getAttribute('data-pre')||'',t0=null;function f(t){t0=t0||t;var k=Math.min((t-t0)/1400,1);e.textContent=p+Math.round(to*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)}requestAnimationFrame(f)}
  if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){els.forEach(function(e){e.textContent=e.getAttribute('data-n')+(e.getAttribute('data-p')||'')});return}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){run(e.target);io.unobserve(e.target)}})},{threshold:.4});els.forEach(function(e){io.observe(e)});
 }
 function reveal(w){
  var els=[].slice.call(w.querySelectorAll('.ah-r'));
  if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){els.forEach(function(e){e.classList.add('in')});return}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var t=e.target;var i=[].indexOf.call(t.parentNode.children,t);t.style.transitionDelay=(i%4)*80+'ms';t.classList.add('in');io.unobserve(t)}})},{rootMargin:'0px 0px -6% 0px'});
  els.forEach(function(e){io.observe(e)});
 }
 function mount(){
  if(document.getElementById('ah-top')) return true;
  var ws=[].slice.call(document.querySelectorAll('.section-preview-wrapper,.section-editor-wrapper'));
  var foot=ws.filter(function(e){return /^(Page d.accueil|ACCUEIL)\s*\n?\s*(À propos de nous|QUI SOMMES-NOUS)/i.test((e.innerText||'').trim())}).pop();
  if(!foot) return false;
  var hide=ws.filter(function(e){return e!==foot});
  hide.forEach(function(e){e.style.display='none'});
  var f=foot;while(hide.length&&f.parentElement&&!f.parentElement.contains(hide[0]))f=f.parentElement;
  var st2=document.createElement('style');st2.id='ah-top-css2';st2.textContent='.ah-iso{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center}.ah-iso h2{font-size:30px;color:#101828;margin:0 0 14px}.ah-iso p{font-size:18px;color:#101828;margin:0}.ah-iso .im{height:340px;background-size:contain;background-repeat:no-repeat;background-position:center}.ah-s.d.sc{background:linear-gradient(135deg,#0A1F3A,#0F2B4F);position:relative;overflow:hidden}.ah-s.d.sc:before{content:"";position:absolute;right:-120px;top:-120px;width:420px;height:420px;border-radius:50%;background:radial-gradient(circle,rgba(10,102,194,.35),transparent 70%)}.ah-sc2{position:relative;display:grid;grid-template-columns:1.15fr 1fr;gap:56px;align-items:center}.ah-sc2 .ey{font-size:12px;letter-spacing:.18em;color:#F2862E;font-weight:700;margin-bottom:12px}.ah-sc2 h2{color:#fff;margin:0 0 14px;font-size:36px}.ah-sc2 p{color:#C9D6E3;margin:0 0 22px;max-width:540px}.ah-sc2 ul{list-style:none;margin:0 0 28px;padding:0;display:grid;gap:12px}.ah-sc2 li{display:flex;gap:12px;align-items:center;color:#fff;font-weight:600;font-size:15.5px}.ah-sc2 li svg{flex:none;color:#F2862E}.ah-sc2 .ah-b{margin:0}.ah-lk{background:#fff;border-radius:22px;overflow:hidden;box-shadow:0 30px 70px rgba(0,0,0,.35)}.ah-lk .bn{height:96px;background:linear-gradient(135deg,#0A66C2,#0F2B4F)}.ah-lk .bd2{padding:0 30px 30px}.ah-lk .av{width:84px;height:84px;margin-top:-42px;border-radius:18px;background:#fff;border:4px solid #fff;box-shadow:0 8px 22px rgba(15,43,79,.2);display:flex;align-items:center;justify-content:center;font-family:Montserrat,Inter,sans-serif;font-weight:800;font-size:26px;color:#0F2B4F;position:relative}.ah-lk h3{margin:16px 0 4px;font-size:19px;line-height:1.3;color:#0F2B4F}.ah-lk .sb{color:#667085;font-size:14px;margin:0 0 20px}.ah-lk .ah-b{width:100%;justify-content:center;margin:0}.ah-lk .in2{display:flex;align-items:center;gap:8px;margin-top:16px;color:#667085;font-size:13px}.ah-lk .in2 svg{color:#0A66C2}@media(max-width:900px){.ah-iso,.ah-sc2{grid-template-columns:1fr;gap:34px}.ah-sc2 h2{font-size:29px}.ah-iso h2{font-size:26px}.ah-iso .im{height:240px}}';document.head.appendChild(st2);
  var top=document.createElement('div');top.id='ah-top';top.className='ah';top.innerHTML=hero()+lines()+finder()+expertise()+gallery()+steps()+docs()+why()+iso()+social()+cta();
  f.parentElement.insertBefore(top,f);
  bindFinder(top);counters(top);reveal(top);
  return true;
 }
 var n=0,iv=setInterval(function(){if(mount()||++n>80)clearInterval(iv)},400);
 window.__ahMount=mount;
})();

})();
}catch(e){if(window.console)console.warn("AM-FR v4_home.0",e);}
try{
/* AM-PLAST v1 (2026-10-13): unified Recycled PP & PE page (data-driven). Edit the G array to change grades / MFR. */
(function(){
 if(window.__amPlastFR) return; window.__amPlastFR=1;
 var P=location.pathname.replace(/\/$/,'');
 if(P==='/fr/granulés-de-polypropylène'||P==='/fr/granulés-de-polyéthylène'){
  location.replace('/fr/notre-produit'+(P==='/fr/granulés-de-polypropylène'?'#polypropylene':'#polyethylene'));return;
 }
 if(['/plastico','/notre-produit'].indexOf(decodeURIComponent(location.pathname).toLowerCase().replace(/\/+$/,'').replace(/^\/fr(?=\/|$)/,''))<0) return;
 var C=String.fromCharCode,B='https://assets.wuiltweb.com/241623/',D=C(176)+'C',MU=C(181);
 var T1='g/10 min (2.16 kg @ 230'+D+')', T2='g/10 min (2.16 kg @ 190'+D+')';
 var G=[
  {id:'ipp',f:'PP',n:'PP raffia (IPP)',c:'Noir',src:'Sacs tissés et big bags',proc:['Membranes bitumineuses'],mfr:'7 - 10',t:T1,img:'0814202213411462f8fb7a15b9b.jpg'},
  {id:'pph-t',f:'PP',n:'Homopolymère de PP',c:'Transparent',src:'Déchets industriels',proc:['Injection'],mfr:'16.0 - 21.0',t:T1,img:'0814202214514462f90c0092e57.jpg'},
  {id:'pph-w',f:'PP',n:'Homopolymère de PP',c:'Blanc',src:'Déchets de consommation et industriels',proc:['Injection'],mfr:'12.0 - 18.0',t:T1,img:'0814202214524262f90c3addce6.jpg'},
  {id:'pph-c',f:'PP',n:'Homopolymère de PP',c:'Bleu, rouge, vert et autres couleurs',src:'Déchets de consommation et industriels',proc:['Injection','Extrusion'],mfr:'14.0 - 18.0',t:T1,img:'0814202214534162f90c757422e.jpg'},
  {id:'ppc',f:'PP',n:'Copolymère de PP',c:'Noir',src:'Déchets de batteries et industriels',proc:['Injection'],mfr:'10.0 - 12.0',t:T1,img:'0814202214284662f9069e97a38.jpg'},
  {id:'ld-c',f:'PE',n:'LDPE',c:'Couleurs variées',src:'Films de consommation et industriels',proc:['Film'],mfr:'0.55 - 1.1',t:T2,img:'0814202213350062f8fa0419cbc.png'},
  {id:'ld-b',f:'PE',n:'LDPE noir GR',c:'Noir',src:'Tuyaux d\'irrigation',proc:['Extrusion'],mfr:'1.35 - 1.6',t:T2,img:'0814202214284662f9069e97a38.jpg'},
  {id:'ld-bc',f:'PE',n:'LDPE',c:'Noir',src:'Films de consommation et industriels',proc:['Film'],mfr:'0.65 - 0.89',t:T2,img:'0814202213332062f8f9a0b4867.jpg'},
  {id:'hd-c',f:'PE',n:'HDPE',c:'Bleu et rouge',src:'Fûts',proc:['Extrusion','Soufflage'],mfr:'0.35 - 0.60',t:T2,img:'0814202214313662f90748ce60d.jpg'},
  {id:'hd-g',f:'PE',n:'HDPE',c:'Vert et bleu',src:'Bouchons de bouteille',proc:['Injection'],mfr:'3.50 - 4.50',t:T2,img:'0814202213352762f8fa1f7b405.jpg'},
  {id:'hd-w',f:'PE',n:'HDPE',c:'Blanc',src:'Bouteilles blanches',proc:['Extrusion','Soufflage'],mfr:'0.25 - 0.35',t:T2,img:'0814202214333062f907ba3f7a7.jpg'}
 ];
 var PROCS=['Injection','Extrusion','Soufflage','Film','Membranes bitumineuses'];
 var FAQ=[
  ['Quel grade recyclé est utilisé pour les membranes bitumineuses d\'étanchéité ?','PP raffia (IPP) noir, un grade de polypropylène isotactique issu de sacs tissés et de big bags, avec un MFR d\'environ 7 - 10 g/10 min. Nous fournissons aussi un film de surface mince en HDPE pour les membranes.'],
  ['Comment les grades sont-ils définis ?','Chaque grade est défini par le type de polymère (PP ou PE), la couleur, le matériau d\'origine et l\'indice de fluidité (MFR). Le grade exact et la plage de MFR sont confirmés avec chaque client avant le chargement.'],
  ['À quels procédés servent les granulés ?','Moulage par injection (caisses, chaises, palettes, articles ménagers), extrusion (tapis, tuyaux, feuilles), soufflage (bouteilles et emballages), film et composant polymère des membranes bitumineuses.'],
  ['Comment le matériau est-il emballé et expédié ?','En sacs tissés ou en big bags, selon votre besoin, chargés en conteneurs complets depuis l\'Égypte.'],
  ['Comment demander un devis ?','Envoyez-nous le grade, la plage de MFR, la quantité et le port de destination via la page de contact ou par WhatsApp. Nous répondons sous un jour ouvré.']
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
 '@media(max-width:980px){.amp-g{grid-template-columns:repeat(2,1fr)}.amp-st{grid-template-columns:repeat(2,1fr)}.amp-ft,.amp-pk{grid-template-columns:1fr}.amp-bar{top:0}}'+
 '@media(max-width:620px){.amp-im{aspect-ratio:16/10}.amp{padding:36px 16px}.amp h2{font-size:25px}.amp-g{grid-template-columns:1fr}.amp-ft .tx{padding:24px}.amp-cta{padding:24px}}'+
 '@media(prefers-reduced-motion:reduce){.amp *{transition:none!important}}';
 var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
 function wa(t){return 'https://wa.me/201146006496?text='+encodeURIComponent('Bonjour l\'équipe Al Manara, je vous ai trouvés sur manaragrp.com. Je suis intéressé par : '+t+'. Quantité : ... / Destination : ...')}
 function card(g){
  var ac=g.f==='PP'?'':'pe';
  return '<div class="amp-c" data-f="'+g.f+'" data-p="'+g.proc.join('|')+'" id="amp-'+g.id+'"><div class="amp-im"><img loading="lazy" alt="Granulés recyclés : '+g.n+', '+g.c+' - Al Manara, Égypte" src="'+B+g.img+'"><span class="amp-bd '+ac+'">'+g.f+'</span></div><div class="amp-in"><div><h3>'+g.n+'</h3><div class="amp-cl">'+g.c+'</div></div><dl class="amp-sp"><dt>Origine</dt><dd>'+g.src+'</dd><dt>Procédé</dt><dd>'+g.proc.join(', ')+'</dd></dl><div class="amp-mf"><span>MFR</span><b>'+g.mfr+'</b><span>'+g.t+'</span></div><div class="amp-ac"><a class="a1" href="'+wa(g.n+' '+g.c)+'" target="_blank" rel="noopener">Demander un devis</a><a class="a2" href="/fr/nous-contacter">Contact</a></div></div></div>';
 }
 function build(){
  var h='<div class="k">POLYPROPYLÈNE ET POLYÉTHYLÈNE RECYCLÉS</div><h2>Une seule gamme. Chaque grade, clairement défini.</h2><p class="lead">Granulés recyclés de PP et PE depuis l\'Égypte, définis par polymère, couleur, origine et indice de fluidité, pour le moulage par injection, l\'extrusion, le soufflage, le film et les membranes bitumineuses d\'étanchéité.</p>';
  h+='<div class="amp-st"><div><b>'+G.length+'</b><span>GRADES</span></div><div><b>2</b><span>FAMILLES DE POLYMÈRES &middot; PP ET PE</span></div><div><b>5</b><span>PROCÉDÉS</span></div><div><b>FCL</b><span>CONTENEURS COMPLETS</span></div></div>';
  h+='<div class="amp-bar" id="amp-bar"><button class="on" data-f="ALL">Tous les grades</button><button data-f="PP">Polypropylène (PP)</button><button data-f="PE">Polyéthylène (PE)</button><span class="sp"></span>'+PROCS.map(function(p){return '<button data-p="'+p+'">'+p+'</button>'}).join('')+'<span class="cnt" id="amp-cnt"></span></div>';
  h+='<div class="amp-g" id="amp-grid">'+G.map(card).join('')+'</div>';
  h+='<div class="amp-sec" id="amp-compare"><div class="k">COMPARER</div><h2>Tous les grades en un coup d\'œil</h2><div class="amp-tw"><table class="amp-t"><thead><tr><th>GRADE</th><th>POLYMÈRE</th><th>COULEUR</th><th>ORIGINE</th><th>PROCÉDÉ</th><th>MFR (g/10 min)</th></tr></thead><tbody>'+G.map(function(g){return '<tr><td>'+g.n+'</td><td>'+g.f+'</td><td>'+g.c+'</td><td>'+g.src+'</td><td>'+g.proc.join(', ')+'</td><td>'+g.mfr+'</td></tr>'}).join('')+'</tbody></table></div><p class="amp-note">MFR : PP à 230'+D+' / 2.16 kg, PE a 190'+D+' / 2.16 kg. Plages typiques ; le grade exact et la plage de MFR sont confirmés avec chaque client avant le chargement.</p></div>';
  h+='<div class="amp-sec"><div class="amp-ft"><div class="tx"><div class="k">MEMBRANES BITUMINEUSES D\'ÉTANCHÉITÉ</div><h2>Matériaux pour fabricants de membranes</h2><p>Deux produits pour la ligne de membranes : du PP raffia (IPP) recyclé pour le compound polymère et un film de surface mince en HDPE.</p><ul><li><b>PP raffia (IPP) noir</b> &middot; MFR 7 - 10 g/10 min, issu de sacs tissés et de big bags</li><li><b>Film de surface HDPE</b> &middot; épaisseur 7 &plusmn; 2 '+MU+'m, poids unitaire 7 &plusmn; 0.5 g/m&sup2;</li><li>Résistance à la chaleur &ge; 120 '+D+' &middot; allongement &ge; 200 % (sens longitudinal)</li><li>Résistance à la traction &ge; 3.0 N/10 mm (sens longitudinal) &middot; environ 130,000 m&sup2; par tonne &middot; impression en une ou deux couleurs</li></ul><a href="'+wa('PP raffia (IPP) / film de surface HDPE pour membranes bitumineuses')+'" target="_blank" rel="noopener" style="display:inline-block;background:#F2862E;color:#fff;text-decoration:none;font-weight:700;border-radius:999px;padding:12px 22px">Se renseigner sur les matières pour membranes</a></div><div class="im" style="background-image:url('+B+'bitumen-app-membrane-500x500.jpg)"></div></div></div>';
  h+='<div class="amp-sec"><div class="k">APPLICATIONS</div><h2>Où ces granulés sont utilisés</h2><div class="amp-ap"><span>Moulage par injection : caisses, chaises, tables, palettes, articles ménagers</span><span>Soufflage : bouteilles de détergent, emballages</span><span>Extrusion : tapis, tuyaux agricoles, feuilles</span><span>Film</span><span>Raffia et sacs tissés</span><span>Membranes bitumineuses d\'étanchéité</span></div></div>';
  h+='<div class="amp-sec"><div class="amp-pk"><div class="im" style="background-image:url('+B+'0906202112193161360753c9f93.jpeg)"></div><div class="bx"><div class="k">EMBALLAGE ET CHARGEMENT</div><h2>Emballé pour l\'export</h2><ul style="padding-left:18px;margin:0"><li>Sacs tissés ou big bags, selon votre besoin</li><li>Chargé en conteneurs complets depuis l\'Égypte</li><li>Grade et plage de MFR confirmés avec vous avant le chargement</li></ul></div></div></div>';
  h+='<div class="amp-sec amp-fq"><div class="k">QUESTIONS FRÉQUENTES</div><h2>PP et PE recyclés : questions courantes</h2>'+FAQ.map(function(q){return '<details><summary>'+q[0]+'</summary><p>'+q[1]+'</p></details>'}).join('')+'</div>';
  h+='<div class="amp-sec"><div class="amp-cta"><div><h3>Indiquez-nous votre grade, votre MFR et votre destination</h3><p>Notre équipe de support technique recommande un grade adapté et confirme la disponibilité. Nous répondons sous un jour ouvré.</p></div><div class="b"><a class="w" href="'+wa('granulés recyclés de PP / PE')+'" target="_blank" rel="noopener">Support technique par WhatsApp</a><a class="o" href="/fr/nous-contacter">Demander un devis</a></div></div></div>';
  return h;
 }
 function filt(w){
  var f='ALL',p=null;
  function apply(){var n=0;w.querySelectorAll('#amp-grid .amp-c').forEach(function(c){var ok=(f==='ALL'||c.getAttribute('data-f')===f)&&(!p||c.getAttribute('data-p').split('|').indexOf(p)>-1);c.classList.toggle('hide',!ok);if(ok)n++});w.querySelector('#amp-cnt').textContent=n+' de '+G.length+' grades';
   w.querySelectorAll('#amp-bar button').forEach(function(b){var on=b.hasAttribute('data-f')?(!p&&b.getAttribute('data-f')===f):(b.getAttribute('data-p')===p);b.classList.toggle('on',on)})}
  w.querySelectorAll('#amp-bar button').forEach(function(b){b.onclick=function(){if(b.hasAttribute('data-f')){f=b.getAttribute('data-f');p=null}else{p=(p===b.getAttribute('data-p'))?null:b.getAttribute('data-p');f='ALL'}apply()}});
  apply();
  window.__ampSet=function(x){f=x;p=null;apply()};
 }
 function ld(){
  var s=document.createElement('script');s.type='application/ld+json';s.setAttribute('data-am-plast','1');
  s.textContent=JSON.stringify({'@context':'https://schema.org','@graph':[{'@type':'FAQPage','mainEntity':FAQ.map(function(q){return {'@type':'Question','name':q[0],'acceptedAnswer':{'@type':'Answer','text':q[1]}}})},{'@type':'ItemList','name':'Granulés recyclés de PP et PE - Al Manara Plast','itemListElement':G.map(function(g,i){return {'@type':'ListItem','position':i+1,'name':g.n+' '+g.c+' (MFR '+g.mfr+' '+g.t+')'}})}]});
  document.head.appendChild(s);
 }
 function mount(){
  if(document.getElementById('am-plast')) return true;
  var ws=[].slice.call(document.querySelectorAll('.section-preview-wrapper,.section-editor-wrapper'));
  var foot=ws.filter(function(e){return /^(Page d.accueil|ACCUEIL)\s*\n?\s*(À propos de nous|QUI SOMMES-NOUS)/i.test((e.innerText||'').trim())}).pop();
  if(!foot) return false;
  var hide=ws.filter(function(e){return e!==foot});
  hide.forEach(function(e){e.style.display='none'});
  var w=document.createElement('div');w.id='am-plast';w.className='amp';w.innerHTML=build();
  var a=foot;while(a.parentElement&&hide.length&&!a.parentElement.contains(hide[0]))a=a.parentElement;
  a.parentElement.insertBefore(w,a);w.insertAdjacentHTML('beforebegin','<section style="height:250px;display:flex;align-items:center;justify-content:center;text-align:center;padding:0 20px;box-sizing:border-box;background:linear-gradient(rgba(10,31,58,.82),rgba(10,31,58,.82)),url(https://assets.wuiltweb.com/241623/08312022091309630f262528c16.jpg) center/cover no-repeat"><h1 style="margin:0;color:#fff;font:500 clamp(31.5px,8.4vw,48px)/1.15 Montserrat,Inter,Arial,sans-serif">AL MANARA PLAST – Granulés recyclés de PP et PE depuis l\'Égypte</h1></section>');w.insertAdjacentHTML('afterend','<section style="background:#0F2B4F;color:#fff;padding:56px 20px;text-align:center;font-family:Inter,Poppins,Arial,sans-serif"><div style="max-width:760px;margin:0 auto"><h2 style="font-family:Montserrat,Inter,sans-serif;color:#fff;font-size:30px;font-weight:700;line-height:1.2;margin:0 0 10px">Prêt à parler de votre besoin ?</h2><p style="margin:0 0 22px;color:#D6DEE9;font-size:16px;line-height:1.55">Envoyez-nous le matériau, la quantité et la destination. Notre équipe technique vous répond sous un jour ouvré.</p><a href="/fr/nous-contacter" style="display:inline-block;background:#F2862E;color:#fff;font-weight:600;padding:13px 28px;border-radius:999px;text-decoration:none">Demander un devis</a></div></section>');
  filt(w);ld();
  function go(){var m={'#polypropylene':'PP','#polyethylene':'PE'}[location.hash];if(m){window.__ampSet(m);var b=w.querySelector('#amp-bar');if(b)b.scrollIntoView({behavior:'smooth',block:'start'})}}
  go();addEventListener('hashchange',go);
  return true;
 }
 var n=0,iv=setInterval(function(){if(mount()||++n>60)clearInterval(iv)},400);
})();
}catch(e){if(window.console)console.warn("AM-FR v4_plast.0",e);}
try{
(function(){
 if(window.__amAboutFR) return; window.__amAboutFR=1;
 if(['/à-propos-de-nous'].indexOf(decodeURIComponent(location.pathname).toLowerCase().replace(/\/+$/,'').replace(/^\/fr(?=\/|$)/,''))<0) return;
 var B='https://assets.wuiltweb.com/241623/';
 var IMG={f:'101320261430146ace407655d88.webp',y:'101320261430596ace40a3254c6.webp'};
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
 '.ab-fr{position:relative}.ab-ph{height:470px;border-radius:26px;background-size:cover;background-position:center;box-shadow:0 30px 70px rgba(0,0,0,.45);border:1px solid rgba(255,255,255,.18)}.ab-chip{position:absolute;left:-22px;bottom:26px;background:rgba(10,31,58,.82);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.22);border-radius:16px;padding:14px 18px;max-width:300px;font-size:14px;font-weight:600;line-height:1.4}.ab-chip i{display:block;font-style:normal;font-size:11px;letter-spacing:.14em;color:#F2862E;margin-bottom:4px}'+
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
 var DEST=[['Côte d\'Ivoire',-4,5.3,'b','Carbonate de calcium et polymères recyclés',10,4],['Italie',12.5,42.5,'p','Polymères recyclés',10,-8],['Maroc',-7,32,'p','Polymères recyclés',-10,4],['Tunisie',9.5,34,'p','Polymères recyclés',10,18],['Qatar',51.2,25.3,'p','Polymères recyclés',12,4],['Venezuela',-66,8,'p','Polymères recyclés',12,4]];
 var K=1.7,L0=-92,B1=66,EG=[30,29];
 function xy(lo,la){return [(lo-L0)/K*10,(B1-la)/K*10]}
 function mapSvg(){
  var rows=MAP.split('|'),d='';
  rows.forEach(function(r,j){var v=r.charAt(0)==='1',x=0;r.slice(1).split(',').forEach(function(n){n=+n;if(v){for(var i=0;i<n;i++)d+='M'+((x+i)*10+5)+' '+(j*10+5)+'h0'}x+=n;v=!v})});
  var e=xy(EG[0],EG[1]),arcs='',pins='';
  DEST.forEach(function(t,i){
   var p=xy(t[1],t[2]),mx=(e[0]+p[0])/2,my=(e[1]+p[1])/2,dist=Math.sqrt(Math.pow(e[0]-p[0],2)+Math.pow(e[1]-p[1],2)),cy=my-dist*.3;
   var col=t[3]==='b'?CY:OR;
   arcs+='<path class="ab-arc" pathLength="1" style="--i:'+i+'" stroke="'+col+'" d="M'+e[0].toFixed(1)+' '+e[1].toFixed(1)+' Q'+mx.toFixed(1)+' '+cy.toFixed(1)+' '+p[0].toFixed(1)+' '+p[1].toFixed(1)+'"/>';
   pins+='<g class="ab-pn" style="--i:'+i+'"><circle cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="7" fill="'+(t[3]==='b'?OR:col)+'" stroke="'+(t[3]==='b'?CY:'#fff')+'" stroke-width="3"/><text class="ab-lb" x="'+(p[0]+t[5]).toFixed(1)+'" y="'+(p[1]+t[6]).toFixed(1)+'"'+(t[5]<0?' text-anchor="end"':'')+'>'+t[0]+'</text></g>';
  });
  var hub='<circle class="ab-pulse" cx="'+e[0].toFixed(1)+'" cy="'+e[1].toFixed(1)+'" r="9"/><circle class="ab-hub" cx="'+e[0].toFixed(1)+'" cy="'+e[1].toFixed(1)+'" r="9" stroke="#fff" stroke-width="3"/><text class="ab-lb" x="'+(e[0]+14).toFixed(1)+'" y="'+(e[1]+22).toFixed(1)+'" style="font-size:15px">ÉGYPTE</text>';
  return '<svg id="ab-svg" viewBox="0 0 960 550" role="img" aria-label="Carte des destinations d\'exportation depuis l\'Égypte"><path class="ab-dots" d="'+d+'"/>'+arcs+hub+pins+'</svg>';
 }
 function hero(){
  return '<section class="ab-hero"><div class="ab-w ab-hg"><div class="ab-r"><div class="ab-pill">À PROPOS D\'AL MANARA</div><h1>Une entreprise commerciale familiale, <span>créée pour l\'approvisionnement industriel.</span></h1><p class="s">Notre famille fait du commerce depuis 1999. En 2020, nous avons fondé Al Manara pour nous consacrer à l\'import et à l\'export. Aujourd\'hui, nous fournissons des polymères recyclés et du carbonate de calcium depuis l\'Égypte à des fabricants d\'Europe, d\'Afrique et du Moyen-Orient.</p><a class="ab-b o" href="#ab-story">Découvrez notre histoire '+ic(ARW,18)+'</a><a class="ab-b g" href="/fr/nous-contacter">Parlez à notre équipe</a></div>'+
  '<div class="ab-r ab-fr"><div class="ab-ph" role="img" aria-label="Ingénieur d\'Al Manara sur une ligne de production de membranes bitumineuses" style="background-image:url('+B+IMG.f+')"></div><div class="ab-chip"><i>SUR SITE</i>En contact direct avec les lignes de production où nos matériaux sont utilisés</div></div></div>'+
  '<div class="ab-st"><div><b>1999</b><span>début de l\'entreprise familiale</span></div><div><b>2020</b><span>fondation d\'Al Manara</span></div><div><b data-n="10" data-pre="+">+10</b><span>pays d\'exportation</span></div><div><b data-n="2">2</b><span>lignes d\'activité, un seul standard</span></div></div></section>';
 }
 var TL=[['1999','Début d\'une entreprise familiale','L\'entreprise familiale commence à commercer. C\'est le socle de l\'expérience que nous apportons à chaque commande.'],['2020','Fondation d\'Al Manara','Une société à responsabilité limitée enregistrée en Égypte, dédiée à l\'import, à l\'export et aux agences commerciales.'],['2021','Début des commandes à l\'export','Nos registres de commandes débutent : des chargements en conteneurs quittent l\'Égypte pour des acheteurs industriels à l\'étranger.'],['2022','Carbonate de calcium vers l\'Afrique','Premières expéditions de carbonate de calcium, en sacs de 25 kg, vers l\'Afrique de l\'Ouest.'],['2026','Deux marques, une bibliothèque technique','Al Manara Plast et Al Manara Mining, avec des fiches techniques et de sécurité pour chaque grade de carbonate de calcium.']];
 function story(){
  return '<section class="ab-s l" id="ab-story"><div class="ab-w"><div class="ab-k">NOTRE HISTOIRE</div><h2>D\'un commerce familial à une entreprise exportatrice</h2><p class="ab-lead">Chaque étape a ajouté de l\'expérience en approvisionnement, conditionnement et embarquement ; nos clients travaillent donc avec une équipe qui l\'a déjà fait auparavant.</p><div class="ab-tl ab-r">'+TL.map(function(t){return '<div class="ab-ti"><b>'+t[0]+'</b><h3>'+t[1]+'</h3><p>'+t[2]+'</p></div>'}).join('')+'</div></div></section>';
 }
 function route(){
  return '<section class="ab-s d"><div class="ab-w"><div class="ab-k">OÙ NOUS EXPÉDIONS</div><h2>Des matériaux qui quittent l\'Égypte vers des fabricants à l\'étranger</h2><p class="ab-lead">Destinations sélectionnées dans nos registres d\'expédition. Nous coordonnons chaque envoi, du chargement en Égypte jusqu\'aux documents dont votre douane a besoin.</p><div class="ab-map ab-r" id="ab-map">'+mapSvg()+'</div>'+
  '<div class="ab-lg"><div><i style="background:'+OR+'"></i><p style="margin:0"><b>Polymères recyclés</b><span>Italie, Maroc, Tunisie, Qatar, Venezuela</span></p></div><div><i style="background:'+CY+'"></i><p style="margin:0"><b>Carbonate de calcium</b><span>Côte d\'Ivoire, depuis 2022</span></p></div><div><i style="background:linear-gradient(90deg,'+OR+' 50%,'+CY+' 50%)"></i><p style="margin:0"><b>Et d\'autres</b><span>+10 pays au total</span></p></div></div></div></section>';
 }
 function yard(){
  return '<section class="ab-yd" role="img" aria-label="Carbonate de calcium chargé en conteneurs d\'exportation" style="background-image:url('+B+IMG.y+')"><div class="ab-w"><div class="ab-r"><div class="ab-k">JOUR DE CHARGEMENT</div><h2>Là où une commande devient un conteneur</h2><p>Carbonate de calcium en sacs chargé dans des conteneurs d\'export sur le parc de l\'usine, prêt pour le port.</p></div></div></section>';
 }
 var FACTS=[['Entreprise','Al Manara for Investment and Commercial Agencies'],['Forme juridique','Société à responsabilité limitée, Égypte'],['Fondation','2020 ; entreprise familiale depuis 1999'],['Équipe','De 11 à 50 personnes'],['Lignes d\'activité','Al Manara Plast et Al Manara Mining'],['Régions d\'exportation','Europe, Afrique et Moyen-Orient'],['Fiches de données de sécurité','Anglais, français, espagnol et portugais'],['Délai de réponse','Sous un jour ouvré']];
 function facts(){
  return '<section class="ab-s l"><div class="ab-w"><div class="ab-k">DONNÉES DE L\'ENTREPRISE</div><h2>Sachez avec qui vous traitez</h2><div class="ab-fg"><div class="ab-fc ab-r">'+FACTS.map(function(f){return '<div class="ab-fr2"><span>'+f[0]+'</span><b>'+f[1]+'</b></div>'}).join('')+'</div><div class="ab-r"><div class="ab-of"><div class="t">'+ic(PIN,18)+'SIÈGE SOCIAL</div><p>47 Neighborhood 41, Ville du 10 Ramadan, Égypte</p></div><div class="ab-of"><div class="t">'+ic(PIN,18)+'BUREAU PRINCIPAL</div><p>E9 Sky Degla1, Ville du 10 Ramadan, Égypte<span>Réunions sur rendez-vous</span></p></div><a class="ab-b n" href="/fr/nous-contacter">Contactez-nous '+ic(ARW,18)+'</a></div></div></div></section>';
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
  var ws=[].slice.call(document.querySelectorAll('.section-preview-wrapper,.section-editor-wrapper'));
  var foot=ws.filter(function(e){return /^(Page d.accueil|ACCUEIL)\s*\n?\s*(À propos de nous|QUI SOMMES-NOUS)/i.test((e.innerText||'').trim())}).pop();
  if(!foot) return false;
  var form=ws.filter(function(e){return e!==foot&&e.querySelector('form,input[type=email]')})[0];
  var hide=ws.filter(function(e){return e!==foot&&e!==form});
  hide.forEach(function(e){e.style.display='none'});
  var a=form||foot;while(hide.length&&a.parentElement&&!a.parentElement.contains(hide[0]))a=a.parentElement;
  var s=document.createElement('style');s.id='ab-css';s.textContent=css;document.head.appendChild(s);
  var top=document.createElement('div');top.id='ab-top';top.className='ab';top.innerHTML=hero()+story()+route()+yard()+facts();
  a.parentElement.insertBefore(top,a);if(!form)top.insertAdjacentHTML('afterend','<section style="background:#0F2B4F;color:#fff;padding:56px 20px;text-align:center;font-family:Inter,Poppins,Arial,sans-serif"><div style="max-width:760px;margin:0 auto"><h2 style="font-family:Montserrat,Inter,sans-serif;color:#fff;font-size:30px;font-weight:700;line-height:1.2;margin:0 0 10px">Prêt à parler de votre besoin ?</h2><p style="margin:0 0 22px;color:#D6DEE9;font-size:16px;line-height:1.55">Envoyez-nous le matériau, la quantité et la destination. Notre équipe technique vous répond sous un jour ouvré.</p><a href="/fr/nous-contacter" style="display:inline-block;background:#F2862E;color:#fff;font-weight:600;padding:13px 28px;border-radius:999px;text-decoration:none">Demander un devis</a></div></section>');
  fit();addEventListener('resize',fit);counters(top);reveal(top);
  return true;
 }
 var n=0,iv=setInterval(function(){if(mount()||++n>80)clearInterval(iv)},400);
})();
}catch(e){if(window.console)console.warn("AM-FR v4_about.0",e);}
try{
/* AM-ETHICS v1 (2026-10-13): redesigned Business Ethics page */
(function(){
 if(window.__amEthicsFR) return; window.__amEthicsFR=1;
 if(["/l'éthique-des-affaires"].indexOf(decodeURIComponent(location.pathname).toLowerCase().replace(/\/+$/,'').replace(/^\/fr(?=\/|$)/,''))<0) return;
 var B='https://assets.wuiltweb.com/241623/';
 var WA='https://wa.me/201146006496?text='+encodeURIComponent('Bonjour l\'équipe Al Manara, j\'ai une question sur vos pratiques commerciales.');
 var IC={
  doc:'<path d="M7 3h7l5 5v13H7zM14 3v5h5M9.5 14l2 2 3.5-4"/>',
  lock:'<path d="M6 11h12v9H6zM8 11V8a4 4 0 018 0v3"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  scale:'<path d="M12 4v16M6 20h12M5 7h14M5 7l-3 7a3 3 0 006 0zM19 7l-3 7a3 3 0 006 0z"/>',
  shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  chat:'<path d="M4 5h16v11H9l-5 4z"/>',
  leaf:'<path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15M5 19c2-4 5-7 9-9"/>'
 };
 function ic(n){return '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">'+IC[n]+'</svg>'}
 var PR=[
  ['doc','Des spécifications honnêtes','Nous décrivons chaque matériau avec son grade réel, ses spécifications et ses documents. Ce que vous approuvez est ce que nous chargeons.'],
  ['lock','Confidentialité','Les informations sur les clients, les fournisseurs et les prix sont confidentielles. Nous ne partageons jamais les données d\'un client avec un autre.'],
  ['globe','Conformité à l\'export','Nous respectons la réglementation égyptienne à l\'export et les exigences d\'importation de chaque pays de destination.'],
  ['scale','Traitement équitable','Nous agissons avec transparence et équité dans chaque devis, contrat et expédition, avec des conditions claires dès le départ.'],
  ['shield','Sécurité et manutention responsable','Une fiche de données de sécurité pour chaque grade de carbonate de calcium, des pratiques sûres d\'emballage et de chargement, et des partenaires qui respectent la santé et la sécurité au travail.'],
  ['chat','Dialogue ouvert','Nous répondons directement aux questions, partageons les informations dont l\'acheteur a besoin pour décider et construisons des relations durables fondées sur la confiance et le respect.']
 ];
 var ST=[
  ['Confirmer','Nous confirmons avec vous le grade, la spécification et la quantité avant de charger quoi que ce soit.'],
  ['Documenter','TDS et SDS de chaque grade de carbonate de calcium, et un jeu clair de documents d\'expédition.'],
  ['Emballer et charger','Sacs tissés ou big bags, chargés en toute sécurité en conteneurs complets, sous supervision du chargement.'],
  ['Expédier','Facture commerciale, liste de colisage, connaissement et certificat d\'origine, en règle.'],
  ['Assurer le suivi','Nous restons en contact après la livraison pour vérifier que le matériau correspond à ce que vous avez approuvé.']
 ];
 var FAQ=[
  ['Partagez-vous les informations de mon entreprise ou les prix ?','Non. Les informations sur les clients, les fournisseurs et les prix sont confidentielles. Nous ne les partageons ni avec d\'autres clients ni avec des tiers.'],
  ['Quels documents reçois-je avec une expédition ?','Facture commerciale, liste de colisage, connaissement et certificat d\'origine. Pour le carbonate de calcium, nous remettons en plus une TDS et une SDS pour chaque grade.'],
  ['Comment garantissez-vous que le matériau correspond à ce que j\'ai approuvé ?','Nous confirmons avec vous le grade, la spécification et, pour les granulés recyclés, la plage de MFR avant le chargement, et nous décrivons le matériau par son grade réel.'],
  ['À qui m\'adresser pour une préoccupation ou une réclamation ?','Écrivez à notre responsable du support technique par WhatsApp au +20 11 4600 6496 ou par e-mail. Nous répondons sous un jour ouvré et traitons chaque message de manière confidentielle.']
 ];
 var css='.ae{font-family:Inter,Poppins,Arial,sans-serif;color:#1D2939;line-height:1.55}.ae *{box-sizing:border-box}.ae-w{max-width:1180px;margin:0 auto;padding:0 20px}'+
 '.ae h1,.ae h2,.ae h3{font-family:Montserrat,Inter,sans-serif;margin:0}.ae h2{color:#0F2B4F;font-size:34px;line-height:1.2;margin-bottom:12px}.ae .k{color:#F2862E;font-weight:700;font-size:12px;letter-spacing:.14em;margin-bottom:8px}.ae .lead{color:#475467;font-size:16.5px;max-width:760px;margin:0}'+
 '.ae-hero{position:relative;color:#fff;background:#0A1F3A;overflow:hidden}.ae-hero:before{content:"";position:absolute;inset:0;background:url('+B+'092820261059276aba488fec41b.webp) center/cover;opacity:.32}.ae-hero:after{content:"";position:absolute;inset:0;background:linear-gradient(110deg,#0A1F3A 25%,rgba(10,31,58,.55))}'+
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
  var h='<section class="ae-hero"><div class="ae-w"><div class="k" style="color:#F2862E;font-weight:700;font-size:12px;letter-spacing:.14em;margin-bottom:12px">ÉTHIQUE DES AFFAIRES ET CONFORMITÉ</div><h1>Notre manière de travailler : <span>honnêteté, confidentialité et conformité.</span></h1><p>Des spécifications exactes, des informations protégées, des exportations conformes à la loi et un traitement équitable dans chaque devis, contrat et expédition.</p><a class="ae-b o" href="#ae-principles">Lisez nos principes</a><a class="ae-b g" href="'+WA+'" target="_blank" rel="noopener">Posez-nous une question</a></div></section>';
  h+='<div class="ae-tr ae-r"><div class="ae-w"><div class="i"><b>TDS + SDS</b><span>pour chaque grade de carbonate de calcium</span></div><div class="i"><b>Grade confirmé</b><span>avec vous avant chaque chargement</span></div><div class="i"><b>Confidentiel</b><span>données clients, fournisseurs et prix</span></div><div class="i"><b>1 jour ouvré</b><span>de réponse à chaque message</span></div></div></div>';
  h+='<section class="ae-s" id="ae-principles"><div class="ae-w"><div class="k">NOS PRINCIPES</div><h2>Six engagements qui guident notre travail</h2><p class="lead">Ce sont les principes que chaque membre de notre équipe suit dans son travail avec les clients, les fournisseurs et les partenaires.</p><div class="ae-pg">'+PR.map(function(p,i){return '<div class="ae-p ae-r"><span class="n">0'+(i+1)+'</span><div class="ico">'+ic(p[0])+'</div><h3>'+p[1]+'</h3><p>'+p[2]+'</p></div>'}).join('')+'</div></div></section>';
  h+='<section class="ae-s l"><div class="ae-w"><div class="ae-sp"><div class="ae-im ae-r" style="background-image:url('+B+'08312022090259630f23c3bebd0.jpg)"></div><div class="ae-r"><div class="k">ÉCONOMIE CIRCULAIRE</div><h2>Une seconde vie pour le plastique</h2><p class="lead">Nos granulés recyclés de PP et PE donnent au plastique post-industriel et post-consommation une seconde vie comme matière première de nouveaux produits.</p><ul class="ae-ck"><li>Aide les fabricants à réduire l\'usage de polymère vierge</li><li>Grades définis par polymère, couleur, origine et MFR</li><li>Utilisés en injection, extrusion, soufflage, film et membranes bitumineuses</li></ul></div></div></div></section>';
  h+='<section class="ae-s"><div class="ae-w"><div class="k">EN PRATIQUE</div><h2>De la demande à la livraison</h2><p class="lead">Comment ces engagements se traduisent dans chaque commande.</p><div class="ae-tl">'+ST.map(function(s,i){return '<div class="ae-st ae-r"><div class="d">'+(i+1)+'</div><h3>'+s[0]+'</h3><p>'+s[1]+'</p></div>'}).join('')+'</div></div></section>';
  h+='<section class="ae-s l"><div class="ae-w"><div class="ae-sp"><div class="ae-r"><div class="k">SÉCURITÉ ET MANUTENTION RESPONSABLE</div><h2>La sécurité, de l\'emballage jusqu\'au port</h2><p class="lead">Nous remettons une fiche de données de sécurité pour chaque grade de carbonate de calcium, suivons des pratiques sûres d\'emballage et de chargement, et travaillons avec des partenaires qui respectent la santé et la sécurité au travail.</p><ul class="ae-ck"><li>Fiche de données de sécurité SGH de 16 rubriques, en anglais, français, espagnol et portugais</li><li>Sacs tissés ou big bags, chargés en conteneurs complets</li><li>Consignes claires de manipulation et de stockage dans chaque fiche</li></ul></div><div class="ae-im ae-r" style="background-image:url('+B+'0906202112193161360753c9f93.jpeg)"></div></div></div></section>';
  h+='<section class="ae-s"><div class="ae-w"><div class="k">PARTENARIAT</div><h2>Fondée sur le respect mutuel</h2><div class="ae-pt"><div class="ae-r"><h3>Ce que vous pouvez attendre de nous</h3><ul><li>Le grade et la spécification réels, par écrit</li><li>Traitement confidentiel de vos informations</li><li>Documents d\'expédition complets et exacts</li><li>Des réponses directes, sous un jour ouvré</li></ul></div><div class="b ae-r"><h3>Ce que nous demandons à nos partenaires</h3><ul><li>Des informations exactes sur leurs besoins</li><li>Le respect de la confidentialité des deux côtés</li><li>Le respect des lois applicables au commerce</li><li>Une communication ouverte si quelque chose change</li></ul></div></div></div></section>';
  h+='<section class="ae-s l"><div class="ae-w ae-fq"><div class="k">QUESTIONS</div><h2>Questions fréquentes</h2><div style="margin-top:24px">'+FAQ.map(function(q){return '<details class="ae-r"><summary>'+q[0]+'</summary><p>'+q[1]+'</p></details>'}).join('')+'</div></div></section>';
  h+='<section class="ae-s"><div class="ae-w"><div class="ae-cta ae-r"><div><h2>Une question ou une préoccupation ?</h2><p>Écrivez à notre responsable du support technique. Chaque message est traité de manière confidentielle et reçoit une réponse sous un jour ouvré.</p></div><div><a class="ae-b o" href="'+WA+'" target="_blank" rel="noopener">WhatsApp +20 11 4600 6496</a><a class="ae-b g" href="/fr/nous-contacter">Page de contact</a></div></div></div></section>';
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
  var ws=[].slice.call(document.querySelectorAll('.section-preview-wrapper,.section-editor-wrapper'));
  var foot=ws.filter(function(e){return /^(Page d.accueil|ACCUEIL)\s*\n?\s*(À propos de nous|QUI SOMMES-NOUS)/i.test((e.innerText||'').trim())}).pop();
  if(!foot) return false;
  var hide=ws.filter(function(e){return e!==foot&&!e.contains(foot)&&!foot.contains(e)});
  hide.forEach(function(e){e.style.display='none'});
  var w=document.createElement('div');w.id='am-ethics';w.className='ae';w.innerHTML=build();
  var a=foot;while(hide.length&&a.parentElement&&!a.parentElement.contains(hide[0]))a=a.parentElement;
  a.parentElement.insertBefore(w,a);
  reveal(w);ld();
  return true;
 }
 var n=0,iv=setInterval(function(){if(mount()||++n>60)clearInterval(iv)},400);
})();
}catch(e){if(window.console)console.warn("AM-FR v4_ethics.0",e);}
try{
(function(){
 if(window.__amContactFR) return; window.__amContactFR=1;
 if(['/contacto','/nous-contacter','/contactenos'].indexOf(decodeURIComponent(location.pathname).toLowerCase().replace(/\/+$/,'').replace(/^\/fr(?=\/|$)/,''))<0) return;
 var WA='https://wa.me/201146006496?text='+encodeURIComponent('Bonjour l\'équipe Al Manara, je vous ai trouvés sur manaragrp.com. Produit / grade : ... / Application : ... / Quantité : ... / Port de destination : ...');
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
 var STEPS=[['box','Produit et grade','Grade de carbonate de calcium ou type de polymère'],['gear','Application','Ce que vous en fabriquez'],['scale','Quantité','Par expédition ou par mois'],['ship','Destination','Pays et port'],['clock','Délai','Quand en avez-vous besoin']];
 var FAQ=[['Que dois-je inclure dans ma demande ?','Le produit ou le grade, votre application, la quantité nécessaire, le pays et le port de destination, et le délai. Plus nous en savons, plus vite nous pouvons vous recommander un matériau adapté.'],['Fournissez-vous des fiches techniques et des fiches de données de sécurité ?','Oui. Chaque grade de carbonate de calcium dispose d\'une fiche technique (TDS) et d\'une fiche de données de sécurité (SDS). Les fiches de données de sécurité sont disponibles en anglais, français, espagnol et portugais.'],['Dans quelles langues pouvons-nous travailler ?','Notre équipe travaille en anglais et en arabe. Les fiches de données de sécurité et les catalogues sont aussi disponibles en français, espagnol et portugais.'],['Comment réalisez-vous les expéditions ?','Nous fournissons des chargements complets en conteneur depuis les ports égyptiens et coordonnons avec vous l\'emballage, les documents et l\'embarquement, du devis jusqu\'au chargement.']];
 function hero(){return '<section class="ct-hero"><div class="ct-w ct-r"><div class="ct-pill">CONTACTEZ AL MANARA</div><h1>Dites-nous ce dont vous avez besoin. <span>Nous répondons sous un jour ouvré.</span></h1><p>Indiquez-nous le matériau, l\'application, la quantité et la destination. Notre équipe de support technique vous répondra avec les informations d\'approvisionnement pertinentes.</p></div></section>'}
 function main(){
  return '<section class="ct-main"><div class="ct-w"><div class="ct-g"><div class="ct-col ct-r">'+
  '<a class="ct-cd ct-wa" href="'+WA+'" target="_blank" rel="noopener"><div class="ct-ic">'+ic(I.wa,28)+'</div><div><h3>LE MOYEN LE PLUS RAPIDE DE NOUS JOINDRE</h3><b>WhatsApp +20 11 4600 6496</b><small>Équipe de support technique</small><span class="go">Démarrer le chat '+ic(I.arw,16)+'</span></div></a>'+
  '<div class="ct-cd"><div class="ct-ic">'+ic(I.mail,24)+'</div><div><h3>E-MAIL</h3><a href="mailto:info@manaragrp.com">info@manaragrp.com</a><a href="mailto:waleed@manaragrp.com">waleed@manaragrp.com</a></div></div>'+
  '<div class="ct-cd"><div class="ct-ic">'+ic(I.pin,24)+'</div><div><h3>BUREAU PRINCIPAL</h3><b style="font-size:16.5px">E9 Sky Degla1, Ville du 10 Ramadan, Égypte</b><small>Siège social : 47 Neighborhood 41, Ville du 10 Ramadan</small></div></div></div>'+
  '<div class="ct-fm ct-r"><h2>Envoyez-nous votre demande</h2><p>Remplissez le formulaire et nous vous répondrons par e-mail ou par WhatsApp.</p><div id="ct-slot"></div><div class="ct-nt">Nous utilisons vos données uniquement pour répondre à votre demande.</div></div></div></div></section>';
 }
 function steps(){return '<section class="ct-s"><div class="ct-w"><div class="ct-k">POUR UNE RÉPONSE PLUS RAPIDE</div><h2>Ce qu\'il faut inclure dans votre message</h2><div class="ct-st">'+STEPS.map(function(s){return '<div class="ct-sp ct-r"><div class="ct-ic">'+ic(I[s[0]],24)+'</div><b>'+s[1]+'</b><span>'+s[2]+'</span></div>'}).join('')+'</div></div></section>'}
 function faq(){return '<section class="ct-fq"><div class="ct-w"><div class="ct-k" style="margin-top:50px">RÉPONSES RAPIDES</div><h2 style="font-size:30px;color:#0F2B4F">Avant de nous écrire</h2>'+FAQ.map(function(f,i){return '<details'+(i?'':' open')+'><summary>'+f[0]+'</summary><p>'+f[1]+'</p></details>'}).join('')+'</div></section>'}
 function reveal(w){var els=[].slice.call(w.querySelectorAll('.ct-r'));if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){els.forEach(function(e){e.classList.add('in')});return}var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{rootMargin:'0px 0px -6% 0px'});els.forEach(function(e){io.observe(e)})}
 function mount(){
  if(document.getElementById('ct-top')) return true;
  var ws=[].slice.call(document.querySelectorAll('.section-preview-wrapper,.section-editor-wrapper'));
  var foot=ws.filter(function(e){return /^(Page d.accueil|ACCUEIL)\s*\n?\s*(À propos de nous|QUI SOMMES-NOUS)/i.test((e.innerText||'').trim())}).pop();
  var fw=ws.filter(function(e){return e!==foot&&e.querySelector('form')})[0];
  if(!foot||!fw) return false;var f=fw.querySelector('form');
  var node=f;
  var st=document.createElement('style');st.id='ct-css';st.textContent=css;document.head.appendChild(st);
  var top=document.createElement('div');top.id='ct-top';top.className='ct';top.innerHTML=hero()+main()+steps()+faq();
  var a=foot;while(a.parentElement&&!a.parentElement.contains(fw))a=a.parentElement;
  a.parentElement.insertBefore(top,a);
  top.querySelector('#ct-slot').appendChild(node);node.style.cssText='position:static!important;width:100%!important;margin:0!important;height:auto!important;min-height:0!important;top:auto!important;left:auto!important;';
  ws.forEach(function(e){if(e!==foot)e.style.display='none'});reveal(top);return true;
 }
 var n=0,iv=setInterval(function(){if(mount()||++n>80)clearInterval(iv)},400);
})();
}catch(e){if(window.console)console.warn("AM-FR v4_contact.0",e);}
try{
/* AM-MINING ES v1 (2026-11-03): pagina completa /fr/commerce-de-manara (carbonato de calcio + talco). Autonoma: no depende de secciones nativas salvo el pie de pagina. */
(function(){
 if(window.__amMinFR) return; window.__amMinFR=1;
 if(!(/^\/fr(\/|$)/i.test(location.pathname)||/^fr/i.test(document.documentElement.lang||''))) return;
 if(['/am-mining','/commerce-de-manara'].indexOf(decodeURIComponent(location.pathname).toLowerCase().replace(/\/+$/,'').replace(/^\/fr(?=\/|$)/,''))<0) return;
 var B='https://assets.wuiltweb.com/241623/',MU=String.fromCharCode(181),WAN='201146006496';
 var D={"grades":[{"code":"AM-UC08","series":"uncoated","d50":"2.2","d98":"8 ± 1","bulk":"0.50 – 0.65","white":"97","coating":"","apps":["Plastics","Paints","Coatings","Adhesives","Paper","Industrial Applications"],"chem":{"CaCO₃":"≥ 99.0 %","CaO":"≤ 55.64 %","MgO":"≤ 0.15 %","Fe₂O₃":"≤ 0.01 %","SiO₂":"≤ 0.3 %","HCl insoluble":"≤ 0.3 %","Loss on ignition (900 °C)":"43.5 – 44.5 %","Refractive index":"1.59"}},{"code":"AM-UC10","series":"uncoated","d50":"2.6","d98":"10 ± 1","bulk":"0.55 – 0.70","white":"97","coating":"","apps":["Plastics","Paints","Coatings","Adhesives","Paper","Industrial Applications"]},{"code":"AM-UC12","series":"uncoated","d50":"3.0","d98":"12 ± 1","bulk":"0.60 – 0.75","white":"97","coating":"","apps":["Plastics","Paints","Coatings","Adhesives","Paper","Industrial Applications"]},{"code":"AM-UC15","series":"uncoated","d50":"3.5","d98":"15 ± 1","bulk":"0.65 – 0.80","white":"97","coating":"","apps":["Plastics","Paints","Coatings","Adhesives","Paper","Industrial Applications"]},{"code":"AM-UC20","series":"uncoated","d50":"5.0","d98":"20 ± 1","bulk":"0.70 – 0.90","white":"97","coating":"","apps":["Rubber","Waterproofing Membranes","Construction Chemicals","Wall Putties","Glaze","Paints & Adhesives","Environmental Protection"]},{"code":"AM-UC25","series":"uncoated","d50":"5.7","d98":"25 ± 1","bulk":"0.75 – 0.95","white":"97","coating":"","apps":["Rubber","Waterproofing Membranes","Construction Chemicals","Wall Putties","Glaze","Paints & Adhesives","Environmental Protection"]},{"code":"AM-UC45","series":"uncoated","d50":"9.5","d98":"45 ± 1","bulk":"0.85 – 1.05","white":"97","coating":"","apps":["Rubber","Waterproofing Membranes","Construction Chemicals","Wall Putties","Glaze","Paints & Adhesives","Environmental Protection"]},{"code":"AM-CN08","series":"coated","d50":"2.2","d98":"8 ± 1","bulk":"0.75 – 0.80","white":"97","coating":"11 – 12","apps":["Plastic Films","Plastic Sheets","PVC Profiles","Cables","Masterbatch"]},{"code":"AM-CN10","series":"coated","d50":"2.6","d98":"10 ± 1","bulk":"0.80 – 0.90","white":"97","coating":"10 – 11","apps":["Plastic Films","Plastic Sheets","PVC Profiles","Cables","Masterbatch"]},{"code":"AM-CN12","series":"coated","d50":"3.0","d98":"12 ± 1","bulk":"0.85 – 0.95","white":"97","coating":"9.5 – 11","apps":["Plastic Films","Plastic Sheets","PVC Profiles","Cables","Plastic Molding"]},{"code":"AM-CN15","series":"coated","d50":"3.5","d98":"15 ± 1","bulk":"0.90 – 1.00","white":"97","coating":"8.5 – 9.5","apps":["Plastic Films","Plastic Sheets","PVC Profiles","Cables","Plastic Molding"]},{"code":"AM-CN20","series":"coated","d50":"5.0","d98":"20 ± 1","bulk":"0.95 – 1.05","white":"97","coating":"8 – 9","apps":["PVC Pipes","PVC Profiles","Plastic Sheets","Cables","Injection Molding"]},{"code":"AM-CN25","series":"coated","d50":"5.7","d98":"25 ± 1","bulk":"1.00 – 1.10","white":"97","coating":"7 – 8","apps":["PVC Pipes","PVC Profiles","Plastic Sheets","Injection Molding"]},{"code":"AM-CN45","series":"coated","d50":"9.5","d98":"45 ± 1","bulk":"1.05 – 1.20","white":"97","coating":"6 – 7","apps":["PVC Pipes","PVC Profiles","Injection Molding"]}],"IMG":{"base":"https://assets.wuiltweb.com/241623/","map":{"AM-UC08":"101320260526496acdc119eae4c.webp","AM-UC10":"101320260527046acdc128f1e74.webp","AM-UC12":"101320260527146acdc132a75d8.webp","AM-UC15":"101320260527226acdc13ad79b8.webp","AM-UC20":"101320260527316acdc143f03d2.webp","AM-UC25":"101320260527436acdc14fce2ec.webp","AM-UC45":"101320260527536acdc1598e846.webp","AM-CN08":"101320260528026acdc16218862.webp","AM-CN10":"101320260528136acdc16d14a20.webp","AM-CN12":"101320260528216acdc17563ac6.webp","AM-CN15":"101320260528316acdc17fc3d9d.webp","AM-CN20":"101320260528406acdc188b2899.webp","AM-CN25":"101320260528486acdc190b6ccb.webp","AM-CN45":"101320260528576acdc199bdca6.webp"}}}, TIMG={"AM-TL12":"101620260518296ad1b3a59b1c0.webp","AM-TL15":"101620260518436ad1b3b324488.webp","AM-TL20":"101620260518486ad1b3b8b491c.webp","AM-TL24":"101620260518546ad1b3bebd3c6.webp","AM-TL30":"101620260518586ad1b3c2d8184.webp","AM-TL40":"101620260519076ad1b3cb9d01a.webp","AM-TL50":"101620260519096ad1b3cdca367.webp"};
 var A=function(x){return [].slice.call(x);};
 function wa(t){return 'https://wa.me/'+WAN+'?text='+encodeURIComponent(t);}
 function nf(s){return String(s==null?'':s).replace(/(\d)\.(\d)/g,'$1,$2');}
 var AE='&';
 function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':AE+'amp;','<':AE+'lt;','>':AE+'gt;','"':AE+'quot;'}[c];});}
 function el(h){var t=document.createElement('div');t.innerHTML=h;return t.firstElementChild;}
 var WA=wa('Bonjour l\'équipe Al Manara, je souhaiterais un devis pour du carbonate de calcium. Grade : ... / Quantité : ... / Destination : ...');
 var WT=wa('Bonjour l\'équipe Al Manara, je souhaiterais des informations sur le talc en poudre.');
 var CAT='mailto:waleed@manaragrp.com?subject='+encodeURIComponent('Demande de catalogue de carbonate de calcium');
 var IMG={ucs:'10312023161119654127271861b.jpg',cn:'10312023161120654127287f0ba.jpg',tc:'110120231132106542373a17aa1.jpg',h:'1102202307480265435432ea797.jpg',m1:'1102202307480265435432ea797.jpg',m2:'110220230748076543543725f4a.jpg',m3:'11022023074601654353b90614e.jpg'};
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
 var CSS_H='\
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
.amh-faq summary:after{content:"+";color:var(--o);font-size:22px;line-height:1}.amh-faq details[open] summary:after{content:"−"}.amh-faq details p{margin:0 0 16px;color:#475467;font-size:14px}\
.amh-cta{display:grid;grid-template-columns:1fr 1fr;gap:16px}.amh-cta a{display:block;text-decoration:none;border-radius:14px;padding:22px;border:1px solid var(--b);background:#fff;color:var(--n)}\
.amh-cta a:first-child{background:var(--o);border-color:var(--o);color:#fff}.amh-cta b{display:block;font-size:17px;margin-bottom:4px}.amh-cta span{font-size:13px;opacity:.85}\
.amh-m{position:fixed;inset:0;z-index:2147483000;background:rgba(10,31,58,.78);display:none;align-items:flex-start;justify-content:center;overflow:auto;padding:28px 12px}.amh-m.on{display:flex}\
.amh-m .box{position:relative;width:100%;max-width:860px;background:#fff;border-radius:14px;box-shadow:0 30px 80px rgba(0,0,0,.35);overflow:hidden;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}\
.amh-m .bar{display:flex;align-items:center;gap:10px;background:#F4F7FA;padding:10px 14px;border-bottom:1px solid var(--b);font-size:13px;color:#475467;position:sticky;top:0;z-index:3}\
.amh-m .bar b{color:var(--n)}.amh-m .bar .x{all:unset;cursor:pointer;margin-left:auto;font-size:22px;line-height:1;color:var(--n);padding:0 6px}\
.amh-m .wm{position:absolute;inset:0;pointer-events:none;z-index:2;background-image:url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27340%27 height=%27200%27%3E%3Ctext x=%2710%27 y=%27120%27 transform=%27rotate(-24 170 100)%27 font-family=%27Arial%27 font-size=%2716%27 fill=%27%230F2B4F%27 fill-opacity=%270.07%27%3ESOLO LECTURA · manaragrp.com%3C/text%3E%3C/svg%3E")}\
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
 var CSS_T='\
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
 var CSS_A='\
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
 var EXTRA='.amh{padding:40px 20px 24px}.amh-v{white-space:nowrap}.am-fs{display:flex;gap:14px;align-items:center;flex-basis:100%}.am-fs a{color:#0F2B4F}.am-fs a:hover{color:#F2862E}';
 /* traduccion de aplicaciones tipicas (las claves en ingles se usan para cruzar datos) */
 var TR={'Plastics':'Plastiques','Paints':'Peintures','Coatings':'Revêtements','Adhesives':'Adhésifs','Paper':'Papier','Industrial Applications':'Applications industrielles','Rubber':'Caoutchouc','Waterproofing Membranes':'Membranes d\'étanchéité','Construction Chemicals':'Produits chimiques pour la construction','Wall Putties':'Enduits muraux','Glaze':'Émaux céramiques','Paints & Adhesives':'Peintures et adhésifs','Environmental Protection':'Protection de l\'environnement','Plastic Films':'Films plastiques','Plastic Sheets':'Feuilles plastiques','PVC Profiles':'Profilés en PVC','Cables':'Cables','Masterbatch':'Masterbatch','Plastic Molding':'Moulage des plastiques','PVC Pipes':'Tubes en PVC','Injection Molding':'Moulage par injection'};
 function tr(a){return a.map(function(x){return TR[x]||x;}).join(', ');}
 var APPS=[
  ['film','Films et feuilles plastiques','Les grades fins enrobés d\'acide stéarique se dispersent de façon homogène dans le PE et le PP et gardent lisses les surfaces des films et des feuilles.',['Plastic Films','Plastic Sheets'],0,'#0F2B4F','#2F5E8C'],
  ['mb','Masterbatch de charge','Grades fins hydrophobes pour masterbatch de charge de CaCO₃ et compounds.',['Masterbatch'],0,'#0F2B4F','#3B5B78'],
  ['pvc','Tubes et profilés en PVC','Les grades enrobés apportent rigidité, aspect de surface et stabilité dimensionnelle au PVC rigide.',['PVC Pipes','PVC Profiles'],0,'#14396B','#0A1F3A'],
  ['cable','Câbles et fils','CaCO₃ fin enrobé pour compounds d\'isolation et de gaine de câbles en PVC. Le talc est également proposé pour les câbles.',['Cables'],1,'#0A1F3A','#1F4E79'],
  ['plast','Injection, moulage et compounds','CaCO₃ fin enrobé et non enrobé comme charge fonctionnelle dans les pièces moulées et les compounds plastiques. Le talc est proposé pour les plastiques.',['Injection Molding','Plastic Molding','Plastics'],1,'#1B3A5C','#0F2B4F'],
  ['paint','Peintures et revêtements','GCC non enrobé comme extendeur pour la blancheur, le soutien de l\'opacité et la maîtrise des coûts. Le talc est proposé pour les peintures et les revêtements.',['Paints','Coatings','Paints & Adhesives'],1,'#2F5E8C','#0F2B4F'],
  ['adh','Adhésifs, mastics et construction','Contrôle de la rhéologie dans les adhésifs et les mastics, ainsi que dans les enduits muraux, les colles à carrelage, les crépis et les produits en mélange sec.',['Adhesives','Paints & Adhesives','Construction Chemicals','Wall Putties'],0,'#3B5B78','#0F2B4F'],
  ['memb','Membranes d\'étanchéité','Charge minérale pour membranes d\'étanchéité et compounds de toiture.',['Waterproofing Membranes'],0,'#0F2B4F','#1F6F78'],
  ['paper','Papier','Charge minérale à haute blancheur pour le remplissage du papier. Le talc est proposé pour le papier.',['Paper'],1,'#1F4E79','#0F2B4F'],
  ['rubber','Caoutchouc','Charge pour articles techniques en caoutchouc et leurs compounds.',['Rubber'],0,'#0A1F3A','#2B3F55'],
  ['cer','Céramique','Le talc naturel est proposé pour la céramique, en sept grades de 3 à 11 µm. Certains grades de CaCO₃ non enrobé sont proposés pour les émaux.',['Glaze'],1,'#5B3A1E','#B5651D'],
  ['fert','Engrais','Talc naturel indiqué pour les applications dans les engrais. Consultez le support technique pour le grade adapté.',[],1,'#0F4C4F','#1F6F78']
 ];
   function R(i){var x=Math.sin(i*127.1+311.7)*43758.5453;return x-Math.floor(x);}
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
 var TG=[['AM-TL12','3 ± 0.3','12 ± 1','0.29','0.80','56','8',12],['AM-TL15','3.8 ± 0.2','15 ± 1','0.31','0.83','51','9',15],['AM-TL20','4.2 ± 0.2','20 ± 1','0.35','0.88','43','9',20],['AM-TL24','4.8 ± 0.2','24 ± 1','0.39','0.92','40','9',24],['AM-TL30','5.8 ± 0.2','30 ± 1','0.42','0.95','38','9',30],['AM-TL40','8.4 ± 0.2','40 ± 2','0.54','1.05','33','9',40],['AM-TL50','11 ± 0.5','50 ± 2','-','-','29','9',50]];
 var I_DOC='M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6',I_EYE='M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 9a3 3 0 1 0 .01 0z',I_LOCK='M6 11h12v10H6zM9 11V8a3 3 0 0 1 6 0v3';
 function ico(p,s){return '<svg viewBox="0 0 24 24" width="'+s+'" height="'+s+'" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="'+p+'"/></svg>';}
 function kv(o,cl){return '<table class="amh-kv'+(cl?' '+cl:'')+'">'+o.map(function(r){return '<tr><td>'+r[0]+'</td><td>'+r[1]+'</td></tr>';}).join('')+'</table>';}
 function chips(a){return '<div class="am2-ch">'+a.map(function(x){return '<span>'+x+'</span>'}).join('')+'</div>';}
 function range(codes){var g={};codes.forEach(function(c){var p=c.slice(3,5);(g[p]=g[p]||[]).push(c);});return Object.keys(g).map(function(p){var a=g[p];return a[0]+(a.length>1?'–'+a[a.length-1].slice(3):'');}).join(' + ');}
 function gradesFor(kw){return D.grades.filter(function(g){return g.apps.some(function(p){return kw.indexOf(p)>=0;});}).map(function(g){return g.code;});}

 /* ---------- bloques ---------- */
 function topHTML(){
  var h='<section class="am2-hero"><div class="am2-w"><div class="am2-r"><div class="k">AL MANARA MINING &middot; CARBONATO DE CALCIO Y TALCO</div><h1>Carbonate de calcium et talc, <span>adaptés à votre procédé.</span></h1><p class="s">Quatorze grades de carbonate de calcium et sept de talc naturel d\'Égypte, avec une fiche technique (TDS) pour chaque grade et une fiche de données de sécurité (SDS) pour le carbonate de calcium.</p><a class="am2-b o" href="#caco3-technical-hub" data-go="hub">Ouvrir le centre technique</a><a class="am2-b g" href="'+WA+'" target="_blank" rel="noopener">Demander un devis</a></div>';
  function st(b,l){return '<div><b>'+b+'</b><span>'+l+'</span></div>';}
  h+='<div class="am2-gl am2-r"><div class="t">EN UN COUP D\'ŒIL</div><div class="g"><h5 class="ca">Carbonate de calcium</h5>'+st('14','Grades · AM-UC, AM-CN')+st('8 - 45 '+MU+'m','Coupe supérieure D98')+st('&ge; 99,0 %','Pureza de CaCO&#8323;')+'<h5 class="tl">Talc en poudre</h5>'+st('7','Grades · AM-TL')+st('12 - 50 '+MU+'m','Coupe supérieure D97')+st('3 - 11 '+MU+'m','Médiane D50')+'<p class="ft">TDS pour chaque grade · SDS pour le carbonate de calcium · HS 2836.50 / 2526.20 · Origine : Égypte</p></div></div></div></section>';
  h+='<section class="am2-s"><div class="am2-w"><div class="k">GAMMES DE PRODUITS</div><h2>Trois gammes, un même standard technique</h2><p class="lead">Choisissez selon l\'application : grades non enrobés pour les peintures, revêtements et produits chimiques de construction ; grades enrobés pour les plastiques et polymères ; et talc pour les applications à haute blancheur.</p><div class="am2-pg">';
  h+='<div class="am2-c am2-r"><div class="im" style="background-image:url('+B+IMG.ucs+')"><span class="bd">AM-UC</span></div><div class="in"><h3>Carbonate de calcium non enrobé</h3><p>Sept grades non enrobés, AM-UC08 à AM-UC45 (coupe supérieure 8 - 45 '+MU+'m), pour les peintures, revêtements, adhésifs, papier, enduits muraux, produits chimiques pour la construction et membranes d\'étanchéité.</p>'+chips(['Peintures','Revêtements','Adhésifs','Papier','Mastics','Membranes'])+'<a class="am2-b n" href="#caco3-grades" data-go="UC">Voir les grades non enrobés</a></div></div>';
  h+='<div class="am2-c am2-r"><div class="im" style="background-image:url('+B+IMG.cn+')"><span class="bd">AM-CN</span></div><div class="in"><h3>Carbonate de calcium enrobé</h3><p>Sept grades enrobés d\'acide stéarique, AM-CN08 à AM-CN45, pour les films et feuilles plastiques, le masterbatch, les tubes et profilés en PVC, les câbles et le moulage par injection. L\'enrobage améliore la dispersion et la compatibilité avec les polymères.</p>'+chips(['Films','Masterbatch','PVC','Cables','Injection'])+'<a class="am2-b n" href="#caco3-grades" data-go="CN">Voir les grades enrobés</a></div></div>';
  h+='<div class="am2-c am2-r"><div class="im" style="background-image:url('+B+IMG.tc+')"><span class="bd">TALC</span></div><div class="in"><h3>Talc en poudre</h3><p>Talc naturel en sept grades, avec un D50 de 3 à 11 '+MU+'m et une coupe supérieure D97 de 12 à 50 '+MU+'m : pauvre en fer, blancheur constante et structure lamellaire douce. Fiche technique disponible pour chaque grade.</p>'+chips(['Peintures','Plastiques','Papier','Cables','Céramique'])+'<a class="am2-b n" href="#talc-technical-center" data-go="TL">Voir les fiches techniques du talc</a></div></div>';
  return h+'</div></div></section>';
 }
 function appsHTML(){
  var n=APPS.filter(function(a){return a[3].length;}).length, nt=APPS.filter(function(a){return a[4];}).length;
  return '<div class="amh-blk" id="amu-apps"><div class="k">Applications</div><h3>Où sont utilisés notre carbonate de calcium et notre talc</h3><p class="lead">Sélectionnez une application pour voir les grades correspondants. Les grades de carbonate de calcium sont mis en évidence dans les tableaux ci-dessous ; les fiches du talc couvrent les sept grades.</p>'+
   '<div class="amu-top"><div class="amu-seg" role="group" aria-label="Filtrer par produit"><button type="button" class="on" data-f="all">Tous · '+APPS.length+'</button><button type="button" data-f="ca">Carbonate de calcium · '+n+'</button><button type="button" data-f="tl">Talc · '+nt+'</button></div></div>'+
   '<div class="amu-grid">'+APPS.map(function(a){var codes=gradesFor(a[3]);
     var ca=codes.length?'<button class="amu-p ca" type="button" data-m="ca" data-k="'+a[0]+'">CaCO₃ · '+codes.length+' grade'+(codes.length>1?'s':'')+' · '+range(codes)+' →</button>':'';
     var tl=a[4]?'<button class="amu-p tl" type="button" data-m="tl" data-k="'+a[0]+'">Talc · 7 grades · AM-TL12–TL50 →</button>':'';
     return '<div class="amu-c" data-k="'+a[0]+'" data-ca="'+(codes.length?1:0)+'" data-tl="'+a[4]+'"><div class="amu-im">'+art(a)+'</div><div class="amu-in"><b>'+a[1]+'</b><p>'+a[2]+'</p>'+ca+tl+'</div></div>';}).join('')+'</div></div>';
 }
 function row(g){
  var c=g.series==='coated';
  return '<tr data-code="'+g.code+'"><td class="g" data-l="Grado">'+g.code+'</td><td data-l="Corte superior D98">'+nf(g.d98)+' µm</td><td data-l="D50">'+nf(g.d50)+' µm</td>'+(c?'<td data-l="Ácido esteárico">'+nf(g.coating)+' kg/t</td>':'')+'<td data-l="Blancura">≥ '+g.white+' %</td><td data-l="Densidad aparente">'+nf(g.bulk)+' g/cm³</td><td class="ap" data-l="Aplicaciones típicas">'+esc(tr(g.apps))+'</td>'+
   '<td class="v"><button class="amh-v" data-tds="'+g.code+'" title="Voir la fiche technique (TDS)">'+ico(I_DOC,16)+' TDS '+ico(I_EYE,15)+'</button></td></tr>';
 }
 function table(series){
  var c=series==='coated';
  return '<div class="amh-tw"><table><thead><tr><th>Grade</th><th>Coupe supérieure D98</th><th>D50</th>'+(c?'<th>Acide stéarique</th>':'')+'<th>Blancheur</th><th>Densité apparente</th><th>Applications typiques</th><th>Fiche technique</th></tr></thead><tbody>'+D.grades.filter(function(g){return g.series===series;}).map(row).join('')+'</tbody></table></div>';
 }
 function caHTML(){
  var g0=D.grades[0],ch=g0.chem;
  var CHEM=[['CaCO₃',nf(ch['CaCO₃'])],['MgO',nf(ch['MgO'])],['Fe₂O₃',nf(ch['Fe₂O₃'])],['SiO₂',nf(ch['SiO₂'])],['Insoluble dans HCl',nf(ch['HCl insoluble'])],['Perte au feu (900 °C)',nf(ch['Loss on ignition (900 °C)'])]];
  var PHYS=[['Aspect','Poudre fine blanche'],['Densité relative','~ 2,7 g/cm³'],['Dureté Mohs','3'],['Indice de réfraction',nf(ch['Refractive index'])],['pH (suspension à 10 %)','~ 9'],['Humidité','≤ 0,2 %']];
  return '<div class="amh-facts"><div><b>14</b><span>Grades</span></div><div><b>8–45 µm</b><span>Coupe supérieure D98</span></div><div><b>≥ 99,0 %</b><span>Pureté du CaCO₃</span></div><div><b>≥ 97 %</b><span>Blancheur</span></div><div><b>TDS + SDS</b><span>Pour chaque grade</span></div></div>'+
   '<div class="amh-blk" id="caco3-grades"><div class="k">Grades</div><h3>Données techniques par grade</h3><div class="amh-filter"><span></span><button type="button">Tout afficher ✕</button></div>'+
   '<div class="amh-tabs"><button class="amh-tab on" type="button" data-tab="uncoated">Série non enrobée · AM-UC</button><button class="amh-tab" type="button" data-tab="coated">Série enrobée · AM-CN (acide stéarique)</button></div>'+
   '<div data-pane="uncoated">'+table('uncoated')+'</div><div data-pane="coated" style="display:none">'+table('coated')+'</div>'+
   '<p class="amh-note">Valeurs typiques de la TDS de chaque grade (Rév. 01). Le grade et la spécification sont confirmés à chaque commande.</p></div>'+
   '<div class="amh-blk"><div class="amh-two"><div class="amh-card"><div class="k">Tous les grades</div><h3>Analyse chimique typique</h3>'+kv(CHEM)+'</div><div class="amh-card"><div class="k">Tous les grades</div><h3>Propriétés physiques typiques</h3>'+kv(PHYS)+'</div></div></div>'+
   '<div class="amh-blk" id="caco3-documents"><div class="k">Centre de documents</div><h3>Fiches techniques et de sécurité</h3><p class="lead">Les documents s\'ouvrent dans une visionneuse protégée pour être lus sur cette page. Les fiches techniques (TDS) sont en anglais, la langue technique internationale.</p><div class="amh-docs">'+
    '<div class="amh-doc"><h3>TDS · Fiches techniques</h3><p>Une fiche par grade : distribution granulométrique, données physiques et chimiques, applications, emballage et stockage.</p><div class="row">'+D.grades.map(function(g){return '<button class="amh-v" data-tds="'+g.code+'">'+ico(I_DOC,15)+' '+g.code+'</button>';}).join('')+'</div><div class="amh-lock">'+ico(I_LOCK,14)+' Lecture seule · protégé</div></div>'+
    '<div class="amh-doc"><h3>SDS · Fiche de données de sécurité</h3><p>Carbonate de calcium (grades enrobés et non enrobés) · format SGH de 16 rubriques · Rév. 02. Disponible en anglais, français, espagnol et portugais.</p><div class="row"><a class="amh-v" href="#am-sds-center">'+ico(I_DOC,15)+' Voir la SDS dans votre langue</a></div></div></div></div>'+
   '<div class="amh-blk"><div class="k">Emballage et export</div><h3>Prêt à l\'export depuis l\'Égypte</h3><div class="amh-pk">'+
    '<div><b>Conditionnement</b><span>Sacs de PP tissé ou de papier multicouche de 25 kg · big bags (FIBC) de 1000–1375 kg · sur palettes sur demande</span></div>'+
    '<div><b>Charge</b><span>Environ 27 t par conteneur de 20 pieds en sacs · code HS 2836.50 · origine Égypte</span></div>'+
    '<div><b>Documents</b><span>Facture commerciale · liste de colisage · connaissement · certificat d\'origine · TDS et SDS</span></div></div></div>';
 }
 function tlHTML(){
  var rows=TG.map(function(g){return '<tr><td class="g" data-l="Grado">'+g[0]+'</td><td data-l="Mediana D50 (µm)">'+nf(g[1])+'</td><td class="bar" data-l="Corte superior D97 (µm)">'+nf(g[2])+'<i style="width:'+Math.round(g[7]/50*100)+'%"></i></td><td data-l="Absorción de aceite (g/100 g)">'+g[5]+'</td><td data-l="Densidad aparente (g/cm³)">'+(g[3]==='-'?'—':nf(g[3]))+'</td><td data-l="pH (ISO 787/9)">'+g[6]+'</td><td class="v"><button class="amt-v" type="button" data-tds="'+g[0]+'">'+ico(I_DOC,15)+' Voir la TDS</button></td></tr>';}).join('');
  var chp=TG.map(function(g){return '<button class="amt-v" type="button" data-tds="'+g[0]+'">'+ico(I_DOC,14)+' '+g[0]+'</button>';}).join('');
  var ORD=[['Parlez-nous de votre application','Procédé, granulométrie visée, quantité et destination.'],['Nous confirmons le grade','Grade et spécification convenus avec vous avant le chargement.'],['Nous préparons les documents','TDS du grade et documents d\'export.'],['Emballé et expédié','Sacs de 25 kg ou big bags, chargés en conteneurs complets.']];
  return '<div class="amt" id="talc-technical-center"><div class="k">Talc en poudre · Centre technique</div><h2>Talc naturel en poudre, sept grades</h2>'+
   '<p class="lead">Silicate de magnésium hydraté naturel de granulométrie médiane (D50) de 3 à 11 µm. Pauvre en fer et en alumine, avec une blancheur constante et une structure lamellaire douce pour un usage comme charge fonctionnelle et de renfort. Choisissez le grade selon sa coupe supérieure et ouvrez sa fiche technique en un clic.</p>'+
   '<div class="amt-facts"><div><b>7</b><span>Grades</span></div><div><b>3–11 µm</b><span>Médiane D50</span></div><div><b>12–50 µm</b><span>Coupe supérieure D97</span></div><div><b>L* 94</b><span>Luminosité</span></div><div><b>TDS</b><span>Pour chaque grade</span></div></div>'+
   '<div class="amt-blk"><div class="k">Grades</div><h3>Données techniques par grade</h3><div class="amt-tw"><table><thead><tr><th>Grade</th><th>Médiane D50<small>(µm)</small></th><th>Coupe supérieure D97<small>(µm)</small></th><th>Absorption d\'huile<small>(g/100 g)</small></th><th>Densité apparente<small>(g/cm³)</small></th><th>pH</th><th></th></tr></thead><tbody>'+rows+'</tbody></table></div>'+
   '<p class="amt-note">Comment lire le code : AM · TL · coupure supérieure D97 en µm ; par exemple, AM-TL20 = talc Al Manara avec une coupure supérieure d\'environ 20 µm. Granulométrie par sédimentation (Sedigraph III). Valeurs typiques, et non une spécification.</p></div>'+
   '<div class="amt-blk amt-two"><div class="amt-card"><h3>Analyse chimique typique</h3>'+kv([['Formule chimique','Mg₃Si₄O₁₀(OH)₂'],['SiO₂','60 – 62 %'],['MgO','31 – 33 %'],['CaO','0,14 – 0,3 %'],['Al₂O₃','0,3 – 0,5 %'],['Fe₂O₃','0,1 – 0,2 %'],['MnO · P₂O₅','0,01 % chacun'],['Na₂O · K₂O · TiO₂','< 0,01 % cada uno']]).replace(/amh-kv/,'amt-kv')+'</div>'+
   '<div class="amt-card"><h3>Propriétés physiques typiques</h3>'+kv([['Aspect','Poudre fine blanche'],['Densité (ISO 787/10)','2,7 g/cm³'],['Dureté Mohs','1'],['Humidité','≤ 0,2 %'],['Blancheur Ry','86 ± 1'],['Luminosité L*','94 ± 1'],['Conditionnement','Sacs de 25 kg · big bags'],['Durée de conservation','12 mois']]).replace(/amh-kv/,'amt-kv')+'<p class="amt-note">Identique pour tous les grades.</p></div></div>'+
   '<div class="amt-blk amt-docs" id="talc-documents"><div class="amt-doc"><h3>Fiches techniques du talc</h3><p>Une fiche par grade : distribution granulométrique, données physiques et chimiques, applications, emballage et stockage.</p><div class="row">'+chp+'</div><div class="amt-lock">'+ico(I_LOCK,14)+' Lecture seule · protégé</div></div>'+
   '<a class="amt-cta" target="_blank" rel="noopener" href="'+wa('Bonjour l\'équipe Al Manara, je souhaiterais un devis pour du talc en poudre.\nGrade : \nQuantité : \nPort de destination : \nEmballage : ')+'"><b>Demander un devis pour le talc</b><span>Indiquez-nous le grade, la quantité et le port de destination par WhatsApp.</span></a></div>'+
   '<div class="amt-blk amu-ord"><div class="k">Comment commander</div><h3>Du choix du grade jusqu\'à votre port</h3><div class="amu-st">'+ORD.map(function(o,i){return '<div class="amt-card"><span>'+(i+1)+'</span><b>'+o[0]+'</b><p>'+o[1]+'</p></div>';}).join('')+'</div></div></div>';
 }
 function botHTML(){
  var h='<section class="am2-s l" data-amp="ca"><div class="am2-w"><div class="am2-wk"><div class="am2-r"><div class="k">NOTRE FAÇON DE TRAVAILLER</div><h2>De la roche calcaire jusqu\'à votre port</h2><p class="lead">Al Manara s\'approvisionne en carbonate de calcium auprès de gisements de calcaire sélectionnés en Haute-Égypte, par l\'intermédiaire de broyeurs partenaires qualifiés, et l\'exporte sous la marque Al Manara Mining.</p><ol class="am2-st"><li><b>Parlez-nous de votre application</b>Procédé, granulométrie visée et quantité.</li><li><b>Nous confirmons le grade</b>Grade et spécification convenus avec vous avant le chargement.</li><li><b>Nous préparons les documents</b>TDS, SDS et documents d\'export.</li><li><b>Emballé et expédié</b>Sacs ou big bags, chargés et expédiés depuis les ports égyptiens.</li></ol><a class="am2-b o" href="'+WA+'" target="_blank" rel="noopener">Demander un devis</a><a class="am2-b n" href="'+CAT+'">Demander notre catalogue minier</a></div><div class="am2-mo am2-r"><div style="background-image:url('+B+IMG.m1+')"></div><div style="background-image:url('+B+IMG.m2+')"></div><div style="background-image:url('+B+IMG.m3+')"></div></div></div>';
  h+='<div class="am2-fx"><div class="am2-r"><b>~ 27 t</b><span>par conteneur de 20 pieds, en sacs</span></div><div class="am2-r"><b>25 kg / 1 t</b><span>sacs tissés ou en papier, big bags</span></div><div class="am2-r"><b>HS 2836.50</b><span>origine Égypte</span></div><div class="am2-r"><b>1 jour</b><span>de réponse à chaque demande</span></div></div></div></section>';
  return h;
 }
 var FAQ_CA=[
  ['Quelle est la différence entre le carbonate de calcium enrobé et non enrobé ?','Le carbonate de calcium naturel broyé non enrobé s\'utilise comme charge et extendeur dans les systèmes en phase aqueuse tels que les peintures, adhésifs, papier et produits de construction. Les grades enrobés reçoivent un traitement de surface à l\'acide stéarique qui rend les particules hydrophobes, de sorte qu\'elles se dispersent de façon homogène dans des polymères comme le PE, le PP et le PVC et absorbent moins d\'humidité.','ca'],
  ['Quel grade utiliser pour le masterbatch de charge ou le film plastique ?','On utilise normalement des grades fins enrobés : AM-CN08 et AM-CN10 pour le masterbatch, AM-CN08 à AM-CN15 pour les films et AM-CN08 à AM-CN25 pour les feuilles. Ouvrez chaque TDS ci-dessus pour comparer la distribution granulométrique et confirmez le grade avec notre support technique selon votre procédé.','ca'],
  ['Quel grade convient aux tubes et profilés en PVC ?','Les grades enrobés AM-CN20, AM-CN25 et AM-CN45 sont indiqués pour les tubes en PVC ; AM-CN08 à AM-CN45 pour les profilés en PVC. Le choix final dépend de votre formulation, du taux de charge et des exigences de finition de surface.','ca'],
  ['Quels documents fournissez-vous ?','Chaque grade dispose d\'une fiche technique (TDS) et le produit dispose d\'une fiche de données de sécurité (SDS) SGH de 16 rubriques, disponible en anglais, français, espagnol et portugais. Les expéditions à l\'export comprennent la facture commerciale, la liste de colisage, le connaissement et le certificat d\'origine.','all'],
  ['Comment le produit est-il emballé et expédié ?','Sacs de PP tissé de 25 kg, sacs de papier multicouche de 25 kg ou big bags (FIBC) de 1000–1375 kg. Un conteneur de 20 pieds charge généralement environ 27 tonnes en sacs. Code HS 2836.50, origine Égypte.','ca'],
  ['Les valeurs de la TDS constituent-elles une spécification ?','Non. Les valeurs sont typiques. Le grade, la spécification et l\'emballage sont confirmés par écrit à chaque commande avant l\'expédition.','all'],
  ['Comment demander un devis ?','Envoyez-nous le grade (ou votre application), la quantité, le port de destination et l\'emballage souhaité par WhatsApp au +20 11 4600 6496 ou via la page de contact. Notre support technique répond sous un jour ouvré.','all']
 ];
 var FAQ_TL=[
  ['Quel grade de talc dois-je choisir ?','Le numéro du grade correspond à la coupe supérieure D97 en µm : l\'AM-TL12 a un D50 de 3 µm et l\'AM-TL50 un D50 de 11 µm. Les AM-TL12, AM-TL15 et AM-TL20 sont des grades fins à haute blancheur. Envoyez-nous votre procédé et la granulométrie visée, et notre support technique vous recommandera le grade adapté.','tl'],
  ['Quels documents fournissez-vous pour le talc ?','Une fiche technique (TDS) pour chaque grade de talc, disponible dans le centre technique ci-dessus. Pour la fiche de données de sécurité et les autres documents, consultez notre support technique.','tl'],
  ['Comment le talc est-il emballé et stocké ?','Sacs en PP tissé de 25 kg, sacs papier multicouches de 25 kg ou big bags (FIBC). La durée de conservation est de 12 mois à compter de la production dans l\'emballage d\'origine scellé ; stocker au sec, à l\'abri de l\'humidité et des contaminants.','tl'],
  ['Pourquoi ne puis-je pas comparer directement les granulométries du talc et du carbonate de calcium ?','Les tailles du talc sont mesurées par sédimentation (Sedigraph III), alors que les données de notre carbonate de calcium utilisent la diffraction laser ; les deux séries de valeurs ne sont donc pas directement comparables.','tl']
 ];
 function tailHTML(){
  return '<div class="amh" id="caco3-faq"><div class="k">QUESTIONS FRÉQUENTES</div><h2>Questions fréquentes</h2><div class="amh-faq">'+FAQ_TL.concat(FAQ_CA).map(function(q){return '<details data-amp="'+q[2]+'"><summary>'+q[0]+'</summary><p>'+q[1]+'</p></details>';}).join('')+'</div>'+
   '<div class="amh-blk amh-cta"><a href="'+wa('Bonjour l\'équipe Al Manara, je souhaiterais un devis pour du carbonate de calcium.\nGrade / application : \nQuantité : \nPort de destination : \nEmballage : ')+'" target="_blank" rel="noopener"><b>Demander un devis →</b><span>Grade, quantité et destination : nous répondons sous un jour ouvré.</span></a>'+
   '<a href="'+wa('Bonjour au support technique d\'Al Manara, j\'ai besoin d\'aide pour choisir un grade de carbonate de calcium.\nApplication / procédé : ')+'" target="_blank" rel="noopener"><b>Parler au support technique →</b><span>Aide pour choisir le grade adapté à votre formulation.</span></a></div></div>';
 }
 /* ---------- visor protegido (TDS como imagen, solo lectura) ---------- */
 var M,tok=0;
 function block(e){e.preventDefault();return false;}
 function openTds(code){
  var f=D.IMG.map[code]||TIMG[code]; if(!f) return;
  if(!M){M=el('<div class="amh-m" role="dialog" aria-modal="true"><div class="box"><div class="bar">'+ico(I_LOCK,15)+'<b class="t"></b><span>· Lecture seule</span><button class="x" type="button" aria-label="Cerrar">×</button></div><div class="wm"></div><div class="ct"></div></div></div>');
   document.body.appendChild(M);M.addEventListener('click',function(e){if(e.target===M||e.target.classList.contains('x'))closeM();});
   ['contextmenu','dragstart','selectstart','copy','cut'].forEach(function(ev){M.addEventListener(ev,block);});}
  var tl=/^AM-TL/.test(code),q=tl?'talco ':'carbonate de calcium ';
  M.querySelector('.t').textContent='TDS · '+code;
  M.querySelector('.ct').innerHTML='<div class="amh-sh"><div class="amh-img" style="background-image:url('+B+f+'" role="img" aria-label="Fiche technique '+code+'"></div><div class="act"><a href="'+wa('Bonjour l\'équipe Al Manara, je souhaiterais un devis pour '+q+'grade '+code+'.\nQuantité : \nPort de destination : \nConditionnement : ')+'" target="_blank" rel="noopener">Demander un devis pour '+code+'</a><a class="alt" href="'+wa('Bonjour au support technique d\'Al Manara, j\'ai une question sur le grade '+code+'.')+'" target="_blank" rel="noopener">Consulter le support technique</a></div><div class="ft">Copie en lecture seule · Valeurs typiques, non une spécification. La TDS officielle est envoyée avec chaque devis. Document technique en anglais.</div></div>';
  M.classList.add('on');M.scrollTop=0;document.documentElement.style.overflow='hidden';
  try{(window.dataLayer=window.dataLayer||[]).push({event:tl?'talc_tds_view':'tds_view',grade:code,lang:'es'});}catch(e){}
 }
 function closeM(){if(M){M.classList.remove('on');M.querySelector('.ct').innerHTML='';document.documentElement.style.overflow='';}}
 document.addEventListener('keydown',function(e){if(!M||!M.classList.contains('on'))return;var k=(e.key||'').toLowerCase();if(k==='escape'){closeM();return;}if((e.ctrlKey||e.metaKey)&&['s','p','c','u','a','x'].indexOf(k)>=0){e.preventDefault();e.stopPropagation();}},true);
 /* ---------- comportamiento ---------- */
 function tab(t){document.body.setAttribute('data-amu',t);A(document.querySelectorAll('#amu-tabs [data-t]')).forEach(function(b){b.classList.toggle('on',b.getAttribute('data-t')===t);});}
 function go(id){var e=document.getElementById(id);if(e){var y=e.getBoundingClientRect().top+scrollY-100;window.scrollTo({top:y,behavior:'smooth'});}}
 function gtab(root,s){A(root.querySelectorAll('.amh-tab')).forEach(function(b){b.classList.toggle('on',b.getAttribute('data-tab')===s);});A(root.querySelectorAll('[data-pane]')).forEach(function(p){p.style.display=p.getAttribute('data-pane')===s?'':'none';});}
 function pickCa(root,k){
  var a=APPS.filter(function(x){return x[0]===k;})[0],codes=gradesFor(a[3]);if(!codes.length)return;
  A(root.querySelectorAll('tr[data-code]')).forEach(function(r){var h=codes.indexOf(r.getAttribute('data-code'))>=0;r.classList.toggle('hit',h);r.classList.toggle('dim',!h);});
  var f=root.querySelector('.amh-filter');f.querySelector('span').innerHTML='Suggérés pour <b>'+a[1]+'</b>: '+codes.join(', ');f.classList.add('on');
  tab('ca');gtab(root,codes[0].indexOf('AM-CN')===0?'coated':'uncoated');setTimeout(function(){go('caco3-grades');},50);
 }
 function pickTl(){tab('tl');setTimeout(function(){go('talc-technical-center');},50);var w=document.querySelector('#talc-technical-center .amt-tw');if(w){w.classList.remove('amu-pulse');void w.offsetWidth;w.classList.add('amu-pulse');}}
 function ld(){
  var all=FAQ_TL.concat(FAQ_CA);
  var s=document.createElement('script');s.type='application/ld+json';s.setAttribute('data-am-min-fr','1');
  s.textContent=JSON.stringify({'@context':'https://schema.org','@graph':[
   {'@type':'FAQPage','mainEntity':all.map(function(q){return {'@type':'Question','name':q[0],'acceptedAnswer':{'@type':'Answer','text':q[1]}};})},
   {'@type':'ProductGroup','name':'Carbonate de calcium broyé (GCC) en poudre','brand':{'@type':'Brand','name':'Al Manara Mining'},'description':'Carbonate de calcium broyé non enrobé et enrobé d\'acide stéarique, coupe supérieure 8–45 µm, CaCO₃ ≥ 99,0 %, blancheur ≥ 97 %, exporté depuis l\'Égypte.','hasVariant':D.grades.map(function(g){return {'@type':'Product','name':g.code+' carbonate de calcium '+(g.series==='coated'?'recubierto':'non enrobé'),'sku':g.code,'additionalProperty':[{'@type':'PropertyValue','name':'Coupe supérieure D98','value':nf(g.d98)+' µm'},{'@type':'PropertyValue','name':'D50','value':nf(g.d50)+' µm'},{'@type':'PropertyValue','name':'Blancheur','value':'≥ '+g.white+' %'}]};})},
   {'@type':'ProductGroup','name':'Talc naturel en poudre','brand':{'@type':'Brand','name':'Al Manara Mining'},'description':'Talc naturel (silicate de magnésium hydraté) en poudre, granulométrie médiane D50 3–11 µm, coupe supérieure D97 12–50 µm, exporté depuis l\'Égypte.','hasVariant':TG.map(function(g){return {'@type':'Product','name':g[0]+' talc en poudre','sku':g[0],'additionalProperty':[{'@type':'PropertyValue','name':'D50','value':nf(g[1])+' µm'},{'@type':'PropertyValue','name':'Coupe supérieure D97','value':nf(g[2])+' µm'}]};})}
  ]});
  document.head.appendChild(s);
 }
 function reveal(w){
  var els=A(w.querySelectorAll('.am2-r'));
  if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){els.forEach(function(e){e.classList.add('in')});return}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var t=e.target;var i=[].indexOf.call(t.parentNode.children,t);t.style.transitionDelay=(i%4)*70+'ms';t.classList.add('in');io.unobserve(t)}})},{rootMargin:'0px 0px -6% 0px'});
  els.forEach(function(e){io.observe(e)});
 }
 function fixForm(form){
  if(!form||form.__amF)return;var box=form.querySelector('[class*="_contactInfo_"]');if(!box)return;form.__amF=1;
  var it={};A(box.children).forEach(function(c){var i=c.querySelector('i');if(!i)return;if(/la-map/.test(i.className))it.m=c;else if(/la-phone/.test(i.className))it.p=c;else if(/la-at/.test(i.className))it.e=c;});
  function set(c,l,h){if(!c)return;var a=c.querySelector('h4'),b=c.querySelector('p');if(a)a.textContent=l;if(b)b.innerHTML=h;}
  set(it.m,'Adresse','Bureau principal : E9 Sky Degla1, Ville du 10 Ramadan<br>Quartier 41, Immeuble 47, Ville du 10 Ramadan, Égypte 44629');
  set(it.p,'Teléfono','+2 011 46 00 64 96 (support technique, WhatsApp)');
  set(it.e,'E-mail','info@manaragrp.com<br>waleed@manaragrp.com');
  [it.m,it.p,it.e].forEach(function(c){if(c)box.appendChild(c);});
  var de=form.querySelector('[class*="_sectionDescription_"]');if(de)de.style.display='none';
  var so=document.createElement('div');so.className='am-fs';so.innerHTML='<a href="https://www.linkedin.com/company/al-manara-for-investment-and-commercial-agencies/" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg></a><a href="https://www.youtube.com/channel/UChGF80Wkrd_r7bQpRg-ntqQ" target="_blank" rel="noopener" aria-label="YouTube"><svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6z"/></svg></a>';box.appendChild(so);
 }
 function mount(){
  if(document.getElementById('am-min-fr')) return true;
  var ws=A(document.querySelectorAll('.section-preview-wrapper,.section-editor-wrapper'));
  var foot=ws.filter(function(e){return /^(Page d.accueil|ACCUEIL)\s*\n?\s*(À propos de nous|QUI SOMMES-NOUS)/i.test((e.innerText||'').trim())}).pop();
  if(!foot) return false;
  var form=ws.filter(function(e){return e!==foot&&e.querySelector('form')})[0];
  var hide=ws.filter(function(e){return e!==foot&&e!==form});
  hide.forEach(function(e){e.style.display='none'});
  var st=document.createElement('style');st.id='am-min-fr-css';st.textContent=css+CSS_H+CSS_T+CSS_A+EXTRA;document.head.appendChild(st);
  var root=document.createElement('div');root.id='am-min-fr';root.className='am2';
  root.innerHTML=topHTML();
  var hub=el('<div class="amh" id="caco3-technical-hub"><div class="k">Centre technique</div><h2>Trouvez le grade adapté à votre procédé</h2><p class="lead">Quatorze grades de carbonate de calcium et sept grades de talc naturel, avec des données typiques issues de nos fiches techniques. Choisissez votre application et ouvrez la fiche technique en un clic.</p>'+appsHTML()+
   '<div class="amh-blk amu-tcbar" id="amu-tabs"><h3>Grades, données et documents</h3><div class="amu-seg" role="tablist"><button type="button" role="tab" data-t="ca">Carbonate de calcium · 14 grades</button><button type="button" role="tab" data-t="tl">Talc en poudre · 7 grades</button></div></div>'+
   '<div class="amu-pane" data-amp="ca">'+caHTML()+'</div><div class="amu-pane" data-amp="tl">'+tlHTML()+'</div></div>');
  root.appendChild(hub);
  var bot=el('<div>'+botHTML()+'</div>');while(bot.firstChild)root.appendChild(bot.firstChild);
  var tail=el(tailHTML());root.appendChild(tail);
  var a=form||foot;while(a.parentElement&&hide.length&&!a.parentElement.contains(hide[0]))a=a.parentElement;
  a.parentElement.insertBefore(root,a);
  reveal(root);fixForm(form);setTimeout(function(){fixForm(form)},2500);
  /* eventos */
  document.addEventListener('click',function(e){
   var t=e.target.closest&&e.target.closest('[data-tds]');if(t&&root.contains(t)){openTds(t.getAttribute('data-tds'));return;}
   var g=e.target.closest&&e.target.closest('[data-go]');if(g&&root.contains(g)){e.preventDefault();var k=g.getAttribute('data-go');
    if(k==='UC'||k==='CN'){tab('ca');gtab(hub,k==='UC'?'uncoated':'coated');setTimeout(function(){go('caco3-grades');},50);}
    else if(k==='TL'){pickTl();}else{go('caco3-technical-hub');}return;}
   var tb=e.target.closest&&e.target.closest('#amu-tabs [data-t]');if(tb){tab(tb.getAttribute('data-t'));return;}
   var gt=e.target.closest&&e.target.closest('.amh-tab');if(gt){gtab(hub,gt.getAttribute('data-tab'));return;}
   var ff=e.target.closest&&e.target.closest('.amh-filter button');if(ff){A(hub.querySelectorAll('tr[data-code]')).forEach(function(r){r.classList.remove('hit','dim');});hub.querySelector('.amh-filter').classList.remove('on');return;}
   var fb=e.target.closest&&e.target.closest('#amu-apps [data-f]');if(fb){var v=fb.getAttribute('data-f');A(hub.querySelectorAll('#amu-apps [data-f]')).forEach(function(b){b.classList.toggle('on',b===fb);});A(hub.querySelectorAll('.amu-c')).forEach(function(c){c.classList.toggle('off',v!=='all'&&c.getAttribute('data-'+v)!=='1');});return;}
   var c=e.target.closest&&e.target.closest('.amu-c');if(c&&hub.contains(c)){var p=e.target.closest('.amu-p');var m=p?p.getAttribute('data-m'):(c.getAttribute('data-ca')==='1'?'ca':'tl');A(hub.querySelectorAll('.amu-c')).forEach(function(x){x.classList.toggle('on',x===c);});if(m==='ca')pickCa(hub,c.getAttribute('data-k'));else pickTl();}
  });
  tab(location.hash==='#talc-technical-center'?'tl':'ca');
  if(location.hash==='#talc-technical-center'||location.hash==='#caco3-grades')setTimeout(function(){go(location.hash.slice(1));},600);
  ld();
  return true;
 }
 var n=0,iv=setInterval(function(){if(mount()||++n>60)clearInterval(iv)},400);
})();
}catch(e){if(window.console)console.warn("AM-FR v4_mining.0",e);}
try{
/* AM-SDS ES (2026-11-04): multilingual SDS center (FR/ES/PT) - protected view-only viewer */
(function(){
 if(window.__amSdsFr) return; window.__amSdsFr=1;
 if(location.pathname.replace(/\/$/,'')!=='/fr/commerce-de-manara') return;
 var C=String.fromCharCode, B='https://assets.wuiltweb.com/241623/';
 var M={"FR":["101320261202276ace1dd382124.webp","101320261203466ace1e22d0d88.webp","101320261204056ace1e35a9ea5.webp","101320261204186ace1e42a735a.webp","101320261204326ace1e5008ce0.webp","101320261204456ace1e5d81e51.webp","101320261204506ace1e62a87ba.webp","101320261205136ace1e799e23b.webp","101320261205306ace1e8a4d612.webp"],"ES":["101320261205466ace1e9a3de5a.webp","101320261206026ace1eaa2a563.webp","101320261206176ace1eb9e6e5f.webp","101320261206376ace1ecdc012b.webp","101320261206506ace1edac0e46.webp","101320261209076ace1f6311e74.webp","101320261214166ace2098d61f6.webp","101320261214326ace20a84ca60.webp"],"PT":["101320261214456ace20b5c35b7.webp","101320261214596ace20c3b762c.webp","101320261215186ace20d64be7e.webp","101320261215306ace20e286b33.webp","101320261215446ace20f083bf5.webp","101320261215556ace20fb4b335.webp","101320261216126ace210c19ef2.webp","101320261216346ace212203165.webp"]};
 var L=[
  {k:'FR',n:'Fran'+C(231)+'ais',pair:'Anglais + Fran'+C(231)+'ais',pages:9},
  {k:'ES',n:'Espa'+C(241)+'ol',pair:'Anglais + Espa'+C(241)+'ol',pages:8},
  {k:'PT',n:'Portugu'+C(234)+'s',pair:'Anglais + Portugu'+C(234)+'s',pages:8}
 ];
 var css='.amsds{max-width:1180px;margin:0 auto;padding:8px 20px 56px;box-sizing:border-box;font-family:Inter,Poppins,Arial,sans-serif}'+
 '.amsds *{box-sizing:border-box}'+
 '.amsds .k{color:#F2862E;font-weight:700;font-size:12px;letter-spacing:.12em}'+
 '.amsds h3{font-weight:500;font-family:Montserrat,Inter,sans-serif;color:#0F2B4F;font-size:26px;margin:4px 0 6px;line-height:1.2}'+
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
  modal.innerHTML='<div class="amsds-h"><div class="t"></div><div class="amsds-tabs"></div><button class="amsds-x" aria-label="Cerrar">&times;</button></div><div class="amsds-s"></div>';
  document.body.appendChild(modal);
  var tabs=modal.querySelector('.amsds-tabs');
  L.forEach(function(l){var b=document.createElement('button');b.textContent=l.k;b.setAttribute('data-k',l.k);b.onclick=function(){show(l.k)};tabs.appendChild(b)});
  modal.querySelector('.amsds-x').onclick=close;
  modal.addEventListener('click',function(e){if(e.target===modal)close()});
  ['contextmenu','dragstart','copy','cut'].forEach(function(ev){modal.addEventListener(ev,function(e){e.preventDefault()})});
 }
 function show(k){
  var l=L.filter(function(x){return x.k===k})[0],s=modal.querySelector('.amsds-s');
  modal.querySelector('.t').textContent='SDS - Carbonate de calcium | '+l.pair;
  modal.querySelectorAll('.amsds-tabs button').forEach(function(b){b.classList.toggle('on',b.getAttribute('data-k')===k)});
  s.innerHTML='';s.scrollTop=0;
  for(var i=0;i<l.pages;i++){var im=new Image();im.alt='Fiche de données de sécurité du carbonate de calcium '+l.pair+' page '+(i+1);im.loading='lazy';im.draggable=false;im.src=B+M[k][i];s.appendChild(im)}
  var n=document.createElement('div');n.className='amsds-n';n.textContent='Document en lecture seule. Rév. 02 - 01/09/2026. Pour la version la plus récente ou une copie signée, contactez-nous par WhatsApp +20 11 4600 6496.';s.appendChild(n);
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
  var h='<div class="k">FICHE DE DONNÉES DE SÉCURITÉ | MULTILINGUE</div><h3>SDS dans votre langue</h3><p class="sub">La même fiche de données de sécurité SGH de 16 rubriques pour le carbonate de calcium, en anglais et dans votre langue, côte à côte. Ouvrez-la ici pour la lire.</p><div class="amsds-g">';
  L.forEach(function(l){h+='<div class="amsds-c"><div class="code">'+l.k+'</div><div class="nm">'+l.n+'</div><div class="pr">'+l.pair+'</div><button class="amsds-b" data-k="'+l.k+'">Voir la SDS</button><div class="amsds-lk">Lecture seule | protégé</div><div class="mt">'+l.pages+' pages | Rév. 02 | 01/09/2026</div></div>'});
  w.innerHTML=h+'</div>';
  docs.parentNode.insertBefore(w,docs.nextSibling);
  w.querySelectorAll('.amsds-b').forEach(function(b){b.onclick=function(){open(b.getAttribute('data-k'))}});
  return true;
 }
 var n=0,iv=setInterval(function(){if(mount()||++n>60)clearInterval(iv)},500);
})();
}catch(e){if(window.console)console.warn("AM-FR v4_mining.1",e);}
