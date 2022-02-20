import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {QuizService} from "../../../../services/quiz.service";
import {Question} from "../../../../models/question.model";
import {Quiz} from "../../../../models/quiz.model";

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})

export class QuestionFormComponent implements OnInit {

  @Input()
  quiz!: Quiz

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

  addQuestion() {
    const question: Question = this.questionForm.getRawValue() as Question
    // this.quiz.questions.push(question)
    // this.quizService.updateQuiz(this.quiz)
    this.quizService.addQuestion(question, this.quiz)
  }
}
