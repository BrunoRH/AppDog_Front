import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  form: FormGroup = new FormGroup({
    dni: new FormControl('', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  
  constructor() { }

  ngOnInit(): void {
  }

}
