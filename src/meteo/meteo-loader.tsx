import {FC, ReactNode, useCallback, useEffect, useMemo, useState} from "react";
import {ApiClient, ApiResponse} from "./api-client";
import {DailyForecast} from "./types";

export type DailyMeteoComputer = (response: ApiResponse) => DailyForecast[];

interface MeteoLoaderderProps {
    apiUri: string;
    children?: ReactNode;
    latitude: number;
    longitude: number;
    dailyMeteoComputer: DailyMeteoComputer;
    onLoad?: (meteo: DailyForecast[]) => void;
}

export const MeteoLoader: FC<MeteoLoaderderProps> = ({
                                                          apiUri,
                                                          children,
                                                          latitude,
                                                          longitude,
                                                          dailyMeteoComputer,
                                                          onLoad
                                                      }) => {
    const [meteo, setMeteo] = useState<DailyForecast[]>()
    const apiClient = useMemo(() => new ApiClient(apiUri), [apiUri]);
    const getMeteo = useCallback(async (latitude: number, longitude: number): Promise<DailyForecast[]> => {
        const response = await apiClient.getMeteo(latitude, longitude);
        return dailyMeteoComputer(response);
    }, [apiClient, dailyMeteoComputer]);
    useEffect(() => {
        getMeteo(latitude, longitude).then(m => {
            setMeteo(m);
            if (onLoad) {
                onLoad(m);
            }
        });
    }, [getMeteo, latitude, longitude, onLoad]);
    let content = meteo ? children : <div>Chargement, veuillez patienter...</div>;
    return <>{content}</>
}
