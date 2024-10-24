import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  async getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
  }

  async getUserById(id: number) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = await response.json();
    if (!data.name) {
      return null;
    }
    return data;
  }
}
