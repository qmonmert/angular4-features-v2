import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EventManagerComponent } from './event-manager/event-manager.component';
import { NgTemplateOutletComponent } from './ng-template-outlet/ng-template-outlet.component';

@NgModule({
  declarations: [
    AppComponent,
    EventManagerComponent,
    NgTemplateOutletComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
