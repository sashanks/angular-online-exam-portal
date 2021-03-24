import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamSelectComponent } from './exam-select/exam-select.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path:'',pathMatch:'prefix',redirectTo:'home'},
  { path: '', component: HomeComponent},
  { path: 'exam-select', component:ExamSelectComponent},
  { path: 'quiz', component:QuizComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
