import { Component, OnInit } from '@angular/core';

import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpHandlerService } from 'src/app/service/http-handler.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  returnUrl: string;
  hide = true;

  constructor(private formBuilder: FormBuilder,
              private service: HttpHandlerService,
              private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      userName: ['', Validators.required],
      mobileNo: ['', Validators.required]
    });
  }
  get f() { return this.registerForm.controls; }

  public onSubmit(user) {
    console.log(this.registerForm);
    this.submitted = true;
    if (this.registerForm.invalid) {
      console.log( 'invalid register' );
      return;
    }
    this.service.registration(user).subscribe(res => {
      console.log('res::', res);
      // localStorage.setItem('token', res.headers.get('token'));
      this.router.navigate(['/login']);
    }, (error) => console.error(error));
  }

}
