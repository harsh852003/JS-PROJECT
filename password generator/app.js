const upperSet = "ABCDEFGHIJKLMONPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "!@#$%^&*()_+/"

//selector

const passBox = document.getElementByIdTagName("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")

const getRandomData =  (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}  

const generatePassword = (password = "") =>{
    if(upperInput.checked){
        password += getRandomData(upperSet)
    }
    console.log(password)
}

document.getElementById("btn").addEventListener{
    "click",
    function(){
        generatePassword()
    }
}
