import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Aldo'];
  heroeBorrado: string = '';

/*   constructor() { 
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  } */

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  } 
}


