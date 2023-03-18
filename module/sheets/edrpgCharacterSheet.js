export default class EdrpgCharacterSheet extends ActorSheet {
    static get defaultOptions(){
        return mergeObject(super.defaultOptions, {
            width: 1120,
            height: 600,
            template: "systems/edrpg/templates/sheets/character-sheet.html"
        });
    }
}