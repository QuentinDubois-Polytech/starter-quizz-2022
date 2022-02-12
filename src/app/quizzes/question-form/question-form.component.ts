import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {QuizService} from "../../../services/quiz.service";

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})

export class QuestionFormComponent implements OnInit {

  public questionForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public quizService: QuizService) {
    this.questionForm = this.formBuilder.group({
      label: [''],
      answers: this.formBuilder.array([])
    })
  }

  ngOnInit(): void {
  }


  get answers() {
    return this.questionForm.get('answers') as FormArray;
  }

  private createAnswer() {
    return this.formBuilder.group({
      value: '',
      isCorrect: false,
    })
  }

  addAnswer() {
    this.answers.push(this.createAnswer())
  }

  // createQuestion() {
  //   question: Question =
  //   this.quizService.createQuestion()
  // }
}
