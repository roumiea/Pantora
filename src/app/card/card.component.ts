import { Card } from '../card';
import { Component, OnInit, Input } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
   @Input() card: Card;
  constructor() { }

  ngOnInit() {
    console.log("Cardcomponent", this.card);
  }
}
