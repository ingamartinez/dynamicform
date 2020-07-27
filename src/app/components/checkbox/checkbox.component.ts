import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FieldConfig, TypeDependency} from '../../field.interface';
import {MatCheckboxChange} from '@angular/material';

@Component({
  selector: "app-checkbox",
  template: `
<div class="demo-full-width margin-top" [formGroup]="group" >
<mat-checkbox [formControlName]="field.name" (change)="check($event)" >{{field.label}}</mat-checkbox>
</div>
`,
  styles: []
})
export class CheckboxComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}

  check(event: MatCheckboxChange) {
    this.field.dependency.forEach( (dependency, indice, array) =>  {
      if (dependency.type === TypeDependency.HideShow) {
        if (event.checked) {
          this.group.get(dependency.id).enable();
        } else {
          this.group.get(dependency.id).disable();
        }
      }
    });
    // this.checkClick.emit(event);
  }

}
