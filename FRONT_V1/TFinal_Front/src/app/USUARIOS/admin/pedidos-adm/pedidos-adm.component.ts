import { Component, OnInit } from '@angular/core';
import { Ventas } from '../../../VENTAS/ventas';
import { SventasService } from '../../../VENTAS/sventas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos-adm',
  standalone: true,
  imports: [],
  templateUrl: './pedidos-adm.component.html',
  styleUrl: './pedidos-adm.component.css'
})
export class PedidosAdmComponent implements OnInit{
  arrayPedidos:Ventas[];

constructor(private Peservice:SventasService,private route:Router){

  }
  ngOnInit(): void {
   this.obtener_pedidos();
  }

  private obtener_pedidos(){
    this.Peservice.get_ListaPedidos().subscribe(dato=>{
      this.arrayPedidos = dato
    })
  }

}
