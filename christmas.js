// Chapter VIII: a contemporary French Christmas market, hidden objects and twelve cats.
const Christmas=(()=>{
const items=[
{id:'baguette',name:'Baguette',clue:'Un long pain doré à la croûte croustillante.',hint:'La baguette est posée sur le tissu à carreaux du premier plan, à gauche.',x:0.196,y:0.879,rx:0.15,ry:0.044},
{id:'saucisson',name:'Saucisson',clue:'Une spécialité ficelée pour le casse-croûte.',hint:'Cherche vers le bas, parmi les produits posés au premier plan.',x:0.505,y:0.905,rx:0.1,ry:0.035},
{id:'tricolore',name:'Drapeau français',clue:'Bleu, blanc, rouge : trois bandes verticales.',hint:'Le petit drapeau est posé à droite, au premier plan.',x:0.875,y:0.748,rx:0.047,ry:0.034},
{id:'croissant',name:'Croissant',clue:'Une viennoiserie dorée en forme de lune.',hint:'Le croissant est sur une assiette, sur la table ronde à gauche.',x:0.153,y:0.73,rx:0.074,ry:0.027},
{id:'camembert',name:'Camembert',clue:'Un fromage rond dans sa boîte en bois.',hint:'Le camembert est sur la caisse recouverte d’un tissu rouge et blanc.',x:0.699,y:0.7,rx:0.069,ry:0.036},
{id:'macaron',name:'Macaron rose',clue:'Deux petites coques roses et un cœur gourmand.',hint:'Le macaron rose est sur une petite soucoupe, devant le banc.',x:0.408,y:0.708,rx:0.032,ry:0.019},
{id:'beret',name:'Béret rouge',clue:'Un petit chapeau souple avec une pointe.',hint:'Le béret rouge repose sur une caisse près du banc, à droite.',x:0.839,y:0.515,rx:0.08,ry:0.027},
{id:'eiffel',name:'Petite tour Eiffel',clue:'Paris tient ici dans le creux de la main.',hint:'La petite tour Eiffel repose sur le banc, près de l’écharpe.',x:0.582,y:0.512,rx:0.031,ry:0.04},
{id:'gingerbread',name:'Pain d’épices',clue:'Un gâteau parfumé aux épices de Noël.',hint:'Explore les gourmandises du chalet de gauche.',x:0.221,y:0.43,rx:0.047,ry:0.032},
{id:'honey',name:'Pot de miel',clue:'Un petit pot d’or préparé par les abeilles.',hint:'Cherche le petit bocal ambré au comptoir de droite.',x:0.788,y:0.372,rx:0.029,ry:0.028},
{id:'bauble',name:'Boule de Noël',clue:'Une boule rouge brillante attend son sapin.',hint:'La grosse boule rouge pend au toit du chalet de gauche.',x:0.207,y:0.196,rx:0.029,ry:0.028},
{id:'chocolate',name:'Chocolat chaud',clue:'Une tasse pour se réchauffer les mains.',hint:'La tasse fumante est sur le comptoir de la vendeuse, à droite.',x:0.662,y:0.374,rx:0.036,ry:0.024}
];
const cats=[
{id:'noel-cat1',name:'Le chat des guirlandes',hint:'Observe les guirlandes du toit de gauche.',x:0.155,y:0.089,rx:0.032,ry:0.022},
{id:'noel-cat2',name:'Le chat du toit',hint:'Un chat dépasse des décorations du toit de droite.',x:0.893,y:0.111,rx:0.031,ry:0.02},
{id:'noel-cat3',name:'Le chat de la fenêtre',hint:'Cherche dans la petite fenêtre du chalet de gauche.',x:0.369,y:0.119,rx:0.028,ry:0.023},
{id:'noel-cat4',name:'Le chat de l’étagère',hint:'Regarde les paniers sur l’étagère de droite.',x:0.82,y:0.247,rx:0.029,ry:0.022},
{id:'noel-cat5',name:'Le chat du bois',hint:'Une tête se dissimule parmi les bûches à gauche.',x:0.094,y:0.402,rx:0.034,ry:0.025},
{id:'noel-cat6',name:'Le chat des cadeaux',hint:'Inspecte les paquets empilés du côté droit.',x:0.904,y:0.43,rx:0.03,ry:0.021},
{id:'noel-cat7',name:'Le chat du chalet',hint:'Regarde sous le comptoir, près du rideau de gauche.',x:0.212,y:0.58,rx:0.027,ry:0.022},
{id:'noel-cat8',name:'Le chat du banc',hint:'Explore le dessous du banc au milieu.',x:0.563,y:0.58,rx:0.032,ry:0.022},
{id:'noel-cat9',name:'Le chat du sac',hint:'Un chat se blottit dans le sac du premier plan à gauche.',x:0.079,y:0.664,rx:0.037,ry:0.026},
{id:'noel-cat10',name:'Le chat du sapin',hint:'Cherche derrière le pot du sapin de droite.',x:0.911,y:0.659,rx:0.035,ry:0.023},
{id:'noel-cat11',name:'Le chat du panier',hint:'Inspecte le grand panier au premier plan.',x:0.396,y:0.768,rx:0.034,ry:0.026},
{id:'virgin',name:'Virgin',hint:'Virgin se cache dans un carton du premier plan à droite.',x:0.763,y:0.853,rx:0.035,ry:0.024}
];
const config={id:'christmas',chapter:8,title:'Le marché de Noël',image:'assets/christmas-manga.png',alt:'Marché de Noël français en manga, vendeurs et passants en vêtements modernes, douze chats cachés et douze objets français et festifs.',items,cats,welcome:'Bienvenue au marché de Noël ! Retrouve 12 objets et 12 chats, à ton rythme.',ending:'Les 12 chats sont réunis et tous les objets retrouvés. Virgin peut profiter des lumières du marché de Noël.'};
function start(){Garage.start(config)}
document.getElementById('christmas-start').onclick=start;
document.getElementById('garage-next-christmas').onclick=()=>{if(!Garage.inspect().complete||Garage.inspect().chapter!==7)return;if(typeof Adventure!=='undefined')Adventure.advance();else start()};
return{start,get active(){return Garage.active&&Garage.inspect().chapter===8},inspect:()=>Garage.inspect()};
})();
