import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Store } from 'store';

import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { AuthService } from '../../../../auth/shared/services/auth/auth.service';

export interface Workout {
  name: string,
  type: string, // Endurance | strength
  strengt: any,
  endurance: any,
  timestamp: number,
  // Firebase props
  $key: string,
  $exists: () => boolean // Function die bool returned
}

@Injectable()
export class WorkoutsService {

  // Als db list aanpast gebruiken we .do() om de store up te daten
  workouts$: Observable<Workout[]> = this.db.list(`workouts/${this.uid}`)
    .do(next => this.store.set('workouts', next));

  constructor(
    private store: Store,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) { }

  get uid() {
    return this.authService.user.uid;
  }

  getWorkout(key: string) {
    if (!key) return Observable.of({});
    return this.store.select<Workout[]>('workouts')
      .filter(Boolean) // If store workouts is leeg, stop stream
      .map(workouts => workouts.find((workout: Workout) => workout.$key === key));
  }

  addWorkout(workout: Workout) {
    return this.db.list(`workouts/${this.uid}`).push(workout);
  }

  updateWorkout(key: string, workout: Workout) {
    return this.db.object(`workouts/${this.uid}/${key}`).update(workout);
  }

  removeWorkout(key: string) {
    return this.db.list(`workouts/${this.uid}`).remove(key);
  }

}
