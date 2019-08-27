import React from 'react';

// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
// simple:  ES2015 метод str.endsWith("name.");

export const RepeatString = () => {
    function repeatStringNumTimes(str, num) {
        // let repeat = "";
        // if (num < 0) { return repeat }
        // for (let i = 1; i <= num; i++){
        //   repeat += str;
        // }
        // return repeat;
      

        var accumulatedStr = '';
        while (num > 0) {
          accumulatedStr += str;
          num--;
        }
        return accumulatedStr;
      
        // с помощью рекурсии
        // if (num < 0)
        //   return "";
        // if (num === 1)
        //   return str
        // else
        //   return str + repeatStringNumTimes(str, num-1);
        
        // встроенный метод repeat и тернарный оператор
        // return num > 0 ? str.repeat(num) : "";
  
  }
  repeatStringNumTimes("abc", 3);
};

export default RepeatString;