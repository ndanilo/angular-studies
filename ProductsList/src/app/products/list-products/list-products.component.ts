import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styles: [
  ]
})
export class ListProductsComponent implements OnInit {

  public products:Product[];
  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.service.getProduct().subscribe(products => 
      this.products = products,
      error => console.log(error)  
    );
  }

}
