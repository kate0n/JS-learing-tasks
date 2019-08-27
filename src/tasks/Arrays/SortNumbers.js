function getIndexToIns(arr, num) {
    // вернуть индекс, на которой должно быть вставлено число (num) в отсортированный массив (arr)

    //соритруем по возрастанию, по умолчанию sort() сортирует строки => передаем функцию
    arr.sort((a, b) => a-b);
    
    // num нужно вставать на места первого числа в массиве, которое больше num => вернуть индекс этого элемента
     for (var a = 0; a < arr.length; a++) {
      if (arr[a] >= num)
        return a;
    }
    //  это не работает почему-то
    // arr.forEach(elem => {
    //     if (elem >= num) 
    //       return arr.indexOf(elem);
    //  })
    return arr.length;
  }
  
  getIndexToIns([5, 3, 20, 3], 5); // [ 3, 5, 3, 20] => вернет индекс 1