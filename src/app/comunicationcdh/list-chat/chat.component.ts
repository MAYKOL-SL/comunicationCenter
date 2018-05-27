import { Component, OnInit} from '@angular/core';
import { Contact } from './contact';
declare var jQuery:any;
declare var $:any;

@Component({
    selector: 'chat-desk',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']


})

export class ChatComponent{
    public titulo: String;
    public contact: Contact;
    public contactos: Array<Contact>;

    constructor(){
        this.titulo = 'Chat';
        this.contact = new Contact(1, 'Nick Jones', 'assets/imagenes/contactos/nick.png', true, true, 'hola', '9:12 pm', 1);
        this.contactos = [
            new Contact(1, 'Nick Jones', 'assets/imagenes/contactos/nick.png', true, false, 'hola como esta?, hace tiempo que no te veo', '9:12 pm', 1),
            new Contact(2, 'Eva Moor', 'assets/imagenes/contactos/eva.png', false, true, 'hola', '9:12 pm', 1),
            new Contact(3, 'Jack Williams', 'assets/imagenes/contactos/lee.png', true, false, 'hola', '9:12 pm', 1),
            new Contact(4, 'Lee Wong', 'assets/imagenes/contactos/nick.png', true, false, 'hola', '9:12 pm', 1),
            new Contact(5, 'Alan Thompson', 'assets/imagenes/contactos/alan.png', true, false, 'hola', '9:12 pm', 1),
            new Contact(6, 'Kate Martinez', 'assets/imagenes/contactos/kate.png', true, false, 'hola', '9:12 pm', 1),
            new Contact(7, 'Jackson Moor', 'assets/imagenes/contactos/jack.png', true, false, 'hola', '9:12 pm', 1),

        ];
        //accion de presionar en un contacto
        /*$(document).ready(function(){
            $("li").click(function(){
              $(".bad").remove();
            });
          });*/
    }


    ngOnInit(){
        console.log(this.contact);

    }

    public myFunction(id){
        $("span").remove('#'+id);
        console.log('#'+id);
    }
    
}