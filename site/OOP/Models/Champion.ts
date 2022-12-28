import IFirebaseDocument from "../Interfaces/IFirebaseDocument";
import Skill from "./Skill";

class Champion extends IFirebaseDocument {
    public Name: string;
    public Role: number; //Roles enum
    public Description: string;
    public Skills: Skill[];
    public Image: string;

    public constructor(json) {
        super(json);
        if (json["Name"]) this.Name = json["Name"];
        if (json["Role"]) this.DocumentID = json["Role"];
        if (json["Description"]) this.DocumentID = json["Description"];
        if (json["Skills"]) this.DocumentID = json["Skills"];
        if (json["Image"]) this.DocumentID = json["Image"];
    }
}

export default Champion;