import { ILink } from "../Link";

export interface INavigation {
  title?: string;
  logo?: string;
  links: ILink[];
}