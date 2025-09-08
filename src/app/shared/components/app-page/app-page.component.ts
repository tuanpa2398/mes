import { Component, Input } from '@angular/core';
import { SHARED_IMPORT_MODULE } from '@app/shared/share.import';

@Component({
  selector: 'app-page',
  imports: [
    SHARED_IMPORT_MODULE
  ],
  templateUrl: './app-page.component.html'
})
export class AppPageComponent {
  @Input('pageTitle') pageTitle: string = "Trang chủ";
}
