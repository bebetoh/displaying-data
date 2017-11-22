import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core'
import { Hero } from './hero/hero';

@Component({
  selector: 'my-app',
  templateUrl: '/app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title: string;
  myHero: Hero;
  heroes: Hero[];
  isUnchanged : boolean;

  constructor() {
    this.title = 'Tour of Heroes';
    //this.myHero = 'Windstorm';
    this.heroes = [new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado'),
    new Hero(25, 'Teste')];
    this.myHero = this.heroes[1];
    this.isUnchanged = false;
  }
  getVal(){
    return 8;
  }
  fontSizePx = 16;

  testex = 20;


  isSpecial = true;
  canSave = true;


  currentClasses: {};
  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses =  {
      'saveable': this.canSave,
      'modified': !this.isUnchanged,
      'special' :  this.isSpecial
    };
  }

  currentStyles: {};
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style':  this.canSave      ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
      'font-size':   this.isSpecial    ? '24px'   : '12px'
    };
  }

  currentHero= new Hero(20, '');

  setUppercaseName(name: string) {
      this.currentHero.name = name.toUpperCase();
  }

}
