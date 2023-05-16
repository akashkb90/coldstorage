import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AngularFireAuth } from "@angular/fire/compat/auth";

import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private angf: AngularFireAuth) { }

    login(email: string, password: string) {

        return new Promise((resolve, reject) => {  
            
            const auth = getAuth()
            
            signInWithEmailAndPassword(auth,email, password).then(data => {
                resolve(data);
            }), err => reject(err)
        })
    }


    logout() {
           this.angf.signOut();
    }


    register(email: string, password: string) {
        return new Promise((resolve, reject) => {
            this.angf.createUserWithEmailAndPassword(email, password).then(data => {
                resolve(data);
            }), err => {
                console.log(err);
                reject(err)
            }
        })

       
    }

    getAuth() {
      return  this.angf.authState.pipe(map(auth => auth));
    }

}