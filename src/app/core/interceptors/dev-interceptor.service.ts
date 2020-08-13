import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {IDataResponse} from '../../dev/dev-api.service';

@Injectable({
  providedIn: 'root'
})
export class DevInterceptorService implements HttpInterceptor {
  fakeData: IDataResponse = {
    data: [
      {id: 0, value: 'value-1', bool: true},
      {id: 1, value: 'value-2', bool: false},
      {id: 2, value: 'value-3', bool: true},
      {id: 3, value: 'value-4', bool: false},
      {id: 4, value: 'value-5', bool: true},
    ]
  };

  constructor() { }

  intercept(req: HttpRequest<IDataResponse>, next: HttpHandler): Observable<HttpEvent<IDataResponse>> {
    console.log(req);
    if (req.method === 'GET' && req.url === '/dev') {
      return of( new HttpResponse({ status: 200, body: this.fakeData }) );
    }
  }
}
