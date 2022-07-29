import React, {useState} from 'react';
import {dailyMeteoComputer} from "./meteo/compute-daily-meteo";
import {Meteo} from "./meteo/meteo";
import {IntlProvider} from "react-intl";
import {MeteoLoader} from "./meteo/meteo-loader";
import {DailyForecast} from "./meteo/types";

function App() {
    const [week, setWeek] = useState<DailyForecast[]>();
    const content = week ? <Meteo week={week}/> : null;
    return <>
        <IntlProvider locale={'fr'}>
            <MeteoLoader apiUri="https://api.open-meteo.com/v1/forecast" latitude={45.75807} longitude={4.835437}
                         dailyMeteoComputer={dailyMeteoComputer} onLoad={setWeek}>
                {content}
            </MeteoLoader>
        </IntlProvider>
    </>;
}

export default App;
