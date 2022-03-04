import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  showShortDesciption = true;
  constructor() {}
  alterDescriptionText() {
    this.showShortDesciption = !this.showShortDesciption;
  }

  ngOnInit(): void {}
}
