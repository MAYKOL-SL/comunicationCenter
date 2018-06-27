import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';

@Component({
  selector: 'dh-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {
  
  comentForm: FormGroup;
   
    coment = [
       { id: "1", comentario: 'este video es genial veanlo'},
       { id: "2", comentario: 'feliz :)'},
       { id: "3", comentario: 'en la vida pudes ganar o perder'}
     ];
 
  model:any = {};
  model2:any = {};
  
  constructor() { }

  ngOnInit() {
      this.comentForm = new FormGroup({
         'id': new FormControl(null),
         'comentario': new FormControl(null),
      });
  }

  addComentario():void {
    /*console.log("esto es lo ingresado",this.model);*/
    /*let idcoment = 'id:'+" "+1;*/
    this.comentForm.value.id = this.coment.length + 1;
    this.comentForm.value.comentario = this.model.comentario;
    this.coment.push(this.comentForm.value);
    /*console.log("lo que se envia de la vista :", this.model.comentario);
    console.log(this.coment);*/
  }
 
}
