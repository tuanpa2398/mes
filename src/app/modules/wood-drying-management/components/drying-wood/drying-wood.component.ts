import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-drying-wood',
  imports: [
    FieldsetModule,
    PanelModule,
    SelectModule,
    DatePickerModule,
    ReactiveFormsModule
  ],
  templateUrl: './drying-wood.component.html'
})
export class DryingWoodComponent {
  form: FormGroup = new FormGroup({
    
  });
}
