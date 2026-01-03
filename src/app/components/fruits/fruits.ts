import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FruitsService } from '../../services/fruits';

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fruits.html',
  styleUrl: './fruits.css'
})
export class Fruits {
  healthText = '';
  fruits: string[] = [];

  newFruit = '';
  replaceText = '';

  loading = false;
  error = '';

  constructor(private api: FruitsService) {}

  // call health + fruits when page loads
  ngOnInit() {
    this.checkHealth();
    this.loadFruits();
  }

  checkHealth() {
    this.api.health().subscribe({
      next: (t) => (this.healthText = t),
      error: () => (this.healthText = 'Backend not reachable')
    });
  }

  loadFruits() {
    this.loading = true;
    this.error = '';
    this.api.getFruits().subscribe({
      next: (data) => (this.fruits = data),
      error: (e) => (this.error = e?.message ?? 'Failed to load fruits'),
      complete: () => (this.loading = false)
    });
  }

  addFruit() {
    const fruit = this.newFruit.trim();
    if (!fruit) return;

    this.error = '';
    this.api.addFruit(fruit).subscribe({
      next: (res) => {
        this.fruits = res.fruits;
        this.newFruit = '';
      },
      error: (e) => (this.error = e?.message ?? 'Failed to add fruit')
    });
  }

  // replace entire list using PUT
  replaceAll() {
    const list = this.replaceText
      .split(',')
      .map((x) => x.trim())
      .filter(Boolean);

    this.error = '';
    this.api.replaceFruits(list).subscribe({
      next: (data) => {
        this.fruits = data;
        this.replaceText = '';
      },
      error: (e) => (this.error = e?.message ?? 'Failed to replace fruits')
    });
  }
}
