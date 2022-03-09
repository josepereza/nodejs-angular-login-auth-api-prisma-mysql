import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  miForm=this.fb.group({
    name:[''],
    email:[''],
    password:['']
  })
  constructor(private fb: FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {
  }
crearUsuario(){
  this.authService.crear(this.miForm.value).subscribe(data=>{
    console.log(data)
  })
}
}
