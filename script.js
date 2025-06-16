let myBtn = document.getElementById('myBtn')


lower = 'abcdefghijklmnopqrstuvwxyz'
upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
symbol = '!@#$%&'
number = '0123456789'

let includeLower = true
myBtn.onclick = function(){
let allowedchars = ''
allowedchars+=lower
allowedchars+=upper
allowedchars+=symbol
allowedchars+=number
let length = document.getElementById('input1').value
password = ''
console.log(length)
for(let i=0; i<length; i++){
    let randomIndex = Math.floor(Math.random() * allowedchars.length )
    password += allowedchars[randomIndex]
}
let print = document.getElementById('generatePass')
if(password.length>=6 && password.length<=16){
print.textContent = `Generated Password: ${password}`
}
else if(password.length<6){
    print.textContent = 'Password cant be less than 6'
}
else if(password.length>16){
    print.textContent = 'Password cant be greater than 16'
}

}