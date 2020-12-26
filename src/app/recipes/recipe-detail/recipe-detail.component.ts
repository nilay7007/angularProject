import { ResourceLoader } from '@angular/compiler';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
 id:number;
  constructor(private recipeService: RecipeService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    //const id=this.route.snapshot.params['id'];
    this.route.params.subscribe((params:Params)=>{
    this.id=+params['id'];
  this.recipe=this.recipeService.getRecipe(this.id);})
    // + is used to convert string id from routes url to Numbersnapshot was not used 
    // as that only works when page Reloads and doesnt monitor when ChangeDetectionStrategywithout refreshing the page

  }
  onEditRecipe(){
this.router.navigate(['edit'],{relativeTo:this.route})
  }
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
