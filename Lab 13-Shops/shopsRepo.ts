import { Shop } from "./shop";

//Repository
class ShopsRepo {
    private shopsArray:Shop[] = [
        { id:1, name:"Pepper's Pizza", rating:4.5},
        { id:2, name:"Clive's Chives", rating:3.4},
        { id:3, name:"Betty's Brews", rating:4.3, },
        { id:4, name:"Sylvester's Shoes", rating:3.8},
        { id:5, name:"Teddy's Tunes", rating:4.7}
    ]

    //CRUD operations
    //CREATE Read Update Delete

    //READ
    GetAllItems() : Shop[] {
        console.log('Get All items was hit');
        return this.shopsArray;
    }

    GetItemById(id:number) : Shop | undefined {
        return this.shopsArray.find((x) => x.id === id);
    }

    //CREATE
    CreateItem(item:Shop){
        this.shopsArray.push(item);

        return item;
    }

    //Delete
    DeleteItemById(id:number){
        this.shopsArray = this.shopsArray.filter((x) => x.id !== id);
    }

    // function GetNextId(){
    //     //three dots are called spread operator
    //     return Math.max(...shopArray.map((x) => x.id)) + 1;
    // }

    //Update
    UpdateItemRating(id:number, rating:number){
        let itemToUpdate = this.GetItemById(id);

        if(itemToUpdate !== undefined){
            itemToUpdate.rating = rating;
        }
    }
}

export { ShopsRepo }



