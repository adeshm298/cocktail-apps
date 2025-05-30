import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';
import { IngredientDetailComponent } from './components/ingredient-detail/ingredient-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cocktails', component: CocktailListComponent },
  { path: 'ingredient/:id', component: IngredientDetailComponent }
];
