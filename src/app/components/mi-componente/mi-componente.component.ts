import { Component } from "@angular/core";

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html',
    
    
})

export class MiComponente {

    public titulo: string;
    public comentario: string;
    public year: number;

    constructor() {
        this.titulo = "Titulo 1";
        this.comentario = "Comentario 10000";
        this.year = 2021;


        console.log('Mi componente cargado');
        console.log(this.titulo, this.comentario, this.year);
    }
}
