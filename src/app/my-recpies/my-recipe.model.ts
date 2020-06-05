import { Recipe } from "../recipes/recipe.model";

export class MyRecipe {
  public id: number;
  public recipe: Recipe;
  constructor(id: number, recipe: Recipe) {
    this.id = id;
    this.recipe = recipe;
  }
}
