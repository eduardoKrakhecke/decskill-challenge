import { Component } from '@angular/core';
import { PostService } from '@app/services/post.service';
import { Post } from '@app/models/post';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  post = new Post();

  constructor(private postService: PostService) {
  }

  createPost() {
    this.postService.savePost(this.post).subscribe(
      (response: string)=> {
       alert(response)
        this.post = new Post()
      },
      (e: string) =>{}
    )
  }

}
