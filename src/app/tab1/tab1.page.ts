import { Component } from '@angular/core';
import { Product } from '../product-card/product.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  products: Product[] = [];
  randomImageUrl = 'https://source.unsplash.com/random/200x200'

  constructor() {
    this.addProducts();
  }

  addProducts() {
    this.products = [
      {
        image: this.randomImageUrl,
        name: 'Product 1',
        description: 'This is product 1',
        price: 100
      },
      {
        image: this.randomImageUrl,
        name: 'Product 2',
        description: 'This is product 2',
        price: 200
      },
      {
        image: this.randomImageUrl,
        name: 'Product 3',
        description: 'This is product 3',
        price: 300
      }
    ];
  }

  openProduct(product: Product) {
    alert('Selected Product: \n' + JSON.stringify(product, null, 2));
  }

}
