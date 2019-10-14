
import { HeroesComponent } from './heroes.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroService } from '../hero.service';
import { Input, Component } from '@angular/core';
import { of } from 'rxjs';
import { Hero } from '../hero';
import { By } from '@angular/platform-browser';

xdescribe('Shallow', () => {
    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService;
    let HEROES;

    @Component({
        selector: 'app-hero',
        template: '<div></div>',
    })
    class MockHeroComponent {
        @Input() hero: Hero;
    }


    beforeAll(() => {
        HEROES = [
            { id: 1, name: 'Pranshu', strength: 10 },
            { id: 2, name: 'Pravesh', strength: 5 },
        ];
        mockHeroService = jasmine.createSpyObj([
            'getHeroes',
            'addHero',
            'deleteHero'
        ]);
        TestBed.configureTestingModule({
            declarations: [
                MockHeroComponent,
                HeroesComponent],
            providers: [
                {
                    provide: HeroService,
                    useValue: mockHeroService
                }
            ],
        });
        fixture = TestBed.createComponent(HeroesComponent);

    });
    it('correctly set heroes list', () => {
        mockHeroService.getHeroes.and.return(of(HEROES));
        fixture.detectChanges();
        expect(fixture.componentInstance.heroes.length).toBe(2);
    });

    it('should create one li for each heor', () => {
        mockHeroService.getHeroes.and.return(of(HEROES));
        fixture.detectChanges();
        expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(2);
    });
});
