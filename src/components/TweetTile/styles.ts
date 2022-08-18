import tw from "tailwind-styled-components"

export const TileContainer = tw.div`
border-8
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

`

export const UserInfo = tw.div`
p-5
flex
flex-col
justify-around
`

export const UserHandle = tw.div`
text-4xl
`

export const UserBio = tw.div`
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
text-lg
font-bold
mt-44
`

export const UserStats = tw.div`
p-5
`

export const TweetPanel = tw.div`
px-5
`

export const Tweet = tw.div`
p-5
text-2xl
`

export const TweetInfo = tw.div`
p-5
text-md
`

export const LinkContainer = tw.div`
px-5
text-xs
`