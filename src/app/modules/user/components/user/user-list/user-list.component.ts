import { Component } from '@angular/core';
import { SHARED_IMPORT_MODULE } from '@app/shared/share.import';

@Component({
  selector: 'app-user-list',
  imports: [
    SHARED_IMPORT_MODULE
  ],
  templateUrl: './user-list.component.html'
})
export class UserListComponent {

}
