import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { PublicacionImgUnComponent } from './publicacion-img-un/publicacion-img-un.component';
import { PublicacionImgMuchComponent } from './publicacion-img-much/publicacion-img-much.component';
import { ChatGeneralComponent } from './chat/chat-general.component';
import { ChatComponent } from './list-chat/chat.component';
import { NotifiComponent } from './notificaciones/notificaciones.component';
import { TareasComponent } from './tareas/tareas.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { ContactoComponent } from './contactos/contacto.component';
import { VideoLocalComponent } from './Video-Local/video-local.component';
import { CommentComponent } from './ChatComment/comment.component';
import { PublicacionImgTresComponent } from './publicacion-img-tres/publicacion-img-tres.component';
import { PublicacionImgLinkComponent } from './publicacion-img-link/publicacion-img-link.component';
import { PublicacionSliderComponent } from './publicacion-slider/publicacion-slider.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, PrincipalComponent, CalendarComponent,
                  MenuComponent, HeaderComponent, PerfilComponent, PublicacionesComponent,
                  PublicacionImgUnComponent, PublicacionImgMuchComponent, NotifiComponent,
                  TareasComponent, ChatComponent, ChatGeneralComponent, MensajeComponent,
                ContactoComponent,
                  ChatComponent, CommentComponent, VideoLocalComponent, PublicacionImgTresComponent, PublicacionImgLinkComponent, PublicacionSliderComponent]
})
export class ComunicationcdhModule { }
