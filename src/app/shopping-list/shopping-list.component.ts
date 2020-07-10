import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  subcription: Subscription;
  constructor(private shoppingService: ShoppingService) { }
    
  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.subcription = this.shoppingService.ingreadientsChanged
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onItemEdit(index: number) {
    this.shoppingService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

}
