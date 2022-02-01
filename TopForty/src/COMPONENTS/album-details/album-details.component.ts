import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/SERVICES/API/api.service';
import { Top40AlbumPositions } from 'src/MODEL/albums-model';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import * as dayjs from 'dayjs';
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear';
import isLeapYear from 'dayjs/plugin/isLeapYear';

dayjs.extend(isoWeeksInYear);
dayjs.extend(isLeapYear);

@Component({
    selector: 'app-album-details-details',
    templateUrl: './album-details.component.html',
    styleUrls: ['./album-details.component.scss'],
})
export class AlbumDetailsComponent implements OnInit {

    public top40Albums$: Observable<Top40AlbumPositions[]>;
    public years: number[] = [];

    public readonly defaultSelectedYear = 2015;
    public readonly defaultSelectedWeek = 52;

    private readonly selectedWeeks$ = new BehaviorSubject<number>(this.defaultSelectedWeek);
    private readonly selectedYears$ = new BehaviorSubject<number>(this.defaultSelectedYear);

    public availableWeeks$: Observable<number[]>;

    constructor(
        private apiService: APIService,
    ) {
        this.top40Albums$ = combineLatest([
            this.selectedWeeks$,
            this.selectedYears$,
        ]).pipe(
            switchMap(([week, year]) => this.apiService.getAlbumsByDate(week, year)),
            map((tracks) => tracks.positions),
        );
        // Todo: handle errors from the returned observable
        this.availableWeeks$ = this.selectedYears$.pipe(
            map((year) => this.getWeeksForYear(year)),
        );
    }

    ngOnInit(): void {
        this.years = this.getYears(1965);
    }

    getCurrentYear() {
        const date = new Date();
        return date.getFullYear();
    }

    getYears(from: number) {
        const years = [];
        const currentYear = this.getCurrentYear();
        for (let index = 0; index <= currentYear - from; index++) {
            years.push(from + index);
        }

        return years;
    }

    getWeeksForYear(year: number): number[] {
    // Todo: If this is the current year, only have the weeks up until now.
    //       If the given year is any year after now, return an empty list.

        const amount = dayjs(`${year}-01-01`).isoWeeksInYear();
        const weeks = [];

        for (let i = 1; i <= amount; i++) {
            weeks.push(i);
        }

        return weeks;
    }

    handleYearChange($event: any): void {
        this.selectedYears$.next($event.value);
    }
    handleWeekChange($event: any): void {
        this.selectedWeeks$.next($event.value);
    }
}
