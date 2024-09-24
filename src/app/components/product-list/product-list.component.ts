import { Component } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";
import { AddProductComponent } from "../add-product/add-product.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent, AddProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

}
