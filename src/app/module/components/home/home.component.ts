import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  buttonState = 'normal';

  onMouseEnter() {
    this.buttonState = 'hovered';
  }

  onMouseLeave() {
    this.buttonState = 'normal';
  }
}
