import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
  private name: string;
  private description: string;
  private imagePath: string;
  private ingredients: Ingredient[];

  constructor(name: string, description: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }

  public getRecipeName(): string {
    return this.name;
  }

  public getRecipeDescription(): string {
    return this.description;
  }

  public getRecipeImage(): string {
    return this.imagePath;
  }

  public getIngredients(): Ingredient[] {
    return this.ingredients;
  }
}
