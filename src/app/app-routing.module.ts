import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  { path: 'listaProductos', component: ListaProductosComponent },
  { path: 'producto/:id', component: ProductoComponent },
  { path: '**', component: ListaProductosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
