import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { NewMealComponent } from './new-meal.component';
import { ShowMealDetailsComponent } from './meal-details.component';
import { EditMealDetailsComponent } from './edit-meal.component';
import { HealthyPipe } from './healthy.pipe';
import { TimePipe } from './time.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [HealthyPipe, TimePipe],
  directives: [MealComponent, NewMealComponent, EditMealDetailsComponent, ShowMealDetailsComponent],
  templateUrl: 'app/meal-list.view.html'
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public meal: Meal;
  public filterHealthyMeals: string = "all";
  public filterMealTimes: string = "all";
  constructor(){
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log('child', clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(newMeal: Meal): void {
    console.log(newMeal);
    this.mealList.push(newMeal);
  }
  onChange(filterOption){
  this.filterHealthyMeals = filterOption;
  this.filterMealTimes = filterOption;
  }
}
