import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipParadeComponent } from './tip-parade.component';

describe('TipParadeComponent', () => {
    let component: TipParadeComponent;
    let fixture: ComponentFixture<TipParadeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TipParadeComponent],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TipParadeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
