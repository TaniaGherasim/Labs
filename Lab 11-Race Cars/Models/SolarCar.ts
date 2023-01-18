import { IRacer } from "../Interfaces/IRacer";

//implement interface but extand classes
export class SolarCar implements IRacer{
    team:string;
    speed:number;

    constructor(team:string){
        this.team = team;
        this.speed = 0;
    }

    accelerate(): void {
       this.speed += 1; 
    }

    isFuelEmpty(): boolean {
       return false; 
    }
}

