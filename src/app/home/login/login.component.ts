import { Component, OnInit } from '@angular/core';
import { Userlogin } from '../../userlogin';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginErrors: string[] = [];
  userlogin = new Userlogin()

  constructor(
    private users: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(userlogin): void{
    this.users.login(this.userlogin)
    .then(userlogin => {
      this.router.navigate(['/dashboard']);
    })
    .catch(()=>{
      this.loginErrors.length = 0;
      this.loginErrors.push("Incorrect username or password, please try again")
      console.log('failed')
    })
  }
}
