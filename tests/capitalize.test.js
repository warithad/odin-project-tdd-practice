import capitalize from '../scripts/capitalize'

it('is an empty string', () => {
    expect(capitalize(''))
        .toBe('');
})

it('first letter is already capitalized', () => {
    expect(capitalize('Akram'))
        .toBe('Akram');
})

it('first letter not capitalized', () => {
    expect(capitalize('hello'))
        .toBe('Hello');
})
