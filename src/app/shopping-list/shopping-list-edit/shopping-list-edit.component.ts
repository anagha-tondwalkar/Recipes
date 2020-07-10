import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') slForm: NgForm;
  editMode = false;
  editItemId: number;
  subscription: Subscription;
  editedItem: Ingredient;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingService.startedEditing
    .subscribe(
      (index: number) => {
        this.editItemId = index;
        this.editMode = true;
        this.editedItem = this.shoppingService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    )
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const ingredient = new Ingredient(value.name, value.amount);
    if(this.editMode) {
      this.shoppingService.updateIngredient(ingredient, this.editItemId);
    } else {
      this.shoppingService.addIngredient(ingredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.editMode = false;
    this.slForm.reset();
  }

  onDelete() {
    this.shoppingService.deleteIngredient(this.editItemId);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
