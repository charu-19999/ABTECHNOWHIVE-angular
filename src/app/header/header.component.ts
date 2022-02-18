import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

  styles: [
    `
      @media screen and (max-width: 769px) {
        .nav-menu {
          padding: 15px 20px;
        }
        .nav-menu .nav-logo {
          width: 130px;
        }
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  ImagePath: string;
  constructor() {
    this.ImagePath = './assets/logo/AB LOGO.png';
  }

  ngOnInit(): void {}
}
