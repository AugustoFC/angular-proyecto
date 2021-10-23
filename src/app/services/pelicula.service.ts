import { Inject, Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula";

@Injectable()
export class PeliculaService{

    public peliculas: Pelicula[];

    constructor(){
        this.peliculas = [
            new Pelicula("Spiderman 4", 2011, "https://cronicaglobal.elespanol.com/uploads/s1/61/11/50/7/main-700b9bff30.jpeg"),
            new Pelicula("Spiderman 2", 2020, "https://cronicaglobal.elespanol.com/uploads/s1/61/11/50/7/main-700b9bff30.jpeg"),
            new Pelicula("Spiderman 3", 2021, "https://upload.wikimedia.org/wikipedia/commons/9/90/Spiderman.JPG"),
            new Pelicula("Spiderman 1", 2021, "https://img.europapress.es/fotoweb/fotonoticia_20190921140058_420.jpg")          
            ];
    }

    holaMundo(){
        return 'Hola mundo desde el servicios angular';
    }

    getPeliculas(){
        return this.peliculas;
        }

    }

