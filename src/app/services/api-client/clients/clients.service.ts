import { Injectable } from '@angular/core';
import { IClientService } from './iclients.service';
import { Observable } from 'rxjs';
import { SaveClientRequest, SaveClientResponse, UpdateClientRequest, ListClientResponse, DetailClientResponse } from './client.models';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService  implements IClientService {



  private readonly basePath = enviroment.apiurl
  constructor(private http: HttpClient) { }

  save(request: SaveClientRequest): Observable<SaveClientResponse> {
    return this.http.post<SaveClientResponse> ('$(this.basePath)clients', request);
  }
  update(id: number, request: UpdateClientRequest): Observable<UpdateClientRequest> {
    return this.http.put<UpdateClientRequest> ('$(this.basePath)clients/${id}', request);;
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void> ('$(this.basePath)clients${id}');
  }
  list(): Observable<ListClientResponse[]> {
    return this.http.get<ListClientResponse[]> ('$(this.basePath)clients');
  }
  findByID(id: number): Observable<DetailClientResponse> {
    return this.http.get<DetailClientResponse> ('$(this.basePath)clients/${id}');
  }
}
