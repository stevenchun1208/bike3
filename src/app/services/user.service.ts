import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CookieService } from 'ngx-cookie';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from '../user';
import { Userlogin } from '../userlogin'

@Injectable()
export class UserService {
  private base = '/api/user/';

  constructor(
    private http: Http,
    private cookieService: CookieService,
) { }

register(user: User): Promise<User> {
  return this.http.post(this.base+ 'register', user)
          .map(response => response.json())
          .toPromise();
}

login(userlogin: Userlogin): Promise<Userlogin>{
  return this.http.post(this.base+ 'login', userlogin)
          .map(response => response.json())
          .toPromise();
}

logout(){
  console.log('delete called')
  return this.http.delete(this.base + 'logout')
          .map(response => response.json())
          .toPromise();

}
}
