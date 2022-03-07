import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
miForm=this.fb.group({
  email:[''],
  password:['']
})

  constructor(private fb: FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {
  }
autentificacion(){
  this.authService.login(this.miForm.value)
  .subscribe((data:any)=>{
    this.authService.mitoken=data.token
    console.log('es el token',this.authService.mitoken)
  })
 
}
}
