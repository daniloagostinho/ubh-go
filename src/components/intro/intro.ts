import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'intro',
  templateUrl: 'intro.html'
})
export class IntroComponent {
  @ViewChild(Slides) slides: Slides;

  text: string;

  constructor() {
    console.log('Hello IntroComponent Component');
    this.text = 'Hello World';
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

  goToSlide() {
    this.slides.slideTo(2, 500);
  }

}
