import IFirebaseDocument from "../Interfaces/IFirebaseDocument";
import IItem from "../Interfaces/IItem";
import ItemEffect from "./ItemEffect";

class BoughtItem extends IFirebaseDocument implements IItem {
    public Name: string;
    public Price: number;
    public Image: string;
    public Description: string;
    public ItemEffectList: ItemEffect[];

    public constructor(json) {
        super(json);
        if (json["Name"])
            this.Name = json["Name"];
        if (json["Image"])
            this.Image = json["Image"];
        if (json["Description"]) this.Description = json["Description"];
        if (json["ItemEffectList"] !== null) this.ItemEffectList = json["ItemEffectList"];
    }
}

export default BoughtItem;