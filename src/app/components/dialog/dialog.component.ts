import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogService } from '@app/components/dialog/dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  @Input() title: string;
  @Input() message: string;


  constructor(public dialogService: DialogService) {}

  confirm(): void {
    this.dialogService.confirmAction(true);
    this.closeModal();
  }

  cancel(): void {
    this.dialogService.confirmAction(false);
    this.closeModal();
  }

  private closeModal(): void {
    this.dialogService.closeModal();
  }

}
