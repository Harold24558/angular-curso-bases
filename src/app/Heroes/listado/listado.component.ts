import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  Heroes: String[] = ['Spiderman','Hulk', 'Thor', 'Ironman', 'Batman']
  HeroeBorrado: String = ''

  BorrarHeroe(){
    this.HeroeBorrado = this.Heroes.shift() || '' 
  }

}
