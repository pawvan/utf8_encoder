
/***********************************************
 * This code belongs to Pawvan
 * Author: Pawvan
 * Date: 30th Nov 2024
 * PROHIBITION: Do not use, modify, or distribute 
 * this code without explicit permission from Pawvan.
 ***********************************************/
const {isValidUnicode} =require('../../src/utils/validator')
test('validats unicode code points correctly',()=>{
    expect(isValidUnicode(0x24).to)
})