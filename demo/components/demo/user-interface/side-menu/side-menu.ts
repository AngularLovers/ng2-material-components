import { Component, OnInit } from '@angular/core';
import {MenuItem} from '../../../dist/ng2-material-components';

@Component({
  selector: 'demo-side-menu',
  template: require('./side-menu.html'),
})
export class DemoSideMenuComponent implements OnInit {
    public menuItems: MenuItem[];

  constructor() {

      this.menuItems = [
          { id: '1', title: 'Layout', icon: 'view-compact', route: '/layout' },
          { id: '2', title: 'Navigation', icon: 'navigation', route: '/navigation' },
          { id: '3', title: 'Forms', icon: 'check-all', route: '/forms' },
          { id: '4', title: 'Widgets', icon: 'view-compact', route: '/widgets' },
      ];

  }

  ngOnInit() {}
}
