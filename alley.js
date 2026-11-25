const Alley=(()=>{
const items=[
{id:'phone',name:'Smartphone',clue:'Un écran noir garde encore quelques souvenirs.',hint:'Regarde les pavés du premier plan, à gauche.',x:0.269,y:0.872,rx:0.061,ry:0.026},
{id:'earbuds',name:'Écouteurs sans fil',clue:'Deux petits écouteurs attendent dans leur boîte.',hint:'Cherche au premier plan, vers la droite.',x:0.653,y:0.767,rx:0.041,ry:0.024},
{id:'mask',name:'Masque chirurgical',clue:'Un tissu bleu plissé avec deux élastiques.',hint:'Explore les objets à gauche, dans la partie basse.',x:0.208,y:0.735,rx:0.066,ry:0.026},
{id:'powerbank',name:'Batterie externe',clue:'Une réserve d’énergie loin des prises électriques.',hint:'Regarde à droite, près du sol humide.',x:0.786,y:0.648,rx:0.049,ry:0.021},
{id:'bottle',name:'Gourde isotherme',clue:'Elle garde les boissons fraîches ou chaudes.',hint:'Cherche une bouteille métallique au milieu de la ruelle.',x:0.395,y:0.606,rx:0.025,ry:0.044},
{id:'controller',name:'Manette de jeu',clue:'Des boutons et deux joysticks, mais plus de console.',hint:'Observe les objets du côté droit, à mi-hauteur.',x:0.724,y:0.551,rx:0.037,ry:0.024},
{id:'watch',name:'Montre connectée',clue:'Un petit écran au bout d’un bracelet rose.',hint:'Cherche à gauche, près des objets empilés.',x:0.177,y:0.477,rx:0.026,ry:0.023},
{id:'cable',name:'Câble USB-C',clue:'Un fil enroulé cherche ses deux appareils.',hint:'Le câble est enroulé sur le panier du vélo.',x:0.414,y:0.465,rx:0.032,ry:0.019},
{id:'glasses',name:'Lunettes de soleil',clue:'Deux verres qui ne servent plus beaucoup cette nuit.',hint:'Observe la partie droite, au-dessus de la manette.',x:0.877,y:0.387,rx:0.037,ry:0.017},
{id:'camera',name:'Caméra d’action',clue:'Une petite caméra pour de grandes aventures.',hint:'La petite caméra repose sur le haut du casier métallique, à gauche.',x:0.314,y:0.367,rx:0.028,ry:0.019},
{id:'cup',name:'Gobelet réutilisable',clue:'Un café à emporter sans jeter le gobelet.',hint:'Le gobelet rouge est posé sur le muret au fond, à droite.',x:0.706,y:0.365,rx:0.02,ry:0.023},
{id:'card',name:'Carte sans contact',clue:'Une carte oubliée après un dernier achat.',hint:'Regarde les pavés, tout en bas vers le centre.',x:0.54,y:0.903,rx:0.043,ry:0.019}
];
const cats=[
{id:'cat-window',name:'Le chat de la fenêtre',hint:'Observe la fenêtre du haut à gauche.',x:0.159,y:0.162,rx:0.025,ry:0.018},
{id:'cat-roof',name:'Le chat du toit',hint:'Inspecte la corniche de droite, tout en haut.',x:0.813,y:0.124,rx:0.027,ry:0.019},
{id:'cat-ivy',name:'Le chat du lierre',hint:'Une petite tête dépasse parmi les pots et le lierre.',x:0.463,y:0.231,rx:0.025,ry:0.021},
{id:'cat-box',name:'Le chat des cartons',hint:'Regarde derrière les cartons, du côté gauche.',x:0.105,y:0.421,rx:0.027,ry:0.02},
{id:'cat-pipe',name:'Le chat de la gouttière',hint:'Un chat se cache près du tuyau de droite.',x:0.795,y:0.331,rx:0.021,ry:0.022},
{id:'cat-bike',name:'Le chat du vélo',hint:'Observe les ombres du vélo au milieu.',x:0.57,y:0.579,rx:0.025,ry:0.021},
{id:'cat-bin',name:'Le chat de la poubelle',hint:'Inspecte les coins sombres près des poubelles.',x:0.28,y:0.512,rx:0.023,ry:0.02},
{id:'cat-wheel',name:'Le chat de la roue',hint:'Regarde près de la roue du scooter à droite.',x:0.897,y:0.589,rx:0.024,ry:0.02},
{id:'cat-bench',name:'Le chat du banc',hint:'Explore l’ombre sous le petit banc de gauche.',x:0.1,y:0.689,rx:0.03,ry:0.025},
{id:'cat-bag',name:'Le chat du sac',hint:'Un chat dépasse du grand sac en tissu posé au sol.',x:0.601,y:0.636,rx:0.025,ry:0.022},
{id:'cat-front',name:'Le chat du premier plan',hint:'Observe les cartons du premier plan.',x:0.282,y:0.806,rx:0.029,ry:0.024},
{id:'virgin',name:'Virgin',hint:'Virgin se cache derrière la jardinière du premier plan à droite.',x:0.878,y:0.809,rx:0.034,ry:0.023}
];
const config={id:'alley',image:'assets/alley-manga.png',items,cats};
function start(){Garage.start(config)}
document.getElementById('alley-start').onclick=start;
return{start,get active(){return Garage.active&&Garage.inspect().chapter===6},inspect:()=>Garage.inspect()};
})();
