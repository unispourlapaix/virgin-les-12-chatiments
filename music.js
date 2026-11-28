// Continuous playlist: finish each song before advancing, including entry into chapter XII.
const GameMusic=(()=>{
const tracks={intro:{title:'Chatoiement de la vie',src:'assets/music/chatoiement-de-la-vie.m4a'},street:{title:'La pâtée, la pâtée !',src:'assets/music/la-patee.m4a'},home:{title:'Joyeux anniversaire !',src:'assets/music/joyeux-anniversaire.m4a'}},playlist=['intro','street'];
const player=new Audio(),volume=.30;player.preload='none';player.loop=false;player.volume=volume;
let enabled=true,unlocked=false,current=null,pending=false,blocked=false,epoch=0,focused=true,index=0,fade=null,waitingHome=false;
try{enabled=window.localStorage.getItem('virgin-music-enabled')!=='false'}catch{}
const button=document.getElementById('music-toggle');
function group(){return typeof Garage!=='undefined'&&Garage.active&&Garage.inspect().chapter===12?'home':'playlist'}
function suspended(){return !focused||!!document.hidden}
function label(){if(!button)return;button.textContent='Musique : '+(!enabled?'désactivée':blocked?'toucher pour écouter':'activée');button.setAttribute('aria-pressed',String(enabled));button.title=(current?tracks[current].title:'Playlist en boucle')+(waitingHome?' · Joyeux anniversaire ! après cette chanson':'')}
function switchTo(key){epoch++;player.pause();pending=false;blocked=false;current=key;fade=null;player.volume=volume;player.loop=key==='home';player.src=tracks[key].src;player.currentTime=0;label()}
function sync(){let next=group();if(!current)switchTo(next==='home'?'home':playlist[index]);waitingHome=next==='home'&&current!=='home';if(waitingHome&&!unlocked&&player.paused){switchTo('home');waitingHome=false}
 if(current==='home'&&next==='playlist'){if(fade===null)fade=Date.now();let progress=Math.min(1,(Date.now()-fade)/700);player.volume=volume*(1-progress);if(progress>=1||player.ended)switchTo(playlist[index])}else if(fade!==null){fade=null;player.volume=volume}
 player.loop=current==='home'&&next==='home';label();let stop=!enabled||!audioOn||suspended();if(stop){if(!player.paused)player.pause();return}if(!unlocked||blocked||pending||!player.paused)return;pending=true;let request=epoch,result;try{result=player.play()}catch{pending=false;blocked=true;label();return}Promise.resolve(result).then(()=>{if(request!==epoch)return;pending=false;if(!enabled||!audioOn||suspended())player.pause();blocked=false;label()},()=>{if(request!==epoch)return;pending=false;blocked=true;label()})}
player.onended=()=>{if(current!=='home')index=(index+1)%playlist.length;switchTo(group()==='home'?'home':playlist[index]);waitingHome=false;sync()};
function unlock(){unlocked=true;blocked=false;sync()}
if(button)button.onclick=()=>{enabled=!enabled;try{window.localStorage.setItem('virgin-music-enabled',String(enabled))}catch{}blocked=false;label();unlock()};
document.addEventListener('click',unlock);document.addEventListener('keydown',e=>{if(!e.repeat)unlock()});document.addEventListener('visibilitychange',sync);
window.addEventListener('blur',()=>{focused=false;player.pause()});window.addEventListener('focus',()=>{focused=true;blocked=false;sync()});
label();return{sync,unlock,inspect:()=>({track:current,title:current?tracks[current].title:null,playlist:playlist.map(k=>tracks[k].title),group:group(),waitingHome,enabled,unlocked,blocked,paused:player.paused,pending,volume:player.volume,loop:player.loop,suspended:suspended()})};
})();
