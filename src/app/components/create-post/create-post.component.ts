import { Component } from '@angular/core';
import { PostService } from '@app/services/post.service';
import { Post } from '@app/models/post';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  post = new Post()
  characterCount = 130;

  constructor(private postService: PostService) {}

  createPost() {
    this.post.created_at = Date.now()
    this.postService.savePost(this.post).subscribe(
      (response: string)=> {
        console.log(response)
        this.post = new Post()
        this.characterCount = 130;
      },
      (e: string) =>{}
    )
  }

  isEmpty() {
    return !this.post.text || this.post.text.trim() === '';
  }

  updateCharacterCount() {
    this.characterCount = 130 - (this.post.text ? this.post.text.length : 0);
  }

}
