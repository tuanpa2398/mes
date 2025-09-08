import { Component, Input } from '@angular/core';
import { SHARED_IMPORT_MODULE } from '@app/shared/share.import';

@Component({
  selector: 'app-sidebar',
  imports: [
    SHARED_IMPORT_MODULE
  ],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  @Input("sideBarMenuToggle") sideBarMenuToggle: any;
  @Input("activeNavItem") activeNavItem: any;
  @Input("addToggleMenu") addToggleMenu: any;
}
