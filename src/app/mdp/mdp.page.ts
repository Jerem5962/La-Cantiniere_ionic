import { Component, OnInit } from '@angular/core';
import {​​ Router }​​ from '@angular/router';

@Component({
  selector: 'app-mdp',
  templateUrl: './mdp.page.html',
  styleUrls: ['./mdp.page.scss'],
})
export class MdpPage implements OnInit {
  inputValue:string="";
  msg:string=""
  
  constructor(private router: Router) {}

  validation(){
    var str = this.inputValue;
    if (str.match( /[0-9]/g) && 
      str.match( /[A-Z]/g) && 
      str.match(/[a-z]/g)) 
     { this.msg = "Mot de passe fort."; }
   else 
     { this.msg = "Mot de passe trop faible."; }
      console.log(this.msg);

 }

  ngOnInit() {
  }

}
