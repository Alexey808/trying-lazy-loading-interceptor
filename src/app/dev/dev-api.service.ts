import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

export interface IData {
  id: number;
  value: string | number;
  bool: boolean;
}

export interface IDataResponse {
  data: IData[];
}

@Injectable({
  providedIn: 'root'
})
export class DevApiService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getData(): Observable<IData[]> {
    return this.httpClient.get('/dev').pipe(
      map((item: IDataResponse) => item.data)
    );
  }
}
