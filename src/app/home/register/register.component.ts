import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationErrors: string[] = [];
  user = new User();

  constructor(
    private users: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(user): void {
    console.log(user)
    console.log(this.user)
    this.registrationErrors.length = 0;
    if(user.firstname == undefined){
      this.registrationErrors.push('First name is required')
      console.log(this.registrationErrors)
    }
    if(user.lastname == undefined){
      this.registrationErrors.push('Last name is required')
    }

    if(this.registrationErrors.length ==0){
      this.users.register(this.user)
      .then(user => {
        this.router.navigate(['/dashboard']);
      })
      .catch(() => {
      })
    }
  }


}
