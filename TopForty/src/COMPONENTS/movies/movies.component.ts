import { Component, OnInit } from '@angular/core';
import { Movies, MoviesPosition } from 'src/MODEL/movies-model';
import { APIService } from 'src/SERVICES/API/api.service';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {

    positions : MoviesPosition[] = [];

    constructor(private apiService: APIService) { }

    getFourMovies(): void {
        this.apiService.getMovies()
            .subscribe((movies: Movies[]) => {
                this.positions = movies[0].positions;
            });
    }
    ngOnInit(): void {
        this.getFourMovies();
    }

}
