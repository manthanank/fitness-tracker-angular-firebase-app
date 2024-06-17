import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import * as fromRoot from '../../app.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UIService } from '../../shared/ui.service';
import { AuthService } from '../auth.service';
import { AsyncPipe, NgIf } from '@angular/common';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgIf,
    AsyncPipe,
    // AngularFireAuthModule,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit {
  maxDate = new Date();
  isLoading$: Observable<boolean> = new Observable();

  constructor(
    private authService: AuthService,
    private uiService: UIService,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit() {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit(form: NgForm) {
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password,
    });
  }
}
