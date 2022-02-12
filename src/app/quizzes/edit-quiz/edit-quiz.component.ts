import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../../../services/quiz.service";
import {Quiz} from "../../../models/quiz.model";


@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.scss']
})
export class EditQuizComponent implements OnInit {
  public quiz!: Quiz;


  constructor(private route: ActivatedRoute,
              private quizService: QuizService) {
    this.getQuiz();
    console.log(this.quiz);
  }

  ngOnInit(): void {
  }

  getQuiz() {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.quizService.getQuiz(id).subscribe(quiz => {
      this.quiz = quiz
    })
  }

}
