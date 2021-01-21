import { registerLocaleData } from '@angular/common';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CantServiceService {

  constructor(private http: HttpClient) { }

  register() {
    return this.http.put("http://localhost:8080/lunchtime/user/register", {
      "address": "3 road of iron",
      "wallet": 35.5,
      "postalCode": "78140",
      "email": "slp@aol.com",
      "isLunchLady": false,
      "password": "pute",
      "name": "Albert",
      "firstname": "Smith",
      "phone": "0147503190",
      "town": "Versailles",
      "sex": 0,
      "image": {
        "imagePath": "img/toto.png",
        "image64": "see https://www.base64-image.de/"
      }
    })

  }

  login() {
    let Credentials = {
      email: "toto@gmail.com",
      password: "bonjour"
    }
    return this.http.post("http://localhost:8080/lunchtime/login", Credentials, { observe: "response" })
  }

}

