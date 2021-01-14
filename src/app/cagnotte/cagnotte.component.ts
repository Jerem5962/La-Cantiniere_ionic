import { Component, OnInit } from '@angular/core';
import {​​ Router }​​ from '@angular/router';

@Component({
  selector: 'app-cagnotte',
  templateUrl: './cagnotte.component.html',
  styleUrls: ['./cagnotte.component.scss'],
})
export class CagnotteComponent implements OnInit {

  constructor(private router: Router) {}
  naviguate(id:string){
    this.router.navigate(['/connexion']);
  }
  ngOnInit() {}

}
