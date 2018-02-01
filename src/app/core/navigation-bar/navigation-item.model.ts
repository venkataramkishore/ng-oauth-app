
export class NavigationItem {
  public name: string;
  public route: string;
  public id: string;
  public isDropDown: boolean;
  public dropdownList: NavigationItem[];

  constructor(menu: any) {
    this.name = menu.name;
    this.route = `/${menu.route}`;
    this.id = menu.id;
    this.isDropDown = menu.isDropDown;
    if (this.isDropDown) {
      this.dropdownList = menu.dropdownList.map(subMenu => {
        return new NavigationItem(subMenu);
      });
    }
  }
}
