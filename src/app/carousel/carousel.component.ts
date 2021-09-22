import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from "@angular/animations";
import {fadeIn,fadeOut, scaleIn, scaleOut} from "./carousel.animation";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger("carouselAnimation", [
      // transition("void => *", [useAnimation(fadeIn, {params: { time: '1300ms' }} )]),
      // transition("* => void", [useAnimation(fadeOut, {params: { time: '1300ms' }})]),
      transition("void => *", [useAnimation(scaleIn, {params: { time: '500ms' }} )]),
      transition("* => void", [useAnimation(scaleOut, {params: { time: '500ms' }})]),
    ])
  ]
})
export class CarouselComponent implements OnInit {

  public slides = [
    {src: "https://static.libertyprim.com/files/varietes/pomme-akane-large.jpg?1569320193"},
    {src: "https://cdn.shopify.com/s/files/1/0206/9470/products/4021-done_1024x1024.jpg?v=1616454632"},
    {src: "https://ezsai.com/wp-content/uploads/2021/02/firefox_2018-07-10_07-50-11.png"},
    {src: "https://www.bigbasket.com/media/uploads/p/l/40033819-2_6-fresho-apple-shimla.jpg"}
  ]

  currentSlide = 0;

  constructor() {}

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }
  ngOnInit(): void {
  }

}
