import { Component } from '@angular/core';
import { NotifierService } from '../../core/notifier.service';

@Component({
  selector: 'fg-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.sass']
})
export class NotifierComponent {
  notifications: Array<Object>;

  constructor(private notifier: NotifierService){


    this.notifications = this.notifier.get();


    //use
    // - this.notifier.error('Błąd!');
    // - this.notifier.warning('Ostrzeżenie!');
    // - this.notifier.success('Sukcess!');
  }

  close(notif) {
    this.notifier.remove(notif);
  }
}
