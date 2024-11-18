import { Component, OnInit } from '@angular/core';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  hasFilling: boolean; // Nuevo campo para el filtrado
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  loading: boolean = true;
  filter: 'all' | 'withFilling' | 'withoutFilling' = 'all'; // Filtro seleccionado

  constructor() {}

  ngOnInit(): void {
    this.loadMockProducts();
  }

  loadMockProducts(): void {
    this.products = [
      {
        id: 1,
        name: 'Mochi de Fresa',
        description: 'Mochi suave y delicioso con relleno de fresa fresca.',
        price: 5000,
        imageUrl: 'https://i.pinimg.com/736x/89/29/d5/8929d577456e79b20134ccca512d1358.jpg',
        hasFilling: false
      },
      {
        id: 2,
        name: 'Mochi de Sandía',
        description: 'Refrescante mochi con un toque de sandía dulce.',
        price: 5000,
        imageUrl: 'https://i.pinimg.com/736x/5b/e9/00/5be90081fe8108c995c1fd11fae7da2e.jpg',
        hasFilling: false
      },
      {
        id: 3,
        name: 'Mochi de Lulo',
        description: 'Exótico mochi con un toque tropical de lulo.',
        price: 5000,
        imageUrl: 'https://i.pinimg.com/236x/44/fd/11/44fd11be50485aadcf67c4fd9bf6c94f.jpg',
        hasFilling: false
      },
      {
        id: 4,
        name: 'Mochi Cookies & Cream',
        description: 'Dulce mochi con trocitos de galleta y crema.',
        price: 5000,
        imageUrl: 'https://i.pinimg.com/736x/83/cf/e8/83cfe861ac88fa22b720ae0ce95b14a7.jpg',
        hasFilling: false
      },
      {
        id: 5,
        name: 'Mochi de Chocolate',
        description: 'Mochi relleno con un centro de chocolate oscuro.',
        price: 6000,
        imageUrl: 'https://i.pinimg.com/736x/e0/b6/82/e0b68273ebe439d5ed03c6f70ae6b693.jpg',
        hasFilling: true
      },
      {
        id: 6,
        name: 'Mochi de Frutos Rojos',
        description: 'Mochi con un delicioso mix de frutos rojos.',
        price: 6000,
        imageUrl: 'https://i.pinimg.com/736x/4e/18/81/4e18819ff6165ef6699cc0bf234770ce.jpg',
        hasFilling: false
      }
    ];

    this.filteredProducts = this.products;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  // Método para filtrar productos
  applyFilter() {
    if (this.filter === 'all') {
      this.filteredProducts = this.products;
    } else if (this.filter === 'withFilling') {
      this.filteredProducts = this.products.filter(product => product.hasFilling);
    } else if (this.filter === 'withoutFilling') {
      this.filteredProducts = this.products.filter(product => !product.hasFilling);
    }
  }
}
