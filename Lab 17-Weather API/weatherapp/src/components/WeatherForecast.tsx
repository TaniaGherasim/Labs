import { useEffect, useState } from "react";
import { Weather } from "../models/Weather";
import { GetWeatherData } from "../services/WeatherService";

export function WeatherForecast(){
    const [weather, setweather] = useState<Weather>();

    useEffect(() => {
        //call our api and put on the screen
        //this is where we put our side effects
        GetWeatherData().then(data => setweather(data));
    }, []);

    useEffect(() => {
        console.log(weather);
    }, [weather]);

    let periods = weather?.properties.periods;

    let displayPeriods = periods?.map((period) => 
    <ul>
        <li><img src={period.icon}></img></li>
        <li>{period.name}</li>
        <li>{period.icon}</li>
        <li>{period.detailedForecast}</li>
        <li>{period.temperature}{period.temperatureUnit}</li>
    </ul>
    );

    return(
        <div className="WeatherForecast">
            { weather !== undefined && <>{displayPeriods}</> }
        </div>
    );
}