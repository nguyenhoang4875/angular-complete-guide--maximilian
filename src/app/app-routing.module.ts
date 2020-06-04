import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { MyRecpiesComponent } from "./my-recpies/my-recpies.component";
import { MyRecipesListComponent } from "./my-recpies/my-recipes-list/my-recipes-list.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeResolverService } from "./recipes/recipes-resolver.service";

const routes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  { path: "recipes", loadChildren: "./recipes/recipes.module#RecipesModule" },
  {
    path: "shopping-list",
    loadChildren: "./shopping-list/shopping-list.module#ShoppingListModule",
  },
  { path: "auth", loadChildren: "./auth/auth.module#AuthModule" },
  {
    path: "my-recipes",
    component: MyRecpiesComponent,
    children: [
      { path: "", component: MyRecipesListComponent },
      { path: "new", component: RecipeEditComponent },
      {
        path: ":id",
        component: RecipeDetailComponent,
        resolve: [RecipeResolverService],
      },
      {
        path: ":id/edit",
        component: RecipeEditComponent,

        resolve: [RecipeResolverService],
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
