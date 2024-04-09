import { Component, Input, EventEmitter, output, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: false,
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunk',
      power: 10,
    },
  ];

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  onDeletedCharacter(id?: string): void {
    if (!id) return;
    this.onDelete.emit(id);
  }
}
