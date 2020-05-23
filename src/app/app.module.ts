import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './pages/main/main.component';

import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {FormsModule} from "@angular/forms";

import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {OrderConfirmDialogComponent} from './components/order-confirm-dialog/order-confirm-dialog.component';
import {OrderRegisterDialogComponent} from './components/order-register-dialog/order-register-dialog.component';
import { CustomSnackbarComponent } from './components/custom-snackbar/custom-snackbar.component';
import { OrderInfoDialogComponent } from './components/order-info-dialog/order-info-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OrderConfirmDialogComponent,
    OrderRegisterDialogComponent,
    CustomSnackbarComponent,
    OrderInfoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
