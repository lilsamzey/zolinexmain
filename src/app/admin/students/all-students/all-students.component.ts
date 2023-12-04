import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StudentsService } from '../students.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Students } from './students.model';
import { DataSource } from '@angular/cdk/collections';

import {AddStudentComponent} from '../add-student/add-student.component';
import {AuthService} from '../../../core/service/auth.service'

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { BehaviorSubject, fromEvent, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { FormDialogComponent } from './dialogs/form-dialog/form-dialog.component';
import { DeleteDialogComponent } from './dialogs/delete/delete.component';
import { MatMenuTrigger } from '@angular/material/menu';
import { SelectionModel } from '@angular/cdk/collections';
import { Direction } from '@angular/cdk/bidi';
import {
  TableExportUtil,
  TableElement,
  UnsubscribeOnDestroyAdapter,
} from '@shared';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.scss'],
})
export class AllStudentsComponent implements OnInit {





currentPage = 1;
itemsPerPage = 10; // Default items per page
totalItems = 0;
itemsPerPageOptions: number[] = [10, 20, 50, 100, 200];






  allStudents: Students[]=[];








  searchText = '';

  breadscrums = [
    {
      title: 'All Student',
      items: ['Student'],
      active: 'All Student',
    },
  ];
  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    public studentsService: StudentsService,

  ) {

  }


  async ngOnInit(): Promise<void> {



    this.getAllStudents();




  }



    getAllStudents(){
      this.studentsService.getAllStudents().subscribe(
      (data) => {
        this.allStudents = data;
        console.log(this.allStudents);

      },
      (error) => {
        console.error('Error:', error);
      }
    );
}

//  get filteredStudents() {
//   return this.allStudents.filter(student =>
//     (student.firstName + ' ' + student.lastName).toLowerCase().includes(this.searchText.toLowerCase()) ||
//     student.email.toLowerCase().includes(this.searchText.toLowerCase()) ||
//     student.mobile.toLowerCase().includes(this.searchText.toLowerCase()) ||
//     student.id.toLowerCase().includes(this.searchText.toLowerCase()) ||


//   );
// }


get filteredStudents() {
  const filtered = this.allStudents?.filter(student =>
    (student.firstName + ' ' + student.lastName).toLowerCase().includes(this.searchText.toLowerCase()) ||
    student.email.toLowerCase().includes(this.searchText.toLowerCase()) ||
    student.mobile.toLowerCase().includes(this.searchText.toLowerCase())
    // ... add other fields if needed
  );

  this.totalItems = filtered.length;

  // Logic for pagination
  const startItem = (this.currentPage - 1) * this.itemsPerPage;
  const endItem = startItem + this.itemsPerPage;

  return filtered.slice(startItem, endItem);
}

get maxPage(): number {
  return Math.ceil(this.totalItems / this.itemsPerPage);
}

prevPage(): void {
  if (this.currentPage > 1) {
    this.currentPage--;
  }
}

nextPage(): void {
  if (this.currentPage < this.maxPage) {
    this.currentPage++;
  }
}

goToPage(page: number): void {
  this.currentPage = page;
}


updateItemsPerPage() {
  // Burada sayfa başına kaç öğe gösterileceğini güncelleyebilirsiniz.
  // Örneğin, sayfayı tekrar yükleyerek verileri güncelleyebilirsiniz.
   // Eğer bir 'loadStudents' fonksiyonunuz varsa
}


details(student:Students){
  console.log('student details work')
}

}
