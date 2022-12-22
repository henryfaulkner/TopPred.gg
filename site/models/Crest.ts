import IFirebaseDocument from "./Interfaces/IFirebaseDocument";
import IItem from "./Interfaces/IItem";
import ItemEffect from "./ItemEffect";

class Crest implements IItem, IFirebaseDocument {
    private DocumentID: string;
    public Name: string;
    public Price: Number;
    public Description: string;
    public ItemEffectList: ItemEffect[];

    public constructor(json) {
        if (json["DocumentID"]) this.DocumentID = json["DocumentID"];
        if (json["Name"])
            this.Name = json["Name"];
        if (json["Price"])
            this.Price = json["Price"];
        if (json["Description"]) this.Description = json["Description"];
        if (json["ItemEffectList"] !== NaN) this.ItemEffectList = json["ItemEffectList"];
    }

    get GetDocumentID(): string {
        return this.DocumentID;
    }

    set SetDocumentID(DocumentID: string) {
        this.DocumentID = DocumentID;
    }
}

export default Crest;