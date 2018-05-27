export class Mensaje{
    constructor(
        public id: number,
        public nombre: string,
        public imagen: string,
        public estado: boolean,
        public mensaje: string,
        public ultConx: string,
        public numMensaje: number
    ){
        
    }
}