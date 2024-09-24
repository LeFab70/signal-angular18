import { NgClass } from '@angular/common';
import { Component, computed,  signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-facture-signal',
  standalone: true,
  imports: [NgClass],
  templateUrl: './facture-signal.component.html',
  styleUrl: './facture-signal.component.scss',
})
export class FactureSignalComponent {
  quantity: WritableSignal<number> = signal<number>(10);
  readonly price: WritableSignal<number> = signal<number>(250);
  total = computed(() => this.price() * this.quantity());

// constructor(){
//   effect(()=>{
//     console.log("quantity:"+this.quantity());
    
//   })
// }

  increment() {
    this.quantity.update((prevValeur) => prevValeur + 1);
  }
  decrement() {
    if (this.quantity() > 0)
      this.quantity.update((prevValeur) => prevValeur - 1);
  }
}
