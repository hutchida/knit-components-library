import React from "react";

export interface ILink {
  url: string;
  target?: string;
  children?: any;
  displayName?: string;
}

export const Link = ({ url, target, children, displayName }: ILink) => (
  <a href={url} target={target || '_blank'}>{children || displayName}</a>
)