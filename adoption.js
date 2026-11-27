// Chapter XII: twelve cat representations hidden in a happy adopted kitten’s home.
const Adoption=(()=>{
const items=[
 {
  "id": "home-kibblebowl",
  "name": "Gamelle de croquettes",
  "clue": "Un bol rempli attend le prochain petit creux de Virgin.",
  "hint": "Regarde au pied du divan, à côté du bol d’eau.",
  "x": 0.166,
  "y": 0.582,
  "rx": 0.046,
  "ry": 0.022
 },
 {
  "id": "home-collar",
  "name": "Collier à clochette",
  "clue": "Une petite clochette au bout d’un ruban violet.",
  "hint": "Cherche dans les accessoires suspendus à droite.",
  "x": 0.824,
  "y": 0.135,
  "rx": 0.028,
  "ry": 0.045
 },
 {
  "id": "home-laser",
  "name": "Jouet laser",
  "clue": "Une petite lampe pour jouer avec un point lumineux.",
  "hint": "Explore la console à gauche.",
  "x": 0.082,
  "y": 0.376,
  "rx": 0.045,
  "ry": 0.015
 },
 {
  "id": "home-wand",
  "name": "Canne à plume",
  "clue": "Une plume rose attend une patte curieuse.",
  "hint": "Cherche près de l’arbre à chat.",
  "x": 0.25,
  "y": 0.3,
  "rx": 0.04,
  "ry": 0.04
 },
 {
  "id": "home-scoop",
  "name": "Pelle à litière",
  "clue": "Une pelle bleue avec des petits trous.",
  "hint": "Regarde près de la litière sur la droite.",
  "x": 0.934,
  "y": 0.464,
  "rx": 0.028,
  "ry": 0.035
 },
 {
  "id": "home-caterpillar",
  "name": "Doudou chenille",
  "clue": "Un long doudou tout doux fait de boules colorées.",
  "hint": "La chenille attend devant le divan.",
  "x": 0.342,
  "y": 0.645,
  "rx": 0.14,
  "ry": 0.031
 },
 {
  "id": "home-puzzle",
  "name": "Jeu de friandises",
  "clue": "Un puzzle vert pour gagner des petites récompenses.",
  "hint": "Explore la table basse.",
  "x": 0.732,
  "y": 0.558,
  "rx": 0.08,
  "ry": 0.022
 },
 {
  "id": "home-fountain",
  "name": "Fontaine à eau",
  "clue": "Un petit appareil bleu distribue de l’eau fraîche.",
  "hint": "Regarde le sol à droite du divan.",
  "x": 0.77,
  "y": 0.684,
  "rx": 0.075,
  "ry": 0.05
 },
 {
  "id": "home-lickmat",
  "name": "Tapis de léchage",
  "clue": "Un tapis corail pour étaler une petite gourmandise.",
  "hint": "Cherche au premier plan, à gauche du milieu.",
  "x": 0.32,
  "y": 0.755,
  "rx": 0.075,
  "ry": 0.035
 },
 {
  "id": "home-feeder",
  "name": "Distributeur de croquettes",
  "clue": "Un appareil gris remplit la gamelle de Virgin.",
  "hint": "Regarde les équipements au sol, à droite.",
  "x": 0.935,
  "y": 0.674,
  "rx": 0.06,
  "ry": 0.085
 },
 {
  "id": "home-harness",
  "name": "Harnais violet",
  "clue": "Des sangles pour les futures promenades.",
  "hint": "Observe la caisse de transport au premier plan.",
  "x": 0.146,
  "y": 0.736,
  "rx": 0.06,
  "ry": 0.075
 },
 {
  "id": "home-ball",
  "name": "Balle rouge",
  "clue": "Un petit rond rouge pour jouer.",
  "hint": "Cherche sur le tapis, tout en bas à droite.",
  "x": 0.816,
  "y": 0.846,
  "rx": 0.037,
  "ry": 0.028
 }
],cats=[
 {
  "id": "home-cat-motif1",
  "name": "La figurine chat",
  "hint": "Une petite statuette se cache sur la haute étagère.",
  "x": 0.137,
  "y": 0.078,
  "rx": 0.025,
  "ry": 0.025
 },
 {
  "id": "home-cat-motif2",
  "name": "La photo de chat",
  "hint": "Regarde les cadres au mur.",
  "x": 0.542,
  "y": 0.102,
  "rx": 0.033,
  "ry": 0.03
 },
 {
  "id": "home-cat-motif3",
  "name": "Le chat du rideau",
  "hint": "Un chat se dessine sur le tissu du rideau.",
  "x": 0.94,
  "y": 0.148,
  "rx": 0.035,
  "ry": 0.032
 },
 {
  "id": "home-cat-motif4",
  "name": "Le chat en peluche",
  "hint": "Cherche le petit jouet posé sur une plateforme de l’arbre à chat.",
  "x": 0.122,
  "y": 0.242,
  "rx": 0.028,
  "ry": 0.025
 },
 {
  "id": "home-cat-motif5",
  "name": "Le dessin de chat",
  "hint": "Explore le mur près de la cheminée.",
  "x": 0.781,
  "y": 0.237,
  "rx": 0.033,
  "ry": 0.03
 },
 {
  "id": "home-cat-motif6",
  "name": "La broderie du canapé",
  "hint": "Un chat est brodé sur le divan.",
  "x": 0.694,
  "y": 0.43,
  "rx": 0.036,
  "ry": 0.03
 },
 {
  "id": "home-cat-motif7",
  "name": "Le coussin chat",
  "hint": "Une paire d’oreilles donne sa forme à un coussin.",
  "x": 0.278,
  "y": 0.428,
  "rx": 0.06,
  "ry": 0.034
 },
 {
  "id": "home-cat-motif8",
  "name": "Le chat du livre",
  "hint": "Inspecte les livres près de la table basse.",
  "x": 0.572,
  "y": 0.561,
  "rx": 0.021,
  "ry": 0.015
 },
 {
  "id": "home-cat-motif9",
  "name": "Le chat du plaid",
  "hint": "Regarde le motif du plaid à gauche.",
  "x": 0.099,
  "y": 0.481,
  "rx": 0.04,
  "ry": 0.025
 },
 {
  "id": "home-cat-motif10",
  "name": "La pièce de puzzle chat",
  "hint": "Un petit chat en bois attend près de la table.",
  "x": 0.579,
  "y": 0.679,
  "rx": 0.04,
  "ry": 0.022
 },
 {
  "id": "home-cat-motif11",
  "name": "Les chaussons chats",
  "hint": "Observe les deux chaussons douillets au premier plan.",
  "x": 0.293,
  "y": 0.911,
  "rx": 0.08,
  "ry": 0.042
 },
 {
  "id": "home-cat-motif12",
  "name": "Le chat du tapis de léchage",
  "hint": "Un visage de chat est moulé dans le tapis corail.",
  "x": 0.4,
  "y": 0.742,
  "rx": 0.04,
  "ry": 0.025
 }
];
const friends=[{x:.503,y:.43}];
let waking=0;const overlay=document.getElementById('adoption-wakeup');
function awake(){waking=0;overlay.classList.add('hidden');Garage.say('Virgin dort sur le divan. Retrouve 12 accessoires modernes et 12 chats cachés dans les objets, photos et broderies.');}
const config={id:'adoption',chapter:12,title:'Une maison pour Virgin',resultTitle:'Chez lui, enfin.',image:'assets/home-manga-v2.png',catLabel:'motifs de chat',catsClue:'Cherche les chats dans les photos, les jouets, les broderies et les motifs du décor.',catFound:'Une représentation de chat retrouvée !',catAlready:'Ce motif de chat est déjà retrouvé.',alt:'Salon moderne de chalet avec cheminée, grand arbre à chat de 1,80 m, gamelles, doudou chenille et Virgin endormi sur le divan. Douze accessoires pour chat et douze chats représentés dans les photos, jouets et décorations.',items,cats,welcome:'Après le refuge, Virgin a trouvé sa famille. Heureux, il dort sur le divan de sa nouvelle maison.',ending:'Virgin a enfin trouvé une famille. Son arbre à chat de 1,80 m, son doudou chenille et ses gamelles l’attendent. Près de la cheminée, il dort heureux sur le divan. FIN · UNE VIE DE CHAT.',start(){waking=5;overlay.style.opacity='1';overlay.classList.remove('hidden')},update(dt){if(waking>0){waking=Math.max(0,waking-dt);overlay.style.opacity=String(Math.min(1,waking/1.5));if(!waking)awake()}},tap(x,y){if(waking>0)return true;if(friends.some(f=>Math.hypot((x-f.x)/.025,(y-f.y)/.02)<1)){Garage.say('Chut… Virgin dort heureux sur le divan. Les 12 chats à chercher sont des jouets, des images ou des motifs du décor.');return true}return false},exit(){waking=0;overlay.classList.add('hidden')}};
function start(){Garage.start(config)}
document.getElementById('adoption-start').onclick=start;document.getElementById('adoption-skip').onclick=()=>{if(Garage.active&&Garage.inspect().chapter===12&&!Garage.inspect().paused)awake()};
return{start,get active(){return Garage.active&&Garage.inspect().chapter===12},inspect:()=>({...Garage.inspect(),waking,friends:friends.map(f=>({...f}))})};
})();
