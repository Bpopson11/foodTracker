import { Component } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'show-meal-details',
  inputs: ['meal'],
  templateUrl: 'app/meal-list.view.html'
})

export class ShowMealDetailsComponent {
  public meal: Meal;
}
