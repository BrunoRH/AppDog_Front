import { Injectable } from "@angular/core";
import { LoginI} from  '../models/login.interface';
import { ResponseI } from "../models/response.interface";
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs"; 
import { User } from "../models/usuario";


@Injectable({
    providedIn:'root'
})
export class ApiService{
    
    url: string = 'https://appservicesdog.azurewebsites.net/usuarios';

    constructor(private http:HttpClient) { }
    

    loginByEmail( form : LoginI) : Observable<User>{

        let dir = this.url+"/login"; 
        console.log("ruta : ", dir);
        return this.http.post<User>(dir,form);
        console.log(form);
    }
    logout() {
        /*this.usuario = {};
        return this.authService.signOut();*/
    }
}