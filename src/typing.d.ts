interface SideBarProp {
    title: string;
    icon? : ReactElement;
    path?: string;
    isDropdown?: boolean;
    alias?: string;
    childItems?: SideBarProp[]
}