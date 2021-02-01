import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  nom: string;
  user = {
    nom: '',
    prenom: '',
    statut: '',
    tel:'',
    email: '',
    rue: '',
    ville: '',
    CP: ''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmitTemplate() {
    console.log('Form submit');
    console.log(this.user);

  }

}
