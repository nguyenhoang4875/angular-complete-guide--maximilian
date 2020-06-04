import { Component, OnInit, OnDestroy } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ThrowStmt } from "@angular/compiler";
import { Subscription } from "rxjs";
import { DataStorageService } from "../../shared/data-storage.service";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  isLoading: boolean = false;
  subscription: Subscription;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.subscription = this.recipeService.recipesChange.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
        this.isLoading = false;
      }
    );

    this.subscription = this.dataStorageService.fetchRecipes().subscribe();
    this.recipes = this.recipeService.getRecipes();
  }
  onNewRecipe() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
