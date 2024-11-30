/***********************************************
 * This code belongs to Pawvan
 * Author: Pawvan
 * Date: 30th Nov 2024
 * PROHIBITION: Do not use, modify, or distribute 
 * this code without explicit permission from Pawvan.
 ***********************************************/
const {encodeUTF8} =require('../');
const str = "Hello, UTF-8! 👋";
const encodeBytes  = encodeUTF8(str);
console.log("Encoded Bytes:", encodedBytes);
