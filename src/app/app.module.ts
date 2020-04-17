import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { Store } from "store";

// feature modules
import { AuthModule } from "../auth/auth.module";

// containers
import { AppComponent } from "./containers/app/app.component";

// components
import { AppHeaderComponent } from "./components/app-header/app-header.component";
import { AppNavComponent } from "./components/app-nav/app-nav.component";

import { HealthModule } from "../health/health.module";

// routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'schedule' }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule,
    HealthModule,
  ],
  // Hier komen je componenten
  //De selector in een component is hoe je hem op page moet zetten
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavComponent,
  ],
  providers: [Store],
  bootstrap: [AppComponent],
})
export class AppModule { }
