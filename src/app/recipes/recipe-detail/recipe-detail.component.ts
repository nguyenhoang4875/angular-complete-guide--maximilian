import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "../../auth/auth.service";
import { DataStorageService } from "../../shared/data-storage.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.recipe = this.recipeService.getRecipe(this.id);
    });

    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe() {
    this.router.navigate(["edit"], { relativeTo: this.route });
    // this.router.navigate(['../',this.id, 'edit'],{relativeTo: this.route});
  }
  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.dataStorageService.storeRecipes().subscribe(() => {
      this.router.navigate(["/recipes"]);
    });
  }
}
