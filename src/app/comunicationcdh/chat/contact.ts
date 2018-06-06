import { Mensaje } from "../chat/mensaje";
export class Contact{
    constructor(
        public id: number,
        public nombre: string,
        public imagen: string,
        public estado: boolean,
        public aviso: boolean,
        public mensaje: string,
        public mensajes: Array<Mensaje>,
        public ultConx: string,
        public numMensaje: number
    ){
        
    }
}