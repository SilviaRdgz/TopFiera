import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top40Component } from './top40.component';

describe('Top40Component', () => {
    let component: Top40Component;
    let fixture: ComponentFixture<Top40Component>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [Top40Component],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(Top40Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
