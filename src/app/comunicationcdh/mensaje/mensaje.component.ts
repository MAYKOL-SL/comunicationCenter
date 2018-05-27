import { Component, OnInit} from '@angular/core';
import { Mensaje } from './mensaje';
import { Contact } from '../list-chat/contact';
declare var $:any;

@Component({
    selector: 'mensaje',
    templateUrl: './mensaje.component.html',
    styleUrls: ['./mensaje.component.css']


})

export class MensajeComponent{
    public titulo: String;
    public contact1: Contact;
    public contact2: Contact;
    //public mensajes: Array<Mensaje>;

    constructor(){
        this.contact1 = new Contact(1, 'Nick Jones', 'assets/imagenes/contactos/nick.png', true, true, 'hola', '9:12 pm', 1);
        this.contact2 = new Contact(2, 'Eva Moor', 'assets/imagenes/contactos/eva.png', false, false,'hola', '9:12 pm', 1);
        this.titulo = 'Mensajeria';
        $("#addClass").click(function () {
            $('#sidebar_secondary').addClass('popup-box-on');
              });

              $("#removeClass").click(function () {
                $('#sidebar_secondary').removeClass('popup-box-on');
                  });
    }


    ngOnInit(){
        //console.log(this.mensajes);

    }
}