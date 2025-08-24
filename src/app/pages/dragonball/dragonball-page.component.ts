import { ChangeDetectionStrategy, Component, computed, signal } from "@angular/core";

// Creamos la interfaz para especificar el tipo de dato que contendrá el array de characters
interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-page-component.html',
  // Para especificar que no quieres utilizar ZoneJS en este componente, mejorando su performance
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DragonballPageComponent {
  // Indicamos que characters es una señal de arrays de tipo Character
  characters = signal(<Character[]>[
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
    { id: 3, name: 'Piccolo', power: 3000 },
  ]);

}
