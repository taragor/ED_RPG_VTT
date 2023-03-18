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

        console.log("edrpg | edrpgCharacter | getData | Name is: " + data.system.name);
    }
}