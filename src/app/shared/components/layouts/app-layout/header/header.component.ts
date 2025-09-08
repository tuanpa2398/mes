import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NETWORK_STATUS } from '@app/shared/constant';
import { SHARED_IMPORT_MODULE } from '@app/shared/share.import';

@Component({
  selector: 'app-header',
  imports: [
    SHARED_IMPORT_MODULE
  ],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Input("appState") appState: any = {};
  @Input("toggleSideBar") toggleSideBar: any = () => { }

  // network status
  networkStatus: string = 'Đang kiểm tra...';
  downlink: number = 0;
  NETWORK_STATUS = NETWORK_STATUS;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.addEventCheckNetwork();
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
