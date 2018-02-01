import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPostsRoutingModule } from './blog-posts-routing.module';
import { BlogPostsComponent } from './blog-posts.component';
import { BlogPostsService } from './blog-posts.service';

@NgModule({
  imports: [
    CommonModule,
    BlogPostsRoutingModule
  ],
  declarations: [BlogPostsComponent],
  providers: [
    BlogPostsService
  ]
})
export class BlogPostsModule { }
