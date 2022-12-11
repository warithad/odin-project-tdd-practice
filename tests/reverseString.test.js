import reverseString from '../scripts/reverseString'

it('empty string', ()=>{
    expect(reverseString('')).toBe('');
})

it('one letter string', () =>{
    expect(reverseString('h')).toBe('h');
})

it('multiple letter string', ()=>{
    expect(reverseString('helloWorld')).toBe('dlroWolleh');
})