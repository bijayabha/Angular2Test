import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ItemListComponent } from './components/itemList.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ItemListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
