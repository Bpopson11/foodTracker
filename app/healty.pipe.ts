import { Pipe, PipeTransform } from "angular2/core";
import { Meal } from './meal.model';

@Pipe({
  name: "healthy",
  pure: false
})

export class HealthyPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var mealCalories = args[0];
    if(mealCalories === "healthy") {
      return input.filter((meal) => {
        return meal.empty;
      });
    } else if (mealCalories === "notHealthy") {
      return input.filter((meal) => {
        return !meal.empty;
      });
    } else {
      return input;
    }
  }
}
