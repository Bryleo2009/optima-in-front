import { TipoEstadoProyecto } from './TipoEstadoProyecto';
import { Credito } from './Credito';

export class Proyecto {
    id: number;
    nombreProyecto: string;
    descripcionProyecto: string;
    estadoProyecto: TipoEstadoProyecto;
    fechaInicio: Date;
    fechaFin?: Date; // Opcional, puede ser null

    constructor(
        id: number,
        nombreProyecto: string,
        descripcionProyecto: string,
        estadoProyecto: TipoEstadoProyecto,
        fechaInicio: Date,
        fechaFin: Date | null,
    ) {
        this.id = id;
        this.nombreProyecto = nombreProyecto;
        this.descripcionProyecto = descripcionProyecto;
        this.estadoProyecto = estadoProyecto;
        this.fechaInicio = fechaInicio;
        this.fechaFin != fechaFin;
    }
}