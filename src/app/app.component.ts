import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetUsers } from './get-users/get-users.component';
import { GetEncryptedUsers } from './get-encrypted-users/get-encrypted-users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GetUsers, GetEncryptedUsers],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'my-angular-app-ssr';
}
