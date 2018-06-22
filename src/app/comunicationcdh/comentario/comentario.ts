import { Respuesta } from "../comentario/respuesta";
export class Comentario{
    constructor(
        public id: number,
        public nombre: string,
        public imagen: string,
        public estado: boolean,
        public aviso: boolean,
        public mensaje: string,
        public mensajes: Array<Respuesta>,
        public ultConx: string,
        public numMensaje: number,
    ){
        
    }
}