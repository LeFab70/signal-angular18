import { Product, Products } from './../../models/Product.models';
import { computed, Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  products: WritableSignal<Products> = signal<Products>([
    {
      id: 1,
      name: 'Laptop Dell XPS 13',
      price: 200,
      inStock: true,
      description: "Ultraportable, écran 13.4'', processeur Intel i7",
    },
    {
      id: 2,
      name: 'Souris Logitech MX Master 3',
      price: 100,
      inStock: true,
      description: 'Souris ergonomique avec molette ultra-rapide',
    },
    {
      id: 3,
      name: 'Clavier mécanique Corsair K95',
      price: 199,
      inStock: true,
      description: 'Clavier RGB avec switches Cherry MX',
    },
    {
      id: 4,
      name: "Moniteur Samsung 27'' 4K",
      price: 350,
      inStock: true,
      description: 'Écran UHD avec résolution 4K, 60Hz',
    },
    {
      id: 5,
      name: 'SSD Samsung 970 EVO 1TB',
      price: 150,
      inStock: true,
      description: 'Disque SSD NVMe ultra-rapide pour PC et laptop',
    },
    {
      id: 6,
      name: 'Casque gaming HyperX Cloud II',
      price: 99,
      inStock: false,
      description: 'Casque surround 7.1 avec micro détachable',
    },
    {
      id: 7,
      name: 'Carte graphique NVIDIA RTX 3070',
      price: 650,
      inStock: true,
      description: 'GPU puissant pour jeux et montage vidéo',
    },
    {
      id: 8,
      name: 'Webcam Logitech C920 HD',
      price: 80,
      inStock: true,
      description: 'Caméra 1080p pour visioconférence',
    },
    {
      id: 9,
      name: 'Alimentation Corsair RM750x',
      price: 120,
      inStock: false,
      description: 'Alimentation modulaire 750W certifiée Gold',
    },
    {
      id: 10,
      name: 'Tablette graphique Wacom Intuos Pro',
      price: 399,
      inStock: true,
      description: 'Tablette pour les artistes et designers graphiques',
    },
  ]);

  constructor() {}

  getListOfProduct() {
    return this.products();
  }

  deleteProduct(product: Product) {
    this.products.update((state) =>
      state.filter((Pro) => Pro.id !== product.id)
    );
  }
  AddProduct(product: Product) {
    this.products.update((state) => [...state, product]);
  }
}
