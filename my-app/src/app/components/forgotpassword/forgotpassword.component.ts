import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { UserService } from 'src/app/core/service/user/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  forgotpasswordForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  hide = true;


  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
              private router: Router, private userService: UserService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.forgotpasswordForm = this.formBuilder.group({
      email: ['', Validators.required],
    });
  }

  get f() { return this.forgotpasswordForm.controls; }

  onSubmit(email) {
    this.submitted = true;

    if (this.forgotpasswordForm.invalid) {
      return;
    }
    console.log(email);
    this.userService.forgotpassword(email).subscribe(response => {
      console.log('Reset password intiated');
      this.snackBar.open('Email to reset your password has been sent your email-id', 'OK', {
        duration: 3000,
      });

    }, (error) => {
      console.log('Couldn\'t log in ');
      this.snackBar.open('Email couldn\'t be sent', 'OK', {
        duration: 3000,
      });
    });
  }
}
