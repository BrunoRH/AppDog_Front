import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

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






}





