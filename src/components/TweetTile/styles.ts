import tw from "tailwind-styled-components"
import styled from "styled-components"

export const TileContainer = styled.div`
  border-width: 8px;
  width: 100%;
  height:100%;
`

export const UserPanel = tw.div`
flex
p-5
w-full
group
`

export const ProfilePic = tw.div`
rounded-full
overflow-hidden
w-1/3
h-full

`

export const UserInfo = tw.div`
p-5
flex
flex-col
justify-around
`

export const UserHandle = tw.h1`
`

export const UserBio = tw.h3`
absolute
rounded-lg
border-slate-200
border-2
bg-white
opacity-80
p-10
hidden
group-hover:block
max-w-lg
font-bold
mt-44
`

export const UserStats = tw.p`
p-5
`

export const TweetPanel = tw.div`
px-5
`

export const Tweet = tw.h2`
`

export const TweetInfo = tw.p`
p-5
`

export const LinkContainer = tw.div`
px-5
`