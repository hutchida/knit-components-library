import styled from 'styled-components';

export const Container = styled.section<{
  $bgColor?:string
  $bgImage?:string
}>`
  margin-top: 5%;
  position: relative;
  width: 100%;
  ${(p)=> `background-color: ${p.$bgColor};`}
  ${(p)=> `background-image: url(${p.$bgImage});`}
`

export const ProfilePic = styled.div<{$profilePic?:string}>``

export const Info = styled.div``

export const Subtitle = styled.div``

export const Title = styled.div``

export const Oneliner = styled.div``

export const Socials = styled.div``