import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {QuizListComponent} from './quizzes/quiz-list/quiz-list.component';
import {QuizComponent} from './quizzes/quiz/quiz.component';
import {HeaderComponent} from './header/header.component';
import {QuizFormComponent} from './quizzes/quiz-form/quiz-form.component';
import {HttpClientModule} from "@angular/common/http";
import {EditQuizComponent} from './quizzes/edit-quiz/edit-quiz.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./routing/app.routing.module";
import {QuestionComponent} from './quizzes/questions/question/question.component';
import {QuestionListComponent} from './quizzes/questions/question-list/question-list.component';
import {QuestionFormComponent} from './quizzes/questions/question-form/question-form.component';
import { UserComponent } from './users/user/user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserFormComponent } from './users/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    QuizComponent,
    HeaderComponent,
    QuizFormComponent,
    EditQuizComponent,
    QuestionComponent,
    QuestionListComponent,
    QuestionFormComponent,
    UserComponent,
    UserListComponent,
    UserFormComponent
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
export class AppModule {
}
