// The three supplied songs share one player, so level transitions never overlap tracks.
const GameMusic=(()=>{
const tracks={intro:{title:'Chatoiement de la vie',src:'assets/music/chatoiement-de-la-vie.m4a'},street:{title:'La pâtée, la pâtée !',src:'assets/music/la-patee.m4a'},home:{title:'Joyeux anniversaire !',src:'assets/music/joyeux-anniversaire.m4a'}};
const player=new Audio();player.preload='none';player.loop=true;player.volume=.30;
let enabled=true,unlocked=false,current=null,pending=false,blocked=false,epoch=0,lastPaused=true,focused=true;
try{enabled=window.localStorage.getItem('virgin-music-enabled')!=='false'}catch{}
const button=document.getElementById('music-toggle');
function route(){if(mode==='intro')return 'intro';if(typeof Garage!=='undefined'&&Garage.active)return Garage.inspect().chapter===12?'home':null;if(typeof Adventure!=='undefined'&&Adventure.inspect().level===1&&!nightStreet&&['play','pause','win','lost'].includes(mode))return 'street';return null}
function suspended(){return !focused||!!document.hidden||document.body.classList.contains('menu-open')||mode==='pause'||(typeof Garage!=='undefined'&&Garage.active&&Garage.inspect().paused)}
function label(){if(!button)return;let value=!enabled?'désactivée':blocked?'toucher pour écouter':'activée';button.textContent='Musique : '+value;button.setAttribute('aria-pressed',String(enabled));button.title=current?tracks[current].title:'Musique disponible à l’accueil, au niveau 1 et au niveau 12'}
function sync(){let next=route();if(next!==current){epoch++;player.pause();pending=false;current=next;blocked=false;if(current){player.src=tracks[current].src;player.currentTime=0}else{player.removeAttribute('src');player.load()}label()}let stop=!current||!enabled||!audioOn||suspended();lastPaused=stop;if(stop){if(!player.paused)player.pause();return}if(!unlocked||blocked||pending||!player.paused)return;pending=true;let request=epoch;let result;try{result=player.play()}catch{pending=false;blocked=true;label();return}Promise.resolve(result).then(()=>{if(request!==epoch)return;pending=false;if(!enabled||!audioOn||suspended())player.pause();blocked=false;label()},()=>{if(request!==epoch)return;pending=false;blocked=true;label()})}
function unlock(){unlocked=true;blocked=false;sync()}
if(button)button.onclick=()=>{enabled=!enabled;try{window.localStorage.setItem('virgin-music-enabled',String(enabled))}catch{}blocked=false;label();unlock()};
document.addEventListener('click',unlock);document.addEventListener('keydown',e=>{if(!e.repeat)unlock()});document.addEventListener('visibilitychange',sync);
window.addEventListener('blur',()=>{focused=false;player.pause()});window.addEventListener('focus',()=>{focused=true;blocked=false;sync()});
label();return{sync,unlock,inspect:()=>({track:current,title:current?tracks[current].title:null,enabled,unlocked,blocked,paused:player.paused,pending,volume:player.volume,loop:player.loop,suspended:lastPaused})};
})();
