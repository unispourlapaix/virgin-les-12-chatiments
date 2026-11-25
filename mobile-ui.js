// Mobile panels float above the scene without changing its geometry.
(()=>{
 const toggle=document.getElementById('garage-list-toggle'),panel=document.getElementById('garage-object-panel'),count=document.getElementById('garage-count'),full=document.getElementById('fullscreen');
 function sync(){let open=document.body.classList.contains('garage-list-open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=(open?'Fermer':'Objets')+' · '+count.textContent.replace(' objets','');}
 toggle.onclick=()=>{document.body.classList.toggle('garage-list-open');sync()};
 new MutationObserver(sync).observe(count,{childList:true,characterData:true,subtree:true});
 new MutationObserver(sync).observe(document.body,{attributes:true,attributeFilter:['class']});
 const supported=!!(document.documentElement.requestFullscreen||document.documentElement.webkitRequestFullscreen);
 if(supported){full.classList.remove('hidden');full.textContent='Plein écran';full.onclick=async()=>{try{if(document.fullscreenElement||document.webkitFullscreenElement){await (document.exitFullscreen?.()||document.webkitExitFullscreen?.())}else{const root=document.documentElement;await (root.requestFullscreen?root.requestFullscreen():root.webkitRequestFullscreen())}}catch{full.title='Le plein écran reste disponible depuis le menu du navigateur.'}};const refresh=()=>{const active=!!(document.fullscreenElement||document.webkitFullscreenElement);full.setAttribute('aria-label',active?'Quitter le plein écran':'Activer le plein écran');full.setAttribute('aria-pressed',String(active))};document.addEventListener('fullscreenchange',refresh);document.addEventListener('webkitfullscreenchange',refresh)}
 sync();
})();
