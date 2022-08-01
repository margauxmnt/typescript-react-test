import {FC, useState} from "react";
import {getEmojiFromWeatherCode} from "./emojis";
import {CurrentDay} from "./ui/current-day";
import styled from "styled-components";
import {DayOfWeek} from "./ui/day-of-week";
import {HourlyMeteo} from "./ui/hour";
import {DailyForecast} from "./types";

interface MeteoHandlerProps {
    week: DailyForecast[]
}

const WeekWrapper = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
`
export const Meteo: FC<MeteoHandlerProps> = ({week}) => {
    const [today, setToday] = useState<DailyForecast>(week[0])

    const handleClick = (day : DailyForecast) => {
        setToday(day)
    }

    const weekList = week.map((day, i) => {
        return <DayOfWeek key={i} date={day.date} emoji={getEmojiFromWeatherCode(day.weatherCode)} isCurrent={today.date === day.date ? true : false} onClick={() => handleClick(day)}/>
    })

    const hourlyList = (today.hourly).map((hours, i) => {
        return <HourlyMeteo key={i} unit={'celsius'} emoji={getEmojiFromWeatherCode(hours.weatherCode)} temperature={hours.temperature} time={hours.time}/>
    })

    return <div className="currentDay">
        <CurrentDay date={today.date}
                    emoji={getEmojiFromWeatherCode(today.weatherCode)}
                    unit={'celsius'}
                    minTemperature={today.minTemperature}
                    maxTemperature={today.maxTemperature}/>
        <WeekWrapper>
            {weekList}
        </WeekWrapper>
        {hourlyList}
    </div>
}
