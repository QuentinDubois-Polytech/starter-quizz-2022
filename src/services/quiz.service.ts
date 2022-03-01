import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Quiz} from '../models/quiz.model';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Question} from "../models/question.model";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  /**
   * The list of quiz.
   * The list is retrieved from the mock.
   */
  private quizzes: Quiz[] = [];
  private quizId: number = 0;

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable
   */
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes);
  public quizId$: BehaviorSubject<number> = new BehaviorSubject<number>(this.quizId)

  private URL_QUIZZES: string = "https://raw.githubusercontent.com/QuentinDubois-Polytech/starter-quizz-2022/master/src/mocks/quiz-list-with-id.json"

  constructor(private http: HttpClient) {
    this.getQuizzes()
  }

  getQuizzes() {
    console.log('before getQuizzes : ', this.quizzes);
    this.http.get<Quiz[]>(this.URL_QUIZZES).subscribe(quizList => {
      console.log('into subscribe')
      quizList.forEach(quiz => this.addQuiz(quiz))
    })
    console.log("After getQuizzes", this.quizzes)
    this.quizzes$.next(this.quizzes)


  }

  addQuiz(quiz: Quiz) {
    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subjec
    this.quizzes.push(quiz);
    if (Number(quiz.id) > this.quizId) {
      this.quizId = Number(quiz.id);
    }
    this.quizId$.next(this.quizId);
    this.quizzes$.next(this.quizzes);
  }

  deleteQuiz(quiz: Quiz) {
    this.quizzes = this.quizzes.filter(q => q != quiz)
    this.quizzes$.next(this.quizzes);
  }

  getQuiz(id: string): Observable<Quiz> {
    console.log("getQuiz : quizzes", this.quizzes, this.quizzes.length)
    console.log("length before : ", this.quizzes.length)

    // @ts-ignore
    const quiz = this.quizzes.find(quiz => quiz.id == id)!;

    console.log("length after : ", this.quizzes.length)

    console.log("getQuiz : ", quiz);
    return of(quiz);
  }

  addQuestion(question: Question, quiz: Quiz) {
    const index = this.findIndexQuiz(quiz);
    this.quizzes[index].questions.push(question)
    this.quizzes$.next(this.quizzes);
  }

  deleteQuestion(question: Question, quiz: Quiz) {
    const index = this.findIndexQuiz(quiz);
    this.quizzes[index].questions = this.quizzes[index].questions.filter(q => q.label != question.label)
    this.quizzes$.next(this.quizzes);
  }

  private findIndexQuiz(quiz: Quiz) {
    return this.quizzes.findIndex(q => Number(q.id) === Number(quiz.id))!
  }
}
