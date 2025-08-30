import { Component, Input } from '@angular/core';
import { SHARED_IMPORT_MODULE } from '@app/shared/share.import';

@Component({
  selector: 'wl-page',
  imports: [
    SHARED_IMPORT_MODULE
  ],
  templateUrl: './page-content.component.html'
})
export class PageContentComponent {
  @Input('page-title') title: string = '';
}
