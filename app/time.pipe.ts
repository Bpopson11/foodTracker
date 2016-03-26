import { Pipe, PipeTransform } from 'angular2/core';
import{ Meal } from './meal.model';

@Pipe({
  name: "time"
})

  export class TimePipe implements PipeTransform {
    transform(input: Meal[], args) {
      var mealType = args[0];
      if(mealType === 'Breakfast') {
        return input.filter((meal) => {
          return meal.mealTime === mealType;
        });
        } else if (mealType === 'Lunch') {
          return input.filter((meal) => {
            return meal.mealTime === mealType;
          });
        } else if (mealType === 'Dinner') {
          return input.filter((meal) => {
            return meal.mealTime === mealType;
          });
        } else if (mealType === 'Snack') {
          return input.filter((meal) => {
            return meal.mealTime === mealType;
          });
        } else if (mealType === 'Drink') {
          return input.filter((meal) => {
            return meal.mealTime === mealType;
          });
          } else {
        return input;
    }
  }
}
