import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Quiz} from '../models/quiz.model';
import {QUIZ_LIST} from '../mocks/quiz-list.mock';
import {HttpClient, HttpHeaders} from "@angular/common/http";

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
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes);
  public URL_QUIZZES: string = "https://raw.githubusercontent.com/NablaT/starter-quiz-two/master/mock-quiz.json"

  constructor(private http: HttpClient) {
    this.getQuizzes()
  }

  getQuizzes() {
    this.http.get<Quiz[]>(this.URL_QUIZZES).subscribe(quizList => quizList.forEach(quiz => this.addQuiz(quiz)))
    this.quizzes$.next(this.quizzes)

  }

  addQuiz(quiz: Quiz) {
    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subjec
    quiz.id = String(this.quizId++);
    this.quizzes.push(quiz);
    this.quizzes$.next(this.quizzes);
  }

  deleteQuiz(quiz: Quiz) {
    this.quizzes = this.quizzes.filter(q => q != quiz)
    this.quizzes$.next(this.quizzes);
  }

  getQuiz(id: number): Observable<Quiz> {
    const quiz = this.quizzes.find(quiz => quiz.id === String(id))!;
    return of(quiz);
  }
}
