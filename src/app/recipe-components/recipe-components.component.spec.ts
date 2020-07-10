import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeComponentsComponent } from './recipe-components.component';

describe('RecipeComponentsComponent', () => {
  let component: RecipeComponentsComponent;
  let fixture: ComponentFixture<RecipeComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
