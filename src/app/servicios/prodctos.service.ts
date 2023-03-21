import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iProducto } from '../Models/iProductos';

@Injectable({
  providedIn: 'root',
})
export class ProdctosService {
  private Api: string = 'https://api.escuelajs.co/api/v1/products';

  constructor(private http: HttpClient) {}

  //Getter para obtener los datos de la api
  getProductos() {
    return this.http.get<Array<iProducto>>(this.Api);
  }
  getSingleProduct(id: string) {
    return this.http.get<iProducto>(`${this.Api}/${id}`);
  }
}
