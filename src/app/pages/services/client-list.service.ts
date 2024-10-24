import {Observable, of, tap} from 'rxjs';
import {CardListResponseInterface} from '../../shared/interfaces/card-list-response.interface';
import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ItemDetailResponseInterface} from '../../shared/interfaces/item-detail-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientListService {
  private http = inject(HttpClient);
  private readonly getListUrl = 'https://mrkt-dsk.dev.exin.digital/api/v2/desk/partners/fideuram';
  private readonly getItemUrl = 'https://mrkt-dsk.dev.exin.digital/api/v2/desk/partners/fideuram';
  private readonly localStorageKey = 'cachedCardList';

  getList(): Observable<CardListResponseInterface> {
    const cachedData = localStorage.getItem(this.localStorageKey);
    if (cachedData) {
      return of(JSON.parse(cachedData));
    } else {
      const headers = new HttpHeaders({
        'Authorization': 'User 1',
        'Content-Type': 'application/json'
      });

      return this.http.get<CardListResponseInterface>(this.getListUrl, {headers}).pipe(
        tap((data) => {
          localStorage.setItem(this.localStorageKey, JSON.stringify(data));
        })
      );
    }
  }

  getItem(id: any): Observable<ItemDetailResponseInterface> {
    const headers = new HttpHeaders({
      'Authorization': 'User 1',
      'Content-Type': 'application/json'
    });
    return this.http.get<ItemDetailResponseInterface>(this.getItemUrl + `/${id}`, {headers});
  }
}
