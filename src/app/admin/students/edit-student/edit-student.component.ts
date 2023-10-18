import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss'],
})
export class EditStudentComponent {
  stdForm: UntypedFormGroup;
  formdata = {
    first: 'Pooja',
    last: 'Sarma',
    rollNo: '12',
    gender: 'male',
    email: 'test@example.com',
    mobile: '123456789',
    rDate: '2020-02-05T14:22:18Z',
    department: 'mathematics',
    bGroup: 'O+',
    dob: '1987-02-17T14:22:18Z',
    parentName: 'Sanjay Shukla',
    parentNo: '1234567890',
    address: '101, Elanxa, New Yourk',
    uploadFile: '',
  };
  breadscrums = [
    {
      title: 'Edit Student',
      items: ['Student'],
      active: 'Edit Student',
    },
  ];
  constructor(private fb: UntypedFormBuilder) {
    this.stdForm = this.createContactForm();
  }
  onSubmit() {
    console.log('Form Value', this.stdForm.value);
  }
  createContactForm(): UntypedFormGroup {
    return this.fb.group({
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
}
