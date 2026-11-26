// Chapter VII: hidden cats and lost belongings circa 1925, before the sewers flood.
const Sewers=(()=>{
const items=[
{id:'watch-1925',name:'Montre à gousset',clue:'Une petite montre dorée a arrêté le temps.',hint:'Observe la corniche de pierre du premier plan à gauche.',x:0.28,y:0.882,rx:0.045,ry:0.034},
{id:'pen-1925',name:'Stylo-plume',clue:'Sa plume attend encore une dernière lettre.',hint:'Un objet long et noir repose vers le bas, au milieu.',x:0.414,y:0.859,rx:0.06,ry:0.024},
{id:'cloche-1925',name:'Chapeau cloche',clue:'Une élégante des années folles l’a perdu ici.',hint:'Cherche un chapeau brun dans les objets de droite.',x:0.854,y:0.768,rx:0.122,ry:0.052},
{id:'glasses-1925',name:'Lunettes rondes',clue:'Deux petits cercles de métal dans la pénombre.',hint:'Inspecte le bord du passage de droite.',x:0.824,y:0.632,rx:0.068,ry:0.02},
{id:'purse-1925',name:'Porte-monnaie',clue:'Une petite bourse de cuir avec un fermoir.',hint:'Regarde les objets sur le passage de gauche.',x:0.157,y:0.626,rx:0.058,ry:0.034},
{id:'camera-1925',name:'Appareil à soufflet',clue:'Un appareil photo dont l’objectif se déplie.',hint:'Explore le côté gauche, près des vieux récipients.',x:0.261,y:0.556,rx:0.068,ry:0.046},
{id:'compass-1925',name:'Boussole en laiton',clue:'Elle indique le nord, même sous les rues.',hint:'Cherche un petit disque doré à droite.',x:0.725,y:0.563,rx:0.046,ry:0.035},
{id:'mirror-1925',name:'Miroir de poche',clue:'Un petit miroir et son manche ouvragé.',hint:'Regarde les objets du haut du passage droit.',x:0.878,y:0.417,rx:0.044,ry:0.042},
{id:'pearls-1925',name:'Collier de perles',clue:'Un cercle de perles pâles parmi les vieilles pierres.',hint:'Une boucle claire est posée du côté gauche.',x:0.26,y:0.376,rx:0.061,ry:0.041},
{id:'key-1925',name:'Clé en laiton',clue:'Une clé ancienne attend sa serrure.',hint:'Cherche vers le haut, à droite du canal.',x:0.65,y:0.342,rx:0.027,ry:0.044},
{id:'tin-1925',name:'Boîte émaillée',clue:'Une boîte de repas pâle, usée par le temps.',hint:'Inspecte le rebord de gauche dans la partie haute.',x:0.279,y:0.292,rx:0.06,ry:0.026},
{id:'cloth-1925',name:'Mouchoir brodé',clue:'Une étoffe blanche, fine et brodée.',hint:'Tout en bas, un morceau de tissu dépasse sur le passage.',x:0.642,y:0.928,rx:0.094,ry:0.048}
];
const cats=[
{id:'sewer-cat1',name:'Le chat de la grille',hint:'Inspecte la grille en haut à gauche.',x:0.087,y:0.145,rx:0.028,ry:0.024},
{id:'sewer-cat2',name:'Le chat du tuyau',hint:'Regarde au-dessus du tuyau de droite.',x:0.891,y:0.166,rx:0.034,ry:0.024},
{id:'sewer-cat3',name:'Le chat de la niche',hint:'Une tête dépasse d’une niche dans les hauteurs.',x:0.441,y:0.199,rx:0.032,ry:0.021},
{id:'sewer-cat4',name:'Le chat des caisses',hint:'Un chat observe derrière les caisses de gauche.',x:0.085,y:0.324,rx:0.031,ry:0.024},
{id:'sewer-cat5',name:'Le chat de l’arche',hint:'Explore l’ombre de l’arche du côté droit.',x:0.872,y:0.325,rx:0.034,ry:0.024},
{id:'sewer-cat6',name:'Le chat du panier',hint:'Une paire d’oreilles dépasse du panier.',x:0.323,y:0.487,rx:0.032,ry:0.023},
{id:'sewer-cat7',name:'Le chat du réservoir',hint:'Inspecte le réservoir rouillé de droite.',x:0.747,y:0.44,rx:0.024,ry:0.021},
{id:'sewer-cat8',name:'Le chat du banc',hint:'Regarde sous le banc à gauche.',x:0.272,y:0.672,rx:0.03,ry:0.024},
{id:'sewer-cat9',name:'Le chat du passage',hint:'Explore le dessous de la grille de droite.',x:0.949,y:0.627,rx:0.029,ry:0.022},
{id:'sewer-cat10',name:'Le chat de la malle',hint:'Un chat se cache derrière la malle du premier plan.',x:0.237,y:0.765,rx:0.033,ry:0.024},
{id:'sewer-cat11',name:'Le chat du sac',hint:'Observe le sac posé du côté droit.',x:0.878,y:0.875,rx:0.04,ry:0.031},
{id:'virgin',name:'Virgin',hint:'Virgin est près du seau du premier plan, à gauche.',x:0.146,y:0.819,rx:0.04,ry:0.026}
];
const valves=[{id:'left-valve',x:0.232,y:0.444,rx:0.037,ry:0.034,used:false},{id:'right-valve',x:0.823,y:0.514,rx:0.041,ry:0.036,used:false}];
const duration=180;
let water=0,grace=0,elapsed=0,relief=0,warned=false;
const el=id=>document.getElementById('sewer-'+id);
function display(){el('tide').value=water;let left=Math.max(0,Math.ceil(duration-elapsed)),clock=String(Math.floor(left/60)).padStart(2,'0')+':'+String(left%60).padStart(2,'0');el('tide-label').textContent='Chrono '+clock+' · Eau '+Math.floor(water)+' % · '+valves.filter(v=>!v.used).length+' vannes';el('water').style.height=(8+water*.44)+'%';el('hud').classList.toggle('sewer-danger',water>=80);el('effects').classList.toggle('overflowing',water>=65)}
function reset(){water=0;grace=0;elapsed=0;relief=0;warned=false;el('effects').classList.remove('flooded');for(const v of valves)v.used=false;el('hud').classList.remove('hidden');el('effects').classList.remove('hidden');pause(false);display()}
function pause(value){el('effects').setAttribute('data-paused',String(value))}
function update(dt){elapsed=Math.min(duration,elapsed+dt);relief=Math.max(0,relief-dt*.35);water=Math.max(0,elapsed/duration*100-relief);if(elapsed>=duration){water=100;display();el('effects').classList.add('flooded');Garage.fail('GAME OVER — Temps écoulé ! L’eau sale, marron et boueuse envahit les passages. Virgin et les chats se réfugient plus haut. Il fallait retrouver les 12 chats et les 12 objets de 1925 en trois minutes.');return}display();if(water>=80&&!warned){warned=true;Garage.say('Dernières secondes ! L’eau boueuse monte dans les passages.')}if(water<70)warned=false}
function found(){relief=Math.min(25,relief+3);water=Math.max(0,elapsed/duration*100-relief);display()}
function tap(x,y,width,height){let valve=valves.find(v=>((x-v.x)/Math.max(v.rx,14/width))**2+((y-v.y)/Math.max(v.ry,14/height))**2<=1);if(!valve)return false;if(valve.used){Garage.say('Cette vanne est déjà ouverte. Cherche l’autre si l’eau remonte.');return true}if(water<10){Garage.say('Garde cette vanne pour plus tard, quand l’eau sera montée.');return true}valve.used=true;relief=Math.min(50,relief+35);water=Math.max(0,elapsed/duration*100-relief);if(typeof Adventure!=='undefined')Adventure.reward('valve',valve.id);display();tone(320,.25,'triangle');Garage.say('La vanne s’ouvre ! L’eau boueuse redescend un moment. Le chronomètre continue !');return true}
const config={id:'sewers',chapter:7,title:'Les égouts de 1925',image:'assets/sewers-manga.png',alt:'Égouts de Paris en manga : passages étroits, rat géant menaçant dans le tunnel du fond, douze chats cachés et douze objets perdus vers 1925.',items,cats,start:reset,update,pause,found,tap,welcome:'3 minutes pour 12 chats et 12 objets de 1925. Les vannes font baisser l’eau, sans arrêter le chrono !',ending:'Les douze chats ont trouvé un passage sec. Les objets de 1925 sont sauvés des eaux.'};
function start(){Garage.start(config)}
document.getElementById('sewers-start').onclick=start;document.getElementById('garage-next-sewers').onclick=()=>{if(!Garage.inspect().complete||Garage.inspect().chapter!==6)return;if(typeof Adventure!=='undefined')Adventure.advance();else start()};
return{start,get active(){return Garage.active&&Garage.inspect().chapter===7},inspect:()=>({...Garage.inspect(),water,grace,elapsed,duration,remaining:Math.max(0,duration-elapsed),valves:valves.map(v=>({...v}))})};
})();
