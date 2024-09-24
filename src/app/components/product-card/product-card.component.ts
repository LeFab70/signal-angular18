import { Product } from './../../../models/Product.models';
import {
  Component,
  inject,
  signal,
  WritableSignal,
  computed,
  Signal,
} from '@angular/core';

import { ProductServiceService } from '../../services/product-service.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  readonly productService = inject(ProductServiceService);
  //products: WritableSignal<Products> = signal<Products>([]);

  readonly products: Signal<Product[]> = computed(() =>
    this.productService.getListOfProduct()
  );
  totalInStock = computed<number>(
    () => this.products().filter((p) => p.inStock === true).length
  );
  totalRupture = computed<number>(
    () => this.products().filter((p) => p.inStock !== true).length
  );

  removeProduct(product: Product) {
    this.productService.deleteProduct(product);
  }
}
