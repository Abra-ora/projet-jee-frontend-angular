import { Component, OnInit } from '@angular/core';
import { ClientService } from '../_services/client/client.service';
import { user } from '../module/user';
import { HttpErrorResponse } from '@angular/common/http';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  // content?: string;
  clients?: user[];
  faCoffee = faCoffee;
  editedClient?:user;


  constructor(private clientService: ClientService) { }

  public onGetClient(client: user){
    this.editedClient = client;
  }

  public getClients(){
    this.clientService.getClients().subscribe(
      (response: user[]) => {
          this.clients = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message)
      }
      );
  }

  public onUpdateClient(user: user): void{
    document.getElementById('updateClient')?.click();
    this.clientService.onUpdateClient(user).subscribe(
        (response: user)=>{
          console.log(response);
          this.getClients();
        },
        (error: HttpErrorResponse)=>{
          alert(error.message)
        }
    )
  }

  onDeleteClient(client_id: any){
    
    const id = parseInt(client_id);
    this.clientService.onDeleteClient(id).subscribe(
      (response)=>{
        console.log(response);
        this.getClients();

      },
      (error: HttpErrorResponse)=>{
        alert(error.message)
      }
  )
  }


  ngOnInit(): void {
    this.getClients();
  }
}
