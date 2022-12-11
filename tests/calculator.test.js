import {multiply, divide, add, subtract} from '../scripts/calculator'

it('add two valid numbers', () =>{
    expect(add(1, 4)).toBe(5);
})

it('add a valid number and a string', () =>{
    expect(add(1, '1')).toBe('Invalid argument');
})

it('subtract two valid numbers', () =>{
    expect(subtract(20, 25)).toBe(-5);
})

it('multiply two valid numbers', () =>{
    expect(multiply(3, 7)).toBe(21);
})

it('divide two valid numbers', () =>{
    expect(divide(9, 3)).toBe(3);
})

it('divide zero by another number', () =>{
    expect(divide(0 , 3)).toBe(0);
})