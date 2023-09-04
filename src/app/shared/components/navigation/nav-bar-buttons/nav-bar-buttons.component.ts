import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-nav-bar-buttons',
  templateUrl: './nav-bar-buttons.component.html',
  styleUrls: ['./nav-bar-buttons.component.scss']
})

export class NavBarButtonsComponent {
  isAuthenticated$ = this.authService.isAuthenticated$
  constructor(
    private authService: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  handleLogin(): void {
    this.authService.loginWithRedirect({
      appState: {
        target: '/profile'
      }
    }).subscribe((e) => console.log({e}))
  }

  handleSignUp(): void {
    this.authService.loginWithRedirect({
      appState: {
        target: '/profile',
      },
      authorizationParams: {
        screen_hint: 'signup'
      }
    })
  }

  handleLogout(): void {
    this.authService.logout({
      logoutParams: {
        returnTo: this.doc.location.origin,
      }
    })
  }
}
