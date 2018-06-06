import { Component, OnInit, ApplicationModule} from '@angular/core';
import { Contact } from '../list-chat/contact';
import { Mensaje } from '../mensaje/mensaje';
declare var $:any;
declare var app: any;

@Component({
    selector: 'chat-general',
    templateUrl: './chat-general.component.html',
    styleUrls: ['./chat-general.component.css']


})

export class ChatGeneralComponent{
    public titulo: String;
    public contact: Contact;
    public contactos: Array<Contact>;
    public active: Array<Contact>;
    public contact1: Contact;
    public contact2: Contact;
    public mensajes: Array<Mensaje>;
    public aux : Mensaje;


    constructor(){
        this.titulo = 'Chat-general';
        this.contact1 = new Contact(1, 'Nick Jones', 'assets/imagenes/contactos/nick.png', true, true, 'hola', '9:12 pm', 1);
        this.contact2 = new Contact(2, 'Eva Moor', 'assets/imagenes/contactos/eva.png', false, false,'hola', '9:12 pm', 1);
        this.mensajes = [
            new Mensaje(1, '9:10 am', 'hola como estas?', 'other', false),
            new Mensaje(2, '9:13 am', 'feliz, te cuento que estoy estudiando', 'you', true),
            new Mensaje(3, '9:19 am', 'que bueno me alegro por tu familia debe estar orgulloso de ti', 'other', false),
            new Mensaje(4, '9:31 am', 'me dijeron que viajaste y nadie sabia de ti', 'you', true),
            new Mensaje(5, '9:32 am', 'donde te metiste?', 'you', true),
            new Mensaje(6, '9:45 am', 'estuve conociendo un poco el mundo', 'other', false),
            new Mensaje(7, '9:47 am', 'fui a europa luego a estados unidos pero volvi por que extrane bolivia', 'other', false),
            new Mensaje(8, '9:59 am', 'claro pues bolivia es un bonito lugar para vivir', 'you', true),
            new Mensaje(9, '9:59 am', 'si extrane la comida de cochabamba', 'other', false),
            new Mensaje(10, '10:02 am', 'quisieras ir a cenar manana y hablamos de los viejos tiempos', 'other', false),
            new Mensaje(11, '11:10 am', 'manana por la noche tendre tiempo', 'you', true),

        ];
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
        
        /*$(function() {
            $('#envoi').on('click', function(){
                var message_text = $('#message-text').val();
                console.log(this.mensajes);
                if(message_text !== ''){
                    this.aux = new Mensaje(1, '9:10 am', message_text, 'other', true);
                    console.log(this.aux);
                    this.mensajes = [this.aux];
                    this.mensajes.push(this.aux);
                    console.log(this.mensajes);
                    $('#message-text').val('');

                }
            });
        });*/

    }
    public myFunction(id,foto){
        console.log(foto);
        $("span").remove('#'+id);
        $("#foto-perfil").attr("src",foto);
        //$(location).attr('href',"mensaje");
        console.log('#'+id);
    }
    public myFunctionMessage(mensajes){
        console.log(mensajes);
        var message_text = $('#message-text').val();
        console.log(message_text);
        if(message_text !== ''){
            this.aux = new Mensaje(1, '9:10 am', message_text, 'other', true);
            mensajes.push(this.aux);
            $('#message-text').val(' ')
        }
        
        //$(location).attr('href',"mensaje");
    }
}