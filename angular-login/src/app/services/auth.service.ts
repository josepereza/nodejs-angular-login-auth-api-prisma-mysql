import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
public mitoken:string=''
  constructor(private http:HttpClient   ) { }

  login(dato:any){
    return this.http.post('http://localhost:3000/users/singin',dato)
    

  }
  listado(){
    return this.http.get('http://localhost:3000/users/listado')
  }
}
