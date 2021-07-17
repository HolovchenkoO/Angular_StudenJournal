import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
//import {Student, StudentRawData} from "./interfaces/student.interface";
import {StudentsApiService} from "../../common/api/student-api.service";
import {debounceTime, tap} from "rxjs/operators";
import {Student} from "./interfaces/student.interface";

@Injectable()
export class StudentJournalService {
  constructor(private studentApiService: StudentsApiService) {
  }

  getAllStudents(): Observable<Student[]> {
    return this.studentApiService.getAllStudents().pipe(debounceTime(5000));
  }
}
