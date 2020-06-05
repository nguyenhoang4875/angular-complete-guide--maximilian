import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from "../../auth/auth.service";
import { Subscription } from "rxjs";
import { Recipe } from "../../recipes/recipe.model";
import { RecipeService } from "../../recipes/recipe.service";
import { Router, ActivatedRoute } from "@angular/router";

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
  positionArray: number[] = [];
  constructor(
    private authService: AuthService,
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user) => {
      this.recipes = this.recipeService.getRecipes();
      this.nameUser = user.email.substring(0, user.email.lastIndexOf("@"));
      this.recipes.forEach((item, index) => {
        if (item.createdBy === this.nameUser) {
          this.myRecipes.push(item);
          this.positionArray.push(index);
        }
      });
    });
  }

  onAddNewRecipe() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
