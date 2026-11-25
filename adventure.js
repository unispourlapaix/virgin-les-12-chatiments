// Local adventure progress. Only successful levels earn a fruit and unlock the next.
const Adventure=(()=>{
const key='virgin-adventure-fruits-v1',names=['Pomme','Poire','Orange','Fraise','Cerises','Ananas'];
const values={snack:100,object:50,cat:100,box:25,toy:20,water:75,food:75,diamond:250,heart:50,cloud:25,portal:50,reaction:15,hide:10,shelter:100,level:100};
let completed=new Set(),level=1,won=false,runScore=0,scored=new Set(),best=Array(7).fill(0);try{let saved=JSON.parse(window.localStorage.getItem(key)||'[]'),list=Array.isArray(saved)?saved:saved?.completed;if(Array.isArray(list))completed=new Set(list.filter(n=>Number.isInteger(n)&&n>=1&&n<=6));if(Array.isArray(saved?.best)&&saved.best.length===7)best=saved.best.map(n=>Number.isFinite(n)?Math.max(0,Math.floor(n)):0)}catch{}
function save(){try{window.localStorage.setItem(key,JSON.stringify({completed:[...completed].sort(),best}))}catch{}}
function displayScore(){let display=document.getElementById('adventure-score-value');if(display)display.textContent=runScore;let summary=document.getElementById('score-records');if(summary)summary.textContent='Partie : '+runScore+' pts · Records cumulés : '+best.reduce((a,b)=>a+b,0)+' pts'}
function reward(type,id){let amount=values[type]||0;if(!amount)return 0;let token=id&&typeof id==='object'?id:type+':'+String(id);if(scored.has(token))return 0;scored.add(token);runScore+=amount;displayScore();let gain=document.getElementById('score-gain');if(gain){gain.textContent='+'+amount;gain.classList.remove('show');void gain.offsetWidth;gain.classList.add('show')}return amount}
function syncScore(value){if(Number.isFinite(value)){runScore=Math.round(value);displayScore()}}
function finishScore(){best[level]=Math.max(best[level],runScore);save();displayScore();let summary=document.getElementById(level===4||level===6?'garage-score-result':'end-score-result');if(summary)summary.textContent='Score : '+runScore+' pts · Record : '+best[level]+' pts';return runScore}

const shapes=[
'<path fill="#d9605d" d="M4 5h8v2h2v7h-2v2H4v-2H2V7h2z"/><path fill="#fa9b80" d="M4 7h2v5H4z"/>',
'<path fill="#c2cc68" d="M6 3h4v5h2v2h2v4h-2v2H4v-2H2v-4h2V8h2z"/><path fill="#eff1a2" d="M5 10h2v4H5z"/>',
'<path fill="#eaa34d" d="M5 3h6v2h3v3h2v5h-2v3H3v-3H1V7h2V5h2z"/><path fill="#ffd38b" d="M4 6h3v2H4zm7 5h2v2h-2z"/>',
'<path fill="#df6d76" d="M3 5h10v3h2v3h-2v2h-2v2H9v2H7v-2H5v-2H3v-2H1V7h2z"/><path fill="#ffe2a4" d="M4 8h1v2H4zm6 1h1v2h-1zm-3 3h1v2H7z"/>',
'<path fill="#9aba69" d="M7 2h2v3H7zM5 5h2v3H5zm4 0h2v3H9z"/><path fill="#cb6371" d="M2 8h5v2h2v4H7v2H2v-2H0v-4h2zm9 0h4v2h2v4h-2v2h-4v-2H9v-4h2z"/>',
'<path fill="#91ad69" d="M3 0h2v2h2V0h2v2h2V0h2v4h-2v2H5V4H3z"/><path fill="#e4b966" d="M5 5h6v2h2v7h-2v2H5v-2H3V7h2z"/><path fill="#a87943" d="M5 8h2v2H5zm4 0h2v2H9zm-2 3h2v2H7z"/>'
];
function icon(n){return '<svg class="fruit-icon" viewBox="0 0 18 18" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">'+(n<5?'<path fill="#9bbb6a" d="M8 0h2v4H8zm2 0h4v2h-4z"/>':'')+shapes[n-1]+'</svg>'}
function canPlay(n){return n>=1&&n<=6&&(completed.has(n)||Array.from({length:n-1},(_,i)=>i+1).every(i=>completed.has(i)))}
function refresh(){for(const b of document.querySelectorAll('[data-level]')){let n=Number(b.dataset.level);if(!b.dataset.levelLabel)b.dataset.levelLabel=b.textContent;b.disabled=!canPlay(n);b.setAttribute('aria-disabled',String(b.disabled));b.title=b.disabled?'Réussis le niveau '+(n-1)+' pour débloquer celui-ci.':completed.has(n)?'Rejouer · Trophée '+names[n-1]+' obtenu':'Jouer ce niveau';b.innerHTML=(completed.has(n)?icon(n):'<span class="level-state" aria-hidden="true">'+(b.disabled?'×':'›')+'</span>')+'<span>'+b.dataset.levelLabel+'</span>'}let collection=document.getElementById('fruit-collection');if(collection)collection.innerHTML=names.map((name,i)=>'<div class="fruit-cell '+(completed.has(i+1)?'earned':'locked')+'" title="Niveau '+(i+1)+' · '+name+'"><span>'+icon(i+1)+'</span><small>'+name+'</small><small>'+ (completed.has(i+1)?best[i+1]+' pts':'À gagner')+'</small></div>').join('');let count=document.getElementById('fruit-count');if(count)count.textContent=completed.size+' / 6 fruits';displayScore()}
function begin(n){if(!canPlay(n))return false;level=n;won=false;runScore=0;scored=new Set();displayScore();for(const id of ['end-fruit','garage-fruit'])document.getElementById(id)?.classList.add('hidden');return true}
function win(n){if(level!==n||!canPlay(n))return false;won=true;completed.add(n);reward('level',n);finishScore();refresh();let result=document.getElementById(n===4||n===6?'garage-fruit':'end-fruit');if(result){result.innerHTML=icon(n)+'<span>Trophée '+names[n-1]+' obtenu !</span>';result.classList.remove('hidden')}return true}
function launch(n){if(!canPlay(n))return false;if(typeof Garage!=='undefined'&&Garage.active)Garage.exit();if(typeof Sky!=='undefined'&&Sky.active)Sky.exit();if(typeof Dream!=='undefined'&&Dream.active)Dream.exit();document.getElementById('end').classList.add('hidden');if(n===1){document.getElementById('start').click()}else if(n===2)Dream.start();else if(n===3)Sky.start();else if(n===4)Garage.start();else if(n===5)Night.start();else Alley.start();return true}
function advance(){if(!won||level>=6)return false;return launch(level+1)}
return{values,reward,syncScore,finishScore,canPlay,begin,win,launch,advance,refresh,inspect:()=>({level,won,score:runScore,best:[...best],totalBest:best.reduce((a,b)=>a+b,0),completed:[...completed].sort()})};
})();
