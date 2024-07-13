import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../usuario';
import { SusuarioService } from '../susuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule ,CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit{
  new_usuario : Usuario = new Usuario() ; 
  fecha :string;

  constructor(private Uservice:SusuarioService,private route:Router){}

  ngOnInit(): void {}
  
  save(){
    this.Uservice.CrearUsuario(this.new_usuario).subscribe(dato=>{
      console.log(dato);
      this.route.navigate(['pth_inicio']); 
    })
  }

  onSubmit(){
    this.save();
  }

}
