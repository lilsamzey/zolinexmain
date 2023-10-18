import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StudentsService } from '../students.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Students } from './students.model';
import { DataSource } from '@angular/cdk/collections';

import {AddStudentComponent} from '../add-student/add-student.component';


import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { BehaviorSubject, fromEvent, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormDialogComponent } from './dialogs/form-dialog/form-dialog.component';
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
export class AllStudentsComponent extends UnsubscribeOnDestroyAdapter implements OnInit {


  displayedColumns = [
    'select',
    'img',
    'rollNo',
    'name',
    'department',
    'gender',
    'mobile',
    'email',
    'date',
    'actions',
  ];

  filteredData:any[]=[];

  exampleDatabase!:any;
  dataSource!: any;
  selection = new SelectionModel<Students>(true, []);
  id?: number;
  students?: Students;
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
    private snackBar: MatSnackBar
  ) {
    super();
  }
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild('filter', { static: true }) filter!: ElementRef;
  @ViewChild(MatMenuTrigger)
  contextMenu?: MatMenuTrigger;
  contextMenuPosition = { x: '0px', y: '0px' };

  ngOnInit() {
    console.log('hello world')
  }




  addNew() {
    let tempDirection: Direction;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(AddStudentComponent, {
      data: {
        students: this.students,
        action: 'add',
      },
      direction: tempDirection,
    });
    // this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
    //   if (result === 1) {
    //     // After dialog is closed we're doing frontend updates
    //     // For add we're just pushing a new row inside DataServicex
    //     this.exampleDatabase?.dataChange.value.unshift(
    //       this.studentsService.getDialogData()
    //     );
    //     this.refreshTable();
    //     this.showNotification(
    //       'snackbar-success',
    //       'Add Record Successfully...!!!',
    //       'bottom',
    //       'center'
    //     );
    //   }
    // });
  }



  editCall(row: Students) {
    this.id = row.id;
    let tempDirection: Direction;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: {
        students: row,
        action: 'edit',
      },
      direction: tempDirection,
    });
    // this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
    //   if (result === 1) {
    //     // When using an edit things are little different, firstly we find record inside DataService by id
    //     const foundIndex = this.exampleDatabase?.dataChange.value.findIndex(
    //       (x) => x.id === this.id
    //     );
    //     // Then you update that record using data from dialogData (values you enetered)
    //     if (foundIndex != null && this.exampleDatabase) {
    //       this.exampleDatabase.dataChange.value[foundIndex] =
    //         this.studentsService.getDialogData();
    //       // And lastly refresh table
    //       this.refreshTable();
    //       this.showNotification(
    //         'black',
    //         'Edit Record Successfully...!!!',
    //         'bottom',
    //         'center'
    //       );
    //     }
    //   }
    // });
  }



  deleteItem(row: Students) {
    this.id = row.id;
    let tempDirection: Direction;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: row,
      direction: tempDirection,
    });
    // this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
    //   if (result === 1) {
    //     const foundIndex = this.exampleDatabase?.dataChange.value.findIndex(
    //       (x) => x.id === this.id
    //     );
    //     // for delete we use splice in order to remove single object from DataService
    //     if (foundIndex != null && this.exampleDatabase) {
    //       this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
    //       this.refreshTable();
    //       this.showNotification(
    //         'snackbar-danger',
    //         'Delete Record Successfully...!!!',
    //         'bottom',
    //         'center'
    //       );
    //     }
    //   }
    // });
  }


  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.renderedData.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.renderedData.forEach((row: Students) =>
          this.selection.select(row)
        );
  }







  refresh(){
    console.log('refresh')
  }




  removeSelectedRows(){
    console.log('refresh')
  }




  exportExcel(){
    console.log('refresh')
  }









}


