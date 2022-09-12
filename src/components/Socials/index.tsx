import React from "react"
import { ILink, Link } from "../Link"
import { Container, Social } from "./styles"
interface ISocials {
  socials: ISocial[]
}
export interface ISocial {
  link: ILink
  name: string;
  abbreviation: string;
  icon?: any;
}

export const Socials = ({ socials }: ISocials) => {
  return (
    <Container>
      {socials && socials.length > 0 &&
        socials.map((social: ISocial, index: number) =>
          <Social key={index}>
            <Link {...social.link}>
              {social?.icon ? <img style={{ maxHeight: '30px' }} src={social.icon?.responsiveImage?.src} alt={social.name} />
                :
                <div>{social.abbreviation}</div>
              }
            </Link>
          </Social>
        )}
    </Container>
  )
}