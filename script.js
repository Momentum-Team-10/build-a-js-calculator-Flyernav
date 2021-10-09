let display = document.getElementById('display')

let button1 = document.getElementById('button-1')
let button2 = document.getElementById('button-2')
let button3 = document.getElementById('button-3')
let button4 = document.getElementById('button-4')
let button5 = document.getElementById('button-5')
let button6 = document.getElementById('button-6')
let button7 = document.getElementById('button-7')
let button8 = document.getElementById('button-8')
let button9 = document.getElementById('button-9')
let button0 = document.getElementById('button-0')
let buttonadd = document.getElementById('buttonplus')
let buttondivi = document.getElementById('buttondivide')
let buttonmin = document.getElementById('buttonminus')
let buttonmulti = document.getElementById('buttonmul')
let buttonequal = document.getElementById('equal')








let buttonclear = document.getElementById('clear')





button1.addEventListener('click', ( event ) => {
    display.innerText += button1.innerText
})

button2.addEventListener('click', ( event ) => {
    display.innerText += button2.innerText
})

button3.addEventListener('click', ( event ) => {
    display.innerText += button3.innerText
})

button4.addEventListener('click', ( event ) => {
    display.innerText += button4.innerText
})

button5.addEventListener('click', ( event ) => {
    display.innerText += button5.innerText
})

button6.addEventListener('click', ( event ) => {
    display.innerText += button6.innerText
})

button7.addEventListener('click', ( event ) => {
    display.innerText += button7.innerText
})

button8.addEventListener('click', ( event ) => {
    display.innerText += button8.innerText
})

button9.addEventListener('click', ( event ) => {
    display.innerText += button9.innerText
})

button0.addEventListener('click', ( event ) => {
    display.innerText += button0.innerText
})

buttonadd.addEventListener('click', ( event ) => {
    display.innerText += buttonplus.innerText
})

buttondivi.addEventListener('click', ( event ) => {
    display.innerText += buttondivide.innerText
})

buttonmin.addEventListener('click', ( event ) => {
    display.innerText += buttonminus.innerText
})

buttonmulti.addEventListener('click', ( event ) => {
    display.innerText += buttonmul.innerText
})

buttonequal.addEventListener('click', ( equals ) => {
})


let equals = document.getElementById('equal')

equals.addEventListener('click', () => {
  display.innerText =  eval(display.innerText)

})