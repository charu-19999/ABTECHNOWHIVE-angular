import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  ImagePath: string;
  constructor() {
    this.ImagePath = './assets/logo/AB LOGO.png';
  }

  ngOnInit(): void {}
}
