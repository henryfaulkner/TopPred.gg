import IFirebaseDocument from "./Interfaces/IFirebaseDocument";
import Skill from "./Skill";

class Champion implements IFirebaseDocument {
    private DocumentID: string;
    private Name: string;
    private Role: Number; //Role enum
    private Skills: Skill[];

    public constructor(json) {
        if (json["DocumentID"]) this.DocumentID = json["DocumentID"];
        if (json["Name"]) this.Name = json["Name"];
        if (json["Role"]) this.DocumentID = json["Role"];
        if (json["Skills"]) this.DocumentID = json["Skills"];
    }

    get GetDocumentID(): string {
        return this.DocumentID;
    }

    set SetDocumentID(DocumentID: string) {
        this.DocumentID = DocumentID;
    }
}

export default Champion;