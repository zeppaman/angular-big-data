import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SourceDBService {

  constructor(protected  client:HttpClient) { }

  downloadData()
  {
    return this.client.get<any>('/assets/data/1000.json');
  }
}
