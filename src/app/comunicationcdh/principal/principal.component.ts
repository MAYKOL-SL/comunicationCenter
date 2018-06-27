import { Component, OnInit , Input ,AfterViewInit , ViewChild} from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';

@Component({
  selector: 'dh-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit , AfterViewInit{
  
  @ViewChild('colorText') textoArea;

   comentForm: FormGroup;
   
    coment = [
       { id: "1", comentario: 'este video es genial veanlo'},
       { id: "2", comentario: 'feliz :)'},
       { id: "3", comentario: 'en la vida pudes ganar o perder'}
     ];
  /*coment : any [];*/
  model:any = {};
  model2:any = {};
  contador:number = 0;
  contadorTexto:number = 0;

  constructor() { }

  ngOnInit() {
      this.comentForm = new FormGroup({
         'id': new FormControl(null),
         'comentario': new FormControl(null),
      });
      
  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.textoArea.nativeElement);
    
  }

  cambiarColor():void{
    /*console.log("ingrso aa funcion");*/
     /*this.textoArea.nativeElement.style.backgroundColor = 'red';*/
     if ( this.contador == 0 ) {
        console.log("contador esta en cero");
        this.textoArea.nativeElement.style.backgroundColor = 'deeppink';
        this.textoArea.nativeElement.style.color = 'white';
        this.contador += 1;
     }else{ 
            if ( this.contador == 1 ) {
              console.log("contador ya no esta en 1");
              this.textoArea.nativeElement.style.backgroundColor = 'darkturquoise';
              this.textoArea.nativeElement.style.color = 'white';
              this.contador += 1;
            } else {
               if ( this.contador == 2 ) {
                 console.log("contador ya no esta en 2");
                 this.textoArea.nativeElement.style.backgroundColor = 'orange';
                 this.textoArea.nativeElement.style.color = 'white';
                 this.contador += 1;
               } else {
                  if ( this.contador == 3 ) {
                    console.log("contador ya no esta en 3");
                    this.textoArea.nativeElement.style.backgroundColor = 'cyan';
                    this.textoArea.nativeElement.style.color = 'white';
                    this.contador += 1;
                  } else{
                    console.log("contador ya no esta en 0");
                    this.textoArea.nativeElement.style.backgroundColor = 'springgreen';
                    this.textoArea.nativeElement.style.color = 'white';
                    this.contador = 0;
                  }
               }
            }
          
          }
  }

  cambiarTexto():void{
     if ( this.contadorTexto == 0 ) {
         console.log("contador ya no esta en sans serfi");
        this.textoArea.nativeElement.style.fontFamily='sans-serif';
        this.textoArea.nativeElement.style.fontSize='medium ';
        this.contadorTexto += 1;
     }else{ 
            if ( this.contadorTexto == 1 ) {
                console.log("contador ya no esta en Georgia Times New Roman");
              this.textoArea.nativeElement.style.fontFamily='Georgia, Times New Roman';
              this.textoArea.nativeElement.style.fontSize='medium';
              this.contadorTexto += 1;
            } else {
               if ( this.contadorTexto == 2 ) {
                   console.log("contador ya no esta en cursive");
                 this.textoArea.nativeElement.style.fontFamily='cursive';
                 this.textoArea.nativeElement.style.fontSize='larger ';
                 this.contadorTexto += 1;
               } else {
                  if ( this.contadorTexto == 3 ) {
                      console.log("contador ya no esta en calibri");
                    this.textoArea.nativeElement.style.fontFamily='Calibri';
                    this.textoArea.nativeElement.style.fontSize='medium ';
                    this.contadorTexto += 1;
                  } else{
                      console.log("contador ya no esta en arial");
                    this.textoArea.nativeElement.style.fontFamily='Arial';
                    this.textoArea.nativeElement.style.fontSize='medium';
                    this.contadorTexto = 0;
                  }
               }
            }
          
          }
  }

  addComentario():void {
    /*console.log("esto es lo ingresado",this.model);*/
    /*let idcoment = 'id:'+" "+1;*/
    this.comentForm.value.id = this.coment.length + 1;
    this.comentForm.value.comentario = this.model.comentario;
    this.coment.push(this.comentForm.value);
    /*console.log("lo que se envia de la vista :", this.model.comentario);*/
    console.log(this.coment);
  }  
  
}
