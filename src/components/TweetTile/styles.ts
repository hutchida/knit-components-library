import tw from "tailwind-styled-components"

export const TileContainer = tw.div`
border-8
w-full
h-full
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
px-5
flex
flex-col
justify-around
`

export const UserHandle = tw.h1`
text-100pc
`

export const UserBio = tw.h3`
absolute
rounded-lg
border-slate-200
border-2
bg-white
opacity-90
hidden
group-hover:block
max-w-lg
mt-44
text-75pc
p-1pc
`

export const UserStats = tw.p`
`

export const TweetPanel = tw.div`
group
px-5
`

export const Tweet = tw.h3`
text-75pc
`

export const TweetInfo = tw.p`
absolute
rounded-lg
border-slate-200
border-2
bg-white
opacity-90
hidden
group-hover:block
max-w-lg
mt-0
text-75pc
p-1pc
`

export const LinkContainer = tw.div`
`