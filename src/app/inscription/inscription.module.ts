import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CagnotteComponent } from '../cagnotte/cagnotte.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { IonicModule } from '@ionic/angular';
import { InscriptionPageRoutingModule } from './inscription-routing.module';


import { InscriptionPage } from './inscription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptionPageRoutingModule
  ],
  declarations: [InscriptionPage, NavbarComponent, CagnotteComponent,],
  exports: [NavbarComponent,]
})
export class InscriptionPageModule {}

