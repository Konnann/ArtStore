export default class MerchandiseModel {
    constructor(data) {
        debugger;
        if(data) {
            this.id =  data._id;
            this.title = data.Title;
            this.price = data.Price;
            this.photoUrl = data.Photo;
            this.description = data.Description;
            this.DateCreated = new Date(data.DateCreated)
        } else {
            this.id = null;
            this.title = "";
            this.price = "";
            this.photoUrl = "";
            this.description = "";
            this.DateCreated = new Date();
        }
    }
}