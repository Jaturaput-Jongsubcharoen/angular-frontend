import { Component } from '@angular/core';
import { FruitService } from '../services/fruit.service';

@Component({
  selector: 'app-course',
  standalone: false,
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  fruits: string[] = [];
  newFruit: string = '';

  constructor(private fruitService: FruitService) {}

  ngOnInit(): void {
    // Load fruits when component starts
    this.fruits = this.fruitService.getFruits();
  }

  onAddFruit(): void {
    const value = this.newFruit.trim();
    if (!value) return;

    this.fruitService.addFruit(value);

    // refresh the UI list (because getFruits returns a copy)
    this.fruits = this.fruitService.getFruits();

    this.newFruit = '';
  }

  onResetFruits(): void {
    this.fruitService.setFruits(['Mango', 'Grape', 'Kiwi']);

    // refresh the UI list
    this.fruits = this.fruitService.getFruits();
  }
}
