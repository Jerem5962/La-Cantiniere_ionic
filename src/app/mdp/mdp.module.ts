import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CagnotteComponent } from '../cagnotte/cagnotte.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { IonicModule } from '@ionic/angular';

import { MdpPageRoutingModule } from './mdp-routing.module';

import { MdpPage } from './mdp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MdpPageRoutingModule
  ],
  declarations: [MdpPage, NavbarComponent, CagnotteComponent],
  exports: [NavbarComponent]
})
export class MdpPageModule {}
