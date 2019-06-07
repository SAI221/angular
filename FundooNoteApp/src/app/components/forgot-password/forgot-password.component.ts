import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';
import { HttpService } from 'src/app/service/http.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
              private router: Router, private userService: UserServiceService,
              private httpUtil: HttpService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      emailId: ['', Validators.required]
    });
  }

  get f() { return this.forgotForm.controls; }

  onSubmit(user) {
    this.submitted = true;

    if (this.forgotForm.invalid) {
      return;
    }
    console.log(user);
    this.userService.forgotPassword(user).subscribe(response => {
      console.log('reset password mail sent to your email');
      this.snackBar.open('open your email to reset password', 'Ok', { duration: 2000 });
    }, error => {
      this.snackBar.open('error', 'please enter the registered email', { duration: 2000 });
    });
  }
}
