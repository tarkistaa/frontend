import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})

export class StartPageComponent implements OnInit {

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
      this.router.navigate(['/home']);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
