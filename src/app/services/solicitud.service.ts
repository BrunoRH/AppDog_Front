import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Solicitud } from "../models/solicitud";

@Injectable({
    providedIn:'root'
})

export class SolicitudService {

    API_URL: string = 'https://appservicesdog.azurewebsites.net';

    constructor(private http: HttpClient){}
    private urlApi = '';

    getSolicitudes(){
        return this.http.get(`${this.API_URL}/solicitudes`);
    }

    deleteSolicitud(id: number){
        return this.http.delete(`${this.API_URL}/solicitud/${id}`);
    }
      
    //2 en proceso,3 ya adoptado
    solicitarAdopcion(solicMascot: Solicitud){ //PASAR EL ID
        return this.http.post<Solicitud>(`https://appservicesdog.azurewebsites.net/solicitud`, solicMascot);
    }





}





