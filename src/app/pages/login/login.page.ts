import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  
  

 correo: string = 'ruben.tornero.cerrillo@cieep.com';
 password: string = '123456';


  constructor(private router: Router) { 
    


  }

  ngOnInit() {
  }
  
  login( form: NgForm ) {

    if (  form.invalid ) {
       return;
       }

       else 

       {
          if((this.usuario.email == this.correo) && (this.usuario.password == this.password) )
          {
            this.router.navigateByUrl('/lista-vacantes');
          }
       }

    

  }

}
