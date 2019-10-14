import { HeroesComponent } from './heroes.component';
import { of } from 'rxjs';

describe('HerosComponent', () => {
    let component;
    let Heroes;
    let mockService;
    beforeEach(() => {
        Heroes = [
            { id: 1, name: 'Pranshu', strength: 2 },
            { id: 2, name: 'Pravesh', strength: 3 },
        ];

        mockService = jasmine.createSpyObj([
            'getHeroes',
            'addHero',
            'deleteHero'
        ]);
        component = new HeroesComponent(mockService);
    });

    describe('delete', () => {
        it('delete hero hero from hero list', () => {
            mockService.deleteHero.and.returnValue(of(true));
            component.heroes = Heroes;
            component.delete(Heroes[0]);
            expect(component.heroes.length).toBe(1);
        });
    });
});
