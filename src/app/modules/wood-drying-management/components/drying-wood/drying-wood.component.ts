import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SHARED_IMPORT_MODULE } from '@app/shared/share.import';


@Component({
  selector: 'app-drying-wood',
  imports: [
    SHARED_IMPORT_MODULE
  ],
  templateUrl: './drying-wood.component.html'
})
export class DryingWoodComponent {
  form: FormGroup = new FormGroup({
    
  });
}
