import { MouseEventHandler } from "react";

export interface IEventsAccordion {
    data: IEventsAccordionItem[];
    props: any;
}
export interface IEventsAccordionItem {
    id?: number;
    title?: string;
    body?: string;
    item?: any;
    onToggle?: MouseEventHandler;
    isActive?: boolean;
    position?: number;
    total?: number;
}