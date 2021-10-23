import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Pelicula[];  
  public favorita!: Pelicula;

  constructor(
    private _peliculaService: PeliculaService
  ) { 
    this.titulo = "Componente de Películas";
    this.peliculas = this._peliculaService.getPeliculas();
  }

  ngOnInit() {
    console.log(this.peliculas);
    console.log("Componente inciiado");
    console.log(this._peliculaService.holaMundo());
  }

  ngDoCheck(): void{

  }


  ngOnDestroy(): void{

  }

  mostrarFavorita(event: any){
    this.favorita = event.pelicula;
    }

}
