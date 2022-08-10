import tw from "tailwind-styled-components/dist/tailwind"

export const Container = tw.div`
  w-full
  flex
  py-2
`

export const Name = tw.div`
  h-fit
  w-32
  px-4
  text-right
  relative
  top-1/2
  transform
  -translate-y-1/2
  text-ellipsis 
  overflow-hidden
`


export const Percentage = tw.div`
  px-10
  relative
  top-1/2
  transform
  -translate-y-1/2
  font-thin
`

export const BarContainer = tw.div`
  h-full
  w-full
  group
`
export const BarWrapper = tw.div`
  h-full
`
export const Bar = tw.div`
  h-full
  rounded-r-lg
`

export const Description = tw.div`
  absolute
  right-24
  rounded-lg
  border-slate-200
  border-2
  bg-white
  p-10
  opacity-50
  hidden
  group-hover:block
  max-w-lg
`