import express, { Application, Request, Response } from 'express';
import { ShopsRepo } from './shopsRepo';
import { Shop } from './shop';

const app:Application = express();

const port = 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//app.use("/shops", ShopsRepo);

app.listen(port, ():void => {
    console.log(`Listening on port ${port}`);
});

app.get("/shops", async (req:Request, res:Response) : Promise<Response> => {
    return res.status(200).json(GetAllShops());

    function GetAllShops() : Shop[] {
        return this.shopArray;
    }
});

app.get("/shops/:id", async (req:Request, res:Response) : Promise<Response> => {
    if( req.params.id === undefined){
        return res.status(404).send("Shop not found: ${ID HERE}");
    }
    else{
        return res.status(200).json(ShopsRepo.GetItemById(Number(req.params.id)));
    }
});

app.post("/shops", async (req:Request, res:Response) : Promise<Response> => {
    ShopsRepo.CreateItem({
        id: Number(req.body.id),
        name: req.body.name,
        rating: Number(req.body.cost)
    });

    return res.status(201).send("Item created!");
});

app.put("/shops/:id", async (req:Request, res:Response) : Promise<Response> => {
    let shopFound = ShopsRepo.find((x) => x.id === Number(req.params.id));
    
    if(shopFound !== undefined){
        shopFound.id = Number(req.body.price);
        shopFound.name = String(req.body.product);
        shopFound.rating = Number(req.body.quantity)

        return res.status(200).json(shopFound)
    }
    else{
        return res.status(400).send("Item not found");
    }
});

app.delete("/shops/:id", async (req:Request,res:Response) : Promise<Response> => {
    ShopsRepo.DeleteItemById(Number(req.params.id));

    return res.status(200).send("Deleted");
});
