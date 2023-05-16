import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthguardService implements CanActivate {
    constructor(private router: Router, private angf: AngularFireAuth) { }

    
    canActivate(): Observable<any>{

        return this.angf.authState.pipe(
            map(auth=>{
                if(!auth){
                    this.router.navigate(["/login"]);
                    return false;
                }else{
                    return true;
                }
            }

            )
        )
    }

    



}