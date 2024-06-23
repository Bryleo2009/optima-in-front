import { TipoEstadoCredito } from './TipoEstadoCredito';
import { Cliente } from './Cliente';
import { Voucher } from './File';
import { Proyecto } from './Proyecto';

export class Credito {
    id: number;
    nombreCredito: string;
    descripcionCredito: string;
    estadoCredito: TipoEstadoCredito;
    monto: number;
    tasaInteres: number;
    plazo: number; // en meses
    montoCuota: number;
    numCuota: number;
    diaPago: number;
    totalPagar: number;
    totalPagado: number;
    totalOtros: number;
    fechaInicio: Date;
    files: Voucher[];
    cliente: Cliente;
    proyecto: Proyecto;
    listCuotas: any[] = [];

    constructor(
        id: number,
        nombreCredito: string,
        descripcionCredito: string,
        estadoCredito: TipoEstadoCredito,
        monto: number,
        tasaInteres: number,
        plazo: number,
        montoCuota: number,
        numCuota: number,
        diaPago: number,
        totalPagar: number,
        totalPagado: number,
        totalOtros: number,
        fechaInicio: Date,
        files: Voucher[],
        cliente: Cliente,
        proyecto: Proyecto,
        listCuotas: any[]
    ) {
        this.id = id;
        this.nombreCredito = nombreCredito;
        this.descripcionCredito = descripcionCredito;
        this.estadoCredito = estadoCredito;
        this.monto = monto;
        this.tasaInteres = tasaInteres;
        this.plazo = plazo;
        this.montoCuota = montoCuota;
        this.numCuota = numCuota;
        this.diaPago = diaPago;
        this.totalPagar = totalPagar;
        this.totalPagado = totalPagado;
        this.totalOtros = totalOtros;
        this.fechaInicio = fechaInicio;
        this.files = files;
        this.cliente = cliente;
        this.proyecto = proyecto;
        this.listCuotas = listCuotas;
    }
}