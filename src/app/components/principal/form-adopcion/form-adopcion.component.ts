import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Mascota } from 'src/app/models/mascota';
import { MascotaService } from 'src/app/services/mascota.service';
import {ActivatedRoute, Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-adopcion',
  templateUrl: './form-adopcion.component.html',
  styleUrls: ['./form-adopcion.component.css']
})
export class FormAdopcionComponent implements OnInit {
  cssUrl: string;
  mascotaModal:any= [];
  currentUser: any = {};
  /*
  objAdopcion:any {
    name: '',
    dni: '',
    email: '',
    tef:'',
    dir:'',
    msj:
  }*/
  //const { id, dni, nombres, correo, fecCreacion, tipo } = this.currentUser;

  constructor(public sanitizer: DomSanitizer, private mascotaService: MascotaService, private activateRoute
    : ActivatedRoute) {
      this.cssUrl = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css';
  }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    const params= this.activateRoute.snapshot.params;
    console.log(params.id)
    if(params.id){

      this.mascotaService.getMascota(params.id).subscribe(
        res=>{
          console.log(res);
          this.mascotaModal=res;
        },
        err => {throw err}
      )
    }
    console.log("usuario adopcion: ", this.currentUser);
  }
  
  form: FormGroup = new FormGroup({
    //name: new FormControl('', [Validators.required]),
    dni: new FormControl('', [Validators.required]),
    //email: new FormControl('', [Validators.required]),
    tef: new FormControl('', [Validators.required]),
    //dir: new FormControl(1, [Validators.required]),
    msj: new FormControl('', [Validators.required])
  });

  statusDog(estado: number): boolean{
    if(estado == 1){
      return true
    }
    return false;
  }

}
