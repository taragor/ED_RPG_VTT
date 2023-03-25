import EdrpgCharacterSheet from "../module/sheets/edrpgCharacterSheet.js";


async function preloadHandlebarsTemplates(){
    const templatePath = [
        "systems/edrpg/templates/sheets/character-sheet.html",
        "systems/edrpg/templates/partials/char-header.html"
    ]
    return loadTemplates(templatePath);
}

function init() {
    console.log("ED:RPG | init system");

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("edrpg", EdrpgCharacterSheet);

    preloadHandlebarsTemplates();
}

Hooks.once("init", init);

