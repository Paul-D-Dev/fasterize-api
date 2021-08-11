import {transformFlag} from './transformFlag';

test('Should be an array of string', () => {
    expect(transformFlag('o')).toContain("optimisée");
})

test('Should be empty array if flag is null', () => {
    expect(transformFlag(null)).toEqual(expect.arrayContaining([]));
})

test('Should be empty array if flag is ""', () => {
    expect(transformFlag('')).toEqual(expect.arrayContaining([]));
})

test('Do not return undefined', () => {
    expect(transformFlag('testaa')).not.toContain("undefined");
})