import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iProducto } from 'src/app/Models/iProductos';
import { ProdctosService } from 'src/app/servicios/prodctos.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css'],
})
export class ListaProductosComponent implements OnInit {
  listaProductos: iProducto[] = [];

  constructor(private serviceProductos: ProdctosService) {}

  ngOnInit(): void {
    this.getProductos();
  }
  getProductos(): void {
    this.serviceProductos.getProductos().subscribe((resp) => {
      this.listaProductos = resp;
    });
  }
}
