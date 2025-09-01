import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { ToastService } from './services/toast.service';
import { LoadingBarService } from './services/loading-bar.service';
import { SHARED_IMPORT_MODULE } from './shared/share.import';
import { AppUserAuth } from './models/auth.model';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SHARED_IMPORT_MODULE
],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService,
    public loadingBarService: LoadingBarService
  ) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  // get current user by token if browser refresh (f5)
  getCurrentUser() {
    let user = this.authService.getCurrentUser();
    let accessToken = this.authService.getAccessToken();
    this.loading = true;
    let startTime = Date.now();

    if (accessToken != null && user == null) {
      this.authService.getCurrentAppUser()
      .pipe(finalize(() => {
        this.loading = false;
      }))
      .subscribe(res => {
        if (res.status == false) {
          this.authService.logout();
          this.toastService.info("Vui lòng đăng nhập lại.");
          return
        }

        let user: AppUserAuth = res.data['user'];

        this.keepLoadingEffect(startTime);

        this.authService.storeUser({
          message: res.message,
          status: res.status,
          user
        });
      });
    }

    if (accessToken == null && user == null) {
      this.keepLoadingEffect(startTime);
    }
  }

  keepLoadingEffect(startTime: number) {
    // Tính thời gian API chạy
    let elapsed = Date.now() - startTime;
    let remaining = 2000 - elapsed; // còn thiếu bao nhiêu ms để đủ 2s

    if (remaining > 0) {
      setTimeout(() => {
        this.loading = false;
      }, remaining);
    } else {
      this.loading = false;
    }
  }
}
