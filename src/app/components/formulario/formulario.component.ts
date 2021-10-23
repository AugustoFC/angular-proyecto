import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public user: any;  
  public campo: string | undefined;

  constructor() { 
    this.user = {
      nombre: '',
      apellidos: '',
      bio: '',
      genero: ''
    }
  }

  ngOnInit(): void {
  }

  onSubmit(){
    alert('extio');
    console.log(this.user);

    }

    HasDadoClick(){
      alert('click');
    }

    hasSalido(){
      alert('sales');
    }

}
