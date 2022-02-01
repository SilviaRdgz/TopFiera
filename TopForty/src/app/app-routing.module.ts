import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/COMPONENTS/home/home.component';
import { TrackDetailsComponent } from 'src/COMPONENTS/track-details/track-details.component';
import { Top40MoviesDetailsComponent } from 'src/COMPONENTS/top40-movies-details/top40-movies-details.component';
import { TipParadeDetailsComponent } from 'src/COMPONENTS/tip-parade-details/tip-parade-details.component';
import { AlbumDetailsComponent } from 'src/COMPONENTS/album-details/album-details.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'top40Movies', component: Top40MoviesDetailsComponent },
    { path: 'tipParade', component: TipParadeDetailsComponent },
    { path: 'top40Tracks', component: TrackDetailsComponent },
    { path: 'top40Albums', component: AlbumDetailsComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingComponents = [
    TrackDetailsComponent,
    Top40MoviesDetailsComponent,
    TipParadeDetailsComponent,
    TrackDetailsComponent,
    AlbumDetailsComponent,
];
