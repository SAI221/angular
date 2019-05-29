import { Component, OnInit } from '@angular/core';

import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { HttpHandlerService } from 'src/app/service/http-handler.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

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
  zone: any;


  constructor(private formBuilder: FormBuilder,
              private service: HttpHandlerService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() { return this.loginForm.controls; }

  public onSubmit(user) {

    this.submitted = true;

    if (this.loginForm.invalid) {

      return;
    }
    this.service.login(user).subscribe(res => {

      localStorage.setItem('token', res.headers.get('token'));


      if (localStorage.getItem('token') != null) {

        this.router.navigate(['./home']);
      }

    }, (error) => console.error(error));
  }


}
