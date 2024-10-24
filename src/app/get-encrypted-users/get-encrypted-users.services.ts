import { Injectable } from '@angular/core';
//@ts-ignore
import { mteFetch } from './mte-relay-browser.js';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  async getUsers() {
    const response = await mteFetch('http://localhost:8085/users');
    const data = await response.json();
    return data;
  }

  async getUserById(id: number) {
    const response = await mteFetch(`http://localhost:8085/users/${id}`);
    const data = await response.json();
    if (!data.name) {
      return null;
    }
    return data;
  }
}
