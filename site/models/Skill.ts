import SkillKey from "../enums/SkillKey";
import IFirebaseDocument from "./Interfaces/IFirebaseDocument";

class Skill implements IFirebaseDocument {
    private DocumentID: string;
    private ChampionId: string;
    private SkillKey: Number; //SkillKey enum

    public constructor(json) {
        if (json["DocumentID"]) this.DocumentID = json["DocumentID"];
        if (json["ChampionId"]) this.ChampionId = json["ChampionId"];
        if (json["SkillKey"]) this.SkillKey = json["SkillKey"];
    }

    get GetDocumentID(): string {
        return this.DocumentID;
    }

    set SetDocumentID(DocumentID: string) {
        this.DocumentID = DocumentID;
    }
}

export default Skill;