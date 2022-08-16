import React from "react"
import tw from "tailwind-styled-components"

export const Line1 = tw.div`
w-8 h-0.5 bg-gray-600
`
export const Line2 = tw.div`
w-8 h-0.5 bg-gray-600
`
export const LineContainer = tw.div`
space-y-2
`
// TODO: tailwind styles not working properly here, hence inline styling
export const Cross = () => (
  <LineContainer style={{ transform: 'scale(0.65) translate(15px,5px)' }}>
    <Line1 style={{ transform: 'rotate(45deg) translate(10px,5px)', width: '55px' }} />
    <Line2 style={{ transform: 'rotate(-45deg)', width: '55px' }} />
  </LineContainer>
)