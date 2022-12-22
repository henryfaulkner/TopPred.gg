import IFirebaseDocument from "../Interfaces/IFirebaseDocument";
import Skill from "./Skill";

class Champion extends IFirebaseDocument {
    public Name: string;
    public Role: number; //Roles enum
    public Skills: Skill[];

    public constructor(json) {
        super(json);
        if (json["Name"]) this.Name = json["Name"];
        if (json["Role"]) this.DocumentID = json["Role"];
        if (json["Skills"]) this.DocumentID = json["Skills"];
    }
}

export default Champion;