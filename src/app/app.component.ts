import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cookie_increment = 1;
  cookie_counter = 0;

  message = '';

  public onClick() {
    this.cookie_counter += this.cookie_increment;

    if (this.cookie_counter >= 10) {
      this.cookie_increment = 5;
    }

    if (this.cookie_counter >= 50) {
      this.cookie_increment = 10;
    }

    if (this.cookie_counter == 100) {
      this.cookie_increment = 10;

      this.message = 'Cookie Party!';
    }
  }

  public onReset() {
    this.cookie_increment = 1;
    this.cookie_counter = 0;
    this.message = '';
  }
}
