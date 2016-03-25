import {Component, EventEmitter} from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onAddNewMeal'],
  templateUrl: 'app/html-view.html'
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
