import { Component, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/models/solicitud';
import { MascotaService } from 'src/app/services/mascota.service';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  
  solicitudes :any = [];
  loading:boolean=false;
  mascotaModal:any= [];

  constructor( private solicitudService:SolicitudService, private mascotaService: MascotaService) { }

  ngOnInit(): void {
    this.loadSolicitudes();
  }

  loadSolicitudes():void {

    this.solicitudService.getSolicitudes().subscribe(res=>{

      this.solicitudes = res;
      this.loading=true;
      console.log(this.solicitudes);

    },
    err => console.error(err))
  }
  
  MostrarModal(id : string):void{
    
    this.mascotaService.getMascota(id).subscribe(
      res=>{
        console.log(res);
        this.mascotaModal=res;
      },
      err => {throw err}
    )
  }

}
