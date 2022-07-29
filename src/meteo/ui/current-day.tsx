import styled from "styled-components";
import {FC} from "react";
import {FormattedDate, FormattedNumber} from "react-intl";
import {MeteoEmoji} from "../emojis";

interface CurrentDayMeteoProps {
    date: Date
    emoji: MeteoEmoji
    unit: "fahrenheit" | "celsius",
    minTemperature: number
    maxTemperature: number
}

const CurrentDayWrapper = styled.div`
  text-align: center;
  padding: 1rem;
`
const DateWrapper = styled.div`
  font-size: 2rem;
`
const Emoji = styled.div`
  font-size: 5rem;
`
const TempWrapper = styled.div`
  font-size: 2rem;
`
export const CurrentDay: FC<CurrentDayMeteoProps> = ({date, emoji, minTemperature, maxTemperature, unit}) => {
    return <CurrentDayWrapper>
        <DateWrapper><FormattedDate value={date} weekday={"long"} year={"numeric"} month={"long"}
                                    day={"numeric"}/></DateWrapper>
        <Emoji>{emoji}</Emoji>
        <TempWrapper>
            {/* eslint-disable-next-line react/style-prop-object */}
            <FormattedNumber value={minTemperature} style={"unit"} unit={unit}/>&nbsp;–&nbsp;
            {/* eslint-disable-next-line react/style-prop-object */}
            <FormattedNumber value={maxTemperature} style={"unit"} unit={unit}/> </TempWrapper>
    </CurrentDayWrapper>
}
