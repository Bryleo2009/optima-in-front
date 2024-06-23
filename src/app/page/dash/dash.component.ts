import { Component, ElementRef, ViewChild } from '@angular/core';
import { Cloudinary } from '@cloudinary/url-gen';
import { Credito } from '@model/Credito';
import { Proyecto } from '@model/Proyecto';
import { CreditoService } from '@service/modelos/credito.service';
import { CloudinaryService } from '@service/util/cloudinary.service';
import { MessageService } from 'primeng/api';
import { FileUpload, FileUploadEvent } from 'primeng/fileupload';
import { environment } from 'src/assets/environments/environment.development';


interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
  providers: [MessageService] 
})
export class DashComponent {
  constructor(
    private creditoService: CreditoService,
    private cloudinaryService: CloudinaryService,
    private messageService: MessageService
  ) {}

  maxDate = new Date();
  //hasta 1 año atras
  minDate = new Date(new Date().setFullYear(new Date().getFullYear() - 1));
  creditos: Credito[] = [];
  search?: string;
  fechIni?: Date;
  fechFin?: Date;

  ngOnInit(): void {
    this.listarCreditos(this.search, this.fechIni, this.fechFin);
  }

  listarCreditos(search?: string, fechIni?: Date, fechFin?: Date): void {
    this.creditoService.listar(search, fechIni, fechFin).subscribe(
      (data) => {
        this.creditos = data;

        //poblar los urls de las imagenes
        this.creditos.forEach(credito => {
          if (credito.listCuotas) {
            credito.listCuotas.forEach(cuota => {
              if (cuota.publicId) {
                this.imgUrls[cuota.id + '$' + credito.id] = this.cloudinary.image(cuota.publicId).toURL();
              }
            });
          }
        });
      },
      (error) => {
        console.error(error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error.error.mensaje,
        });
      }
    );
  }

  getCantCuotas(listCuotas: any[]) {
    return listCuotas.length;
  }

  searchInput(event: any): void {
    this.search = event.target.value;
    this.listarCreditos(this.search, this.fechIni, this.fechFin);
  }

  searchGeneral() {
    this.listarCreditos(this.search, this.fechIni, this.fechFin);
  }

  restoreBusqueda() {
    if (this.fechIni) {
      this.search = '';
      this.fechIni = undefined;
      this.fechFin = undefined;
      this.listarCreditos(this.search, this.fechIni, this.fechFin);
    }
  }

  cloudinary: Cloudinary = new Cloudinary({
    cloud: {
      cloudName: environment.cloudinary.cloudName
    }
  });

  selectedFileNames: { [key: string]: string } = {}; 
  imgUrls: { [key: string]: string } = {};
  @ViewChild('downloadLink') downloadLink!: ElementRef;
  onFileChange(event: any,id: string) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];

      let ids = id.split('$');
      if(this.creditos != undefined && this.creditos.length > 0 ){
      let cuotaAnterior = this.creditos.find(credito => credito.id == +ids[1])?.listCuotas.find(cuota => cuota.id == (+ids[0] - 1));
      console.log(cuotaAnterior);
      if((cuotaAnterior?.publicId == undefined || cuotaAnterior?.publicId == '' || cuotaAnterior?.publicId == null) && cuotaAnterior != undefined){
        this.messageService.add({
          severity: 'warn',
          summary: 'Atención',
          detail: 'Abjunte una imagen de la cuota anterior',
        });
      } else {
        // Aquí puedes agregar la lógica para manejar la carga de archivos
        this.cloudinaryService.uploadImage(file).subscribe(
          (data) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Éxito',
              detail: 'Imagen subida correctamente',
            });
            this.selectedFileNames[id] = file.name; 
            this.imgUrls[id] = this.cloudinary.image(data.public_id).toURL();

            //id tiene la forma cuota.id+'$'+credito.id
            let ids = id.split('$');
            this.creditoService.cambioEstado(+ids[1], +ids[0], data.public_id).subscribe(
              (data) => {
                this.messageService.add({
                  severity: 'success',
                  summary: 'Éxito',
                  detail: 'Estado cambiado correctamente',
                });
                this.listarCreditos(this.search, this.fechIni, this.fechFin);
              },
              (error) => {
                this.messageService.add({
                  severity: 'error',
                  summary: 'Error',
                  detail: 'Error al cambiar el estado',
                });
              }
            );
          },
          (error) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Error al subir la imagen',
            });
          }
        );
      }
    }  else {
      delete this.selectedFileNames[id];
      delete this.imgUrls[id];
    }
  }
}

  visible: boolean = false;
  rutaVoucher: string = '';
  showImage(imageUrl: string) {
    this.visible = true;
    this.rutaVoucher = imageUrl;
    this.downloadLink.nativeElement.href = this.rutaVoucher;
  }

  cerrarModal() {
    this.rutaVoucher = '';
    this.visible = false;
   // this.downloadLink.nativeElement.href = '';
  }
  
}
