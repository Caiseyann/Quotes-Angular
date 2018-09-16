import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    Quotes = [
      new Quote(1, 'Watch Finding Nemoss', 'Find an online version and watch merlin find his son', new Date(2018, 3, 14) ),
      new Quote(2, 'Buy Cookiesss', 'I have to buy cookies for the parrot', new Date(2018, 6, 9) ),
      new Quote(3, 'Get new Phone Casess', 'Diana has her birthday coming up soon', new Date(2018, 1, 12) ),
      new Quote(4, 'Get Dog Foodss', 'Pupper likes expensive sancks', new Date(2018, 0, 18) ),
      new Quote(5, 'Solve math homeworkss', 'Damn Math', new Date(2018, 2, 14) ),
      new Quote(6, 'Plot my world domination planss', 'Cause I am an evil overlord', new Date(2018, 3, 14) ),
    ]

    toogleDetails(index){
        this.Quotes[index].showDescription =!this.Quotes[index].showDescription;
    }

    completeQuote(isComplete,index){
        if (isComplete){
            this.Quotes.splice(index,1);
            }
    }

  constructor() { }

  ngOnInit() {
  }

}
