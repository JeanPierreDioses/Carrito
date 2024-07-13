import { Routes } from '@angular/router';
import { MainComponent } from './USUARIOS/main/main.component';
import { RegistroComponent } from './USUARIOS/registro/registro.component';
import { ListaComponent } from './PRODUCTOS/lista/lista.component';
import { CarritoComponent } from './PRODUCTOS/carrito/carrito.component';
import { PagoComponent } from './PRODUCTOS/pago/pago.component';
import { CrearComponent } from './VENTAS/crear/crear.component';
import { AdminComponent } from './USUARIOS/admin/admin.component';
import { ProductosAdmComponent } from './USUARIOS/admin/productos-adm/productos-adm.component';
import { PedidosAdmComponent } from './USUARIOS/admin/pedidos-adm/pedidos-adm.component';
import { DetallePedidoComponent } from './USUARIOS/admin/detalle-pedido/detalle-pedido.component';

export const routes: Routes = [
    {path : 'pth_inicio',component:MainComponent},
    {path : '',redirectTo:'pth_inicio',pathMatch:'full'},
    {path : 'pth_registrar',component:RegistroComponent},
    {path : 'pth_admin',component:AdminComponent},
    {path : 'pth_listaPrd',component:ListaComponent},
    {path : 'pth_Carrito',component:CarritoComponent},
    {path : 'pth_Pago',component:PagoComponent},
    {path : 'pth_CrearPedido',component:CrearComponent},
    {path : 'pth_productos',component:ProductosAdmComponent},
    {path : 'pth_pedidos',component:PedidosAdmComponent},
    {path : 'pth_detallepedidos',component:DetallePedidoComponent}
];
