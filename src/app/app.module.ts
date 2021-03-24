import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExamSelectComponent } from './exam-select/exam-select.component';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { QuizComponent } from './quiz/quiz.component';
import { FormsModule } from '@angular/forms';
import { QuizService } from './quiz.service';
import { HelperService } from './helper.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExamSelectComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,    
    BackButtonDisableModule.forRoot({preserveScrollPosition: true}),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    QuizService,
    HelperService,
    HttpClientModule,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
