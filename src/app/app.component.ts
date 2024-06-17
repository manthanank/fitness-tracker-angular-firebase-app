import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MaterialModule } from './material.module';
import { AuthService } from './auth/auth.service';
import { UIService } from './shared/ui.service';
import { TrainingService } from './training/training.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    MaterialModule,
  ],
  templateUrl: './app.component.html',
  providers: [AuthService, TrainingService, UIService],
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  title = 'fitness-tracker-angular-firebase-app';

  ngOnInit() {
    this.authService.initAuthListener();
  }
}
