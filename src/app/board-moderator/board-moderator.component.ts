import { Component, OnInit } from '@angular/core';
import { DatasetService } from '../_services/dataset/dataset.service';
import { mall_costumer } from '../module/mall_costumer';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {
  costumers?: mall_costumer[];
  s?: string;
  constructor(private datasetService: DatasetService) { }

  public getCostumers(){
    this.datasetService.getCostumers().subscribe(
      (response: mall_costumer[]) => {
          this.costumers = response
      },
      (error: HttpErrorResponse)=>{
        alert(error.message)
      }
      );
  }

  ngOnInit(): void {
    this.getCostumers();
  }
}
