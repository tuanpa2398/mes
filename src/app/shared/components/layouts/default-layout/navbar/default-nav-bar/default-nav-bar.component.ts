import { Component, Input, OnInit } from '@angular/core';
import { SHARED_IMPORT_MODULE } from '@app/shared/share.import';

@Component({
  selector: 'app-default-nav-bar',
  imports: [
    SHARED_IMPORT_MODULE
  ],
  templateUrl: './default-nav-bar.component.html'
})
export class DefaultNavBarComponent implements OnInit {
  @Input("items") items: any[] = [];

  ngOnInit(): void {
    
  }
}
