import { Component, signal } from '@angular/core';
import { Fruits } from './components/fruits/fruits';

@Component({
  selector: 'app-root',
  imports: [Fruits],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('angular-frontend');
}
