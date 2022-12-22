import ItemEffect from "../ItemEffect"

interface IItem {
    Name: string;
    Price: Number;
    Description: string;
    ItemEffectList: ItemEffect[]

}

export default IItem;