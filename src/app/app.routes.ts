import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';

export const routes: Routes = [

  {
    path: '',
    component: CounterPageComponent
  },

  {
    path: 'hero',
    component: HeroPageComponent
  },

  {
    // Ruta para redirigir en caso de que accedan a algun path que no exista
    path: '**',
    redirectTo: ''
  }
];
