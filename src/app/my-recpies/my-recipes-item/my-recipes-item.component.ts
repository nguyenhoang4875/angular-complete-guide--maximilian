import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../../recipes/recipe.model";

@Component({
  selector: "app-my-recipes-item",
  templateUrl: "./my-recipes-item.component.html",
  styleUrls: ["./my-recipes-item.component.css"],
})
export class MyRecipesItemComponent implements OnInit {
  @Input() myRecipe: Recipe;
  @Input() index: number;
  constructor() {}

  ngOnInit() {}
}
