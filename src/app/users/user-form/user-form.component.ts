import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user.model";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  public userForm: FormGroup
  public userId: number = 0

  constructor(public formBuilder: FormBuilder, public userService: UserService) {
    this.userService.userId$.subscribe(id => this.userId = id);
    this.userForm = this.formBuilder.group({
      username: '',
      password: ''
    })
  }

  ngOnInit(): void {
  }

  addUser() {
    const user = this.userForm.getRawValue() as User
    user.id = String(++this.userId)
    this.userService.addUser(user)
  }

}
