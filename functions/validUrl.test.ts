import { validUrl }from './validUrl';

test('Should return true', () => {
    expect(validUrl('https://www.fasterize.com')).toBeTruthy;
});

test('Should return true 2', () => {
    expect(validUrl('http://www.fasterize.com')).toBeTruthy;
});

test('Should return false', () => {
    expect(validUrl('www.fasterize.com')).toBeFalsy;
});