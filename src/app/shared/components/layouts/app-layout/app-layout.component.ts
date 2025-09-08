import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { SHARED_IMPORT_MODULE } from '@app/shared/share.import';
import { HeaderComponent } from './header/header.component';
import { AuthService } from '@app/services/auth.service';
import { filter, Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';

type AppState = {
  page: string,
  darkMode: boolean,
  width: number,
  userLoginDropdown: boolean,
  menuToggle: boolean,
  displaySideBar: boolean,
  sideBarMenuToggle: string[]
}

@Component({
  selector: 'app-layout',
  imports: [
    SHARED_IMPORT_MODULE,
    HeaderComponent,
    SidebarComponent
  ],
  templateUrl: './app-layout.component.html'
})
export class AppLayoutComponent implements OnInit {
  appState: AppState = {
    page: '',
    darkMode: false,
    width: window.innerWidth,
    userLoginDropdown: false,
    menuToggle: false,
    displaySideBar: true,
    sideBarMenuToggle: []
  }

  private sub!: Subscription;

  modalFactoryVisible: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  changeFactory() {
    this.modalFactoryVisible = true;
  }

  watchUrl() {
    this.sub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        console.log("event.urlAfterRedirects", event.urlAfterRedirects);

        this.appState.page = event.urlAfterRedirects.replace("/", '');
      });
  }

  getCurrentDateTime = () => {
    const days = [
      "Chủ nhật",
      "Thứ hai",
      "Thứ ba",
      "Thứ tư",
      "Thứ năm",
      "Thứ sáu",
      "Thứ bảy",
    ];
    const now = new Date();
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    return `${day}, ngày ${date} tháng ${month} năm ${year}.`;
  };

  getCurrentUser() {
    return this.authService.getCurrentUser()?.first_name + " " + this.authService.getCurrentUser()?.last_name + "";
  }

  activeNavItem(url: string[], classActive: string, classInactive: string): string {
    return url.some(u => u == this.appState.page) ? classActive : classInactive
  }

  toggleSideBar() {
    this.appState.displaySideBar = !this.appState.displaySideBar;
  }

  sideBarMenuToggle(menu: string) {
    return this.appState.sideBarMenuToggle.some(s => s === menu);
  }

  addToggleMenu(menu: string) {
    if (this.appState.sideBarMenuToggle.some(s => s === menu)) {
      this.appState.sideBarMenuToggle = this.appState.sideBarMenuToggle.filter(s => s !== menu);
    } else {
      this.appState.sideBarMenuToggle = [];
      this.appState.sideBarMenuToggle.push(menu)
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    let w = event.target.innerWidth;
    this.appState.width = w;

    this.appState.displaySideBar = false;

    if (w < 1280) {
      this.appState.displaySideBar = false;
    } else {
      this.appState.displaySideBar = true;
    }
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    let span = document.getElementsByClassName("span-dropdownuser")[0];
    let img = document.getElementsByClassName("img-dropdownuser")[0];

    let target: any = event.target;

    if (target != span && target != img) {
      this.appState.userLoginDropdown = false
    }
  }
}
