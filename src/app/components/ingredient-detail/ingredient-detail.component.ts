import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../common/header/header.component';

@Component({
  standalone:true,
  selector: 'app-ingredient-detail',
  templateUrl: './ingredient-detail.component.html',
  styleUrls: ['./ingredient-detail.component.css'],
    imports: [CommonModule, RouterModule,HeaderComponent]  
})
export class IngredientDetailComponent implements OnInit {
  drink: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.http.get<any>(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .subscribe(response => {
          this.drink = response.drinks?.[0];
        });
    }
  }

  getIngredients(): string[] {
    const ingredients: string[] = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = this.drink?.[`strIngredient${i}`];
      const measure = this.drink?.[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(`${measure ?? ''} ${ingredient}`.trim());
      }
    }
    return ingredients;
  }
}
