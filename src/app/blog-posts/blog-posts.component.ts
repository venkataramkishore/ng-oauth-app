import { Component, OnInit } from '@angular/core';
import { BlogPostsService } from './blog-posts.service';
import { Observable } from 'rxjs/Observable';
import { Post } from './post.model';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements OnInit {

  constructor(private blogPostService: BlogPostsService) { }

  public $posts: Observable<Post[]>;

  ngOnInit() {
    this.$posts = this.blogPostService.getPosts();
  }

}
