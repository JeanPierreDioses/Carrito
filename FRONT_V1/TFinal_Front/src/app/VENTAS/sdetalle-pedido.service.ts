import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Detalle } from './detalle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SdetallePedidoService {



  private baseURL1 ="http://localhost:8091/api/v1/get_detallePedidos"

  constructor(private http:HttpClient) { }

  
  CrearDetallePedido(pro:Detalle):Observable<Object>{
   return this.http.post(`${this.baseURL1}`,pro);
   }

   get_ListaPedidosDetalle():Observable<Detalle[]>{
    return this.http.get<Detalle[]>(`${this.baseURL1}`);
  }
   
}
