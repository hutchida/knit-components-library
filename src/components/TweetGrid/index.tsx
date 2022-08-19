/* eslint-disable no-console */
import React, { useState } from "react"
import { TweetTile } from "../TweetTile"
import { ITweetTile } from "../TweetTile/types"
import { Container, ControlBar, ControlBarContainer, GridContainer, TileContainer } from "./styles"

export const TweetGrid = ({ config, data }: any) => {
  const [tileSize, setTileSize] = useState('md');

  return (
    <Container>
      <ControlBarContainer>
        <ControlBar>Size of tiles currently set to:
          <select onChange={(e) => setTileSize(e.target.value)}>
            <option value="sm">sm</option>
            <option value="md" selected>md</option>
            <option value="lg">lg</option>
          </select>
        </ControlBar>
      </ControlBarContainer>
      <GridContainer style={{ top: '2rem' }}>
        {data.map((tile: ITweetTile, index: number) =>
          <TileContainer className={tileSize}>
            <TweetTile key={index} {...tile} config={config} />
          </TileContainer>)}
      </GridContainer>
    </Container>
  )
}