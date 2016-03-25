import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'show-meal-details',
  inputs: ['meal'],
  template: `
  <div class="row">
    <div class="col col-md-6">
    <div class="mealDetails">
      <h3>{{ meal.mealName }}: </h3>
        <p> Details: {{ meal.mealDetails }}</p>
        <p> Calories: {{ meal.calorieCount }}</p>
        <p> Meal Type: {{ meal.mealTime }}</p>
    </div>
  `
})

export class ShowMealDetailsComponent {
  public meal: Meal;
}
