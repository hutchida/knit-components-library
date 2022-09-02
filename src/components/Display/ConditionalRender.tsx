import React from "react";
import tw from "tailwind-styled-components"

const Mobile = tw.div`
  block
  md:hidden
`
const Desktop = tw.div`
  hidden
  md:block
`

export const ByJavascript = ({ isMobile }: { isMobile: boolean }) => {
  return (
    isMobile &&
    <div>The isMobile prop has been passed to me and so I display.</div> ||
    <div>Guess I must be desktop...</div>
  )
}

export const ByCSS = () => {
  return (
    <>
      <Mobile>Screen width currently <span style={{ color: "purple" }} >BELOW</span> 768px</Mobile>
      <Desktop>Screen width currently <span style={{ color: "blue" }} >ABOVE</span> 767px</Desktop>
    </>)
}