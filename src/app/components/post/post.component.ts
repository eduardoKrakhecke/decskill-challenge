import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post: any;
  @Output() cardClicked: EventEmitter<number> = new EventEmitter<number>();

  onClick(): void {
    this.cardClicked.emit(this.post.id);
  }

}
