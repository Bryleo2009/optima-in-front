import { TipoDoc } from "../TipoDoc";
import { TipoEstadoCivil } from "../TipoEstadoCivil";
import { TipoEstadoCredito } from "../TipoEstadoCredito";
import { TipoEstadoProyecto } from "../TipoEstadoProyecto";
import { TipoSexo } from "../TipoSexo";

export class GeneralFilter {
    tipoDocList: TipoDoc[];
    tipoEstadoCivilList: TipoEstadoCivil[];
    tipoEstadoCreditoList: TipoEstadoCredito[];
    tipoEstadoProyectoList: TipoEstadoProyecto[];
    tipoSexoList: TipoSexo[];

    constructor(
        tipoDocList: TipoDoc[],
        tipoEstadoCivilList: TipoEstadoCivil[],
        tipoEstadoCreditoList: TipoEstadoCredito[],
        tipoEstadoProyectoList: TipoEstadoProyecto[],
        tipoSexoList: TipoSexo[]
    ) {
        this.tipoDocList = tipoDocList;
        this.tipoEstadoCivilList = tipoEstadoCivilList;
        this.tipoEstadoCreditoList = tipoEstadoCreditoList;
        this.tipoEstadoProyectoList = tipoEstadoProyectoList;
        this.tipoSexoList = tipoSexoList;
    }
}