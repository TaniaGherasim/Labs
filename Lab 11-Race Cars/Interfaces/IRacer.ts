interface IRacer {
    team:string;   //property
    speed:number;  //property
    accelerate() : void;    //method
    isFuelEmpty() : boolean;  //method
}

export { IRacer }