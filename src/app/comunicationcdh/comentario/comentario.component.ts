import { Component, OnInit } from '@angular/core';
import { Coment } from '../../shared/model/coment';
import { Comentario} from '../comentario/comentario';
import {Respuesta} from '../comentario/respuesta';
declare var $:any;

@Component({
  selector: 'dh-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

   coment1: Coment;
   coment2: Coment;
   coment3: Coment;
   coment4: Coment;
   coment5: Coment;
   coment6: Coment;

   public comentario: Comentario;
   public comentarios: Array<Comentario>;
   public respuesta: Respuesta;
   public respuestas: Array<Respuesta>;

   public mensaje: String;

   listComentarios: Coment[];
   
  constructor(){
    this.respuestas = [
      new Respuesta(1, 'Nick Jones', 'assets/imagenes/contactos/nick.png', true, true, 'hola', '9:12 pm', 1,),
    ];
    this.comentarios = [
      new Comentario(1, 'Nick Jones', 'assets/imagenes/contactos/nick.png', true, true, 'hola', this.respuestas, '9:12 pm', 1),
    ];

  }

  ngOnInit() 
  {
    console.log(this.respuestas, this.comentarios);
    this.coment1 = {title: "comentario de usuario1", date: "12-3-2018", comentario: "hola a como estan todos"};
    this.coment2 = {title: "comentario de usuario2", date: "12-4-2018", comentario: "hola como estan todos 2"};
    this.coment3 = {title: "comentario de usuario3", date: "12-4-2018", comentario: "hola como estan todos 3"};
    this.coment4 = {title: "comentario de usuario4", date: "12-4-2018", comentario: "hola como estan todos 4"};
    this.coment5 = {title: "comentario de usuario5", date: "12-4-2018", comentario: "hola como estan todos 5"};
    this.coment6 = {title: "comentario de usuario6", date: "12-4-2018", comentario: "hola como estan yo les digo que la informacion corecta es ta en dh por compartan todos la pagina 6"}; 

    this.listComentarios = [this.coment1,this.coment2,this.coment3,this.coment4,this.coment5,this.coment6];
    }

  public myFunctionComentar(comentarios){
    console.log(comentarios);
    var comentario = $('.message-input').val();
    console.log(comentario);
    if(comentario !== ''){
        this.comentario = new Comentario(1, 'Nick Jones', 'assets/imagenes/contactos/nick.png', true, true, comentario, this.respuestas, '9:12 pm', 1);
        comentarios.push(this.comentario);
        $('.message-inut').val(' ');
    }
  }
}
