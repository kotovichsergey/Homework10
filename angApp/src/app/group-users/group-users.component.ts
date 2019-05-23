import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { GROUPUSERS } from '../groupUsers';

@Component({
  selector: 'app-group-users',
  templateUrl: './group-users.component.html',
  styleUrls: ['./group-users.component.css']
})
export class GroupUsersComponent implements OnInit {

  groupUsers = GROUPUSERS;

  constructor() { }

  ngOnInit() {
  }

}
