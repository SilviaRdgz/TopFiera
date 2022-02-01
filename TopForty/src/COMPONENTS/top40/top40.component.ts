import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/SERVICES/API/api.service';
import { Tracks, Top40Positions } from 'src/MODEL/top40-Model';

@Component({
    selector: 'app-top40',
    templateUrl: './top40.component.html',
    styleUrls: ['./top40.component.scss'],
})
export class Top40Component implements OnInit {
    Top40 : Top40Positions[] = [];
    VideoId : string = '';

    constructor(
        private apiService: APIService,
    ) { }

    getTop40List(): void {
        this.apiService.getTop40Tracks()
            .subscribe((tracks: Tracks[]) => {
                this.Top40 = tracks[0].positions;
                this.VideoId = this.Top40[0].youtube_code;
            });
    }
    playVideo(tracks: string): void {
        this.VideoId = tracks;
    }
    ngOnInit() {
        this.getTop40List();
    }

}
