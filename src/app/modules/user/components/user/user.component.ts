import { Component, OnInit } from '@angular/core';
import { SHARED_IMPORT_MODULE } from '@app/shared/share.import';
import { UserListComponent } from './user-list/user-list.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [
    SHARED_IMPORT_MODULE
  ],
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  tab: number = 0;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.setDefaultTab();
  }

  setDefaultTab() {
    this.route.queryParamMap.subscribe(params => {
      let tab = params.get('tab');

      this.tab = tab ? 1 : 0;
    });
  }
}
