import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'show-meal-details',
  inputs: ['meal'],
  templateUrl: 'app/html-view.html'
})

export class ShowMealDetailsComponent {
  public meal: Meal;
}
