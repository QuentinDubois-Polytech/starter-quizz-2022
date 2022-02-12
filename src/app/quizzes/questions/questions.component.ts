import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from "../../../models/question.model";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  @Input()
  question: Question | undefined;

  @Output()
  questionDeleted: EventEmitter<Question> = new EventEmitter<Question>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteQuiz() {
    this.questionDeleted.emit(this.question)
  }

}
