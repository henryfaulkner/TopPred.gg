import Skill from "./Skill";

type Champion = {
    Name: string;
    Role: string; //Roles enum //Role might be more of a build thing
    Description: string;
    //Skills: Skill[];
    Image: string;
}

export default Champion;