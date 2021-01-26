import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { Meal } from '../../../backend/models/meal'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  meals: Meal = [] 
  constructor(private http: HttpClient) {
    this.readAPI('http://localhost:3000/meals')
      .subscribe((meals) => {
        this.meals = meals
        return this.meals
      })
  }

  readAPI(URL: string){
    return this.http.get(URL)
  }
}
