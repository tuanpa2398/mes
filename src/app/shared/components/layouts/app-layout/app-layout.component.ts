import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORT_MODULE } from '@app/shared/share.import';
import { HeaderComponent } from './header/header.component';
import { AuthService } from '@app/services/auth.service';

@Component({
  selector: 'app-layout',
  imports: [
    SHARED_IMPORT_MODULE,
    HeaderComponent
  ],
  templateUrl: './app-layout.component.html'
})
export class AppLayoutComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {

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
}
