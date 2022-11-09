import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [BrowserModule, MatButtonModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
