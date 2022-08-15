import React from "react"
import { ILink } from "../Link"
import { INavigation } from './types'
/**
 * Navigation component that takes a title, logo, and an array of links. If the logo is present, it 
 * will show instead of the title. Links will appear on the right hand side on desktop
 */
export const Navigation = ({ title, logo, links }: INavigation) => {

  return (
    <div><div>{title}</div>
      <div>{logo}</div>
      {links && links.length > 0 &&
        links.map((link: ILink, index: number) => (
          <div>{link} {index}</div>)
        )
      }
    </div>
  )
}

export default Navigation