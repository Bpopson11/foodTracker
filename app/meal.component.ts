import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <div>
    <label>{{ meal.mealName }}'s</label>
    <label>{{ meal.mealDetails }}</label>
    <label>{{ meal.calorieCount }}</label>
    <label>{{ meal.mealTime }}</label>
  </div>
  `
})

export class MealComponent {
  public meal: Meal;
}
