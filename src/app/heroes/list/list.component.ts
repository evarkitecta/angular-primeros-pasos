import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Vilma'];

  // *Para que una variable viva a lo largo de la clase debemos crearla como una propiedad de la clase, no como una variable dentro de un método.
  // * 2 formas de crear una variable.
  // public deletedHero?: string = '';
  public deletedHero?: string;

  removeLastHero(): void {
    // El scope de la siguiente variable es toda la clase
    this.deletedHero = this.heroNames.pop();
    // *El scope de esta variable es sólo dentro de este método
    // const deletedHero = this.heroNames.pop();
  }

  resetListHero(): void {
    this.heroNames = ['Spiderman', 'Ironman', 'Hulk', 'Vilma'];
  }

}
