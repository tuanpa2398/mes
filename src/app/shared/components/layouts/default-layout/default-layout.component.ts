import { Component, OnInit } from '@angular/core';

// Module imported
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '@app/services/auth.service';
import { SHARED_IMPORT_MODULE } from '@app/shared/share.import';
import { DefaultNavBarComponent } from './navbar/default-nav-bar/default-nav-bar.component';
import { NAVBAR_MENU } from '@app/shared/constant';

@Component({
  selector: 'app-default-layout',
  imports: [
    RouterOutlet,
    SHARED_IMPORT_MODULE,
    DefaultNavBarComponent
  ],
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  visible: boolean = false;
  asideVisible: boolean = true;
  modalFactoryVisible: boolean = false;

  menuManagement = NAVBAR_MENU;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  setVisibleAside() {
    this.asideVisible = !this.asideVisible;
  }

  logout() {
    this.authService.logout();
    this.router.navigate([`/login`]);
  }

  changeFactory() {
    this.modalFactoryVisible = true;
  }

  onNavigation(url: string = ''){
    this.visible = false;
    this.router.navigate([url])
  }
}
