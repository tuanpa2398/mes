import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { TabsModule } from 'primeng/tabs';

import { CHUC_NANG_QUAN_LY_SAY_GO } from '@app/shared/constant';
import { DryingPlanComponent } from '../drying-plan/drying-plan.component';
import { DryingWoodComponent } from '../drying-wood/drying-wood.component';
import { DryingIntoOvenComponent } from '../drying-into-oven/drying-into-oven.component';
import { OvenCheckingComponent } from '../oven-checking/oven-checking.component';
import { OvenComponent } from '../oven/oven.component';
import { DryingEvaluationComponent } from '../drying-evaluation/drying-evaluation.component';
import { SelectModule } from 'primeng/select';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

type Tab = {
  tab: number
  title: string
}

@Component({
  selector: 'app-wood-drying-management',
  imports: [
    CommonModule,
    TabsModule,
    DryingPlanComponent,
    DryingWoodComponent,
    DryingIntoOvenComponent,
    OvenCheckingComponent,
    OvenComponent,
    DryingEvaluationComponent,
    SelectModule
  ],
  templateUrl: './wood-drying-management.component.html'
})
export class WoodDryingManagementComponent implements OnInit {
  chucNangQuanLySayGo = CHUC_NANG_QUAN_LY_SAY_GO;
  tabIndex = 0;

  constructor(
    private httpClient: HttpClient
  ) {}

  onChangeTab(e: any) {
    let value: Tab = e.value;
    let tab = value.tab;
    if (tab != this.tabIndex) {
      this.tabIndex = value.tab;
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
