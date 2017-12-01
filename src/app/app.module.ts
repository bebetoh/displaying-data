import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { SizerComponent } from './sizer/sizer.component';
import { BigHeroDetailComponent, HeroDetailComponent } from './hero/hero-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    SizerComponent,
    BigHeroDetailComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
