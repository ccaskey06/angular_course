
export class Ingredient {

  constructor(private name: string, private amount: number) {}

  public getIngredientName(): string {
    return this.name;
  }

  public getIngredientAmount(): number {
    return this.amount;
  }
}
