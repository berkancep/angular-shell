import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { Post } from "@shared/models";
import { ModuleType } from "@shared/enums";

@Injectable()
export class PostService extends RestService {
  constructor(httpClient: HttpClient) {
    super(httpClient, environment.endpoint, ModuleType.POST);
  }

  getPosts(): Observable<Post[]> {
    return this.get<Post[]>('');
  }

  getPostById(id: number): Observable<Post> {
    return this.get<Post>('/' + id);
  }

  createPost(entity: Post): Observable<Post> {
    return this.post<Post>('', entity);
  }

  updatePost(entity: Post): Observable<Post> {
    return this.put<Post>('/' + entity.id, entity);
  }

  deletePost(id: number): Observable<null> {
    return this.delete<null>('/' + id)
  }

  getPostsByUserIdAndTitle(): Observable<Post[]> {
    const params = new HttpParams().append('userId', 6).append('title', 'ut quo aut ducimus alias');
    const headers = new HttpHeaders().append('app-id', '123456');
    return this.get<Post[]>('', { params, headers });
  }
}
