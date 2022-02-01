import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { user } from '../module/user';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content?: string;
  admins?: user[];

  constructor(private userService: UserService) { }

  public getAdmins(){
    this.userService.getAdmins().subscribe(
      (response: user[]) => {
          this.admins = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message)
      }
      );
  }

  ngOnInit(): void {
    this.getAdmins();
  }
}
