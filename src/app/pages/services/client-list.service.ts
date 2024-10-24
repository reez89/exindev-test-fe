import {Observable} from 'rxjs';
import {CardListResponseInterface} from '../../shared/interfaces/card-list-response.interface';
import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientListService {
  private http = inject(HttpClient);
  private readonly getListUrl = 'https://mrkt-dsk.dev.exin.digital/api/v2/desk/partners/fideuram';
  private readonly getItemUrl = 'https://mrkt-dsk.dev.exin.digital/api/v2/desk/partners/fideuram/';

  getList(): Observable<CardListResponseInterface> {
    const headers = new HttpHeaders({
      'Authorization': 'User 1',
      'Content-Type': 'application/json'
    });
    return this.http.get<CardListResponseInterface>(this.getListUrl, {headers});
  }

  getItem(id: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'User 1',
      'Content-Type': 'application/json'
    });
    return this.http.get<any>(this.getItemUrl + `/${id}`, {headers});
  }
}
