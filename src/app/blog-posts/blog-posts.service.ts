import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BlogPostsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getPosts(): Observable<Post[]> {
    console.log('inside blog posts');
    return this.httpClient.get<Post[]>(`/api/posts`);
  }
}
