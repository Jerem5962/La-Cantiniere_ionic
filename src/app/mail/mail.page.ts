import { Component, OnInit } from '@angular/core';
import {​​ Router }​​ from '@angular/router';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.page.html',
  styleUrls: ['./mail.page.scss'],
})
export class MailPage implements OnInit {

  constructor(private router: Router) {}
  naviguate(id:string){
    this.router.navigate(['/mdp']);
  }
  
  ngOnInit() {
  }

}
