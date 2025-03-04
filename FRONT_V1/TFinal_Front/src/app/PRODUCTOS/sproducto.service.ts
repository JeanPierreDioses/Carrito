import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../USUARIOS/usuario';
import { Producto } from './producto';
import { Cesto } from './cesto';

@Injectable({
  providedIn: 'root'
})
export class SproductoService {

  private baseURL1 ="http://localhost:8091/api/v1/get_productos"
  
  carritoProductos:Producto[] = [];

  cestoProductos:Cesto[] = [];

  constructor(private http:HttpClient) { }
  
  get_ListaProductos():Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.baseURL1}`);
   }

  get_BuscarProducto(id:string ):Observable<Producto>{
    return this.http.get<Producto>(`${this.baseURL1}/${id}`);
   }
/*
  CrearUsuario(pro:Usuario):Observable<Object>{
   return this.http.post(`${this.baseURL1}`,pro);
   }
*/
}
