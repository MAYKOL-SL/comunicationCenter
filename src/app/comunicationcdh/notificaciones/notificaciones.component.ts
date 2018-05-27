import { Component, OnInit } from '@angular/core';
import { Notification } from './notification';
declare var $:any;

@Component({
    selector: 'notifications',
    templateUrl: './notificaciones.component.html',
    styleUrls: ['./notificaciones.component.css']

})

export class NotifiComponent{
    public titulo: String;
    public notifications: Array<Notification>;

    constructor(){
        this.titulo = 'Notifications';
        this.notifications = [
            new Notification(1, 'assets/imagenes/iconos/ALERT_ON.svg', 'Do not forget sent the abstrct', 'Likes @Digital Harbor Post', true, '9:12 pm'),
            new Notification(2, 'assets/imagenes/iconos/ALERT_ON.svg', 'I have so close to finish this aplication', 'Likes @Digital Harbor Post', true, '9:12 pm'),
            new Notification(3, 'assets/imagenes/iconos/ALERT_ON.svg', 'Adam Wall', 'Likes @Digital Harbor Post', true, '9:12 pm'),
            new Notification(4, 'assets/imagenes/iconos/ALERT_OFF.svg', 'Adam Wall', 'Likes @Digital Harbor Post', true, '9:12 pm'),
            new Notification(5, 'assets/imagenes/iconos/ALERT_OFF.svg', 'I have so close to finish this aplication', 'Likes @Digital Harbor Post', true, '9:12 pm'),
            new Notification(6, 'assets/imagenes/iconos/ALERT_OFF.svg', 'Do not forget sent the abstrct', 'Likes @Digital Harbor Post', true, '9:12 pm'),
            new Notification(7, 'assets/imagenes/iconos/ALERT_OFF.svg', 'Do not forget sent the abstrct', 'Likes @Digital Harbor Post', true, '9:12 pm'),

        ];
        //accion de presionar en un contacto
        /*
        $(document).ready(function(){
            $("li").click(function(){
              $("#icono").attr("src", "assets/imagenes/iconos/ALERT_OFF.svg");
            });
          });
          */
    }

    ngOnInit(){
        console.log(this.notifications);
    }
    
    public myFunction(id){
        $('#'+id).attr("src", "assets/imagenes/iconos/ALERT_OFF.svg");
        console.log('#'+id);
    }
}