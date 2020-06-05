import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../../recipes/recipe.model";
import { DataStorageService } from "../../shared/data-storage.service";
import { Router, ActivatedRoute } from "@angular/router";
import { RecipeService } from "../../recipes/recipe.service";

@Component({
  selector: "app-my-recipes-item",
  templateUrl: "./my-recipes-item.component.html",
  styleUrls: ["./my-recipes-item.component.css"],
})
export class MyRecipesItemComponent implements OnInit {
  @Input() myRecipe: Recipe;
  @Input() index: number;
  @Input() createdBy: string;
  constructor(
    private dataStorageService: DataStorageService,
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {}

  onDeleteRecipe() {
    // this.dataStorageService.storeRecipes().subscribe(() => {
    //   this.router.navigate(["../"], { relativeTo: this.route });
    // });

    this.recipeService.deleteRecipe(this.index);
    this.dataStorageService.storeRecipes().subscribe(() => {
      this.router.navigate(["../"], { relativeTo: this.route });
    });
  }
}
