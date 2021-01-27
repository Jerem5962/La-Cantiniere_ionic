import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage {

  get name() {
    return this.registrationForm.get('name');
  }

  get firstname() {
    return this.registrationForm.get('firstname')
  }

  get statut() {
    return this.registrationForm.get('statut')
  }

  get email() {
    return this.registrationForm.get('email')
  }

  get phone() {
    return this.registrationForm.get('phone')
  }

  get rue() {
    return this.registrationForm.get('rue.ville')
  }

  get ville() {
    return this.registrationForm.get('adresse.ville')
  }

  get codePostal() {
    return this.registrationForm.get('adresse.codePostal')
  }

  public errorMessages = {
    name : [
    { type : 'requis', message: 'un nom est requis' },
    { type : 'longueurmax', message: 'le nom ne peut contenir plus de 100 caractères'}
    ],
    firstname : [
    { type : 'requis', message: 'un prenom est requis' },
    { type : 'longueurmax', message: 'le prenom ne peut contenir plus de 100 caractères'}
    ],
    statut : [
    { type : 'requis', message: 'un statut est requis' },
    { type : 'longueurmax', message: 'Veuillez entrez un statut disponible' }
    ],
    email : [
    { type : 'requis', message: 'un email est requis' },
    { type : 'pattern', message: 'Veuillez entrez une adresse valide' }
    ],
    phone : [
    { type : 'requis', message: 'un telephone est requis' },
    { type : 'pattern', message: 'Veuillez entrez un numero valide' }
    ],
    rue : [
    { type : 'requis', message: 'une rue est requis' },
    { type : 'longueurmax', message: 'Le nom de la rue ne peut contenir plus de 100 caractères' }
    ],
    ville : [
    { type : 'requis', message: 'une ville est requis' },
    { type : 'longueurmax', message: 'Le nom de la rue ne peut contenir plus de 100 caractères' }
    ],
    codePostal : [
      { type : 'requis', message: 'un code postal est requis' },
      { type : 'pattern', message: 'Entrez un code postal valide' }
      ],
  };

  registrationForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    firstname: ['', [Validators.required, Validators.maxLength(100)]],
    statut: ['', [Validators.required, Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.pattern("'^[a-zA-Z0-9._%-]+@[a-zA-Z0-9°-]+.[a-zA-Z]{2,4}$'")]],
    phone: ['', [Validators.required, Validators.pattern("/^[0-9]{10,10}$/")]],

    address: this.formBuilder.group({
      rue: ['', [Validators.required, Validators.maxLength(100)]],
      ville: ['', [Validators.required, Validators.maxLength(100)]],
      codePostal: ['', [Validators.required, Validators.pattern('^[0-9]{5}')]],

    })
  })

  constructor(private formBuilder: FormBuilder) {}

  public submit() {
    console.log(this.registrationForm)
  }

}
