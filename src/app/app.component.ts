import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Contact {
  firstName: string;
  secondName: string;
  phoneNum: string;
  mobileNum: string;
  email: string;
  homeAddress: string;
  streetName: string;
  city: string;
  province: string;
  country: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contactsCol: AngularFirestoreCollection<Contact>;
  contacts: Observable<Contact[]>;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.contactsCol = this.afs.collection('contacts');
    this.contacts = this.contactsCol.valueChanges();
  }
}
