import tw from 'tailwind-styled-components/dist/tailwind';

export const Wrapper = tw.section`

`

export const Container = tw.div`
  relative
  w-full
  flex
  h-screen
  `

export const Left = tw.div`
  w-1/2
  flex
  justify-center
  items-center
`

export const Right = tw.div`
  w-1/2
  flex
  justify-center
  items-center
  flex-col
`

export const ProfilePic = tw.div<{ $profilePic?: string }>`
  rounded-full
  overflow-hidden
  h-fit
`

export const Info = tw.div`
  py-4
`

export const Subtitle = tw.div`
  py-4
  text-lg
  font-thin
`

export const Title = tw.div`
  py-4
  text-7xl
`

export const Oneliner = tw.div`
  py-4
  text-2xl
  italic
  font-extralight
`

export const SocialsContainer = tw.div`
  py-8
`

export const LinkContainer = tw.div`
  gap-y-4
  text-xl
  lowercase
  hover:text-slate-300
  flex
  flex-col
  items-center
  w-full
  bottom-0
  absolute
`