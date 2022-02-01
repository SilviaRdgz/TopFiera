import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { ServiceWorkerModule } from '@angular/service-worker';
import { APIService } from 'src/SERVICES/API/api.service';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { Top40Component } from '../COMPONENTS/top40/top40.component';
import { TrackDetailsComponent } from '../COMPONENTS/track-details/track-details.component';
import { HomeComponent } from '../COMPONENTS/home/home.component';
import { NavComponent } from '../COMPONENTS/nav/nav.component';
import { AlbumsComponent } from '../COMPONENTS/albums/albums.component';
import { MoviesComponent } from '../COMPONENTS/movies/movies.component';
import { TipParadeComponent } from '../COMPONENTS/tip-parade/tip-parade.component';
import { FooterComponent } from '../COMPONENTS/footer/footer.component';
import { SafePipe } from '../pipes/safe/safe.pipe';
import { HeaderComponent } from '../COMPONENTS/header/header.component';
import { Top40MoviesDetailsComponent } from '../COMPONENTS/top40-movies-details/top40-movies-details.component';
import { TipParadeDetailsComponent } from '../COMPONENTS/tip-parade-details/tip-parade-details.component';
import { AlbumDetailsComponent } from '../COMPONENTS/album-details/album-details.component';
import { BackgroundComponent } from '../COMPONENTS/background/background.component';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        Top40Component,
        TrackDetailsComponent,
        HomeComponent,
        routingComponents,
        NavComponent,
        AlbumsComponent,
        MoviesComponent,
        TipParadeComponent,
        FooterComponent,
        SafePipe,
        HeaderComponent,
        Top40MoviesDetailsComponent,
        TipParadeDetailsComponent,
        AlbumDetailsComponent,
        BackgroundComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        YouTubePlayerModule,
        ScrollingModule,
        MatCardModule,
        MatIconModule,
        MatCheckboxModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatGridListModule,
        MatTableModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the app is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000',
        }),

    ],
    providers: [APIService],
    bootstrap: [AppComponent],
})
export class AppModule { }
