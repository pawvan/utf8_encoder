
/***********************************************
 * This code belongs to Pawvan
 * Author: Pawvan
 * Date: 30th Nov 2024
 * PROHIBITION: Do not use, modify, or distribute 
 * this code without explicit permission from Pawvan.
 ***********************************************/
// Test file: tests/utils/validate.test.js
test('validates unicode code points correctly', () => {
    const { isValidUnicode } = require('../../src/utils/validator');
    
    expect(isValidUnicode(0x24)).toBe(true);
    expect(isValidUnicode(0x110000)).toBe(false);
  });
  test('encodes ASCII correctly', () => {
    const input = "hello";
    const expected = [72, 101, 108, 108, 111];
  
    expect(encodeUTF8(input)).toEqual(expected);
  });
  
  test('encodes emoji correctly', () => {
    const input = "👋";
    const expected = [240, 159, 146, 150];
  
    expect(encodeUTF8(input)).toEqual(expected);
  });
  