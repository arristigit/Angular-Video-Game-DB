import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sort!: string; // Added definite assignment assertion to property of name 'public sort: string;'
  // public sort: string | undefined; // Added undefined type of property of name 'sort'
  constructor() { }

  ngOnInit(): void {
  }

}
