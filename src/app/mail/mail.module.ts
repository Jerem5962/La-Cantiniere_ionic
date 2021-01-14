import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CagnotteComponent } from '../cagnotte/cagnotte.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { IonicModule } from '@ionic/angular';

import { MailPageRoutingModule } from './mail-routing.module';

import { MailPage } from './mail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MailPageRoutingModule
  ],
  declarations: [MailPage,NavbarComponent, CagnotteComponent],
  exports: [NavbarComponent]
})
export class MailPageModule {}
