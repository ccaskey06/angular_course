
export class Recipe {

  constructor(private name: string, private description: string, private imagePath: string) {}

  public getRecipeName(): string {
    return this.name;
  }

  public getRecipeDescription(): string {
    return this.description;
  }

  public getRecipeImage(): string {
    return this.imagePath;
  }
}
