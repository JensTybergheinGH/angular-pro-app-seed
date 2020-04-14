import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { Store } from "store";

// feature modules

// containers
import { AppComponent } from "./containers/app/app.component";

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(ROUTES)],
  declarations: [AppComponent],
  providers: [Store],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
  const firebaseConfig = {
    apiKey: "AIzaSyACMXswVAD2y8ENOHtoOjcSqr-udoZuzHk",
    authDomain: "fitness-app-8effb.firebaseapp.com",
    databaseURL: "https://fitness-app-8effb.firebaseio.com",
    projectId: "fitness-app-8effb",
    storageBucket: "fitness-app-8effb.appspot.com",
    messagingSenderId: "603010472530",
    appId: "1:603010472530:web:cbb4b73699107966da1d8b"
  };
*/
