import { Component, OnInit } from '@angular/core';
import { Albums, Top40AlbumPositions } from 'src/MODEL/albums-model';
import { APIService } from 'src/SERVICES/API/api.service';

@Component({
    selector: 'app-albums',
    templateUrl: './albums.component.html',
    styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
    Top40 : Top40AlbumPositions[] = [];

    constructor(private apiService: APIService) { }

    getAlbums(): void {
    // Todo: make this the latest chart (this week, this year)
        this.apiService.getAlbums()
            .subscribe((albums: Albums[]) => {
                this.Top40 = albums[0].positions;
            });
    }

    ngOnInit() {
        this.getAlbums();
    }

}
