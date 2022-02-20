import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../../../../models/question.model";
import {Quiz} from "../../../../models/quiz.model";
import {QuizService} from "../../../../services/quiz.service";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  @Input()
  quiz!: Quiz

  questionList: Question[] = [];

  constructor(public quizService: QuizService) {
  }

  ngOnInit(): void {
    this.questionList = this.quiz.questions
  }

  deleteQuestion(question: Question) {
    // this.quiz.questions = this.quiz.questions.filter(q => q.label != question.label)!
    // this.quizService.updateQuiz(this.quiz)
    this.quizService.deleteQuestion(question, this.quiz)
    console.log('event received from child:', question);
  }

}
