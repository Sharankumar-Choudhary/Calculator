let input = document.querySelector("input")

function add(e){
    input.value += e
}

function clr(){
    input.value = 0
}

function del(){
    input.value = input.value.slice(0,input.value.length-1)
}

function eq(){
    input.value = eval(input.value)
}