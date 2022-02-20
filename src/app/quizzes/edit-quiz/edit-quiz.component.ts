import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../../../services/quiz.service";
import {Quiz} from "../../../models/quiz.model";


@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.scss']
})
export class EditQuizComponent implements OnInit {
  quiz!: Quiz;


  constructor(private route: ActivatedRoute,
              private quizService: QuizService) {
    this.getQuiz();
  }

  ngOnInit(): void {
    console.log(Number(this.route.snapshot.paramMap.get('id')))
    console.log(this.quiz)
  }

  getQuiz() {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.quizService.getQuiz(id).subscribe(quiz => {
      this.quiz = quiz
      console.log("Quizz subscribe", quiz)
    })
    return this.quiz
  }
}
