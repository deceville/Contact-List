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

interface ContactId extends Contact{
  id: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contactsCol: AngularFirestoreCollection<Contact>;
  contacts: any;
  contactDoc: AngularFirestoreDocument<Contact>;
  contact: Observable<Contact>;

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
    this.contacts = this.contactsCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Contact;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });
  }

  addContact(){
    this.afs.collection('contacts').doc('contact-id').set({'firstName': this.firstName, 'secondName': this.secondName, 'phoneNum': this.phoneNum, 'mobileNum': this.mobileNum, 'email': this.email, 'homeAddress': this.homeAddress, 'streetName': this.streetName, 'city': this.city, 'province': this.province, 'country': this.country, });
  }

  getContact(contactId){
    this.contactDoc = this.afs.doc('contacts/' + contactId);
    this.contacts = this.contactsCol.valueChanges();
  }

  deleteContact(contactId){
    this.afs.doc('contacts/'+ contactId).delete();
  }
}
