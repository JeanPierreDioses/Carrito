import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { SusuarioService } from '../susuario.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule ,CommonModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  implements OnInit{

  ArrayUsuarios: Usuario[]  ;
  u:Usuario = new Usuario();

  correo: string = '';
  contrasena: string = '';
  flag: boolean = false;

  constructor(private Uservice:SusuarioService,private route:Router){

  }
  ngOnInit(): void {
   this.obtener_usuarios();
  }

  private obtener_usuarios(){
    this.Uservice.get_ListaUsuarios().subscribe(dato=>{
      this.ArrayUsuarios = dato;
    })
  }
   
  onSubmit() {
    this.flag = false;

    for (const usuario of this.ArrayUsuarios) {
      if (usuario.correo === this.correo  && usuario.password === this.contrasena) {
        this.flag = true;
          this.u = usuario;
        break;
      }
    }

    if (this. flag) {
      console.log('Inicio de sesión exitoso');
      this.Uservice.LOGEADO = this.u;

      if(this.u.tipoUsuario === 'A'){
        this.route.navigate(['pth_admin']); 
      }
      else{
        this.route.navigate(['pth_listaPrd']); 
      }
    } else {
      const confirmacion = window.confirm('INICIO DE SESION INCORRECTO ');
    }

  }

  go_registro(){
    this.route.navigate(['pth_registrar']); 
  }

}
