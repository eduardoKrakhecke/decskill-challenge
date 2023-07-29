import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from '@app/services/post.service';
import { Post } from '@app/models/post';
import {DialogService} from "@app/components/dialog/dialog.service";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {

  posts: Post[] = []
  private postsUpdatedSubscription: Subscription;

  constructor(
    private dialogService: DialogService,
    private postService: PostService) {

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

  removePostById(id: number) {
    this.postService.removePostById(id).subscribe(
      (message) => {
        console.log(message);
      },
      (e: any) => {}
    );
  }

}
