import {WeatherCode} from "./api-client";

export interface HourlyForecast {
    /**
     * Un objet Date représentant la date et l'heure de cette prévision
     */
    time: Date;
    /**
     * Code de temps (entier naturel) représentatn le temps qu'il fait
     */
    weatherCode: WeatherCode;
    /**
     * Température à cette heure.
     */
    temperature: number;
}

export interface DailyForecast {
    /**
     * Un objet Date représentant la date du jour (osef de l'heure en vrai)
     */
    date: Date;
    /**
     * Un code (entier naturel) représentant le temps qu'il fait dans la journée
     * ce code journalier est le code qui apparait le plus pour ce jour dans la réponse d'API
     */
    weatherCode: WeatherCode;
    /**
     * Température maximale de la journée
     */
    maxTemperature: number;
    /**
     * Température minimale de la journée
     */
    minTemperature: number;
    /**
     * Prévisions de la journée par heure
     */
    hourly: HourlyForecast[]
}
