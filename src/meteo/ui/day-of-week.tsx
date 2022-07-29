import {MeteoEmoji} from "../emojis";
import {FC, MouseEventHandler} from "react";
import {FormattedDate} from "react-intl";
import styled from "styled-components";

interface DayOfWeekProps {
    date: Date
    emoji: MeteoEmoji,
    onClick?: MouseEventHandler;
    isCurrent: boolean
}

const DOWWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 1.2rem;
  background-color: white;
  padding: 0.5rem;
  margin: 0.3rem;
  cursor: pointer;
  border-radius: 2px;

  &:hover, &.current {
    background-color: lightgrey;
  }
  
`
export const DayOfWeek: FC<DayOfWeekProps> = ({date, emoji, onClick, isCurrent}) => {
    return <DOWWrapper onClick={onClick} className={isCurrent ? 'current' : ''}>
        <span className="emoji">{emoji}</span>
        <span className="date"><FormattedDate value={date} weekday={"short"}/></span>
    </DOWWrapper>
}
