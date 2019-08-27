import React from 'react';

// Check if a string (first argument, str) ends with the given target string (second argument, target).
// simple:  ES2015 метод str.endsWith("name.");

export const CharAt = () => {
    function confirmEnding(str, target) {

        // (1) находим индекс, с которого начинать сравнение в str
        // находим подстроку по индексу indexForSubstr
        //сравниваем подстроку с переданным target
        return str.substr(str.length - target.length) === target;
        
        // (2) slice по длине переданной подстроки
        // str.slice(str.length - target.length) === target;

    }
      
      confirmEnding("He has to give me a new name", "name");
};

export default CharAt;