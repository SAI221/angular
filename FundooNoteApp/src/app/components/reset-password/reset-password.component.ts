import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { MatSnackBar } from '@angular/material';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetForm: FormGroup;
  loading = false;
  submitted = false;
  public id = this.route.snapshot.params.id;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
              private router: Router, private userService: UserServiceService,
              private httpUtil: HttpService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  get f() { return this.resetForm.controls; }

  onSubmit(user) {
    this.submitted = true;

    if (this.resetForm.invalid) {
      return;
    }
// tslint:disable-next-line: triple-equals
    if (this.resetForm.value.password != this.resetForm.value.confirmpassword) {
      this.snackBar.open('failed', 'both password should be same', {
        duration: 2000
      });
      return;
    }
    console.log(user);
    this.userService.resetPassword(user, this.id).subscribe(response => {
      this.router.navigate(['/login']);
      this.snackBar.open('sucess', 'password reset successfully', {
        duration: 2000
      });
      console.log('reset successful', response);
    },
      error => {
        this.snackBar.open('error', 'error to reset', { duration: 2000 });
        console.log('error to reset', error);
      }
    );
  }

}
