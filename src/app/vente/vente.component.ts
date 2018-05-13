import { Card } from '../card';
import { ItemsService } from '../items.service';
import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.css']
})
export class VenteComponent implements OnInit {
  cards: Card[];
  constructor(private itemsService: ItemsService) { console.log("VenteComponent.constructeur"); }

  ngOnInit() {
    this.getItems();
  }
  getItems(): void {
    console.log("VenteComponent.getItems");
    this.itemsService.getItems()
      .subscribe(data => this.cards = data);
  }

}
