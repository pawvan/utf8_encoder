/***********************************************
 * This code belongs to Pawvan
 * Author: Pawvan
 * Date: 30th Nov 2024
 * PROHIBITION: Do not use, modify, or distribute 
 * this code without explicit permission from Pawvan.
 ***********************************************/
function encodeUTF8(str){
   const encodeBytes=[];
   for(let i=0;i<str.length;i++){
    let codePoint  = str.charCodeAt(i);
    if(codePoint<=0x7F){
        encodeBytes.push(codePoint);
    }
    else if(codePoint<=0x7FF){
        encodeBytes.push(0xC0 | (codePoint >>6));
        encodeBytes.push(0x80 | (codePoint & 0x3F))
    }
    else if(codePoint <= 0xFFFF){
        encodeBytes.push(0xE0 | (codePoint >>12));
        encodeBytes.push(0x80 | ((codePoint >> 6) & 0x3F));
        encodeBytes.push(0x80 | (codePoint & 0x3F));
    }
    else{
        encodeBytes.push(0xF0 | (codePoint >> 18));
            encodeBytes.push(0x80 | ((codePoint >> 12) & 0x3F));
            encodeBytes.push(0x80 | ((codePoint >> 6) & 0x3F));
            encodeBytes.push(0x80 | (codePoint & 0x3F));
    }

   } 
   return encodeBytes;
}
module.exports =encodeUTF8;
