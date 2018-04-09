import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: Array<User> = []; //  users: User[] = [];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    // this.getUsers();
  }

  // Method
  getUsers() {
    this._userService.getUsers()
    // this._userService.getUsers(user: User): Promise<any>
    .then(users => this.users = users);
  }
}
