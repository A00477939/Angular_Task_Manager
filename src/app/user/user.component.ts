import { Component,EventEmitter,Input,Output, output } from '@angular/core';

interface user{
  id: string,
  avatar: string,
  name: string
}

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Output() select = new EventEmitter<string>();
  @Input({required: true}) users!: user;
  get getImagePath() {
    return 'assets/users/' + this.users.avatar;
  }

  onClickUser(){
    this.select.emit(this.users.id);
  }
}
