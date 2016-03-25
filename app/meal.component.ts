import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <div>
    <label>{{ meal.mealName }}</label>

  </div>
  `
})

export class MealComponent {
  public meal: Meal;
}

// <label>{{ meal.mealDetails }}</label>
// <label>{{ meal.calorieCount }}</label>
// <label>{{ meal.mealTime }}</label>

///need to check and make sure I only want the mealName for this component.
