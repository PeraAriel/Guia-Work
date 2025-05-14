import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product-model';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  @Input() product: Product | null = null;
}

/*
  Questo è un componente standalone Angular chiamato 'ProductDetailComponent'.
  Serve per visualizzare i dettagli di un prodotto specifico ricevuto tramite la property `@Input() product`.
  Se il valore è `null`, il template può usare condizioni come *ngIf per mostrare o nascondere il contenuto.
  È pensato per essere riutilizzato in altri componenti, come ad esempio all'interno di 'ProductListComponent'.
*/