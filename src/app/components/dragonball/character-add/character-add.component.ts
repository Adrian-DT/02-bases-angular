import { Component, input, output, signal } from '@angular/core';
import { DragonballPageComponent } from '../../../pages/dragonball/dragonball-page.component';
import type { Character } from '../../../interfaces/character.interface';
import { MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {

  // Creamos dos señales que corresponderan a dos inputs del formulario para añadir nuevos personajes
  name = signal('');
  power = signal(0);

  // Establecemos una propiedad que emitirá un valor de tipo Character
  newCharacter = output<Character>();

  addCharacter(): void {
    // Si no tenemos todos los valores de los input, no hacemos nada
    if (!this.name() || !this.power() || this.power() < 0) {
      return;
    }

    // Obtenemos el último id de los Characters
    // const lastId = Math.max(0, ...this.characters().map(c => c.id));
    // Creamos un nuevo Character
    const character: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    }
    // Incluimos el nuevo Character al WritableSignal <Character[]>
    // this.characters.update(current => [...current, character]);
    // Con emit emitiremos el valor que queremos
    this.newCharacter.emit(character);

    // Reiniciamos los valores de las señales para que se vacien los values de los inputs
    this.resetFields();
  };

  // Función para resetear los cmapos al añadir un nuevo personahe
  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
