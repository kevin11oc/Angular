import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdctosService } from 'src/app/servicios/prodctos.service';
import { iProducto } from '../../Models/iProductos';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  
  //id: string;
  producto: iProducto;
  

  constructor(private activatedRoute: ActivatedRoute,
    private serviceProductos: ProdctosService
    ){
  }
  identificacion: string;

  ngOnInit(): void {
    this.identificacion = this.activatedRoute.snapshot.paramMap.get('id') || "";
    this.getProducto();
    console.log("esta es la id" , this.identificacion);
  }

  getProducto(): void {
    this.serviceProductos.getSingleProduct(this.identificacion).subscribe((resp) => {
     this.producto = resp;
     console.log(resp)
    });
  }
}
