import { Component, OnInit } from '@angular/core';
import { GoodComponent as GoodNetworkComponent } from '@app/shared/components/network/good/good.component';
import { OfflineComponent as OfflineNetworkComponent } from '@app/shared/components/network/offline/offline.component';
import { NormalComponent as NormalNetworkComponent } from '@app/shared/components/network/normal/normal.component';
import { BadComponent as BadNetworkComponent } from '@app/shared/components/network/bad/bad.component';

import { NETWORK_STATUS } from '@app/shared/constant';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@app/services/auth.service';
import { ToastService } from '@app/services/toast.service';
import { Router } from '@angular/router';
import { SHARED_IMPORT_MODULE } from '@app/shared/share.import';
import { AppUserAuth, LoginResponse } from '@app/models/auth.model';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [
    SHARED_IMPORT_MODULE,
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
    pattern: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  submited: boolean = false;

  constructor(
    private authService: AuthService,
    private toastService: ToastService,
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

  toggleShowPassword() {
    this.isShowPassword = !this.isShowPassword;
  }

  onSubmitLogin() {
    if(this.form.invalid) {
      this.toastService.info("Vui lòng điền thông tin đăng nhập.");
      return;
    }

    if (this.submited) return;
    
    this.submited = true;

    this.authService.login({
      pattern: this.form.value.pattern,
      password: this.form.value.password
    }).pipe(finalize(() => {
      this.submited = false;
    })).subscribe(res => {
      this.submited = false;

      if (!res.status) {
        this.toastService.error(res.message ?? "Đăng nhập không thành công.");
        return
      }

      let data: LoginResponse = {
        status: res.status,
        message: res.message,
        access_token: res.data['access_token'],
        refresh_token: res.data['refresh_token'],
        user: res.data['user']
      }

      this.authService.store(data);

      this.toastService.success(res.message ?? "Đăng nhập thành công.");
      this.router.navigate([`/`]);
    });
  }
}
