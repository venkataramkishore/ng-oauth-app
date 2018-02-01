import { Component, OnInit } from '@angular/core';
import { NavigationItem } from './navigation-item.model';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  public navList: NavigationItem[];
  public userNavList: NavigationItem[];

  private tempNavList: Array<Object> = [
    {
      name: 'Home', route: 'home', isdropdown: false, visible: true
    },
    {
      name: 'Crypto Currency', route: 'cryptocurrency', isdropdown: false, visible: true
    },
    {
      name: 'Blog posts', route: 'blogposts', isdropdown: false, visible: true
    },
    {
      name: 'Login', route: 'login', isdropdown: false, visible: true
    }
  ];

  private tempUserNavList: Array<Object> = [
    {
      name: 'Profile', route: 'profile', isdropdown: false, visible: true
    },
    {
      name: 'Change password', route: 'chargepassword', isdropdown: false, visible: true
    },
    {
      name: 'Logout', route: 'logout', isdropdown: false, visible: true
    }
  ];

  constructor() { }

  ngOnInit() {
    this.navList = this.tempNavList.map(item => new NavigationItem(item));
    this.userNavList = this.tempUserNavList.map(item => new NavigationItem(item));
  }

}
