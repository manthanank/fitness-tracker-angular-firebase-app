import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TrainingService } from './training.service';
import * as fromTraining from './training.reducer';
import { MaterialModule } from '../material.module';
import { PastTrainingsComponent } from './past-trainings/past-trainings.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { AsyncPipe, NgIf } from '@angular/common';
@Component({
  selector: 'app-training',
  standalone: true,
  imports: [
    MaterialModule,
    PastTrainingsComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    AsyncPipe,
    NgIf,
  ],
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss',
})
export class TrainingComponent implements OnInit {
  ongoingTraining$: Observable<boolean> = new Observable();

  constructor(
    private trainingService: TrainingService,
    private store: Store<fromTraining.State>
  ) {}

  ngOnInit() {
    this.ongoingTraining$ = this.store.select(fromTraining.getIsTraining);
  }
}
