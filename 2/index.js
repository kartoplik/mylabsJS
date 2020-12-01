  // 1
  const str = "Привет"
  const num = 123
  const flag = true
  const txt = "true"
  
//2-3
  const a1 = 5+3
  const a2 = 5-3
  const a3 = 5*3
  const a4 = 5/3
  const a5 = 5 %3
  const a6 = 3%5
  const a7 = 5+ '3'
  const a8 = '5' - 3
  const a9 = 75 + 'к г'
  const a10 = 5^2

  console.log("№2-3 ||||", a1, ' ',a2, ' ',a3, ' ',a4, ' ',a5, ' ',a6, ' ',a7, ' ',a8, ' ',a9, ' ',a10, "|||||")

  //4
  const height = 23 
  const width = 10
  const square = () => {
    return height*width;
  }
  const s = square()

  console.log("№4 ||||", s, "|||||")

//5
const heightC = 10
const dC = 4
const volume = () => (
  Math.PI * (dC / 2)**2 * heightC
)
const v = volume()

console.log("№5 ||||", v, "|||||")

//6
const n = 3
const m = 4
const hypotenuse = () => (
  Math.sqrt(n**2 + m**2)
)
const k = hypotenuse()

console.log("№6 ||||", k, "|||||")

//7
const nFib = 12
function fib(nFib) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= nFib; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
  const el12 = Math.round(fib(nFib))
  console.log("№7 ||||", el12, "|||||")

//8
const S = 2000000
const p = 10
const years = 5
function Perepl (S,p,years) {
  const n = years * 12
  const i = (p / 100) / 12
  const everyMonth = S * ((i*(1+i)**n)/((1+i)**n - 1))
  const perepl = Math.round(n * everyMonth - S) 
  return perepl
}

const perepl = Perepl(S,p,years)
console.log("№8 ||||", perepl, "|||||")
