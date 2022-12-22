import SkillKey from "../Enums/SkillKey";
import IFirebaseDocument from "../Interfaces/IFirebaseDocument";

// SubCollection of Champion
class Skill extends IFirebaseDocument {
    public ChampionId: string;
    public SkillKey: number; //SkillKey enum

    public constructor(json) {
        super(json);
        if (json["ChampionId"]) this.ChampionId = json["ChampionId"];
        if (json["SkillKey"]) this.SkillKey = json["SkillKey"];
    }
}

export default Skill;