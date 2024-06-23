import { Component } from '@angular/core';
import { GeneralService } from './_service/modelos/general.service';
import { PrimeNGConfig, Translation } from 'primeng/api';
// Import the CloudinaryModule.
import {CloudinaryModule} from '@cloudinary/ng';

// Import the Cloudinary classes.
import {Cloudinary, CloudinaryImage} from '@cloudinary/url-gen';
import { environment } from 'src/assets/environments/environment.development';
import {
  accessibility,
  responsive,
  lazyload,
  placeholder
} from '@cloudinary/ng';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private config: PrimeNGConfig) {}

  img!: CloudinaryImage;
    ngOnInit() {
      const translations: Translation = {
        firstDayOfWeek: 1,
        dayNames: [
          'Domingo',
          'Lunes',
          'Martes',
          'Miércoles',
          'Jueves',
          'Viernes',
          'Sábado',
        ],
        dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
        dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
        monthNames: [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Octubre',
          'Noviembre',
          'Diciembre',
        ],
        monthNamesShort: [
          'Ene',
          'Feb',
          'Mar',
          'Abr',
          'May',
          'Jun',
          'Jul',
          'Ago',
          'Sep',
          'Oct',
          'Nov',
          'Dic',
        ],
        today: 'Hoy',
        clear: 'Limpiar',
        accept: 'Aceptar',
        reject: 'Cancelar',
        dateFormat: 'dd/mm/yy',
        weekHeader: 'Sm'
      };
  
      this.config.setTranslation(translations);

      const cld = new Cloudinary({
        cloud: {
          cloudName: environment.cloudinary.cloudName
        },
        
      });

      this.img = cld.image('doctor/iodxn9nhsqupzuq8wl9v');
    }
}
