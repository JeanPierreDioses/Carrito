import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../producto';
import { Cesto } from '../cesto';
import { SproductoService } from '../sproducto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [FormsModule ,CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit{

  Carro:Cesto [] = [];
  ArrayProductos:Producto[] = [];
  prd:Producto = new Producto();
  
  constructor(private Pservice:SproductoService,private route:Router){}

  ngOnInit(): void {
    this.Carro = this.Pservice.cestoProductos;
  }  
  actualizar_Cantidad(cesto: Cesto){
    this.Pservice.get_BuscarProducto(cesto.idProducto).subscribe(dato => {
      this.prd = dato;
    
      // Encontrar el producto asociado con el cesto
   const producto = this.Pservice.cestoProductos.find(p => p.idProducto === cesto.idProducto);
   
   if (producto) {
     // Actualizar el monto total basado en la nueva cantidad
     cesto.montototal = cesto.cantidad * this.prd.precioUnidad;

     // Actualizar el carrito en el servicio
     this.Pservice.cestoProductos = this.Carro;
   }
    })
  }

  eliminar(id: string): void {
    // Filtrar el carrito para eliminar el producto con el id especificado
    this.Carro = this.Carro.filter(cesto => cesto.idProducto !== id);

    // Actualizar el carrito en el servicio
    this.Pservice.cestoProductos = this.Carro;
  }
  calcularTotal(): number {
    // Calcular el total sumando el monto total de cada producto en el carrito
    return this.Carro.reduce((total, cesto) => total + cesto.montototal, 0);
  }

  procederPago(): void {
    // Lógica para proceder al pago
    this.route.navigate(['pth_Pago']); 
    // Redireccionar o mostrar un modal para completar el pago
  }

}
