import { Component, OnInit } from '@angular/core';
import { GraphService } from '../_services/graph/graph.service';
import { graph } from '../module/graph';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent implements OnInit {

  graphs?: graph[];

  constructor(private graphService: GraphService) { }

  getGraphs(){
    this.graphService.getGraphs().subscribe(
      (response: graph[])=>{
          this.graphs = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

  ngOnInit(): void {
    this.getGraphs();
  }

}
