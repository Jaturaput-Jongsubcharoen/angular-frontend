import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class FruitService {
  private fruits: string[] = ['Apple', 'Banana', 'Orange'];

  getFruits(): string[] {
    return [...this.fruits];
  }

  setFruits(fruits: string[]): void {
    this.fruits = [...fruits];
  }

  addFruit(fruit: string): void {
    this.fruits.push(fruit);
  }
}
