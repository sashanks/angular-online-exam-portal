import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam-select',
  templateUrl: './exam-select.component.html',
  styleUrls: ['./exam-select.component.css']
})
export class ExamSelectComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  goToExam() {
      this.router.navigate(['/quiz']);
    } 

}
