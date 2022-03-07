import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.listado().subscribe(data=>{
      console.log(data)
    })
  }

}
