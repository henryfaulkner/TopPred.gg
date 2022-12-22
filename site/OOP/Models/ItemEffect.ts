import IFirebaseDocument from "../Interfaces/IFirebaseDocument";

// SubCollection of Crest or BoughtItem
class ItemEffect extends IFirebaseDocument {
    public constructor(json) {
        super(json);
    }
}

export default ItemEffect;