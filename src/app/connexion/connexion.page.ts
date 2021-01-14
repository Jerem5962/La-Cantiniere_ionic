import { Component } from '@angular/core';
import {​​ Router }​​ from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: 'connexion.page.html',
  styleUrls: ['connexion.page.scss'],
})
export class ConnexionPage {

  constructor(private router: Router) {}

  naviguate1(id:string){
    this.router.navigate(['/inscription']);
  }
  naviguate2(id:string){
    this.router.navigate(['/mail']);
  }

}

