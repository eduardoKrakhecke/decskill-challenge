import { Component, EventEmitter, Input, Output } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post: any;
  @Output() cardClicked: EventEmitter<number> = new EventEmitter<number>();

  timeElapsed: string = '';

  ngOnInit() {
    this.updateElapsedTime();

    interval(10000).subscribe(() => {
      this.updateElapsedTime();
    });
  }

  updateElapsedTime() {
    const createdAtTimestamp = new Date(this.post.created_at).getTime();
    const currentTimestamp = new Date().getTime();
    const elapsedSeconds = Math.floor((currentTimestamp - createdAtTimestamp) / 1000);

    if (elapsedSeconds < 60) {
      this.timeElapsed = `${elapsedSeconds} segundos atrás`;
    } else {
      const createdAtDate = new Date(this.post.created_at);
      this.timeElapsed = createdAtDate.toLocaleString();
    }
  }

  handleClick(): void {
    this.cardClicked.emit(this.post.id);
  }

}
