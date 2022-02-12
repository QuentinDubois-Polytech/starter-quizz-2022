import { Component, OnInit } from '@angular/core';
import {Question} from "../../../models/question.model";
import {Quiz} from "../../../models/quiz.model";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  public questionList: Question[];

  constructor() {
    this.questionList = [];
  }

  ngOnInit(): void {
  }

  questionDeleted(question: Question) {
    console.log('event received from child:', question);
  }

}
