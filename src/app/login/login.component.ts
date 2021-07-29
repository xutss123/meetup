import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../service/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  username= '';
  password= '';
  errorMessage = 'Invalid Credentials';
  successMessage = 'Login Successful.';
  invalidLogin = false;
  loginSuccess = false;
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  
  constructor(private authenticationService: AuthenticationService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

  }


  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     this.disableLogin();
  //     return 'You must enter a value';
  //   }
  //   this.disableLogin();
  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }
  private disableLogin() {
    this.loginSuccess = false;
    this.invalidLogin = true;
  }

  onSubmit(){
      // this.authenticationService.authenticationService(this.username, this.password).subscribe((result)=> {
      //   this.invalidLogin = false;
      //   this.loginSuccess = true;
      //   this.successMessage = 'Login Successful.';
      //   this.router.navigate(['/dashboard']);
      // }, () => {
      //   this.disableLogin();
      // }); 
      this.router.navigate(['/dashboard']);
    }
}
