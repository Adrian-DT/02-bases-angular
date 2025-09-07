import { DragonBallService } from './../../services/dragonball.service';
import { ChangeDetectionStrategy, Component, inject, signal } from "@angular/core";
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { Character } from '../../interfaces/character.interface';
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";

@Component({
  templateUrl: './dragonball-super-page-component.html',
  // Para especificar que no quieres utilizar ZoneJS en este componente, mejorando su performance
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
})

export class DragonballSuperPageComponent {
  // Injección tradicional de dependencia mediante el constructor
  // constructor(
    // public dragonBallService: DragonBallService
  // ){ }
  // Injectamos el servicio de DragonBallService para utilizarlo en la clase, manera recomendada actualmente
  public dragonBallService = inject(DragonBallService);

}
