import analyzeArray from '../scripts/analyzeArray';

it('empty array', ()=>{
    expect(analyzeArray([]))
        .toEqual({
            average : 0,
            min : 0,
            max : 0,
            length : 0
        });
})

it('populated array', ()=>{
    expect(analyzeArray([1, 8, 3, 4, 2, 6]))
        .toEqual({
            average : 4,
            min : 1,
            max : 8,
            length : 6
        });
})

it('array with objects of other types', ()=>{
    expect(analyzeArray(['h', 12, 0, -5, 6])).
        toBe("invalid array")
})