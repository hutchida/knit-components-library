import tw from 'tailwind-styled-components';

export const DesktopContainer = tw.div`
hidden
md:flex
justify-between
p-4
backdrop-blur
fixed
w-full
transition-all
duration-700
`
export const MobileContainer = tw.div`
flex
md:hidden
justify-between
p-4
backdrop-blur
fixed
w-screen
h-screen
transition-all
duration-700
`

export const Title = tw.div`
self-center
`

export const Logo = tw.div`
self-center
`

export const Links = tw.div`
mt-8
flex-col
text-center
w-full
md:mt-0
md:w-fit
md:flex
md:flex-row
md:justify-end
`

export const LinkContainer = tw.div`
py-5
w-full
scale-125
md:scale-100
md:px-2
md:w-fit
`

export const Line = tw.div`
w-8 h-0.5 bg-gray-600
`
export const LineContainer = tw.div`
space-y-2
top-0
`

export const ToggleMenu = tw.div`
w-fit
absolute
right-2
`