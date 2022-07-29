import {FC} from "react";
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
    const today = new Date(0);
    return <div className="currentDay">
        <CurrentDay date={today}
                    emoji={getEmojiFromWeatherCode(0)}
                    unit={'celsius'}
                    minTemperature={10}
                    maxTemperature={35}/>
        <WeekWrapper>
            <DayOfWeek date={today} emoji={getEmojiFromWeatherCode(0)} isCurrent={false}/>
            <DayOfWeek date={today} emoji={getEmojiFromWeatherCode(0)} isCurrent={false}/>
            <DayOfWeek date={today} emoji={getEmojiFromWeatherCode(0)} isCurrent={true}/>
            <DayOfWeek date={today} emoji={getEmojiFromWeatherCode(0)} isCurrent={false}/>
            <DayOfWeek date={today} emoji={getEmojiFromWeatherCode(0)} isCurrent={false}/>
            <DayOfWeek date={today} emoji={getEmojiFromWeatherCode(0)} isCurrent={false}/>
            <DayOfWeek date={today} emoji={getEmojiFromWeatherCode(0)} isCurrent={false}/>
        </WeekWrapper>
        <HourlyMeteo unit={'celsius'} emoji={getEmojiFromWeatherCode(0)} temperature={25} time={today}/>
        <HourlyMeteo unit={'celsius'} emoji={getEmojiFromWeatherCode(0)} temperature={25} time={today}/>
        <HourlyMeteo unit={'celsius'} emoji={getEmojiFromWeatherCode(0)} temperature={25} time={today}/>
        <HourlyMeteo unit={'celsius'} emoji={getEmojiFromWeatherCode(0)} temperature={25} time={today}/>
        <HourlyMeteo unit={'celsius'} emoji={getEmojiFromWeatherCode(0)} temperature={25} time={today}/>
        <HourlyMeteo unit={'celsius'} emoji={getEmojiFromWeatherCode(0)} temperature={25} time={today}/>
        <HourlyMeteo unit={'celsius'} emoji={getEmojiFromWeatherCode(0)} temperature={25} time={today}/>
        <HourlyMeteo unit={'celsius'} emoji={getEmojiFromWeatherCode(0)} temperature={25} time={today}/>
        <HourlyMeteo unit={'celsius'} emoji={getEmojiFromWeatherCode(0)} temperature={25} time={today}/>
    </div>
}
