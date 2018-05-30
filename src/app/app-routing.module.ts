import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './comunicationcdh/login/login.component';
import { PrincipalComponent } from './comunicationcdh/principal/principal.component';
import { CalendarComponent } from './comunicationcdh/calendar/calendar.component';
import { ChatGeneralComponent } from './comunicationcdh/chat/chat-general.component';
import { MensajeComponent } from './comunicationcdh/mensaje/mensaje.component';
import { MenuComponent } from './comunicationcdh/menu/menu.component';
import { ChatComponent } from './comunicationcdh/list-chat/chat.component';
import { CommentComponent } from './comunicationcdh/ChatComment/comment.component';




const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
     path: 'principal',
     component: PrincipalComponent
   },
   {
    path: 'calendar',
    component: CalendarComponent
  },
  {
  path: 'chat',
  component: CommentComponent
  },
  {
    path: 'chat-general',
    component: ChatGeneralComponent
  },
  {
    path: 'mensaje',
    component: MensajeComponent
  },
   {
     path: '**', pathMatch: 'full', redirectTo: 'login'
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

