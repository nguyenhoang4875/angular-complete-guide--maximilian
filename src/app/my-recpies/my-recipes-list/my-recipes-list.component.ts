import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from "../../auth/auth.service";
import { Subscription } from "rxjs";
import { Recipe } from "../../recipes/recipe.model";
import { RecipeService } from "../../recipes/recipe.service";

@Component({
  selector: "app-my-recipes-list",
  templateUrl: "./my-recipes-list.component.html",
  styleUrls: ["./my-recipes-list.component.css"],
})
export class MyRecipesListComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  nameUser: string = "";
  myRecipes: Recipe[] = [];
  recipes: Recipe[] = [];
  constructor(
    private authService: AuthService,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user) => {
      this.recipes = this.recipeService.getRecipes();
      this.nameUser = user.email.substring(0, user.email.lastIndexOf("@"));
      this.recipes.forEach((item) => {
        if (item.createdBy === this.nameUser) {
          this.myRecipes.push(item);
        }
      });
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
