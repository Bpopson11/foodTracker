export class Meal {
  public healthy: boolean = true;

  constructor(public mealName: string,
    public mealDetails: string,
    public calorieCount: number,
    public mealTime: string) {
    }
}
