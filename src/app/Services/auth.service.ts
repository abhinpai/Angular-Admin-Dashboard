import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { auth } from "firebase/app";
import { AngularFireAuth } from "angularfire2/auth";

import { User } from "firebase";

@Injectable({
  providedIn: "root"
})
export class AuthService {

  loggedIn:  boolean = false;

  user: User;

  constructor(public afAuth: AngularFireAuth, public router: Router) {}

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  AuthLogin(provider) {
    return this.afAuth.auth
      .signInWithPopup(provider)
      .then(result => {
        console.log(result);
        this.router.navigateByUrl('');
        this.loggedIn = true;
      })
      .catch(error => {
        console.log(error);
      });
  }

  anonymousLogin() {
    auth().signInAnonymously().then(data =>{
      console.log(data);
      
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }

  isAuthenticated() {
    return this.loggedIn;
  }
}
