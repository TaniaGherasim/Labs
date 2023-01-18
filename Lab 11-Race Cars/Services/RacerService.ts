//business logic

import { IRacer } from "../Interfaces/IRacer";

function findRacersWithEmptyFuel(racers:IRacer[]) : IRacer[] {
    let emptyFuelArray: IRacer[] = [];

    for(let r = 0; r <= racers.length; r++){
       if(racers[r].isFuelEmpty()){
            emptyFuelArray.push(racers[r]);
       }
    } 
    return emptyFuelArray;  
 }

 export function findAverageSpeed(racers:IRacer[]) : number {
    let totalSpeed = 0;

    if(racers.length === 0){
        return 0;
    }

    for(let racer of racers){
        totalSpeed += racer.speed;
    }

    return totalSpeed / racers.length;
 }

 export function getFasterRacer(racerA:IRacer, racerB:IRacer) : IRacer | null {
    if(racerA.speed > racerB.speed){
        return racerA;
    }
    else if(racerA.speed < racerB.speed){
        return racerB;
    }
    else{
        return null;
    }
 }