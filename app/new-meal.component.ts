import {Component, EventEmitter} from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onAddNewMeal'],
  template: `
  <div class="meal-form">
    <h3>Add new meal:</h3>

    <input placeholder="Meal Name" #newMealName class="form-control"><br>
    <input placeholder="Details" #newMealDetails class="form-control"><br>
    <input placeholder="Calories" #newCalorieCount class="form-control"><br>

    <h3>Select Meal Time</h3>
    <select class="mealTimeDropdown form-control" #newMealTime>
    <option value="Breakfast">Breakfast</option>
    <option value="Lunch">Lunch</option>
    <option value="Dinner">Dinner</option>
    <option value="Snack">Snack</option>
    <option value="Drink">Drink</option>
    </select>

    <button (click)="addMeal(newMealName, newMealDetails, newCalorieCount, newMealTime)" class="btn-info btn add-button">Add</button>
  </div>
    `
})

export class NewMealComponent {
  public onAddNewMeal: EventEmitter<Meal>;
    constructor() {
      this.onAddNewMeal = new EventEmitter();
    }
    addMeal(mealName: HTMLInputElement, mealDetails: HTMLInputElement, calorieCount: number, mealTime: HTMLInputElement) {
      var newMeal: Meal = new Meal(mealName.value, mealDetails.value, calorieCount, mealTime.value);
      this.onAddNewMeal.emit(newMeal);
    }

}
