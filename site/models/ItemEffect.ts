import IFirebaseDocument from "./Interfaces/IFirebaseDocument";

class ItemEffect implements IFirebaseDocument {
    private DocumentID: string;

    public constructor(json) {
        if (json["DocumentID"]) this.DocumentID = json["DocumentID"];
    }

    get GetDocumentID(): string {
        return this.DocumentID;
    }

    set SetDocumentID(DocumentID: string) {
        this.DocumentID = DocumentID;
    }
}

export default ItemEffect;