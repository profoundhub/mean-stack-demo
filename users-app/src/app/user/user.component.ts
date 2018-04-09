import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];
  usersa: Array<User> = [];

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  // Method
  getUsers() {
    this._userService.getUsers()
    .then(users => this.users = this.usersa)
  }
}
