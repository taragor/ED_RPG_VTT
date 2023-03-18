async function preloadHandlebarsTemplates(){
    const templatePath = [
        "systems/edrpg/templates/sheets/character-sheet.html"
    ]
    return loadTemplates(templatePath);
}

function init() {
    console.log("ED:RPG | init system");
}

Hooks.once("init", init);

