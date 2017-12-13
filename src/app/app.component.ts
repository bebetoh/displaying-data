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
  hero: Hero;
  heroes: Hero[];
  isUnchanged : boolean;
  currentHero: Hero;


  constructor() {
    this.title = 'Tour of Heroes';
    //this.myHero = 'Windstorm';
    /*
    this.heroes = [new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado'),
    new Hero(25, 'Teste')];
    this.myHero = this.heroes[1]; */
    this.heroes = Hero.heroes.map(hero => hero.clone());
    this.isUnchanged = false;
  }

  ngOnInit() {


    this.resetHeroes();
    this.setCurrentClasses();
    this.setCurrentStyles();

    this.myHero = this.currentHero;
  }




  getVal(){
    return 8;
  }

  ngAfterViewInit() {
    // Detect effects of NgForTrackBy
    trackChanges(this.heroesNoTrackBy,   () => this.heroesNoTrackByCount++);
    trackChanges(this.heroesWithTrackBy, () => this.heroesWithTrackByCount++);
  }

  @ViewChildren('noTrackBy')   heroesNoTrackBy:   QueryList<ElementRef>;
  @ViewChildren('withTrackBy') heroesWithTrackBy: QueryList<ElementRef>;

  alert(msg?: string)      { window.alert(msg); }
  callFax(value: string)   { this.alert(`Faxing ${value} ...`); }
  callPhone(value: string) { this.alert(`Calling ${value} ...`); }





   fontSizePx = 16;

  testex = 20;


  isSpecial = true;
  canSave = true;

  // trackBy change counting
  heroesNoTrackByCount   = 0;
  heroesWithTrackByCount = 0;
  heroesWithTrackByCountReset = 0;

  heroIdIncrement = 1;




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



  setUppercaseName(name: string) {
      this.currentHero.name = name.toUpperCase();
  }

  // updates with fresh set of cloned heroes
  resetHeroes() {
    this.heroes = Hero.heroes.map(hero => hero.clone());
    this.currentHero = this.heroes[0];
    this.hero = this.currentHero;
    this.heroesWithTrackByCountReset = 0;
  }

  changeIds() {
    this.resetHeroes();
    this.heroes.forEach(h => h.id += 10 * this.heroIdIncrement++);
    this.heroesWithTrackByCountReset = -1;
  }

  clearTrackByCounts() {
    const trackByCountReset = this.heroesWithTrackByCountReset;
    this.resetHeroes();
    this.heroesNoTrackByCount = -1;
    this.heroesWithTrackByCount = trackByCountReset;
    this.heroIdIncrement = 1;
  }

  trackByHeroes(index: number, hero: Hero): number { return hero.id; }

  trackById(index: number, item: any): number { return item['id']; }


  onSave(event: KeyboardEvent) {
    let evtMsg = event ? ' Event target is ' + (<HTMLElement>event.target).textContent : '';
    this.alert('Saved.' + evtMsg);
    if (event) { event.stopPropagation(); }
  }


}


// helper to track changes to viewChildren
//trackChanges(this.heroesNoTrackBy,   () => this.heroesNoTrackByCount++);
function trackChanges(views: QueryList<ElementRef>, changed: () => void) {
  let oldRefs = views.toArray();
  views.changes.subscribe((changes: QueryList<ElementRef>) => {
    const changedRefs = changes.toArray();
    // Check if every changed Element is the same as old and in the same position
    const isSame = oldRefs.every((v, i) => v.nativeElement === changedRefs[i].nativeElement);
    if (!isSame) {
      oldRefs = changedRefs;
      // wait a tick because called after views are constructed
      setTimeout(changed, 0);
    }
  });
}

