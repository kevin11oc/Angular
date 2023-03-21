import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { iProducto } from 'src/app/Models/iProductos';
import { ProdctosService } from 'src/app/servicios/prodctos.service';
import { ListaProductosComponent } from './lista-productos.component';

describe('ListaProductosComponent', () => {
  let component: ListaProductosComponent;
  let fixture: ComponentFixture<ListaProductosComponent>;
  let productosService: ProdctosService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ListaProductosComponent],
      providers: [ProdctosService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProductosComponent);
    component = fixture.componentInstance;
    productosService = TestBed.inject(ProdctosService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getProductos method and populate listaProductos', () => {
    const mockProductos: iProducto[] = [
      { id: 1, title: 'Producto 1', images: ['image1.jpg', 'image2.jpg'], price: 1457, description: "jhasd asa la prueba de este codigfo"  },
      { id: 2, title: 'Producto 2', images: ['image3.jpg'], price: 4755, description: "esto es la segunda prueba" },
    ];

    spyOn(productosService, 'getProductos').and.returnValue(of(mockProductos));

    component.getProductos();

    expect(productosService.getProductos).toHaveBeenCalled();
    expect(component.listaProductos).toEqual(mockProductos);
  });
});
