import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

   showModal = false;
   confirmationSource = new Subject<boolean>();

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  isModalOpen(): boolean {
    return this.showModal;
  }

  getConfirmation(): Observable<boolean> {
    return this.confirmationSource.asObservable();
  }

  confirmAction(confirm: boolean): void {
    this.confirmationSource.next(confirm);
  }

}
