import { ChangeDetectionStrategy, Component, signal } from "@angular/core";


@Component({
  templateUrl: './hero-page.component.html',
  styles: `
    button {
      padding: 5px;
      margin: 5px 10px;
      width: 75px;
    }
  `,
  // Para especificar que no quieres utilizar ZoneJS en este componente, mejorando su performance
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeroPageComponent {

  name = signal("Ironman");
  age = signal(45);

  getHeroDescription(): string {
    return `${ this.name() } - ${ this.age() }`;
  }

  changeHero() {
    this.name.update(currentValue => currentValue = "Spiderman");
    this.age.update(currentValue => currentValue = 22);
  }

  resetForm() {
    this.name.set("Ironman");
    this.age.set(45);
  }

  changeAge() {
    this.age.update(currentValue => currentValue = 60);
  }


  // constructor(name: string, age: number) {
  //   this.name = name;
  //   this.age = age;
  // }
}


