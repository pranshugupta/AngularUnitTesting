import { StrengthPipe } from './strength.pipe';

describe('Strength pipe', () => {
    let pipe;
    beforeEach(() => {
        pipe = new StrengthPipe();
    });
    it('should display weak if strength is 5', () => {
        expect(pipe.transform(5)).toContain('weak');
    });
    it('should display strong if strength is 10', () => {
        expect(pipe.transform(10)).toContain('strong');
    });
});
