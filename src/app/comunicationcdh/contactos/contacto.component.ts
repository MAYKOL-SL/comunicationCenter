import { Component, OnInit} from '@angular/core';
import { Contact } from '../list-chat/contact';
import { Mensaje } from '../mensaje/mensaje';
declare var jQuery:any;
declare var $:any;

@Component({
    selector: 'contactos',
    templateUrl: './contacto.component.html',
    styleUrls: ['./contacto.component.css']


})

export class ContactoComponent{
    public titulo: String;
    public contact: Contact;
    public contactos: Array<Contact>;
    public active: Array<Contact>;

    constructor(){
        this.titulo = 'Chat';
        this.contact = new Contact(1, 'Nick Jones', 'assets/imagenes/contactos/nick.png', true, true, 'hola', '9:12 pm', 1);
        this.contactos = [
            new Contact(1, 'Nick Jones', 'assets/imagenes/contactos/nick.png', true, true, 'hola como esta?, hace tiempo que no te veo', '9:12 pm', 1),
            new Contact(2, 'Eva Moor', 'assets/imagenes/contactos/eva.png', false, false,'hola', '9:12 pm', 1),
            new Contact(3, 'Jack Williams', 'assets/imagenes/contactos/lee.png', true, false, 'hola', '9:12 pm', 1),
            new Contact(4, 'Lee Wong', 'assets/imagenes/contactos/nick.png', true, true, 'hola', '9:12 pm', 1),
            new Contact(5, 'Alan Thompson', 'assets/imagenes/contactos/alan.png', true, false, 'hola', '9:12 pm', 1),
            new Contact(6, 'Kate Martinez', 'assets/imagenes/contactos/kate.png', false, false,'hola', '9:12 pm', 1),
            new Contact(7, 'Jackson Moor', 'assets/imagenes/contactos/jack.png', false, false,'hola', '9:12 pm', 1),
            new Contact(8, 'Nick Jones', 'assets/imagenes/contactos/nick.png', true, true, 'hola como esta?, hace tiempo que no te veo', '9:12 pm', 1),
            new Contact(9, 'Eva Moor', 'assets/imagenes/contactos/eva.png', false, false,'hola', '9:12 pm', 1),
            new Contact(10, 'Jack Williams', 'assets/imagenes/contactos/lee.png', true, false, 'hola', '9:12 pm', 1),
            new Contact(11, 'Lee Wong', 'assets/imagenes/contactos/nick.png', true, true, 'hola', '9:12 pm', 1),
            new Contact(12, 'Alan Thompson', 'assets/imagenes/contactos/alan.png', true, false, 'hola', '9:12 pm', 1),
            new Contact(13, 'Kate Martinez', 'assets/imagenes/contactos/kate.png', false, false,'hola', '9:12 pm', 1),
            new Contact(14, 'Jackson Moor', 'assets/imagenes/contactos/jack.png', false, false,'hola', '9:12 pm', 1),

        ];
        this.active = [
            new Contact(1, 'Nick Jones', 'assets/imagenes/contactos/nick.png', true, true, 'hola como esta?, hace tiempo que no te veo', '9:12 pm', 1),
            new Contact(2, 'Eva Moor', 'assets/imagenes/contactos/eva.png', true, true,'hola', '9:12 pm', 1),
            new Contact(3, 'Jack Williams', 'assets/imagenes/contactos/lee.png', true, false, 'hola', '9:12 pm', 1),
            new Contact(4, 'Lee Wong', 'assets/imagenes/contactos/nick.png', true, false, 'hola', '9:12 pm', 1),
            new Contact(5, 'Alan Thompson', 'assets/imagenes/contactos/alan.png', true, false, 'hola', '9:12 pm', 1),
            new Contact(6, 'Kate Martinez', 'assets/imagenes/contactos/kate.png', true, false,'hola', '9:12 pm', 1),
            new Contact(7, 'Jackson Moor', 'assets/imagenes/contactos/jack.png', true, false,'hola', '9:12 pm', 1),

        ];
    }


    ngOnInit(){
        console.log(this.contact);

    }

    public myFunction(id){
        $("span").remove('#'+id);
        $(location).attr('href',"mensaje");
        console.log('#'+id);
    }
    
}