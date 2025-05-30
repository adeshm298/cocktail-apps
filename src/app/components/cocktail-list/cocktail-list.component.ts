import { Component, OnInit } from "@angular/core";
import { CocktailService } from "../../services/cocktail.service";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "../../common/header/header.component";

@Component({
  standalone: true,
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
  imports: [CommonModule,HeaderComponent]
})
export class CocktailListComponent implements OnInit {
  drinks: any[] = [];
  filteredDrinks: any[] = [];
  filter: string = 'All';

  constructor(private cocktailService: CocktailService, private router: Router) {}

  ngOnInit() {
    this.cocktailService.getCocktails().subscribe(data => {
      this.drinks = data || [];
      this.filteredDrinks = this.drinks;
    });
  }

  applyFilter(filter: string) {
    console.log(JSON.stringify(this.drinks))
    this.filter = filter;
    if (filter === 'All') {
      this.filteredDrinks = this.drinks;
    } else {
      this.filteredDrinks = this.drinks.filter(d => d.strCategory === filter);
    }
  }

  viewDetails(id: string) {
    console.log(id)
    this.router.navigate(['/ingredient', id]);
  }
}
