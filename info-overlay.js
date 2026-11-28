// Close persistent guidance across DOM panels and canvas levels, without hiding health/score.
const InfoOverlay=(()=>{
let hidden=false;try{hidden=window.localStorage.getItem('virgin-info-hidden')==='true'}catch{}
const button=document.getElementById('info-close'),setting=document.getElementById('info-setting');
function paint(){document.body.classList.toggle('infos-hidden',hidden);button.textContent=hidden?'Infos':'× Infos';button.setAttribute('aria-label',hidden?'Réafficher les informations':'Masquer les informations pour dégager le jeu');button.setAttribute('aria-expanded',String(!hidden));button.title=hidden?'Réafficher les consignes':'Fermer les informations';if(setting){setting.textContent='Informations : '+(hidden?'masquées':'affichées');setting.setAttribute('aria-pressed',String(!hidden))}}
function toggle(){hidden=!hidden;try{window.localStorage.setItem('virgin-info-hidden',String(hidden))}catch{}paint()}
function sync(){button.classList.toggle('hidden',!document.getElementById('intro').classList.contains('hidden')||document.body.classList.contains('menu-open')||!document.getElementById('end').classList.contains('hidden'))}
button.onclick=toggle;if(setting)setting.onclick=toggle;paint();sync();return{sync,toggle,get visible(){return !hidden}};
})();
