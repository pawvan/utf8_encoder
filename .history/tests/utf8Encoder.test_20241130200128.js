/***********************************************
 * This code belongs to Pawvan
 * Author: Pawvan
 * Date: 30th Nov 2024
 * PROHIBITION: Do not use, modify, or distribute 
 * this code without explicit permission from Pawvan.
 ***********************************************/
const {encodeUTF8} =require('../src/encoder/utf8Encoder');
test('encodes ASCII correctly',()=>{
    const input = "hello";
    const expected =[72, 101, 108, 108, 111];
expect(encodeUTF8(input).toEqual(expected));
})
test("encodes emoji correctly",()=>{
    const input ="👋";
    const expected = [240, 159, 146, 150];
    expect(encodeUTF8(input).toEqual(expected))
})