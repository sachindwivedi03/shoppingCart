import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';

@Injectable({providedIn: 'root'})
export class AuthService{

    constructor(private router: Router){}

    user = new BehaviorSubject<User>(null);

    newUser(email: string, id: string){
        const newUser = new User(email, id);
        this.user.next(newUser);
        this.router.navigate(['./shop']);
    }

    logout(){
        this.user.next(null);
        this.router.navigate(['./auth']);
    }
    
}