import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    Quotes = [
      new Quote(1, 'Watch Finding Nemoss'),
      new Quote(2, 'Buy Cookiesss'),
      new Quote(3, 'Get new Phone Casess'),
      new Quote(4, 'Get Dog Foodss'),
      new Quote(5, 'Solve math homeworkss'),
      new Quote(6, 'Plot my world domination planss'),
    ]


  constructor() { }

  ngOnInit() {
  }

}
