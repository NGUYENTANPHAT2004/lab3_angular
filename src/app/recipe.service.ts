import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'https://dummyjson.com/recipes';

  constructor() { }

  getRecipes() {
    return axios.get(this.apiUrl);
  }

  getRecipeById(id: number) {
    return axios.get(`${this.apiUrl}/${id}`);
  }
}
