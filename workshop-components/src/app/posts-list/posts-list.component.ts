import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../types/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];
  isLoading: boolean = true;

  // TODO -> create post item and theme item
  constructor(private api: ApiService) {

  }

  ngOnInit(): void {
    // this.api.getPosts(5).subscribe(posts => { // getPosts() <--- the number we put is the max number of posts
    //   // that will be shown
    //   // console.log(posts);
    //   this.posts = posts;
    //   setTimeout(() => {
    //     this.isLoading = false;
    //   },2000)
    // })

    this.api.getPosts(5).subscribe({
      next: (posts) => {
        this.posts = posts;
        setTimeout(() => {
          this.isLoading = false;
        },2000)
      },
      error: (err) => {
        console.log("Error ", err);
      },
    })
  }
}
