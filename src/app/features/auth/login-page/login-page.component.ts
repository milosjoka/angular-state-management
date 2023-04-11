import {Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store'
import {login} from '../state/auth.actions';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private store: Store,
    private formBuilder: FormBuilder
  ) {
  }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() { return this.form.controls; }
  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.store.dispatch(login({
      username: this.formControls['username'].value,
      password: this.formControls['password'].value
    }));
  }

}
