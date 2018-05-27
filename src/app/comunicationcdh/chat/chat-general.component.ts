import { Component, OnInit} from '@angular/core';
import { Contact } from '../list-chat/contact';
declare var jQuery:any;
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

    constructor(){
        this.titulo = 'Chat-general';
        
    }


    ngOnInit(){
        console.log(this.contact);

    }
    
}