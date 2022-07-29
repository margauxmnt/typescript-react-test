import axios from "axios";

const defaultInformations = ['temperature_2m', 'weathercode']

export interface ApiResponse {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    elevation: number;
    hourly_units: Units
    hourly: HourlyData;
}

export interface HourlyData {
    time: string[];
    temperature_2m: number[];
    weathercode: WeatherCode[];
}

export type Units = {
    [k in keyof HourlyData]: string;
};

export class ApiClient {

    private readonly rootUri: string;

    constructor(rootUri: string) {
        this.rootUri = rootUri;
    }

    public async getMeteo(latitude: number, longitude: number): Promise<ApiResponse> {
        const uri = `${this.rootUri}?latitude=${latitude}&longitude=${longitude}&hourly=${defaultInformations.join(',')}&timezone=Europe%2FBerlin`;
        const response = await axios.get<ApiResponse>(uri);
        return response.data;
    }

}

export type WeatherCode =
    0
    | 1
    | 2
    | 3
    | 45
    | 48
    | 51
    | 53
    | 55
    | 56
    | 57
    | 61
    | 63
    | 65
    | 66
    | 67
    | 71
    | 73
    | 75
    | 77
    | 80
    | 81
    | 82
    | 85
    | 86
    | 95
    | 96
    | 99;
