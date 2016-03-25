export class Meal {
  public healthy: boolean = false;
  
  constructor(public mealName: string,
    public mealDetails: string,
    public calorieCount: number,
    public mealTime: string) {
    }
}
