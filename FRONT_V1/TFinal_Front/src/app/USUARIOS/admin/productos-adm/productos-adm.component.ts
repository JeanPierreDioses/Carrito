import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../PRODUCTOS/producto';
import { Router } from '@angular/router';
import { SproductoService } from '../../../PRODUCTOS/sproducto.service';

@Component({
  selector: 'app-productos-adm',
  standalone: true,
  imports: [],
  templateUrl: './productos-adm.component.html',
  styleUrl: './productos-adm.component.css'
})
export class ProductosAdmComponent implements OnInit {
  ArrayProductos: Producto[]  ;

  constructor(private Pservice:SproductoService,private route:Router){

  }

  ngOnInit(): void {
    this.obtener_productos();
  }

  private obtener_productos(){
    this.Pservice.get_ListaProductos().subscribe(dato=>{
      this.ArrayProductos = dato;
    })
  }

}
