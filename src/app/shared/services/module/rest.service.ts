import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModuleType } from "@shared/enums";
import { Entity } from "@shared/models/entity";

@Injectable()
export class RestService {
  constructor(private httpClient: HttpClient, private endpoint: string, private moduleType: ModuleType) {
  }

  protected get<T>(path: string, { params, headers }: { params?: HttpParams, headers?: HttpHeaders } = {}): Observable<T> {
    return this.httpClient.get<T>(this.endpoint + this.moduleType + path, { params, headers });
  }

  protected post<T>(path: string, entity: Entity): Observable<T> {
    return this.httpClient.post<T>(this.endpoint + this.moduleType + path, entity);
  }

  protected put<T>(path: string, entity: Entity): Observable<T> {
    return this.httpClient.put<T>(this.endpoint + this.moduleType + path, entity);
  }

  protected delete<T>(path: string): Observable<T> {
    return this.httpClient.delete<T>(this.endpoint + this.moduleType + path);
  }
}
