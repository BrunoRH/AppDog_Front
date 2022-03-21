import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import {FormGroup, FormControl, Validators} from '@angular/forms'
import { ApiService } from '../../services/api.service'
import { LoginI } from 'src/app/models/login.interface';

import { Router, ActivatedRoute } from '@angular/router';
import { ResponseI } from 'src/app/models/response.interface';
import { User } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username : new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })
  
  idUser= '';
  
  constructor( private api:ApiService, private router:Router, private route: ActivatedRoute){

  }
  
  errorStatus:boolean = false;
  errorMsj : any = "";

  ngOnInit(): void {
      
  }

  onLogin(form:LoginI){

    console.log(form);
    this.api.loginByEmail(form).subscribe(data =>{
      console.log(data);

      let dataResponse:User = data;
      this.idUser = dataResponse.username;

      if(dataResponse != null){
        //localStorage.setItem("token", dataResponse.result.token);
        this.router.navigate(['/listado', this.idUser]);
      }else{
        this.errorStatus = true;
      }
    })
  }

}
