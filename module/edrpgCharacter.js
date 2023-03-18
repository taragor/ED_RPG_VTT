export default class edrpgCharacter extends Actor {
    prepareData() {
        super.prepareData();
    }

    getData(){
        console.log("edrpg | edrpgCharacter | getData");
        const data = super.getData();
        if(data.data.system) {
            data.system = data.data.system;
        }

        console.log("edrpg | edrpgCharacter | getData | Name is: " + data.actor.name);
        return data;
    }

    activateListeners(html) {
        super.activateListeners(html);

        html.find(".inline_edit").change(this._onInlineEdit.bind(html));
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