import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from '@app/services/post.service';
import { Post } from '@app/models/post';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {

  posts: Post[] = []
  private postsUpdatedSubscription: Subscription;

  constructor(private postService: PostService) {

    this.postsUpdatedSubscription =
      this.postService.getPostsUpdatedObservable().subscribe(() => {
        this.loadPosts();
      });
  }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getAllPosts().subscribe(
      (response) => {
        this.posts = response;
      },
      (e: any) => {}
    );
  }

  getPostById(id: number) {
    console.log(id)
  }

}
