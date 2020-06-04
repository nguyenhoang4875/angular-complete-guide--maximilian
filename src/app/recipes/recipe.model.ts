import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
  public name: string;
  public description: string;
  public direction: string;
  public imagePath: string;
  public createdBy: string;
  public ingredients: Ingredient[];

  constructor(
    name: string,
    description: string,
    direction: string,
    imagePath: string,
    createdBy: string,
    ingredients: Ingredient[]
  ) {
    this.name = name;
    this.description = description;
    this.direction = direction;
    this.imagePath = imagePath;
    this.createdBy = createdBy;
    this.ingredients = ingredients;
  }
}
