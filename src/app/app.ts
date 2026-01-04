import { Component, signal } from '@angular/core';
import { Fruits } from './components/fruits/fruits';
import { ProfileImage } from './components/profile-image/profile-image';

@Component({
  selector: 'app-root',
  imports: [Fruits, ProfileImage],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('angular-frontend');
}
