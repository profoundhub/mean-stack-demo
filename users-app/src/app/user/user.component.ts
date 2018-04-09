import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: Array<User> = [
    new User(1, "First","Last","Email@email.com","passwordMEAN"),
    new User(2, "First","Last","Email@email.com","passMEANword"),
    new User(3, "First","Last","Email@email.com","MEANpassword")
  ];

  // users: User[] = [];
  // user: any = [];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    // this.getUsers();
  }

  // Method

  // getUsers() {
  // this._userService.getUsers()
  // .then(users => this.users = users);

  // this._userService.getUsers().then(users => this.users = users);
  // this._userService.getUsers(user: User): Promise<any> ??
  }
}
