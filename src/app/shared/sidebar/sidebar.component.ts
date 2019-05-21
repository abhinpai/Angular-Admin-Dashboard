import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  class: 'fa fa-newspaper-o' },
    // { path: '/notification', title: 'Notification',   class: 'fa fa-bell' },
    // { path: '/remote-config', title: 'Remote Config',   class: 'fa fa-sliders' },
    // { path: '/analytics', title: 'Analytics',   class: 'fa fa-line-chart' },
    // { path: '/users', title: 'Users',   class: 'fa fa-users' },
    // { path: '/activity', title: 'Activity Logs',  class: 'fa fa-info' },
    // { path: '/feedback', title: 'Feedbacks',   class: 'fa fa-edit' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
