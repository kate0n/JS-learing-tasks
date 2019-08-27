import React from 'react';

// Return the provided string with the first letter of each word capitalized. 

export const TruncateString = () => {
    function titleCase(str) {
        // делаем все строчными, разделяем предложение по пробелам в массив
        let words = str.toLowerCase().split(' ');
        // изменяем 1 символ на прописную букву
        let newArr = words.map(word => {
         return word.replace(word.charAt(0), word.charAt(0).toUpperCase())
        });
        // собираем массив из слов в предложение
        return newArr.join(' ');
    }
      titleCase("I'm a little tea pot");
};

export default TruncateString;