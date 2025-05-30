import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, forkJoin } from 'rxjs'; 
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private readonly API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  constructor(private http: HttpClient) {}

  getCocktails(): Observable<any[]> {
    const mojito$ = this.http.get<any>(`${this.API_URL}Mojito`);
    const margarita$ = this.http.get<any>(`${this.API_URL}Margarita`);

    return forkJoin([mojito$, margarita$]).pipe(
      map(([mojitoRes, margaritaRes]) => [
        ...(mojitoRes.drinks || []),
        ...(margaritaRes.drinks || [])
      ])
    );
  }

}
