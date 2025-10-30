import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: any[] = [];
  private timeOut : any;
  private messageSubject = new Subject<any[]>();

  constructor() {
    this.messageSubject.next(this.messages);
  }

  getMessagesObservable() {
    return this.messageSubject.asObservable();
  }
  addMessage(message: any) {
    this.messages.push(message);
    
    this.messageSubject.next(this.messages);
    
  
      this.timeOut = setTimeout(() => {
        this.clearMessages()
      }, 6000);


  }
  clearMessages() {
    this.messages = [];
  }

}
