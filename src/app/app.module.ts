import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { SizerComponent } from './sizer/sizer.component';
import { BigHeroDetailComponent, HeroDetailComponent } from './hero/hero-detail.component';

import { heroSwitchComponents }   from './hero/hero-switch.components';

import { HeroFormComponent }  from './hero/hero-form.component';



@NgModule({
  declarations: [
    AppComponent,
    SizerComponent,
    BigHeroDetailComponent,
    HeroDetailComponent,
    heroSwitchComponents,
    HeroFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
