import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 API_URL=`http://localhost:3000/products`;
 constructor(private http: HttpClient){}
 getAllProducts():Observable<any>{
  return this.http.get<any>(`${this.API_URL}`)
}
 getOneProducts(id:any):Observable<any>{
  return this.http.get<any>(`${this.API_URL}/${id}`)
 }
 createProduct(product:any):Observable<any>{
  return this.http.post<any>(`${this.API_URL}`,product)
 }
 eidtProduct(product:any):Observable<any>{
  return this.http.patch<any>(`${this.API_URL}/${product.id}`,product)
 }
 removeProduct(id:any):Observable<any>{
  return this.http.delete<any>(`${this.API_URL}/${id}`)
 }
}
