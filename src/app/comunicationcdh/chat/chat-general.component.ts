import { Component, OnInit, ApplicationModule} from '@angular/core';
import { Contact } from './contact';
import { Mensaje } from './mensaje';
declare var $:any;

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
        this.contact1 = new Contact(1, 'Nick Jones', 'assets/imagenes/contactos/nick.png', true, true, 'hola', nick, '9:12 pm', 1);
        this.contact2 = new Contact(2, 'Eva Moor', 'assets/imagenes/contactos/eva.png', false, false, 'hola',nick, '9:12 pm', 1);
        this.mensajes = [];
        //mensajes de chat
        var nick = [
            new Mensaje(1, '9:10 am', 'hola querida tanto tiempo que no hablamos como estas?', 'other', false),
            new Mensaje(2, '9:13 am', 'feliz, te cuento que me fui de viaje', 'you', true),
            new Mensaje(3, '9:19 am', 'que bueno me alegro por ti y como la pasaste en tu viaje ', 'other', false),
            new Mensaje(4, '9:31 am', 'muy bien te cuento que conoci a alguien, se llama edwar', 'you', true),
            new Mensaje(5, '9:32 am', 'me encanta!!!!!!', 'you', true),
            new Mensaje(6, '9:45 am', 'me alegro por ti ya era hora que encuentres a tu media naranja', 'other', false),
            new Mensaje(7, '9:47 am', 'ya es hora de que seas feliz', 'other', false),
            new Mensaje(8, '9:59 am', 'gracias amiga, te extraño quiero contarte muchas cosas', 'you', true),
            new Mensaje(9, '9:59 am', 'cuando podriamos vernos?', 'other', false),
            new Mensaje(10, '10:02 am', 'quisieras ir a cenar manana y me cuentas todo', 'other', false),
            new Mensaje(11, '11:10 am', 'si me parece perfecto.mañana por la noche tendre tiempo', 'you', true),

        ];
        var eva = [
            new Mensaje(1, '9:10 am', 'hola como estas?', 'other', false),
            new Mensaje(2, '9:13 am', 'bien y tu', 'you', true),
            new Mensaje(3, '9:19 am', 'queria preguntarte que dejo de tarea el licen el viernes', 'other', false),
            new Mensaje(4, '9:31 am', 'mmmmmm no dejo tarea solo avanzamos el tema y nos dejo libres', 'you', true),
            new Mensaje(5, '9:32 am', 'donde te fuiste? xq no viniste ala clase', 'you', true),
            new Mensaje(6, '9:45 am', 'me fui a una fiesta. estaba buena', 'other', false),
            new Mensaje(7, '9:47 am', 'habia muchos chicos', 'other', false),
            new Mensaje(8, '9:59 am', 'uuuuuu porque no me dijiste para ir', 'you', true),
            new Mensaje(9, '9:59 am', 'pense que necesitabas ponerte al dia con las clases como te fuiste de viaje ', 'other', false),
            new Mensaje(10, '10:02 am', 'a la siguiente te aviso', 'other', false),
            new Mensaje(11, '11:10 am', 'bueno..... mañana nos vemos en la clase', 'you', true),
        ];
        var jack = [
            new Mensaje(1, '9:10 am', 'holaaaaaaaaaaaa', 'other', false),
            new Mensaje(2, '9:13 am', 'holis', 'you', true),
            new Mensaje(3, '9:19 am', 'donde estas? ', 'other', false),
            new Mensaje(4, '9:31 am', 'llegando xq no me esperaron para salir juntos', 'you', true),
            new Mensaje(5, '9:32 am', 'perdon, como no llegabas pensamos que ya saliste para alla', 'you', true),
            new Mensaje(6, '9:45 am', 'no pude salir rapido mi madre me hizo limpiar la cocina antes', 'other', false),
            new Mensaje(7, '9:47 am', 'y no pude salir deprisa', 'other', false),
            new Mensaje(8, '9:59 am', 'esta bien apresurate, nos vemos alla', 'you', true),
            new Mensaje(9, '9:59 am', 'ok', 'other', false),
            
        ];
        var lee = [
            new Mensaje(1, '9:10 am', 'hola princesa?', 'other', false),
            new Mensaje(2, '9:13 am', 'hola bebe', 'you', true),
            new Mensaje(3, '9:19 am', 'te cuento que vendre a verte en diciembre', 'other', false),
            new Mensaje(4, '9:31 am', 'enserio!!!!! que felicidad no lo puedo creer', 'you', true),
            new Mensaje(5, '9:32 am', 'tengo que mostrarte lo mejor de mi pais', 'you', true),
            new Mensaje(6, '9:45 am', 'estoy ansioso por venir princesa', 'other', false),
            new Mensaje(7, '9:47 am', 'me encantara bolivia y cuentame como esta tu mama y tu hermana?', 'other', false),
            new Mensaje(8, '9:59 am', 'estan bien, les dare la buena noticia', 'you', true),
            new Mensaje(9, '9:59 am', 'aun no les digas porfavor quiero que sea una sorpresa mi llegada', 'other', false),
            new Mensaje(10, '10:02 am', 'traere muchos regalos', 'other', false),
            new Mensaje(11, '11:10 am', 'ya quiero que vengas', 'you', true),
        ];
        var alan = [
            new Mensaje(1, '9:10 am', 'hola como estas?', 'other', false),
            new Mensaje(2, '9:13 am', 'bien y tu', 'you', true),
            new Mensaje(3, '9:19 am', 'bien, te ves hermosa en tu foto de perfil', 'other', false),
            new Mensaje(4, '9:31 am', 'muchas gracias', 'you', true),
            new Mensaje(6, '9:45 am', 'qusiera conocerte mas, soy el nuevo vesino del barrio', 'other', false),
            new Mensaje(7, '9:47 am', 'te gustaria salir al cine el sabado?', 'other', false),
            new Mensaje(8, '9:59 am', 'mmmmmmm no gracias la verdad no salgo mucho', 'you', true),
            new Mensaje(9, '9:59 am', 'pero solo saldriamos a ver una pelicula', 'other', false),
            new Mensaje(10, '10:02 am', 'es para conocernos mejor y ser buenos amigos', 'other', false),
            new Mensaje(11, '11:10 am', 'no gracias en otra ocacion', 'you', true),
        ];
        var kate = [
            new Mensaje(1, '9:10 am', 'amiga donde estas?', 'other', false),
            new Mensaje(2, '9:13 am', 'voy llegando nena ', 'you', true),
            new Mensaje(3, '9:19 am', 'el licen ya llego y cerro la puerta no recojera tu trabajo corre', 'other', false),
            new Mensaje(4, '9:31 am', 'que dijo ya paso mi nombre', 'you', true),
            new Mensaje(5, '9:32 am', 'que le dire.....?', 'you', true),
            new Mensaje(6, '9:45 am', 'no aun no paso tu nombre', 'other', false),
            new Mensaje(7, '9:47 am', 'corre!!!!!', 'other', false),

        
        ];
        var jackson = [
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
        //contactos y activos
        this.contactos = [
            new Contact(1, 'Nick Jones', 'assets/imagenes/contactos/nick.png', true, true, 'hola', nick, '9:12 pm', 1),
            new Contact(2, 'Eva Moor', 'assets/imagenes/contactos/eva.png', false, false, 'hola' , eva, '9:12 pm', 1),
            new Contact(3, 'Jack Williams', 'assets/imagenes/contactos/lee.png', true, false, 'hola',  jack, '9:12 pm', 1),
            new Contact(4, 'Lee Wong', 'assets/imagenes/contactos/nick.png', true, true, 'hola',  lee, '9:12 pm', 1),
            new Contact(5, 'Alan Thompson', 'assets/imagenes/contactos/alan.png', true, false, 'hola',  alan, '9:12 pm', 1),
            new Contact(6, 'Kate Martinez', 'assets/imagenes/contactos/kate.png', false, false, 'hola' ,kate, '9:12 pm', 1),
            new Contact(7, 'Jackson Moor', 'assets/imagenes/contactos/jack.png', false, false, 'hola' ,jackson, '9:12 pm', 1),
            new Contact(8, 'Nick Jones', 'assets/imagenes/contactos/nick.png', true, true, 'hola', nick, '9:12 pm', 1),
            new Contact(9, 'Eva Moor', 'assets/imagenes/contactos/eva.png', false, false, 'hola' ,eva, '9:12 pm', 1),
            new Contact(10, 'Jack Williams', 'assets/imagenes/contactos/lee.png', true, false, 'hola',  jack, '9:12 pm', 1),
            new Contact(11, 'Lee Wong', 'assets/imagenes/contactos/nick.png', true, true, 'hola',  lee, '9:12 pm', 1),
            new Contact(12, 'Alan Thompson', 'assets/imagenes/contactos/alan.png', true, false, 'hola',  alan, '9:12 pm', 1),
            new Contact(13, 'Kate Martinez', 'assets/imagenes/contactos/kate.png', false, false, 'hola' ,kate, '9:12 pm', 1),
            new Contact(14, 'Jackson Moor', 'assets/imagenes/contactos/jack.png', false, false, 'hola' ,jackson, '9:12 pm', 1),

        ];
        this.active = [
            new Contact(1, 'Nick Jones', 'assets/imagenes/contactos/nick.png', true, true, 'hola', nick, '9:12 pm', 1),
            new Contact(2, 'Eva Moor', 'assets/imagenes/contactos/eva.png', true, true,'hola', eva, '9:12 pm', 1),
            new Contact(3, 'Jack Williams', 'assets/imagenes/contactos/lee.png', true, false, 'hola', jack, '9:12 pm', 1),
            new Contact(4, 'Lee Wong', 'assets/imagenes/contactos/nick.png', true, false, 'hola', lee, '9:12 pm', 1),
            new Contact(5, 'Alan Thompson', 'assets/imagenes/contactos/alan.png', true, false, 'hola', alan, '9:12 pm', 1),
            new Contact(6, 'Kate Martinez', 'assets/imagenes/contactos/kate.png', true, false,'hola', kate, '9:12 pm', 1),
            new Contact(7, 'Jackson Moor', 'assets/imagenes/contactos/jack.png', true, false,'hola', jackson, '9:12 pm', 1),

        ];
        
    }


    ngOnInit(){
        var nick = [
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
        console.log("");

    }
    public myFunction(id,foto,mensajes){
        console.log(mensajes);
        $("span").remove('#'+id);
        $("#foto-perfil").attr("src",foto);
        //$(location).attr('href',"mensaje");
        this.mensajes = mensajes;
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