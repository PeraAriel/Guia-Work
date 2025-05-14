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
    { name: 'Laptop', price: 1200, description: 'Potente laptop da lavoro' },
    { name: 'Smartphone', price: 800, description: 'Smartphone con ottima fotocamera' },
    { name: 'Tablet', price: 400, description: 'Tablet ideale per multimedia' },
    { name: 'Monitor', price: 200, description: 'Monitor HD da 24 pollici' },
    { name: 'Tastiera', price: 50, description: 'Tastiera meccanica retroilluminata' }
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


/*
  Questo componente Angular standalone ('ProductListComponent') gestisce un elenco di prodotti
  con la possibilità di visualizzarne i dettagli, aggiungerne di nuovi e rimuoverli.
  Utilizza un array `products` come archivio locale, un oggetto `newProduct` per il form di inserimento,
  e `selectedProduct` per mostrare i dettagli tramite il componente `ProductDetailComponent`.
  Include anche il supporto a moduli comuni (CommonModule) e form (FormsModule).
*/