abstract class IFirebaseDocument {
  public DocumentID: string;

  constructor(json) {
    if (json["DocumentID"]) this.DocumentID = json["DocumentID"];
  }
}
  
  export default IFirebaseDocument;