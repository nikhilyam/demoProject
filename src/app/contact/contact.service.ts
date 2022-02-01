import { Injectable, OnDestroy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export class Contact {
  constructor(public id: number, public name: string) {}
}
const CONTACTS: Contact[] = [
  new Contact(21, 'Nikhil S Y'),
  new Contact(22, 'Iulia'),
  new Contact(23, 'Karina'),
];
const FETCH_LATENCY = 500;
@Injectable()
export class ContactService implements OnDestroy {
  constructor() {
    console.log('ContactService instance created.');
  }
  ngOnDestroy() {
    console.log('ContactService instance destroyed.');
  }

  getContacts(): Observable<Contact[]> {
    return of(CONTACTS).pipe(delay(FETCH_LATENCY));
  }

  getContact(id: number | string): Observable<Contact> {
    const contact$ = of(CONTACTS.find((contact) => contact.id === +id)!);
    return contact$.pipe(delay(FETCH_LATENCY));
  }
}
