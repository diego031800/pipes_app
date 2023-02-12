import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  // i18nSelect
  nombre: string = 'Jose';
  genero: string = 'M';

  invitacionMapa = {
    M: 'invitarlo',
    F: 'invitarla',
  };

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Jose', 'Marco'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  cambiarPersona() {
    this.nombre = 'Stefany';
    this.genero = 'F';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValuePipe
  persona = {
    nombre: 'Jose',
    edad: 22,
    direccion: 'Paris, Francia',
  };

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Batman',
      vuela: false,
    },
  ];

  // Async pipe
  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });

}
