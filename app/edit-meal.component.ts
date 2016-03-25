import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <div class = "meal-form">
    <input [(ngModel)]="meal.mealName">
    <input [(ngModel)]="meal.mealDetails">
    <input [(ngModel)]="meal.calorieCount">
    <h3>Select Meal Time</h3>
    <select class="mealTimeDropdown form-control">
    <option value="Breakfast">Breakfast</option>
    <option value="Lunch">Lunch</option>
    <option value="Dinner">Dinner</option>
    <option value="Snack">Snack</option>
    <option value="Drink">Drink</option>
    </select>
    <div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
