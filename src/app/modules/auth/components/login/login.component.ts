import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GoodComponent as GoodNetworkComponent } from '@app/shared/components/network/good/good.component';
import { OfflineComponent as OfflineNetworkComponent } from '@app/shared/components/network/offline/offline.component';
import { NormalComponent as NormalNetworkComponent } from '@app/shared/components/network/normal/normal.component';
import { BadComponent as BadNetworkComponent } from '@app/shared/components/network/bad/bad.component';

import { NETWORK_STATUS } from '@app/shared/constant';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@app/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GoodNetworkComponent,
    OfflineNetworkComponent,
    NormalNetworkComponent,
    BadNetworkComponent
  ],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  // network status
  networkStatus: string = 'Đang kiểm tra...';
  downlink: number = 0;
  NETWORK_STATUS = NETWORK_STATUS;

  isShowPassword: boolean = false;

  form: FormGroup = new FormGroup({
    dataUser: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  submited: boolean = false;

  constructor(
    private authService: AuthService
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

  toggleShowPassword(){
    this.isShowPassword = !this.isShowPassword;
  }

  onSubmitLogin(){
    console.log(this.form.value);
    if(this.submited) return;

    try {
      this.submited = true;
      // this.submited = false;
    } catch (error) {
      // this.submited = false;
    }
  }
}
