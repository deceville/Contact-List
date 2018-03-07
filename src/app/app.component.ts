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

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.contactsCol = this.afs.collection('contacts');
    this.contacts = this.contactsCol.valueChanges();
  }

  addContact(){
    this.afs.collection('contacts').doc('contact-id').set({'firstName': this.firstName, 'secondName': this.secondName, 'phoneNum': this.phoneNum, 'mobileNum': this.mobileNum, 'email': this.email, 'homeAddress': this.homeAddress, 'streetName': this.streetName, 'city': this.city, 'province': this.province, 'country': this.country, });
  }
}
