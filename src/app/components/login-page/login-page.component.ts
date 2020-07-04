import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {

  public showPassword: boolean = false;
  public form: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder) {
    this.form = fb.group({
      login: fb.control('', [Validators.required]),
      password: fb.control('', [Validators.required]),
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.form.invalid && this.form.touched) {
      // TODO: отправлять запрос на сервер для получения токена
      this.router.navigate(['/dashboard']);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
