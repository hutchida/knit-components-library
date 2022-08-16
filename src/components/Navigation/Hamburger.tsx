import React from "react"
import tw from "tailwind-styled-components"

export const Line = tw.div`
w-8 h-0.5 bg-gray-600
`
export const LineContainer = tw.div`
space-y-2
`
export const Hamburger = () => (
  <LineContainer>
    <Line />
    <Line />
    <Line />
  </LineContainer>
)