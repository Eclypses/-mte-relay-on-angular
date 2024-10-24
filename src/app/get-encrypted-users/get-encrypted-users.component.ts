import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from './get-encrypted-users.services';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'get-encrypted-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './get-encrypted-users.component.html',
})
export class GetEncryptedUsers {
  loading = false;
  usersJson = '';
  userJson: string = '';
  userId: number = 1;
  getUsersService: UsersService = inject(UsersService);

  constructor() {}

  getUsers() {
    this.loading = true;
    this.getUsersService.getUsers().then((users) => {
      this.usersJson = JSON.stringify(users, null, 2);
      this.loading = false;
    });
  }

  getUserById() {
    this.loading = true;
    this.getUsersService.getUserById(this.userId).then((user) => {
      if (user) {
        this.userJson = JSON.stringify(user, null, 2);
      } else {
        this.userJson = 'No user found';
      }
      this.loading = false;
    });
  }
}
