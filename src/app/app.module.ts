import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HttpClientModule,
  HttpClient,
  HttpClientJsonpModule,
} from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationDialogComponent } from './components/registration/registration-dialog/registration-dialog.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesDialogComponent } from './components/movies/movies-dialog/movies-dialog.component';
import { MapsComponent } from './components/maps/maps.component';

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    RegistrationDialogComponent,
    MoviesComponent,
    MoviesDialogComponent,
    MapsComponent,
  ],
  entryComponents: [RegistrationDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule,
    GoogleMapsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [TranslateModule],
  providers: [TranslateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
