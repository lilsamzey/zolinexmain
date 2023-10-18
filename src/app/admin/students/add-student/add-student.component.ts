import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent {
  stdForm: UntypedFormGroup;
  breadscrums = [
    {
      title: 'Add Student',
      items: ['Student'],
      active: 'Add Student',
    },
  ];
  constructor(private fb: UntypedFormBuilder) {
    this.stdForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      lastName: ['',Validators.required],
      country: ['', [Validators.required]],
      birtYear: ['', [Validators.required]],

      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      mobile: ['', [Validators.required]],
      parentsFirstName: ['' ],
      parentsLastName: [''],
      parentNo: [''],
      parentsEmail: [
        '',
        [ Validators.email, Validators.minLength(5)],
      ],

      address: [''],

    });
  }
  onSubmit() {
    console.log('Form Value', this.stdForm.value);
  }
}
