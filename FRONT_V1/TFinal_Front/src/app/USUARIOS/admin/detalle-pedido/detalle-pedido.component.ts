import { Component, OnInit } from '@angular/core';
import { Detalle } from '../../../VENTAS/detalle';
import { SdetallePedidoService } from '../../../VENTAS/sdetalle-pedido.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-pedido',
  standalone: true,
  imports: [],
  templateUrl: './detalle-pedido.component.html',
  styleUrl: './detalle-pedido.component.css'
})
export class DetallePedidoComponent  implements OnInit{
  arrayPedidosDetalle:Detalle[];

  constructor(private Peservice:SdetallePedidoService,private route:Router){
  
    }
  ngOnInit(): void {
    this.obtener_pedidosDetalle();
  }
  private obtener_pedidosDetalle(){
  this.Peservice.get_ListaPedidosDetalle().subscribe(dato=>{
    this.arrayPedidosDetalle = dato
   })
  }

}
