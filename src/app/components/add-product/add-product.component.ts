import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductServiceService } from '../../services/product-service.service';
import { Product } from '../../../models/Product.models';


@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent {
  productForm!: FormGroup;
  private fb: FormBuilder = inject(FormBuilder);
  productService = inject(ProductServiceService);
  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      inStock: [true, Validators.required],
    });
  }

  saveProduct() {
    let product: Product = {
      id: Date.now(),
      name: this.productForm.value.name,
      price: this.productForm.value.price,
      description: this.productForm.value.description,
      inStock: this.productForm.value.inStock,
    };
    this.productService.AddProduct(product);
    this.productForm.reset();
  }
}
