import {MenuComponent} from './menu/menu.component';
import {CardComponent} from './card/card.component';
import {SivComponent} from './siv/siv.component';
import { VenteComponent } from './vente/vente.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: VenteComponent},
  {path: 'ventes', component: VenteComponent},
  {path: 'carte-grise', component: SivComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
