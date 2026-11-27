# Virgin, Une vie de chat

Une aventure de chat en pixel art et manga, jouable dans le navigateur sur mobile, tablette et ordinateur.

## Jouer

[Commencer l’aventure](https://unispourlapaix.github.io/virgin-les-12-chatiments/)

Un seul départ : **L’aventure commence**. Réussissez chaque niveau pour débloquer le suivant. Les niveaux débloqués restent rejouables dans le menu.

## Les douze niveaux

1. **La rue** : guider Virgin en cliquant sur les objets, trouver eau, nourriture et abri.
2. **L’autoroute folle** : survivre au rêve et esquiver une circulation de plus en plus absurde.
3. **Le ciel des chats** : éviter les obstacles ailés, traverser les nuages et découvrir les passages secrets.
4. **Le garage caché** : retrouver 12 objets anciens et 7 chats.
5. **Retour dans la nuit** : repartir vers la gauche, entre camions-poubelles, rats, araignées, chiens et chats.
6. **Les chats de la ruelle** : retrouver 12 objets des années 2020 et 12 chats dissimulés.
7. **Les égouts** : retrouver 12 objets anciens et 12 chats en trois minutes. Le chronomètre à zéro déclenche GAME OVER et le débordement des eaux boueuses. Les deux vannes font baisser temporairement l’eau, sans prolonger le temps.

8. **Le marché de Noël** : retrouver 12 objets français et festifs et 12 chats, parmi les chalets, les passants modernes et les vendeurs. Cette scène se joue sans chrono.

9. **Les toits de Grenoble** : après la fuite devant les camions de nettoyage et l’ascension d’une gouttière, sauter par-dessus cheminées, antennes et espaces entre les toits au lever du soleil, pour échapper à Oscar. Tuiles glissantes, rebords de fenêtres et gouttières offrent des passages variés.

10. **La Bastille et les bulles** : arrivée en téléphérique, panorama de Grenoble et de l’Isère, 12 objets ludiques et 12 chats cachés dans une illustration manga. Sans chrono, avec zoom et indices.

11. **Le rêve des pigeons** : une armée de pigeons poursuit Virgin dans une rue de jour et vise sa tête. Cliquez les objets et les abris pour esquiver les fientes, boire aux fontaines au lion, manger et rejoindre l’auvent. Trois vies, attaques annoncées et trophée kiwi.

12. **Une maison pour Virgin** : Virgin a trouvé une famille et dort sur le divan d’un salon moderne de chalet. Cheminée, arbre à chat de 1,80 m, doudou chenille et gamelles. Retrouvez 12 accessoires modernes et 12 représentations de chats dans les photos, jouets, broderies et motifs décoratifs. Sans chrono. Trophée pastèque.

Chaque réussite rapporte un trophée fruit pixelisé ; le niveau 7 donne une banane et le niveau 8 une grappe de raisin et le niveau 9 une pêche. Le niveau 10 offre un citron, le niveau 11 un kiwi et le niveau 12 une pastèque. Le trophée spécial **Shinobi** récompense la victoire face à Oscar ninja au niveau 9. Scores, records et niveaux débloqués sont enregistrés localement dans le navigateur.

## Commandes

- **Rue** : cliquez ou touchez les objets pour avancer, jouer, boire, manger ou se cacher.
- **Autoroute et ciel** : glissez le doigt, ou utilisez les flèches / ZQSD.
- **Toits de Grenoble** : toucher l’écran ou appuyer sur Espace / ↑ pour sauter ; Virgin court automatiquement.
- **Objets cachés** : faites glisser le décor, pincez à deux doigts ou utilisez les boutons de zoom.
- **Menu en haut** : niveaux, trophées, réglages et aide. L’ouverture met la partie en pause.
- **Plein écran** : Menu → Réglages → Plein écran, si le navigateur le permet.

## Structure et publication

Le jeu est statique : `index.html`, scripts JavaScript, styles et ressources dans `assets/`. Aucune installation ni compilation n’est nécessaire.

GitHub Pages publie la branche **main**, dossier **/(root)**. Le fichier `.nojekyll` conserve une publication statique directe.

Dans GitHub Desktop, ouvrez ce dossier, effectuez vos commits puis utilisez **Push origin**. Les modifications publiées sur `main` mettent le site à jour.

Les illustrations du prologue et des scènes d’objets cachés ont été créées avec Imagegen. Les autres graphismes et animations sont dessinés dans le jeu ; les sons sont générés ou synthétisés.

Le décor de Grenoble représente les montagnes, la Bastille et le téléphérique aux cabines sphériques. Repère documentaire : [Grenoble Alpes Tourisme — les bulles](https://www.grenoble-tourisme.com/fr/decouvrir/lessentiel/le-telepherique/). Les graphismes du niveau 9 sont dessinés directement en pixel art dans le canvas ; la terrasse du niveau 10 est une illustration manga créée avec Imagegen.
