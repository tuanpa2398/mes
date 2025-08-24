import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { TabsModule } from 'primeng/tabs';

import { CHUC_NANG_QUAN_LY_SAY_GO } from '@app/shared/constant';
import { DryingPlanComponent } from '../drying-plan/drying-plan.component';
import { DryingWoodComponent } from '../drying-wood/drying-wood.component';
import { DryingIntoOvenComponent } from '../drying-into-oven/drying-into-oven.component';
import { OvenCheckingComponent } from '../oven-checking/oven-checking.component';
import { OvenComponent } from '../oven/oven.component';
import { DryingEvaluationComponent } from '../drying-evaluation/drying-evaluation.component';

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
    DryingEvaluationComponent
  ],
  templateUrl: './wood-drying-management.component.html'
})
export class WoodDryingManagementComponent {
  chucNangQuanLySayGo = CHUC_NANG_QUAN_LY_SAY_GO;

  tabIndex = 0;
}
