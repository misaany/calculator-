let resultElement = document.querySelector("#out-result")

let input1 = document.querySelector("#input1")
let input2 = document.querySelector("#input2")



// отримує id  кнопкт =
let submitBtn = document.querySelector("#sumbit")
let plus =document.querySelector("#plus")
let minus =document.querySelector("#minus")
let dilit = document.querySelector("#dilit")
let mnogt = document.querySelector("#mnogt")
let action = ""

plus.onclick = function(){
    action="+"
}
minus.onclick = function(){
    action = "-"
} 
dilit.onclick = function(){
    action = "/"
}
mnogt.onclick = function(){
    action = "*"
}


submitBtn.onclick = function(){
    if(action == "+"){
            let sum = Number(input1.value) + Number(input2.value)
            resultElement.innerHTML = sum
    }else if(action == "-"){
            let sum = Number(input1.value) - Number(input2.value)
            resultElement.innerHTML = sum
    }else if(action == "*"){
            let sum = Number(input1.value) * Number(input2.value)
            resultElement.innerHTML = sum
    }else if(action == "/"){
            let sum = Number(input1.value) / Number(input2.value)
            resultElement.innerHTML = sum
    }
}
