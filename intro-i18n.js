// Generated from locales/*.json. Intro text stays separate from the artwork.
const introLocales={
  "fr": {
    "prologue": "PROLOGUE · DERRIÈRE LA PORTE",
    "title": "Virgin, Une vie de chat",
    "scene1": "« Il a encore déchiré un bout de mon canapé, ce diable ! » L’appartement semblait soudain immense.",
    "scene2": "« Non, pas mon bol de cristal ! Tu vas voir ! » Le bol se brise. Virgin tremble, puis s’enfuit.",
    "scene3": "Un miaulement effrayé. La porte. L’escalier. La rue. Les moteurs grondent et personne ne regarde en bas.",
    "instructions": "Clique sur les objets pour le guider. Sans toi, il explore, joue… et risque sa vie.",
    "start": "L’aventure commence",
    "imageAlt": "Trois cases : Virgin près du canapé griffé, le bol qui se brise, puis sa fuite vers la rue sous la pluie."
  },
  "en": {
    "prologue": "PROLOGUE · BEHIND THE DOOR",
    "title": "Virgin, Une vie de chat",
    "scene1": "“He’s torn up my sofa again, that little devil!” The apartment suddenly felt enormous.",
    "scene2": "“No, not my crystal bowl! You’ll see!” The bowl shatters. Virgin trembles, then runs away.",
    "scene3": "A frightened meow. The door. The stairs. The street. Engines roar, and no one looks down.",
    "instructions": "Click on objects to guide him. Left alone, he explores, plays… and risks his life.",
    "start": "The adventure begins",
    "imageAlt": "Three panels: Virgin by the scratched sofa, the bowl shattering, then his escape into the rainy street."
  }
};
function setIntroLanguage(lang){const copy=introLocales[lang]||introLocales.fr;document.querySelectorAll('[data-intro]').forEach(el=>{el.textContent=copy[el.dataset.intro];el.lang=lang});document.querySelectorAll('[data-intro-alt]').forEach(el=>el.alt=copy[el.dataset.introAlt]);}
document.getElementById('intro-language').addEventListener('change',e=>setIntroLanguage(e.target.value));setIntroLanguage('fr');
