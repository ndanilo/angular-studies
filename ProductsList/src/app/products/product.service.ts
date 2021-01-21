import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl:string = 'http://localhost:3000/';
  constructor(private http:HttpClient) { 
  }

  public getProduct():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl + 'products');
  }
}
