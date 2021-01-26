import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Meal } from '../../../backend/models/meal'

@Component({
  selector: 'app-meal',
  templateUrl: './meal.page.html',
  styleUrls: ['./meal.page.scss'],
})
export class MealPage implements OnInit {

  meal: Meal
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
    ) {
      const mealId = this.route.snapshot.paramMap.get("id")
      this.readApi("http://localhost:3000/meals/" + mealId)
        .subscribe((meal) => {
          this.meal = meal
          return this.meal
        })
     }

  ngOnInit() {

  }

  readApi(URL: string) {
    return this.http.get(URL)
  }

}
