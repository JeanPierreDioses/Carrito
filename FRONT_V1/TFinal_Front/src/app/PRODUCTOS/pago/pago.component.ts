import { CommonModule } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cesto } from '../cesto';
import { SproductoService } from '../sproducto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago',
  standalone: true,
  imports: [FormsModule ,CommonModule],
  templateUrl: './pago.component.html',
  styleUrl: './pago.component.css'
})
export class PagoComponent implements OnInit {

  Carro:Cesto [] = [];
  
  constructor(private Pservice:SproductoService,private route:Router){}
  
  ngOnInit(): void {
    this.Carro = this.Pservice.cestoProductos;
  }

  pagar(){
    const confirmacion = window.confirm('¿Estás seguro de que deseas proceder con la compra?');

    if (confirmacion) {
      // Acción a tomar si el usuario confirma
      this.route.navigate(['pth_CrearPedido']);
    } else {
      // Acción a tomar si el usuario cancela (opcional)
      console.log('Compra cancelada');
    }

  }

}
