import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {StudentJournalService} from "./studentJournalService";
import {Observable, of} from "rxjs";
import {Student} from "./interfaces/student.interface";


@Component({
  selector: 'studentJournal',
  templateUrl: './studentJournal.component.html',
  styleUrls: ['./studentJournal.component.css']
})
// export class StudentJournalComponent implements OnInit {
//   students$: Observable<Student[]> = of([]);
//
//   constructor(private router: Router, private studentJournalService: StudentJournalService) {
//   }
//   onBtnClick() {
//     // програмная навигация
//     this.router.navigate(['/admin']);
//   }
//
//   ngOnInit(): void {
//     this.students$ = this.studentJournalService.getAllStudents();
//   }
//
//
//
// }

export class StudentJournalComponent {

}
