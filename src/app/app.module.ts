import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { QuizComponent } from './quizzes/quiz/quiz.component';
import { HeaderComponent } from './header/header.component';
import { QuizFormComponent } from './quizzes/quiz-form/quiz-form.component';
import {HttpClientModule} from "@angular/common/http";
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./routing/app.routing.module";
import { QuestionsComponentComponent } from './quizzes/questions/questions-component/questions-component.component';
import { QuestionListComponentComponent } from './quizzes/questions/question-list-component/question-list-component.component';
import { QuestionFormComponentComponent } from './quizzes/questions/question-form-component/question-form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    QuizComponent,
    HeaderComponent,
    QuizFormComponent,
    EditQuizComponent,
    QuestionsComponentComponent,
    QuestionListComponentComponent,
    QuestionFormComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
