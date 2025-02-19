import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user.model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users: User[] = []

  constructor(public userService: UserService) {
    this.userService.users$.subscribe(users => this.users = users)
  }

  ngOnInit(): void {
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user)
  }

}
