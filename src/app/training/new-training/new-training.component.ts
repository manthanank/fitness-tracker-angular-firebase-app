import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UIService } from '../../shared/ui.service';
import { TrainingService } from '../training.service';
import * as fromTraining from '../training.reducer';
import * as fromRoot from '../../app.reducer';
import { Exercise } from '../exercise.model';
import { MaterialModule } from '../../material.module';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-new-training',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgIf,
    AsyncPipe,
    NgFor,
  ],
  templateUrl: './new-training.component.html',
  styleUrl: './new-training.component.scss',
})
export class NewTrainingComponent implements OnInit {
  exercises$: Observable<Exercise[]>;
  isLoading$: Observable<boolean>;

  constructor(
    private trainingService: TrainingService,
    private uiService: UIService,
    private store: Store<fromTraining.State>
  ) {
    this.exercises$ = this.store.select(fromTraining.getAvailableExercises);
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
  }

  ngOnInit() {
    this.fetchExercises();
  }

  fetchExercises() {
    this.trainingService.fetchAvailableExercises();
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }
}
