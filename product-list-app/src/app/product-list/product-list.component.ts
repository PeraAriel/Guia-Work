import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../product-model';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    { name: 'iPhone', price: 1200, description: '"iPhone: potenza, design e innovazione a portata di mano."' },
    { name: 'iPad', price: 800, description: '"iPad: creatività e produttività, ovunque ti trovi."' },
    { name: 'Apple Watch', price: 400, description: '"Apple Watch: il tuo allenatore, assistente e compagno di stile."' },
    { name: 'iPod', price: 200, description: '"iPod: la musica sempre con te, in un formato compatto."' },
    { name: 'Portafoglio MagSafe', price: 50, description: '"Portafoglio MagSafe: praticità e sicurezza, sempre a portata di mano."' }
  ];

  selectedProduct: Product | null = null;

  newProduct: Product = {
    name: '',
    price: 0,
    description: ''
  };

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
    if (this.selectedProduct === this.products[index]) {
      this.selectedProduct = null;
    }
  }

  addProduct() {
    if (this.newProduct.name && this.newProduct.description && this.newProduct.price > 0) {
      this.products.push({ ...this.newProduct });
      this.newProduct = { name: '', price: 0, description: '' };
    }
  }
}


