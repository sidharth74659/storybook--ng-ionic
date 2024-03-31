import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from './product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product: Product | null = null;

  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onOpen = new EventEmitter<Product>();
}
