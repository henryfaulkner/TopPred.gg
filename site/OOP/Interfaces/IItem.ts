import ItemEffect from "../Models/ItemEffect"

interface IItem {
    Name: string;
    Description: string;
    ItemEffectList: ItemEffect[]
}

export default IItem;