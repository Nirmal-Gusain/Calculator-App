let input  = document.querySelector("input")

function showValue(val){
    input.value += val
}

function calculate(){
    input.value =  eval(input.value)
}

function clearValue(){
    input.value = ""
    input.focus()
}

function del(){
    input.value = input.value.slice(0,-1)
}