export interface IItemGridProps {
    data: IItem[];
    props: any;
}
interface IItem {
    image: string;
    title: string;
    description: string;
    url: string;
}