import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editmode= false;

  constructor(private routes: ActivatedRoute) { }

  ngOnInit(): void {
    this.routes.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editmode = params['id'] != null;
        console.log(this.editmode);
      }
    )
  }

}
