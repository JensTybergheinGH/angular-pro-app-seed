
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nav',
  // Dit zorgt ervoor dat angular ons component niet continue checked.
  // Enkel bij input zal hij kijken naar changes
  // Dit zullen we meestal doen bij stateless components die observables gebruiken
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['app-nav.component.scss'],
  template: `
    <div class="app-nav">
      <div class="wraper">
        <a routerLink="schedule" routerLinkActive="active">Schedule</a>
        <a routerLink="meals" routerLinkActive="active">Meals</a>
        <a routerLink="workouts" routerLinkActive="active">Workouts</a>
      </div>
    </div>
  `
})
export class AppNavComponent {
  constructor() { }
}
