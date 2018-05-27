import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tareas',
    templateUrl: './tareas.component.html',
    styleUrls: ['./tareas.component.css']

})

export class TareasComponent{
    public tareas: any[];
    public titulo: String;

    constructor(){
        this.titulo = 'To do list';
    }

    ngOnInit(){
        console.log('se ha cargado el componente');
    }
    
}