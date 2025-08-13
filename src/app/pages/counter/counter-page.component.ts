import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter-page.component.html',
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
export class CounterPageComponent {

  counter = 10;
  counterSignal = signal(10);

  constructor(){
    setInterval(() => {
      console.log('Tick');
      // this.counter += 1;
      this.counterSignal.update((value) => value + 1);
    }, 2000);
  }

  increaseBy(value: number) {
    this.counter += value;
    // this.counterSignal.set(this.counterSignal() + value);
    this.counterSignal.update(currentValue => currentValue + value);
  }

  decrementBy(value: number) {
    this.counter -= value;
    this.counterSignal.update(currentValue => currentValue - value);
  }

  resetCounter(){
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
