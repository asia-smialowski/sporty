import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-nav-bar-tabs',
  styleUrls: ['./nav-bar-tabs.component.scss'],
  templateUrl: './nav-bar-tabs.component.html',
})
export class NavBarTabsComponent {

  isAuthenticated$ = this.authService.isAuthenticated$;
  constructor(private authService: AuthService) {}
}
