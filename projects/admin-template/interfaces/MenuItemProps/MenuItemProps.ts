export default interface MenuItemProps {
  url?: string;
  onClick?: (event: any) => void;
  text: string;
  children: any;
  className?:string
}
