import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Students } from './all-students/students.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'environments/environment';
import { UnsubscribeOnDestroyAdapter } from '@shared';
@Injectable()
export class StudentsService extends UnsubscribeOnDestroyAdapter {



  private readonly API_URL = `${environment.apiUrl}/students`;

  isTblLoading = true;
  dataChange: BehaviorSubject<Students[]> = new BehaviorSubject<Students[]>([]);
  // Temporarily stores data from dialogs
  dialogData!: Students;

 error='';



  allStudents: Students[]=[];














  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Students[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }









  /** CRUD METHODS */
  getAllStudents(): Observable<Students[]> {

    return this.httpClient.get<Students[]>(`${this.API_URL}`);

    // return new Promise<Students[]>((resolve, reject) => {
    //   this.httpClient.get<Students[]>(this.API_URL).subscribe({
    //     next: (data) => {
    //       this.isTblLoading = false;
    //       this.dataChange.next(data);
    //       this.allStudents = data;
    //       resolve(data);
    //     },
    //     error: (error: HttpErrorResponse) => {
    //       this.error = 'Failed to get students.'; // Hata mesajını atama
    //       reject(error);
    //     },
    //   });
    // });
  }













  addStudents(students: Students): void {
    this.dialogData = students;

    // this.httpClient.post(this.API_URL, students)
    //   .subscribe({
    //     next: (data) => {
    //       this.dialogData = students;
    //     },
    //     error: (error: HttpErrorResponse) => {
    //        // error code here
    //     },
    //   });
  }
  updateStudents(students: Students): void {
    this.dialogData = students;

    // this.httpClient.put(this.API_URL + students.id, students)
    //     .subscribe({
    //       next: (data) => {
    //         this.dialogData = students;
    //       },
    //       error: (error: HttpErrorResponse) => {
    //          // error code here
    //       },
    //     });
  }
  deleteStudents(id: number): void {
    console.log(id);

    // this.httpClient.delete(this.API_URL + id)
    //     .subscribe({
    //       next: (data) => {
    //         console.log(id);
    //       },
    //       error: (error: HttpErrorResponse) => {
    //          // error code here
    //       },
    //     });
  }
}
