import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="jumbotron">
      <h1>Meal Tracker</h1>
    </div>
    <div class="container">
      <div class="well">
      <meal-list [mealList]="meals"
      (onMealSelect)="mealWasSelected($event)">
      </meal-list>
  `
})

export class AppComponent {
  public meals: Meal[];
  public meal: Meal;
  constructor(){
    this.meals = [
      new Meal("Greek Yogurt", "No sugar added plain", 150, "Breakfast"),
      new Meal("Coffee", "16oz black", 2, "Drink"),
      new Meal("String Cheese", "Ate two", 160, "Snack"),
      new Meal("Club Sandwich", "No mayo", 508, "Lunch"),
      new Meal("Side Salad", "with vinegarette dressing", 90, "Lunch"),
      new Meal("Apple", "Golden delicious, medium", 82, "Snack"),
      new Meal("Shrimp Carbonara", "ate half", 780, "Dinner"),
      new Meal("Breadsticks", "had three", 420, "Dinner"),
      new Meal("Red wine", "1 glass", 122, "Drink")
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
  console.log(clickedMeal);
  }
}
