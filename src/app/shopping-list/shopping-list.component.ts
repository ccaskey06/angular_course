import { Component, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: [ './shopping-list.component.scss' ]
})
export class ShoppingListComponent implements OnDestroy {
  private igChangeSub!: Subscription;

  ingredients!: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChangeSub = this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

  ngOnDestroy() {
    this.igChangeSub.unsubscribe();
  }
}
