import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header-principal',
  templateUrl: './header-principal.component.html',
  styleUrls: ['./header-principal.component.css']
})
export class HeaderPrincipalComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute) { }

  @Input() Username : string;

  ngOnInit(): void {

    
  }

}
