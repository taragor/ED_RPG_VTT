export default class EdrpgCharacterSheet extends ActorSheet {
    static get defaultOptions(){
        return mergeObject(super.defaultOptions, {
            classes: ["edrpg", "sheet", "actor"],
            width: 1120,
            height: 600,
            template: "systems/edrpg/templates/sheets/character-sheet.html",
            tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description" }],
        });
    }

    activateListeners(html) {
        super.activateListeners(html);

        html.find(".inline_edit").change(this._onInlineEdit.bind(html));
        html.find(".testbutton").on("click", this._onTestButtonClick);

    }

    _onTestButtonClick(){
        console.log("ED:RPG | Blabla button clicked");
    }

    _onInlineEdit(event){
        event.preventDefault();
        let element = event.currentTarget;
        let itemId = element.closest(".item").dataset.itemId;
        let item = this.actor.items.get(itemId);
        let field = this.element.dataset.field;
        let value = element.value;
        if (value == "false") {
            value = true
        }
        if (value == "true" || value == "checked") {
            value = false
        }
    }
}