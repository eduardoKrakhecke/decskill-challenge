import { Injectable } from '@angular/core';
import { Observable, of, Subject  } from 'rxjs';
import { keys } from '@app/constants/keys';
import { Post } from '@app/models/post';
import { messages } from '@app/constants/messages';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsUpdatedSubject = new Subject<void>();

  constructor() { }

  savePost(post: Post): Observable<string> {
    post.id = Math.random();
    const existingPostsString = localStorage.getItem(keys.post);
    let existingPosts: Post[] = [];

    if (existingPostsString) {
      existingPosts = JSON.parse(existingPostsString);
    }
    existingPosts.push(post);
    localStorage.setItem(keys.post, JSON.stringify(existingPosts));
    this.postsUpdatedSubject.next();
    return of (messages.SUCCESS)
  }

  getPostsUpdatedObservable(): Observable<void> {
    return this.postsUpdatedSubject.asObservable();
  }

  getAllPosts(): Observable<Post[]> {
    const existingPostsString = localStorage.getItem(keys.post);
    if (existingPostsString) {
      const existingPosts: Post[] = JSON.parse(existingPostsString);
      return of(existingPosts);
    } else {
      return of([]);
    }
  }

  getPostById(id: number): Observable<Post | null> {
    const existingPostsString = localStorage.getItem(keys.post);

    if (existingPostsString) {
      const existingPosts: Post[] = JSON.parse(existingPostsString);
      const post = existingPosts.find((p) => p.id === id);
      return of(post || null);
    } else {
      return of(null);
    }
  }
}
