import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

// Creamos la interfaz para especificar el tipo de dato que contendrá el array de characters
interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-super-page-component.html',
  // Para especificar que no quieres utilizar ZoneJS en este componente, mejorando su performance
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'dragonball-super',
})

export class DragonballSuperPageComponent {

  // Creamos dos señales que corresponderan a dos inputs del formulario para añadir nuevos personajes
  name = signal('');
  power = signal(0);

  // Indicamos que characters es una señal de arrays de tipo Character
  characters = signal(<Character[]>[
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 9000 },
  ]);

  // Funcion que retorna un objeto con la clase text-danger de bootstrap
  // poweredClass = computed(() => {
  //   return {
  //     'text-danger': true,
  //   }
  // });

  addCharacter(): void {
    // Si no tenemos todos los valores de los input, no hacemos nada
    if (!this.name() || !this.power() || this.power() < 0) {
      return;
    }

    // Obtenemos el último id de los Characters
    const lastId = Math.max(0, ...this.characters().map(c => c.id));
    // Creamos un nuevo Character
    const character: Character = {
      id: lastId,
      name: this.name(),
      power: this.power(),
    }
    // Incluimos el nuevo Character al WritableSignal <Character[]>
    this.characters.update(current => [...current, character]);
    // Reiniciamos los valores de las señales para que se vacien los values de los inputs
    this.resetFields();
  };

  // Función para resetear los cmapos al añadir un nuevo personahe
  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
