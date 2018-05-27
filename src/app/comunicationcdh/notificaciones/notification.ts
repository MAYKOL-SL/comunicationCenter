export class Notification{
    constructor(
        public id: number,
        public icono: string,
        public titulo: string,
        public descripcion: string,
        public visto: boolean,
        public hora: string
    ){
        
    }
}