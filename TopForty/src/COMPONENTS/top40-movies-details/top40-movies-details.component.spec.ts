import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top40MoviesDetailsComponent } from './top40-movies-details.component';

describe('Top40MoviesDetailsComponent', () => {
    let component: Top40MoviesDetailsComponent;
    let fixture: ComponentFixture<Top40MoviesDetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [Top40MoviesDetailsComponent],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(Top40MoviesDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
