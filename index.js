let input = document.querySelector('#inputBox');
// console.log(input);
let button = document.querySelectorAll('.button-container');
// console.log(button);

let String = "";
let arr = Array.from(button);
arr.forEach((button) => {
    button.addEventListener('click' , (e) => {
        if(e.target.innerHTML === '='){
            String = eval(String);
            input.value = String;
        }
        else if(e.target.innerHTML === 'AC'){
            String = "";
            input.value = String;
        }
        else if(e.target.innerHTML === 'DEL'){
            String = String.substring(0, String.length-1);
            input.value = String;
        }
        else{
            String = String + e.target.innerHTML;
            input.value = String;
        }
    })
})