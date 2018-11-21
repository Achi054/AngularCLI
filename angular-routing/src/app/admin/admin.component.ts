import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: any[];
  hasPermission = false;

  constructor() {}

  ngOnInit() {
    this.getUsers()
      .then(users => (this.users = users))
      .catch(e => console.log(e.message));
  }

  async getUsers() {
    return [
      {
        name: 'Sujith',
        email: 'sujithacharya@mail.com'
      },
      {
        name: 'Sunith',
        email: 'sunithacharya@mail.com'
      }
    ];
  }
}
