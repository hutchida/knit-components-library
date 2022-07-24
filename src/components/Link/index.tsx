import React from "react";

export interface ILink {
  url: string;
  target?: string;
  children?: any;
  displayName?: string;
}

export const Link = ({ url, target, children }: ILink) => (
  <a href={url} target={target || '_blank'}>{children}</a>
)