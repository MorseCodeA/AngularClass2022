import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .fifthFontColor {
    color: white
  }
  `]
})
export class AppComponent {
  displayDetails = false;
  buttonClickTimes = [];
  changeColor = false;

  onDisplayDetails() {
    this.displayDetails = true;
    this.buttonClickTimes.push(Date.now());
  }
}
