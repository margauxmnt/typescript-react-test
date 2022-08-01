import {DailyMeteoComputer} from "./meteo-loader";
import {ApiResponse} from "./api-client";
import {DailyForecast, HourlyForecast} from "./types";
import {WeatherCode} from "./api-client";


export const dailyMeteoComputer: DailyMeteoComputer = (response: ApiResponse) => {

    /*
    * fonction pour trouver le nombre représentant le temps qu'il fait globalement dans la journée, 
    c'est à dire le code qui apparait le plus dans les prévisions horaires de cette journée
    */
    const defineWeatherCode = (weatherCodeList: WeatherCode[]) => {
        let occ = []

        for (let x of weatherCodeList) {
            let count = 0;
            for (let i of weatherCodeList) {
                if (i === x) {
                    count++;
                }
            }
            occ.push(count);
        }
        return weatherCodeList[occ.indexOf(Math.max(...occ))];
    }

    /*
   * fonction pour trouver la température maximale de la journée
   */
    const maxTemp = (arr: number[]) => {
        return Math.max(...arr)
    }

    /*
   * fonction pour trouver la température minimale de la journée
   */
    const minTemp = (arr: number[]) => {
        return Math.min(...arr)
    }

    /*
   * Tableau groupant les prévisions par jour
   */
    const weekDatas: DailyForecast[] = [];

    let index: number = 0;

    for (let i = 0; i < 7; i++) {

        let hourlyDatas : HourlyForecast[] = [];

        if (i > 0) {
            index = index + 24
        }

        for (let i=index; i<index + 24; i++){

            hourlyDatas.push(
                {
                    time : new Date(response.hourly.time[i]),
                    weatherCode : response.hourly.weathercode[i],
                    temperature : response.hourly.temperature_2m[i]
                }
            )
        }

        weekDatas.push(
            {
                date: new Date(response.hourly.time[index]),
                weatherCode: defineWeatherCode(response.hourly.weathercode.slice(index, index + 24)),
                maxTemperature: maxTemp(response.hourly.temperature_2m.slice(index, index + 24)),
                minTemperature: minTemp(response.hourly.temperature_2m.slice(index, index + 24)),
                hourly: hourlyDatas
            }
        )
    }

    console.log(weekDatas)

    return weekDatas;
}
