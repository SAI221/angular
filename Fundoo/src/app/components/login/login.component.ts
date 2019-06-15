import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  hide = true;

  constructor(private formBuilder: FormBuilder,
              private handler: HttpService,
              private router: Router) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  public onSubmit(user) {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.router.navigate(['/dashboard']);

    this.handler.login(user).subscribe(res => {
      console.log('res::', res.headers.get('token'));
      localStorage.setItem('token', res.headers.get('token'));
    }, (error) => console.error(error));
  }

}
