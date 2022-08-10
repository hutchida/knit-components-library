
import React from "react";
import { Container, Name, Bar, Percentage, BarContainer, BarWrapper, Description } from "./styles";
import { IHorizontalBar } from "./types";

const barHeightMap: any = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 20
}

export const HorizontalBar = ({
  name,
  description,
  percentage,
  size = "sm",
  displayPercentage = true,
  color = 'lightblue'
}: IHorizontalBar) => {
  if (percentage > 100) percentage = 100;
  const barHeight: number = barHeightMap[size] || 10
  return (
    <Container style={{ height: `${barHeight}rem` }}>
      {!!name &&
        <Name>{name}</Name>
      }
      <BarContainer>
        <BarWrapper style={{
          width: `${percentage}%`
        }}>
          <Bar alt={description}
            style={{ backgroundColor: color }}
            className={'animate-width'}>
            {displayPercentage &&
              <Percentage>{percentage}%</Percentage>
            }
          </Bar>
        </BarWrapper>
        {!!description &&
          <Description>{description}</Description>}
      </BarContainer>
    </Container>
  )
}