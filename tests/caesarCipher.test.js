import caesarCipher from '../scripts/caesarCipher'

it('empty string', () =>{
    expect(caesarCipher('')).toBe('');
})

it('same case string', () =>{
    expect(caesarCipher('asfhlzsd')).toBe('btgimate');
})

it('different case string', () =>{
    expect(caesarCipher('HLsdkadoK')).toBe('IMtelbepL');
})

it('different case string and punctuation marks', () =>{
    expect(caesarCipher('dsTrDlvx,se?p')).toBe('etUsEmwy,tf?q');
})
