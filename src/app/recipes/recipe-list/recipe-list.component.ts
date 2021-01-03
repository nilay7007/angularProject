import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  subscription: Subscription;
  constructor(private recipeService: RecipeService,
    private router:Router,
    private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      );
   
  }
  onNewRecipe(){
this.router.navigate(['new'],{relativeTo:this.route})
//this.route point the route of the parent component i.e.in this case http://localhost:4200/recipes/
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
