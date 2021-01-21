import { Component } from '@angular/core';
import {​​ Router }​​ from '@angular/router';
import { CantServiceService } from '../cant-service.service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-connexion',
  templateUrl: 'connexion.page.html',
  styleUrls: ['connexion.page.scss'],
})
export class ConnexionPage {
  helper: JwtHelperService = new JwtHelperService()
  decodedToken;
  constructor(private router: Router,
    private CantServiceService: CantServiceService) {}

  naviguate1(id:string){
    this.router.navigate(['/inscription']);
  }
  naviguate2(id:string){
    this.router.navigate(['/mail']);
  }

  login() {
    let token:string;
    this.CantServiceService.login().subscribe(
      (res) => {
        token=res.headers.get("Authorization")
        this.decodedToken = this.helper.decodeToken(token);
        console.log(this.decodedToken);
      });
}
}
