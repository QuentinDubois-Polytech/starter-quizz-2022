import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {User} from "../models/user.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Quiz} from "../models/quiz.model";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private users : User[] = []
  private URL_USERS: string = "https://raw.githubusercontent.com/QuentinDubois-Polytech/starter-quizz-2022/master/src/mocks/user-list.json"
  private userId: number = 0

  public users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(this.users)
  public userId$: BehaviorSubject<number> = new BehaviorSubject<number>(this.userId)

  constructor(private http: HttpClient) {
    this.getUsers()
  }

  getUsers() {
    this.http.get<User[]>(this.URL_USERS).subscribe(users => {
      users.forEach(user => this.addUser(user))
    })
  }

  addUser(user: User) {
    this.users.push(user)
    this.users$.next(this.users)

    if (Number(user.id) > this.userId) {
      this.userId = Number(user.id);
    }
    this.userId$.next(this.userId);
  }

  deleteUser(user: User) {
    this.users = this.users.filter(u => u != user)
    this.users$.next(this.users)
  }
}
