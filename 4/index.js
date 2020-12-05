//1
function hello1() {
  return "Привет javascript!"
}

//2
function hello2(name = "гость"){
  console.log(`Привет ${name}`)
}

//3
function mul(n,m) {
  return n*m
}

//4
function repeat(str="", N=2) {
  let result = ""
  for(let i = 0; i < N; i++) {
    result += str
  }
  return result
}

//5
function rgb(r=0,g=0,b=0) {
  return `rgb(${r},${g},${b})` 
}

//6
function avg(){
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i]
  }
  result /= arguments.length
  return result
}

//7 
function m(a,b) {
  return mul(a,b)
}

function log(a) {
  console.log(a)
}

//8

function operation(m,n,o) {
  console.log(o(m,n)) 
}

//9

function addN(n) {
  let N = n
  return function() {
    N += n
    console.log(N)
  }
}

let addn = addN(10)
addn()

//10
function words(n=0) {
  let help = [
    "товар",
    "товара",
    "товаров"
  ]
  let result
  count = n % 100
  if (count >= 5 && count <= 20) {
      result = n + " " + help[2]
  } else {
      count = count % 10
      if (count == 1) {
          result = n + " " + help[0]
      } else if (count >= 2 && count <= 4) {
          result = n + " " + help[1]
      } else {
          result = n + " " + help[2]
      }
  }
  return result
}
