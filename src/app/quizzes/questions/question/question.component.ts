import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from "../../../../models/question.model";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input()
  question!: Question;

  @Output()
  questionDeleted: EventEmitter<Question> = new EventEmitter<Question>();

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteQuiz() {
    console.log("Question to delete", this.question)
    this.questionDeleted.emit(this.question)
  }

}
