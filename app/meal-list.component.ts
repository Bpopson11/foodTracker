import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { ShowMealDetailsComponent } from './meal-details.component';
import { EditMealDetailsComponent } from './edit-meal.component';
import { HealthyPipe } from './healthy.pipe';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [HealthyPipe],
  directives: [MealComponent, NewMealComponent, EditMealDetailsComponent, ShowMealDetailsComponent],
  templateUrl: 'app/meal-list.view.html'
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public meal: Meal;
  public filterHealthyMeals: string = "notHealthy"
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
    this.mealList.push(newMeal);//SEE * BELOW
  }
  onChange(filterOption){
  this.filterHealthyMeals = filterOption;
  }
}
