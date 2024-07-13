import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../usuario';
import { SusuarioService } from '../susuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule ,CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{
  
  ArrayUsuarios: Usuario[]  ;
  u:Usuario = new Usuario();

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

}
