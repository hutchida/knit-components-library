import React from "react"
import { HTMLText } from "./styles"

export const RichText = ({ text }: { text: string }) =>
  <HTMLText dangerouslySetInnerHTML={{ __html: text }} />