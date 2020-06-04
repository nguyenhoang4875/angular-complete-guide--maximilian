import { Component, OnInit, OnDestroy } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";
import { Subscription } from "rxjs";
import { LoggingService } from "../logging.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;
  constructor(
    private slService: ShoppingListService,
    private loggingService: LoggingService
  ) {}

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );

    this.loggingService.printLog("Hello from ShoppingListComponent ngOnInit");
  }
  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onEdit(editedItemIndex) {
    const newIngredient = new Ingredient(
      this.ingredients[editedItemIndex].name,
      this.ingredients[editedItemIndex].amount
    );
    this.slService.updateIngredient(editedItemIndex, newIngredient);
    // alert(JSON.stringify(newIngredient));
  }

  onDelete(editedItemIndex) {
    this.slService.deleteIngredient(editedItemIndex);
  }
}
