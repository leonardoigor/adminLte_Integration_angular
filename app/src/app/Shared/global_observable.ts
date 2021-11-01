import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({ providedIn: 'root' })
export class GlobalObservable<T> {
  private data?: T;
  private observable: Subject<T> = new Subject<any>();

  public constructor() {
    // this.observable = Observable.create((observer: Subject<T>) => {
    //   this.observable = observer;
    //   console.log(observer);
    //   observer.next(data);
    //   if (data) {
    //     this.data = data;
    //     this.setDataAndNotify(data);
    //   }
    // });
    // this.setDataAndNotify(data);
  }
  sendMessage(message: T | null = null) {
    if (message) {
      this.observable.next(message);
    }
    return this;
  }
  setData(data: T) {
    this.data = data;
  }
  getData(): T | null {
    return this.data || null;
  }
  clearMessages() {
    this.observable.next();
  }

  getMessage(): Observable<T> {
    return this.observable.asObservable();
  }
  getCurrentState(): T | undefined {
    return this.sendMessage().data;
  }
}
