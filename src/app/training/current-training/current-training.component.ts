import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { TrainingService } from '../training.service';
import * as fromTraining from '../training.reducer';
import { MaterialModule } from '../../material.module';
@Component({
  selector: 'app-current-training',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './current-training.component.html',
  styleUrl: './current-training.component.scss',
})
export class CurrentTrainingComponent implements OnInit {
  @ViewChild('dialogContent') templateRef!: TemplateRef<any>;
  progress = 0;
  timer: any = 0;
  passedData = { progress: 0 }; // Initialize passedData

  constructor(
    private dialog: MatDialog,
    private trainingService: TrainingService,
    private store: Store<fromTraining.State>
  ) {}

  ngOnInit() {
    this.startOrResumeTimer();
  }

  startOrResumeTimer() {
    this.store
      .select(fromTraining.getActiveTraining)
      .pipe(take(1))
      .subscribe((ex) => {
        if (ex) {
          const step = (ex.duration / 100) * 1000;
          this.timer = setInterval(() => {
            this.progress = this.progress + 1;
            if (this.progress >= 100) {
              this.trainingService.completeExercise();
              clearInterval(this.timer);
            }
          }, step);
        }
      });
  }

  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(this.templateRef, {
      data: {
        progress: this.progress,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.trainingService.cancelExercise(this.progress);
      } else {
        this.startOrResumeTimer();
      }
    });
  }
}
