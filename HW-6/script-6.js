// Task 6
/*Створити скрипт, який виводить на екран всі числа, які менші за n. 
Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою break.*/

function displayNum(n){
    for(let i = 1;i <= n;i++){
        if(i < n){
            console.log(i);
        }
        else{
            break;
        }
    }
}

displayNum(8);