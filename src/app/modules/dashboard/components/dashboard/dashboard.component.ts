import { Component } from '@angular/core';
import { AuthService } from '@app/services/auth.service';
import { AppPageComponent } from '@app/shared/components/app-page/app-page.component';
import { SHARED_IMPORT_MODULE } from '@app/shared/share.import';

@Component({
  selector: 'app-dashboard',
  imports: [
    SHARED_IMPORT_MODULE,
    AppPageComponent
  ],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  constructor(
    private authService: AuthService
  ){}

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

  getCurrentUser(){
    return this.authService.getCurrentUser()?.first_name + " " + this.authService.getCurrentUser()?.last_name + "";
  }
}
