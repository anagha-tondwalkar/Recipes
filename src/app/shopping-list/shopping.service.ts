import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';


@Injectable({
    providedIn: 'root'
})
export class ShoppingService {
    ingreadientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 8)
      ];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingreadientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(ingredient: Ingredient, index: number) {
        this.ingredients[index] = ingredient;
        this.ingreadientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingreadientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
       this.ingredients.push(...ingredients);
       this.ingreadientsChanged.next(this.ingredients.slice());
    }
}