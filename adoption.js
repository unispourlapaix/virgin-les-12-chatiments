// Chapter XII: twelve hidden cats, separate from Virgin and three visible friends.
const Adoption=(()=>{
const items=[
 {
  "id": "adoption-brush",
  "name": "Brosse de toilettage",
  "clue": "De petites picots pour une fourrure toute douce.",
  "hint": "Cherche la brosse jaune sur l’étagère de gauche.",
  "x": 0.1,
  "y": 0.104,
  "rx": 0.052,
  "ry": 0.036
 },
 {
  "id": "adoption-collar",
  "name": "Collier à clochette",
  "clue": "Un ruban rouge et une petite clochette.",
  "hint": "Regarde tout en haut à droite.",
  "x": 0.795,
  "y": 0.182,
  "rx": 0.025,
  "ry": 0.043
 },
 {
  "id": "adoption-laser",
  "name": "Jouet laser",
  "clue": "Une petite lampe pour courir après un point lumineux.",
  "hint": "Explore la tablette à gauche du box.",
  "x": 0.105,
  "y": 0.335,
  "rx": 0.062,
  "ry": 0.017
 },
 {
  "id": "adoption-bowl",
  "name": "Gamelle en inox",
  "clue": "Un bol argenté pour les repas.",
  "hint": "Cherche sur les étagères du côté droit.",
  "x": 0.905,
  "y": 0.329,
  "rx": 0.073,
  "ry": 0.022
 },
 {
  "id": "adoption-wand",
  "name": "Canne à plume",
  "clue": "Une plume rose au bout d’une longue baguette.",
  "hint": "Observe les jouets à gauche.",
  "x": 0.2,
  "y": 0.405,
  "rx": 0.08,
  "ry": 0.035
 },
 {
  "id": "adoption-scoop",
  "name": "Pelle à litière",
  "clue": "Une pelle bleue avec des petits trous.",
  "hint": "Cherche l’accessoire suspendu à droite.",
  "x": 0.808,
  "y": 0.428,
  "rx": 0.04,
  "ry": 0.06
 },
 {
  "id": "adoption-mouse",
  "name": "Souris en tissu",
  "clue": "Une petite souris qui ne mord pas.",
  "hint": "Regarde les plateformes de l’arbre à chat à gauche.",
  "x": 0.125,
  "y": 0.598,
  "rx": 0.05,
  "ry": 0.025
 },
 {
  "id": "adoption-treats",
  "name": "Sachet de friandises",
  "clue": "Une pochette orange pour les petites récompenses.",
  "hint": "Explore la table basse au centre.",
  "x": 0.511,
  "y": 0.602,
  "rx": 0.055,
  "ry": 0.05
 },
 {
  "id": "adoption-clicker",
  "name": "Clicker bleu",
  "clue": "Un petit clic pour apprendre en jouant.",
  "hint": "Inspecte le coussin à droite.",
  "x": 0.866,
  "y": 0.6,
  "rx": 0.047,
  "ry": 0.022
 },
 {
  "id": "adoption-harness",
  "name": "Harnais violet",
  "clue": "Des sangles pour partir en promenade.",
  "hint": "Cherche près de la caisse de transport au premier plan.",
  "x": 0.269,
  "y": 0.784,
  "rx": 0.067,
  "ry": 0.085
 },
 {
  "id": "adoption-mat",
  "name": "Tapis de gamelle",
  "clue": "Un tapis vert pour garder le sol propre.",
  "hint": "Regarde le sol au premier plan, vers le milieu.",
  "x": 0.557,
  "y": 0.827,
  "rx": 0.12,
  "ry": 0.035
 },
 {
  "id": "adoption-ball",
  "name": "Balle rouge",
  "clue": "Un petit rond rouge qui roule entre les pattes.",
  "hint": "Cherche tout en bas à droite.",
  "x": 0.824,
  "y": 0.921,
  "rx": 0.052,
  "ry": 0.035
 }
],cats=[
 {
  "id": "adoption-hidden-cat1",
  "name": "Le chat de la haute étagère",
  "hint": "Deux oreilles dépassent tout en haut.",
  "x": 0.34,
  "y": 0.086,
  "rx": 0.027,
  "ry": 0.022
 },
 {
  "id": "adoption-hidden-cat2",
  "name": "Le chat du panier en hauteur",
  "hint": "Cherche dans le panier du coin droit.",
  "x": 0.918,
  "y": 0.052,
  "rx": 0.027,
  "ry": 0.022
 },
 {
  "id": "adoption-hidden-cat3",
  "name": "Le chat du petit casier",
  "hint": "Explore le casier à gauche.",
  "x": 0.078,
  "y": 0.212,
  "rx": 0.027,
  "ry": 0.022
 },
 {
  "id": "adoption-hidden-cat4",
  "name": "Le chat des serviettes",
  "hint": "Regarde derrière les serviettes pliées à droite.",
  "x": 0.96,
  "y": 0.25,
  "rx": 0.027,
  "ry": 0.022
 },
 {
  "id": "adoption-hidden-cat5",
  "name": "Le chat des couvertures",
  "hint": "Cherche dans les couvertures, à gauche du box.",
  "x": 0.234,
  "y": 0.293,
  "rx": 0.027,
  "ry": 0.022
 },
 {
  "id": "adoption-hidden-cat6",
  "name": "Le chat du coussin du box",
  "hint": "Regarde les tissus sur le côté droit du box.",
  "x": 0.727,
  "y": 0.32,
  "rx": 0.027,
  "ry": 0.022
 },
 {
  "id": "adoption-hidden-cat7",
  "name": "Le chat du tunnel",
  "hint": "Explore le tunnel de l’arbre à chat à gauche.",
  "x": 0.122,
  "y": 0.517,
  "rx": 0.027,
  "ry": 0.022
 },
 {
  "id": "adoption-hidden-cat8",
  "name": "Le chat du panier moelleux",
  "hint": "Inspecte le couchage sur la droite.",
  "x": 0.928,
  "y": 0.508,
  "rx": 0.027,
  "ry": 0.022
 },
 {
  "id": "adoption-hidden-cat9",
  "name": "Le chat sous le box",
  "hint": "Cherche dans le panier sous le grand box.",
  "x": 0.356,
  "y": 0.495,
  "rx": 0.027,
  "ry": 0.022
 },
 {
  "id": "adoption-hidden-cat10",
  "name": "Le chat du bac à jouets",
  "hint": "Regarde dans le grand bac à jouets, juste sous le box.",
  "x": 0.586,
  "y": 0.479,
  "rx": 0.027,
  "ry": 0.022
 },
 {
  "id": "adoption-hidden-cat11",
  "name": "Le chat de la caisse de transport",
  "hint": "Cherche dans la caisse tout en bas à gauche.",
  "x": 0.121,
  "y": 0.895,
  "rx": 0.027,
  "ry": 0.022
 },
 {
  "id": "adoption-hidden-cat12",
  "name": "Le chat du coussin du premier plan",
  "hint": "Regarde derrière le coussin à droite.",
  "x": 0.83,
  "y": 0.768,
  "rx": 0.027,
  "ry": 0.022
 }
];
const friends=[{x:.371,y:.264},{x:.532,y:.255},{x:.449,y:.326},{x:.596,y:.329}];
let waking=0;const overlay=document.getElementById('adoption-wakeup');
function awake(){waking=0;overlay.classList.add('hidden');Garage.say('Virgin et ses trois amis sont déjà visibles. Retrouve 12 autres chats cachés et 12 accessoires modernes.');}
const config={id:'adoption',chapter:12,title:'En attendant une famille',resultTitle:'Une famille, un jour…',image:'assets/adoption-manga.png',alt:'Refuge moderne en manga. Virgin, chaton orange et blanc, se réveille dans un box avec trois compagnons visibles. Douze autres chats se cachent parmi les accessoires d’animalerie.',items,cats,welcome:'Virgin se réveille dans un box. Il a été recueilli et attend une adoption avec ses amis.',ending:'Virgin et ses trois compagnons restent ensemble. Les douze autres chats sont retrouvés, les accessoires sont prêts. Au refuge, tous attendent la douceur d’une famille. FIN DES 12 CHÂTIMENTS.',start(){waking=5;overlay.style.opacity='1';overlay.classList.remove('hidden')},update(dt){if(waking>0){waking=Math.max(0,waking-dt);overlay.style.opacity=String(Math.min(1,waking/1.5));if(!waking)awake()}},tap(x,y){if(waking>0)return true;if(friends.some(f=>Math.hypot((x-f.x)/.025,(y-f.y)/.02)<1)){Garage.say('Virgin et ses amis sont déjà réunis. Les 12 chats à chercher se cachent ailleurs dans le refuge.');return true}return false},exit(){waking=0;overlay.classList.add('hidden')}};
function start(){Garage.start(config)}
document.getElementById('adoption-start').onclick=start;document.getElementById('adoption-skip').onclick=()=>{if(Garage.active&&Garage.inspect().chapter===12&&!Garage.inspect().paused)awake()};
return{start,get active(){return Garage.active&&Garage.inspect().chapter===12},inspect:()=>({...Garage.inspect(),waking,friends:friends.map(f=>({...f}))})};
})();
