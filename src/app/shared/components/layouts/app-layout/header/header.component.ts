import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NETWORK_STATUS } from '@app/shared/constant';
import { SHARED_IMPORT_MODULE } from '@app/shared/share.import';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [
    SHARED_IMPORT_MODULE
  ],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  modalFactoryVisible: boolean = false;
  visibleMainMenu: boolean = false;

  // network status
  networkStatus: string = 'Đang kiểm tra...';
  downlink: number = 0;
  NETWORK_STATUS = NETWORK_STATUS;

  // URL hiện tại
  currentUrl: string = '';
  private sub!: Subscription;

  constructor(
    private router: Router
  ){}

  ngOnInit() {
    this.addEventCheckNetwork();
  }

  watchUrl() {
    this.sub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentUrl = event.urlAfterRedirects;
        this.currentUrl = this.currentUrl.replace("/", '');
      });
  }

  updateNetworkStatus = () => {
    let connection = (navigator as any).connection;

    this.downlink = connection?.downlink || 0;

    let isOnline = navigator.onLine;

    if (!isOnline || this.downlink === 0) {
      this.networkStatus = "Không có mạng";
    } else if (this.downlink < 1.2) {
      this.networkStatus = "Kém";
    } else if (this.downlink >= 1.2 && this.downlink < 3.5) {
      this.networkStatus = "Trung bình";
    } else {
      this.networkStatus = "Tốt";
    }
  };

  addEventCheckNetwork() {
    this.updateNetworkStatus();

    window.addEventListener('online', this.updateNetworkStatus);
    window.addEventListener('offline', this.updateNetworkStatus);

    let connection = (navigator as any).connection;
    if (connection) {
      connection.addEventListener('change', this.updateNetworkStatus);
    }
  }
}
