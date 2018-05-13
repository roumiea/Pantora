import {Card} from './card';
import {MessageService} from './message.service';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';




@Injectable()
export class ItemsService {
  private itemsUrl = 'assets/items.json';  // URL to web api


  constructor(
    private http: HttpClient,
    private messageService: MessageService) {}

  getItems(): Observable<any> {
    console.log('itemsService.getItems');
    return this.http.get<any>(this.itemsUrl)
      .pipe(

        map(
        data => data.list
      ))

      ;
  }

}

