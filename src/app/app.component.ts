import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  starDate: Date = new Date();
  startTime: Date = new Date();
  onOffSwitch = 'On';
  radioModel = 'Righty';

  max = 10;
  rate = 7;
  isReadonly = false;

  confirmSelection(event: KeyboardEvent) {
    if (event.keyCode === 13 || event.key === 'Enter') {
      this.isReadonly = true;
    }
  }

  resetStars() {
    this.rate = 0;
    this.isReadonly = false;
  }

  hover(value) {
    console.log('Rating hovered ', value);
  }

  leave(value: number) {
    console.log('Rating Leaved ', value);
  }
}
