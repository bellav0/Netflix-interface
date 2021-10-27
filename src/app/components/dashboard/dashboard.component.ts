import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nf-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  backgroundColor = null;
  constructor() { }

  ngOnInit(): void {
  }

  scrollEvent(event): void {
    console.log(event)
    if (event) {
      this.backgroundColor = 'rgb(20, 20, 20)';
    }
  }
}
