import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { NO_ERRORS_SCHEMA, asNativeElements } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Hero component (shallow tests)', () => {
    let fixture: ComponentFixture<HeroComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroComponent);
    });
    it('should have input heros', () => {
        fixture.componentInstance.hero = { id: 1, name: 'Pranshu', strength: 10 };
        expect(fixture.componentInstance.hero.name).toBe('Pranshu');
    });
    it('should render in anchor tag', () => {
        fixture.componentInstance.hero = { id: 1, name: 'Pranshu', strength: 10 };
        fixture.detectChanges();
        const deA = fixture.debugElement.query(By.css('a'));
        expect(deA.nativeElement.textContent).toContain('Pranshu');
        expect(fixture.nativeElement.querySelector('a').textContent).toContain('Pranshu');
    });
});
