import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { UiService } from 'src/app/common/ui.service';

@Component({
  selector: 'app-logout',
  template: `
    <p>
      Logging out...
    </p>
  `,
  styles: [],
})
export class LogoutComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private uiService: UiService
  ) {}

  ngOnInit() {
    this.authService.logout();
    this.uiService.showToast(`You have successfully log out`);
    this.router.navigate(['/']);
  }
}
