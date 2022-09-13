import React from "react"
import { Container, Box } from "./styles"

export const SketchBox = ({
  description,
  textColor = 'black',
  borderColor = 'black',
  opacity = 100,
  alignment = 'end'
}
  : {
    description: string,
    textColor?: string,
    borderColor?: string,
    opacity?: 30 | 40 | 50 | 60 | 70 | 80 | 100,
    alignment?: 'start' | 'center' | 'end',
  }) => {

  return (
    <Container $alignment={alignment}>
      {description &&
        <Box
          $textColor={textColor}
          $borderColor={borderColor}
          $opacity={opacity}
        >{description}</Box>
      }    </Container>
  )
}