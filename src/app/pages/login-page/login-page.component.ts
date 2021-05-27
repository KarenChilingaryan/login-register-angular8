import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  validateForm: FormGroup;
  aSub: Subscription;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    this.validateForm.disable();
    this.aSub = this.authService.login(this.validateForm.value).subscribe(
      (data) => {
        data.forEach(m => {
          if (m.password == this.validateForm.value.password && m.email == this.validateForm.value.email){
            this.router.navigate(['/home']);
          }
        });
      },
      error => {
        console.warn(error.error.message);
        this.validateForm.enable();
      }
    );
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }
}
