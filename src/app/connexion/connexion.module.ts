import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConnexionPageRoutingModule } from './connexion-routing.module';
import { ConnexionPage } from './connexion.page';
import { CagnotteComponent } from '../cagnotte/cagnotte.component';
import { NavbarComponent } from '../navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnexionPageRoutingModule
  ],
  declarations: [ConnexionPage, NavbarComponent, CagnotteComponent],
  exports: [NavbarComponent]
})
export class ConnexionPageModule {}
