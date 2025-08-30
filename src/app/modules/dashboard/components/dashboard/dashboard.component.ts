import { Component } from '@angular/core';
import { AuthService } from '@app/services/auth.service';
import { PageContentComponent } from '@app/shared/components/layouts/page-content/page-content/page-content.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    PageContentComponent
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
