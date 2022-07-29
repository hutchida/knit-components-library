import React from "react"
import tw from "tailwind-styled-components"
import { ILink, Link } from "../Link"

interface ISocials {
  socials: ISocial[]
}
export interface ISocial {
  link: ILink
  name: string;
  abbreviation: string;
  icon?: string;
}
const Container = tw.div`
  flex
`
const Social = tw.div`
  px-2
  h-8
`
export const Socials = ({ socials }: ISocials) => {
  return (
    <Container>
      {socials && socials.length > 0 &&
        socials.map((social: ISocial, index: number) =>
          <Social key={index}>
            <Link {...social.link}>
              {social?.icon ? <img style={{ maxHeight: '30px' }} src={social.icon} alt={social.name} />
                :
                <div>{social.abbreviation}</div>
              }
            </Link>
          </Social>
        )}
    </Container>
  )
}