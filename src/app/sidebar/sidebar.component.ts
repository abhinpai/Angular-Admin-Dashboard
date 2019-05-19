import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
    { path: '/notification', title: 'Notification',  icon:'pe-7s-user', class: '' },
    { path: '/remote-config', title: 'Remote Config',  icon:'pe-7s-note2', class: '' },
    { path: '/analytics', title: 'Analytics',  icon:'pe-7s-news-paper', class: '' },
    { path: '/users', title: 'Users',  icon:'pe-7s-science', class: '' },
    { path: '/feedback', title: 'Feedbacks',  icon:'pe-7s-map-marker', class: '' },
    { path: '/activity', title: 'Activity Logs',  icon:'pe-7s-bell', class: '' }
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
