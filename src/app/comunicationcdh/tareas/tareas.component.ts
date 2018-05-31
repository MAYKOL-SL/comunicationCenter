import { Component, OnInit } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'tareas',
    templateUrl: './tareas.component.html',
    styleUrls: ['./tareas.component.css']

})

export class TareasComponent {
    public tareas: any[];
    public titulo: String;

    constructor() {
        this.titulo = 'To do list';
    }
    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        console.log('se ha cargado el componente');
    }
}
