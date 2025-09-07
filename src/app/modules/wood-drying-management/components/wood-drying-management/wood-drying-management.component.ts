import { Component, OnInit } from '@angular/core';

import { CHUC_NANG_QUAN_LY_SAY_GO } from '@app/shared/constant';
import { DryingPlanComponent } from '../drying-plan/drying-plan.component';
import { DryingWoodComponent } from '../drying-wood/drying-wood.component';
import { DryingIntoOvenComponent } from '../drying-into-oven/drying-into-oven.component';
import { OvenCheckingComponent } from '../oven-checking/oven-checking.component';
import { OvenComponent } from '../oven/oven.component';
import { DryingEvaluationComponent } from '../drying-evaluation/drying-evaluation.component';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import {  SHARED_IMPORT_MODULE } from '@app/shared/share.import';

type Tab = {
  tab: number
  title: string
}

@Component({
  selector: 'app-wood-drying-management',
  imports: [
    SHARED_IMPORT_MODULE
  ],
  templateUrl: './wood-drying-management.component.html'
})
export class WoodDryingManagementComponent implements OnInit {
  chucNangQuanLySayGo: Tab[] = CHUC_NANG_QUAN_LY_SAY_GO;
  selected: Tab = this.chucNangQuanLySayGo[0];
  tabIndex: number = 0;

  constructor(
    private httpClient: HttpClient
  ) {}

  onChangeTab(e: any) {
    let value: Tab = e.value;
    let tab = value.tab;
    if (tab != this.tabIndex) {
      this.tabIndex = value.tab;
      this.selected = value;
    }
  }

  ngOnInit(): void {
    forkJoin({
      post: this.httpClient.get('https://jsonplaceholder.typicode.com/posts'),
      user: this.httpClient.get('https://jsonplaceholder.typicode.com/users'),
    }).subscribe(res => {
      console.log("res", res);
      
    })
  }
}
