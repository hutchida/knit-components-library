/* eslint-disable no-console */
import React from "react"
import { TweetTile } from "../TweetTile"
import { ITweetTile } from "../TweetTile/types"
import tw from "tailwind-styled-components"

export const Container = tw.div`
  flex
  flex-wrap
`
export const TileContainer = tw.div`
`

export const TweetGrid = ({ config, data }: any) => {
  return (
    <Container>
      {data.map((tile: ITweetTile, index: number) =>
        <TileContainer className={config.size || 'md'}>
          <TweetTile key={index} {...tile} config={config} />
        </TileContainer>)}
    </Container>
  )
}