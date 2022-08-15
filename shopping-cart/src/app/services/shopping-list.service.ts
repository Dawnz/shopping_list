import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { APIResponse } from '../model/APIResponse';
import { Items } from '../model/Items';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private API_URL = 'http://localhost:3000/shopping_list';

  // private _handleHttpErrors(retVal: any) {
  //   return (err: any) => {
  //     console.log(err);
  //     return of({status:err.status, message:err.message, data:retVal});
  //   }
  // }

  constructor(private http: HttpClient) {}

  getAllItems(): Observable<APIResponse<Items[]>> {
    return this.http.get<APIResponse<Items[]>>(this.API_URL);
  }

  getItemById(id: string): Observable<APIResponse<Items>> {
    return this.http.get<APIResponse<Items>>(this.API_URL + '/' + id);
  }

  createItem(data: Items): Observable<APIResponse<Items>> {
    return this.http.post<APIResponse<Items>>(this.API_URL, data);
  }

  updateItem(id: string, data: Items): Observable<APIResponse<Items>> {
    return this.http.patch<APIResponse<Items>>(this.API_URL + '/' + id, data);
  }

  deleteItem(id: string): Observable<APIResponse<Items>> {
    return this.http.delete<APIResponse<Items>>(this.API_URL + '/' + id);
  }
}
