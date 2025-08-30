import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { ToastService } from './services/toast.service';
import { LoadingBarService } from './services/loading-bar.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ToastModule,
    CommonModule
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
    let url = this.router.url;    

    if (accessToken != null && user == null) {
      this.authService.getCurrentAppUser().subscribe({
        next: res => {
          if (res.status == false) {
            this.authService.logout();
            this.toastService.info("Vui lòng đăng nhập lại.");
            return
          }
          this.keepLoadingEffect(startTime)
          this.authService.storeUser(res);
          this.router.navigate([url]);
        },
        error: err => {
          this.keepLoadingEffect(startTime)
        },
        complete: () => {
          this.keepLoadingEffect(startTime)
        }
      });
    }

    if(accessToken == null && user == null){
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
