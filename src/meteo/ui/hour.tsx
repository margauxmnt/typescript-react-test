import {MeteoEmoji} from "../emojis";
import styled from "styled-components";
import {FC} from "react";
import {FormattedNumber, FormattedTime} from "react-intl";

interface HourlyMeteoProps {
    emoji: MeteoEmoji;
    temperature: number;
    time: Date;
    unit: 'celsius' | 'fahrenheit'
}

const HourWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #DDDDDD;
  padding: 0.5rem;
`
const Emoji = styled.div`
    font-size: 2rem;
`
export const HourlyMeteo: FC<HourlyMeteoProps> = ({emoji, temperature, unit, time}) => {
    return <HourWrapper>
        <div className="time"><FormattedTime value={time}/></div>
        {/* eslint-disable-next-line react/style-prop-object */}
        <div className="temp"><FormattedNumber value={temperature} style="unit" unit={unit}/></div>
        <Emoji>{emoji}</Emoji>
    </HourWrapper>
}
