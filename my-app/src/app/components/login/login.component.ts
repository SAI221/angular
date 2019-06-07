import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/service/user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  hide = true;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  get f() { return this.loginForm.controls; }

  onSubmit(user) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      console.log('invalid');
    }
    console.log(user);
    this.userService.login(user).subscribe(response => {
      console.log(response);

      console.log('login successfull');
      console.log(response.headers.get('token'));
      localStorage.setItem('token', response.headers.get('token'));
      console.log(localStorage.getItem('token'));
      this.router.navigate(['/home']);

    },
    (error) => {
      console.log('Could nt log in');

    });
  }
}
