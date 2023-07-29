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

  showModal: boolean = false;
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

  onCardClicked(postId: any): void {
    console.log('ID do post clicado:', postId);

  }
  onDelete(): void {
    this.showModal = true;
  }

  onConfirm(): void {
    // Aqui você pode implementar a lógica para ação de confirmação, como excluir um item.
    // Por exemplo: this.deleteItem();
    this.showModal = false;
  }

  onCancel(): void {
    this.showModal = false;
  }

}
