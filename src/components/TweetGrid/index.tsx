/* eslint-disable no-console */
import React from "react"
import { TweetTile } from "../TweetTile"
import { ITweetTile } from "../TweetTile/types"
import tw from "tailwind-styled-components"
import styled from "styled-components"

export const Container = tw.div`
  flex
  flex-wrap
`
export const TileContainer = styled.div`
  width: 400px;
  height: 400px;
  h1 {
    font-size: 32px;
  }
  h2 {
    font-size: 24px;
  }
  h3 {
    font-size: 18px;
  }
  p {
    font-size: 16px;
  }
`

export const TweetGrid = ({ config, data }: any) => {
  console.log('tiles', data)
  return (
    <Container>
      {data.map((tile: ITweetTile, index: number) =>
        <TileContainer className="lg">
          <TweetTile key={index} {...tile} />
        </TileContainer>)}
    </Container>
  )
}