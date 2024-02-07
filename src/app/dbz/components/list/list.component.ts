import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      name: "Trunk",
      power: 10
    }
  ];

  @Output()
  // public deletedID = new EventEmitter<number>();
  public deletedID: EventEmitter<string> = new EventEmitter();
  onDeleteCharacter(id?: string): void {
    //TODO emitir el id del personaje que se va a borrar
    if (!id) return
    this.deletedID.emit(id);
    console.log({ id });
  }

}
