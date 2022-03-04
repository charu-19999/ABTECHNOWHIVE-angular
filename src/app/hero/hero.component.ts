import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit, OnDestroy {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}
  ngOnDestroy() {
    this.elementRef.nativeElement.remove();
  }
}
