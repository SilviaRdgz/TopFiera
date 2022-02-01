import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Tracks } from 'src/MODEL/top40-Model';
import { Albums } from 'src/MODEL/albums-model';
import { Movies } from 'src/MODEL/movies-model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class APIService {

    constructor(
        private http: HttpClient,
    ) { }

    private Top40Url = 'https://www.top40.nl/app_api/top40_json/1';
    private AlbumsURL = 'https://www.top40.nl/app_api/top40_json/2';
    private TipParadeURL = 'https://www.top40.nl/app_api/top40_json/3';
    private MoviesURL = 'https://www.top40.nl/app_api/top40_json/4';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    getTop40Tracks(): Observable<Tracks[]> {
        return this.http.get<Tracks[]>(this.Top40Url);
    }

    getTracksByDate(week: number, year: number): Observable<Tracks> {
        return this.http.get<Tracks[]>('https://www.top40.nl/app_api/top40_json/1', {
            responseType: 'json',
            params: new HttpParams({
                fromObject: { week, year },
            }),
        }).pipe(
            map((tracksArray) => tracksArray[0]),
        );
    }
    getAlbums(): Observable<Albums[]> {
        return this.http.get<Albums[]>(this.AlbumsURL);
    }
    getAlbumsByDate(week: number, year: number): Observable<Albums> {
        return this.http.get<Albums[]>('https://www.top40.nl/app_api/top40_json/2', {
            responseType: 'json',
            params: new HttpParams({
                fromObject: { week, year },
            }),
        }).pipe(
            map((albumsArray) => albumsArray[0]),
        );
    }
    getTipParade(): Observable<Tracks[]> {
        return this.http.get<Tracks[]>(this.TipParadeURL);
    }
    getTipsByDate(week: number, year: number): Observable<Tracks> {
        return this.http.get<Tracks[]>('https://www.top40.nl/app_api/top40_json/3', {
            responseType: 'json',
            params: new HttpParams({
                fromObject: { week, year },
            }),
        }).pipe(
            map((TipsArray) => TipsArray[0]),
        );
    }
    getMovies(): Observable<Movies[]> {
        return this.http.get<Movies[]>(this.MoviesURL);
    }

    getMoviesByDate(week: number, year: number): Observable<Movies> {
        return this.http.get<Movies[]>('https://www.top40.nl/app_api/top40_json/4', {
            responseType: 'json',
            params: new HttpParams({
                fromObject: { week, year },
            }),
        }).pipe(
            map((moviesArray) => moviesArray[0]),
        );
    }

}
