const InfoOverlay=(()=>{
let hidden=false,areas=[];try{hidden=window.localStorage.getItem('virgin-info-hidden')==='true'}catch{}
const setting=document.getElementById('info-setting');
function paint(){document.body.classList.toggle('infos-hidden',hidden);if(setting){setting.textContent='Informations : '+(hidden?'masquées':'affichées');setting.setAttribute('aria-pressed',String(!hidden))}}
function set(value){hidden=value;areas=[];try{window.localStorage.setItem('virgin-info-hidden',String(hidden))}catch{}paint()}
function toggle(){set(!hidden)}
function sync(){areas=[]}
function drawClose(x,y,width){if(hidden)return;let box={x:x+width-30,y:y+3,w:26,h:26};rect(box.x,box.y,box.w,box.h,'#29303be8');text('×',box.x+5,box.y+20,'#f7dfb5',22);areas.push(box)}
for(const b of document.querySelectorAll('[data-info-close]'))b.onclick=()=>set(true);
if(setting)setting.onclick=toggle;
document.addEventListener('pointerdown',e=>{if(hidden||e.target!==c||document.body.classList.contains('menu-open'))return;let r=c.getBoundingClientRect(),x=(e.clientX-r.left)*c.width/r.width,y=(e.clientY-r.top)*c.height/r.height;if(areas.some(b=>x>=b.x&&x<=b.x+b.w&&y>=b.y&&y<=b.y+b.h)){e.preventDefault();e.stopImmediatePropagation();set(true)}},true);
paint();return{sync,toggle,drawClose,get visible(){return !hidden}};
})();
