import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  project: string = '';
  ngOnInit(): void {
  }
  viewDetails(val: string) {
    console.log("value", val);
    this.project = val;
  }

}
