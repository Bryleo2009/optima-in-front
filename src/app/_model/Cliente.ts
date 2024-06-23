import { TipoSexo } from './TipoSexo';
import { TipoEstadoCivil } from './TipoEstadoCivil';
import { TipoDoc } from './TipoDoc';

export class Cliente {
    numDoc: string;
    nombresCli: string;
    apellidosCli: string;
    direccionCli: string;
    telefonoCli: string;
    emailCli: string;
    tipoSexo: TipoSexo;
    fechaNacCli: Date;
    tipoEstadoCivil: TipoEstadoCivil;
    tipoDoc: TipoDoc;
    estado: boolean;

    constructor(
        numDoc: string,
        nombresCli: string,
        apellidosCli: string,
        direccionCli: string,
        telefonoCli: string,
        emailCli: string,
        tipoSexo: TipoSexo,
        fechaNacCli: Date,
        tipoEstadoCivil: TipoEstadoCivil,
        tipoDoc: TipoDoc,
        estado: boolean
    ) {
        this.numDoc = numDoc;
        this.nombresCli = nombresCli;
        this.apellidosCli = apellidosCli;
        this.direccionCli = direccionCli;
        this.telefonoCli = telefonoCli;
        this.emailCli = emailCli;
        this.tipoSexo = tipoSexo;
        this.fechaNacCli = fechaNacCli;
        this.tipoEstadoCivil = tipoEstadoCivil;
        this.tipoDoc = tipoDoc;
        this.estado = estado;
    }
}