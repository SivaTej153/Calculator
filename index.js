const input = document.getElementById("input");
const buttons = document.querySelectorAll("button");

inputValue = "";

for(item of buttons){
    item.addEventListener('click',(e)=>{
        let buttonValue = e.target.innerText;
        if(buttonValue == "AC"){
            inputValue = "";
            input.value = inputValue;
        }
        else if(buttonValue == "C"){
            inputValue = "";
            input.value = inputValue;
        }
        else if(buttonValue == "+/-"){
            inputValue = inputValue*-1;
            input.value = inputValue;
        }
        else if(buttonValue == "="){
            inputValue = eval(inputValue);
            input.value = inputValue;
        }
        else{
            inputValue = inputValue + buttonValue;
            input.value = inputValue;
        }
    })
}