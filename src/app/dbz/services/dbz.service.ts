import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
// Cambiamos el nombre de v4 a uuid
import { v4 as uuid } from 'uuid';

// console.log(v4());
console.log(uuid());
@Injectable({ providedIn: 'root' })
export class DbzService {
  constructor() { }

  public characters: Character[] = [
    {
      id: uuid(),
      name: "Krillin",
      power: 1000
    },
    {
      id: uuid(),
      name: "Goku",
      power: 9500
    },
    {
      id: uuid(),
      name: "Vegeta",
      power: 7500
    }
  ];

  addNewCharacter(character: Character): void {
    // console.log("Main Page")
    // console.log(character);
    const newCharacter: Character = { id: uuid(), ...character }
    this.characters.push(newCharacter)
  }

  // onDeleteCharacter(index: number): void {
  //   //Elimina 1 elemento de la posición indicada con index.
  //   this.characters.splice(index, 1)
  // }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id)
  }


}
