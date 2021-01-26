import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MealPageRoutingModule } from './meal-routing.module';
import { CagnotteComponent } from '../cagnotte/cagnotte.component';
import { NavbarComponent } from '../navbar/navbar.component';

import { MealPage } from './meal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MealPageRoutingModule,
  ],
  declarations: [MealPage, CagnotteComponent, NavbarComponent],
})
export class MealPageModule {}
