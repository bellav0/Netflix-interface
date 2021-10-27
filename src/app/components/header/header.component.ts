import { Component, Input, OnInit } from '@angular/core';
import { menuAcess } from './menu.utils';

@Component({
  selector: 'nf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menu = menuAcess;
  @Input() backgroundColor ;
  constructor() {}

  ngOnInit(): void {}

  
}
