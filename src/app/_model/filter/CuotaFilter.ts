export class CuotaFilter {
    id: number;
    estado: boolean;
    fechaPago: Date;
    publicId: string;

    constructor(
        id: number,
        estado: boolean,
        fechaPago: Date,
        publicId: string
    ) {
        this.id = id;
        this.estado = estado;
        this.fechaPago = fechaPago;
        this.publicId = publicId;
    }
}