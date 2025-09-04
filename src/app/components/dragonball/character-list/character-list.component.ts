import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
  // Creamos un input signal requerido, el cual va a recibir la informacion obligatoriamente de los padres
  characters = input.required<Character[]>()

}
