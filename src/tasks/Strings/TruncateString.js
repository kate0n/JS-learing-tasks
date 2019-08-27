import React from 'react';

// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
// simple:  ES2015 метод str.endsWith("name.");

export const TruncateString = () => {
    function truncateString(str, num) {
        // если 3 точки учитываются в ограничении кол-ва символов(аргумент num)
        // return num >= str.length ? str : str.slice(0, num) + '...';
        
        // если 3 точки учитываются в ограничении кол-ва символов(аргумент num)
         if (str.length <= num) {
          return str;
        } else {
          return str.slice(0, num > 3 ? num - 3 : num) + '...';
        }
        
      }
      
      truncateString("A-tisket a-tasket A green and yellow basket", 8);
};

export default TruncateString;