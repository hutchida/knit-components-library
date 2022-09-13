import React from "react";
import styled from "styled-components";

const Container = styled.div<{ $size: number }>`
  ${(p: any) => `height: ${p.$size / 2}vh;`}
  @media (min-width: 480px) {
    ${(p: any) => `height: ${p.$size / 1.5}vh;`}
  }
  @media (min-width: 768px) {
    ${(p: any) => `height: ${p.$size}vh;`}
  }
  max-height: 40vh;
`

export const Spacer = ({ size }: { size: number }) =>
  <Container $size={size} data-test={`spacer-${size}`} />