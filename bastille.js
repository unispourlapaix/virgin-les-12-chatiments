// Chapter X: the Bastille panorama, playful objects and twelve hidden cats.
const Bastille=(()=>{
const items=[
 {
  "id": "bastille-kite",
  "name": "Cerf-volant rouge",
  "clue": "Un losange rouge prêt à prendre le vent.",
  "hint": "Regarde dans le ciel, à gauche.",
  "x": 0.208,
  "y": 0.182,
  "rx": 0.048,
  "ry": 0.038
 },
 {
  "id": "bastille-binoculars",
  "name": "Jumelles jaunes",
  "clue": "Deux yeux pour admirer Grenoble.",
  "hint": "Explore le parapet à droite du panorama.",
  "x": 0.77,
  "y": 0.343,
  "rx": 0.05,
  "ry": 0.02
 },
 {
  "id": "bastille-windmill",
  "name": "Moulin à vent",
  "clue": "Ses ailes bleues tournent avec la brise.",
  "hint": "Cherche près des pierres à gauche.",
  "x": 0.136,
  "y": 0.378,
  "rx": 0.045,
  "ry": 0.036
 },
 {
  "id": "bastille-cablecar",
  "name": "Téléphérique miniature",
  "clue": "Une petite bulle à emporter.",
  "hint": "Explore le muret au milieu à droite.",
  "x": 0.678,
  "y": 0.438,
  "rx": 0.037,
  "ry": 0.03
 },
 {
  "id": "bastille-ball",
  "name": "Ballon multicolore",
  "clue": "Un rond coloré pour jouer à la balle.",
  "hint": "Regarde devant le banc, vers la gauche.",
  "x": 0.329,
  "y": 0.524,
  "rx": 0.036,
  "ry": 0.025
 },
 {
  "id": "bastille-top",
  "name": "Toupie en bois",
  "clue": "Elle tourne sur une toute petite pointe.",
  "hint": "Une toupie attend sur la pierre à droite.",
  "x": 0.799,
  "y": 0.538,
  "rx": 0.03,
  "ry": 0.026
 },
 {
  "id": "bastille-yoyo",
  "name": "Yoyo bleu",
  "clue": "Il descend, puis remonte au bout de sa ficelle.",
  "hint": "Cherche au premier plan à gauche.",
  "x": 0.179,
  "y": 0.674,
  "rx": 0.032,
  "ry": 0.022
 },
 {
  "id": "bastille-rope",
  "name": "Corde à sauter",
  "clue": "Une corde rouge à deux poignées.",
  "hint": "Inspecte les jeux posés au centre.",
  "x": 0.509,
  "y": 0.667,
  "rx": 0.1,
  "ry": 0.035
 },
 {
  "id": "bastille-bubbles",
  "name": "Flacon à bulles",
  "clue": "Une baguette pour fabriquer de petites bulles.",
  "hint": "Observe les objets du côté droit.",
  "x": 0.704,
  "y": 0.721,
  "rx": 0.03,
  "ry": 0.04
 },
 {
  "id": "bastille-camera",
  "name": "Appareil photo jouet",
  "clue": "Un petit appareil jaune pour les souvenirs.",
  "hint": "Regarde vers le bas, à gauche du milieu.",
  "x": 0.365,
  "y": 0.791,
  "rx": 0.047,
  "ry": 0.027
 },
 {
  "id": "bastille-dinosaur",
  "name": "Dinosaure vert",
  "clue": "Un petit géant de plastique.",
  "hint": "Fouille le premier plan, tout à droite.",
  "x": 0.866,
  "y": 0.827,
  "rx": 0.07,
  "ry": 0.045
 },
 {
  "id": "bastille-boat",
  "name": "Bateau en papier",
  "clue": "Un pliage orange rêve de naviguer sur l’Isère.",
  "hint": "Cherche tout en bas à gauche.",
  "x": 0.108,
  "y": 0.892,
  "rx": 0.075,
  "ry": 0.025
 }
],cats=[
 {
  "id": "bastille-cat1",
  "name": "Le chat de la niche",
  "hint": "Cherche une niche dans les pierres en hauteur.",
  "x": 0.353,
  "y": 0.103,
  "rx": 0.028,
  "ry": 0.021
 },
 {
  "id": "bastille-cat2",
  "name": "Le chat du lierre",
  "hint": "Deux oreilles dépassent du lierre à droite.",
  "x": 0.93,
  "y": 0.163,
  "rx": 0.028,
  "ry": 0.021
 },
 {
  "id": "bastille-cat3",
  "name": "Le chat de la station",
  "hint": "Inspecte les pierres près de la station à gauche.",
  "x": 0.04,
  "y": 0.27,
  "rx": 0.028,
  "ry": 0.021
 },
 {
  "id": "bastille-cat4",
  "name": "Le chat du panorama",
  "hint": "Regarde derrière le pot sur le parapet.",
  "x": 0.472,
  "y": 0.375,
  "rx": 0.028,
  "ry": 0.021
 },
 {
  "id": "bastille-cat5",
  "name": "Le chat du buisson",
  "hint": "Observe le feuillage à droite.",
  "x": 0.927,
  "y": 0.416,
  "rx": 0.028,
  "ry": 0.021
 },
 {
  "id": "bastille-cat6",
  "name": "Le chat du banc",
  "hint": "Une petite tête dépasse près du banc.",
  "x": 0.246,
  "y": 0.445,
  "rx": 0.028,
  "ry": 0.021
 },
 {
  "id": "bastille-cat7",
  "name": "Le chat du panier",
  "hint": "Regarde le panier au milieu.",
  "x": 0.583,
  "y": 0.52,
  "rx": 0.028,
  "ry": 0.021
 },
 {
  "id": "bastille-cat8",
  "name": "Le chat du pot",
  "hint": "Un chat se cache à gauche dans un pot.",
  "x": 0.055,
  "y": 0.6,
  "rx": 0.028,
  "ry": 0.021
 },
 {
  "id": "bastille-cat9",
  "name": "Le chat sous le banc",
  "hint": "Cherche dans l’ombre du banc à droite.",
  "x": 0.94,
  "y": 0.67,
  "rx": 0.028,
  "ry": 0.021
 },
 {
  "id": "bastille-cat10",
  "name": "Le chat du sac",
  "hint": "Inspecte le sac du premier plan.",
  "x": 0.32,
  "y": 0.714,
  "rx": 0.028,
  "ry": 0.021
 },
 {
  "id": "bastille-cat11",
  "name": "Le chat des fleurs",
  "hint": "Cherche près du pot fleuri en bas.",
  "x": 0.584,
  "y": 0.835,
  "rx": 0.028,
  "ry": 0.021
 },
 {
  "id": "bastille-cat12",
  "name": "Le chat du cageot",
  "hint": "Explore le cageot tout en bas à gauche.",
  "x": 0.25,
  "y": 0.904,
  "rx": 0.028,
  "ry": 0.021
 }
];
let arrival=0;const overlay=document.getElementById('bastille-arrival');
function finishArrival(){arrival=0;overlay.classList.add('hidden');Garage.say('La bulle est arrivée ! Retrouve les 12 objets ludiques et les 12 chats.');}
const config={id:'bastille',chapter:10,title:'La Bastille et les bulles',image:'assets/bastille-manga.png',alt:'Terrasse de la Bastille de Grenoble, téléphérique en bulles, panorama de la ville et de l’Isère, douze objets ludiques et douze chats cachés dans un dessin manga détaillé.',items,cats,welcome:'Virgin monte à la Bastille en téléphérique. Admire Grenoble et l’Isère…',ending:'Les jeux et les douze chats sont retrouvés. Au-dessus de Grenoble et de l’Isère, Virgin savoure enfin le calme de la Bastille.',start(){arrival=5;overlay.classList.remove('hidden');pose();},update(dt){if(arrival>0){arrival=Math.max(0,arrival-dt);pose();if(!arrival)finishArrival()}},tap(){return arrival>0},exit(){arrival=0;overlay.classList.add('hidden')}};
function pose(){let u=Math.max(0,Math.min(1,1-arrival/5)),ease=u*u*(3-2*u);overlay.style.opacity=String(u>.85?(1-u)/.15:1);let bubble=overlay.querySelector('svg');if(bubble)bubble.style.transform='translate('+(-110+ease*35)+'%, '+(60-ease*60)+'px)';}
function start(){Garage.start(config)}
document.getElementById('bastille-start').onclick=start;document.getElementById('bastille-skip').onclick=()=>{if(Garage.active&&Garage.inspect().chapter===10&&!Garage.inspect().paused)finishArrival()};
return{start,get active(){return Garage.active&&Garage.inspect().chapter===10},inspect:()=>({...Garage.inspect(),arrival})};
})();
