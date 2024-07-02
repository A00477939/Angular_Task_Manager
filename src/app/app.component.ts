import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent} from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './task/task.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, UserComponent, TaskComponent]
})
export class AppComponent {
  title = 'myapp';
  users = DUMMY_USERS;
  selectedUser:string = 'u1';

  get selectUser(){
    return this.users.find((user) => user.id === this.selectedUser);
  }

  onClickUser(id:string){
    this.selectedUser = id;
  }
}
