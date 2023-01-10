import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',

  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent {

  user = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : 'Beer or not two beer ?',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };
  show = false  
}

