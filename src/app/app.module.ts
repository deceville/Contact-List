import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

var firebaseConfig: {
  apiKey: "AIzaSyC9LBMJRD8lm0tJuHb9ilFcJnWZTNnF2i8",
  authDomain: "contact-list-fe1da.firebaseapp.com",
  databaseURL: "https://contact-list-fe1da.firebaseio.com",
  projectId: "contact-list-fe1da",
  storageBucket: "contact-list-fe1da.appspot.com",
  messagingSenderId: "750636619767"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
