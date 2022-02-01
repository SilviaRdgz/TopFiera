import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipParadeDetailsComponent } from './tip-parade-details.component';

describe('TipParadeDetailsComponent', () => {
    let component: TipParadeDetailsComponent;
    let fixture: ComponentFixture<TipParadeDetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TipParadeDetailsComponent],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TipParadeDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
