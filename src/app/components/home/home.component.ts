import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CocktailListComponent } from '../cocktail-list/cocktail-list.component';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  
  goToDrink(drinkName: string) {
  this.router.navigate(['/cocktails']);
}

  
}

