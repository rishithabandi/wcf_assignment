import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import {AppComponent} from './app.component';
import {FeatureFormComponent} from './feature-form/feature-form.component';
import {FeatureListComponent} from './feature-list/feature-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FeatureFormComponent,
    FeatureListComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
