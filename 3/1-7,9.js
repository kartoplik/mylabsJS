//1
if(true) {
  console.log('true')
} 
if(false){
  console.log('false')
}

//2
const m = 1
let n
if(m>50){
  n = "большое"
} else {
  n = "маленькое"
}

//3
var i = 2

 while( i < 9 ){

console.log( i++ )
 }

//4
let p = 45
while(p < 67) {
  console.log(p++)
}

//5
let z = 45
while(z < 670) {
  if(z % 10 == 0) {
    console.log(z)
    z++
  } else {
    z++
  }
}

//6

for(let i = 45; i < 670; i++){
  if(i < 67 || i % 10 == 0) console.log(i)
}

//7
let l = 5
switch (l) {
  case 1: {
 console.log("n = одному")
 break
  }
 
  case 2: {
    console.log("n = двум")
   break
  }
  case 3: {
    console.log("n = трем")
   break
  }
  case 4: {
    console.log("n = четырем")
   break
  }
  case 5: {
    console.log("n = пяти") 
  break
  }
  case 6: 
  {
    console.log("n = шести")
   break
  }
  case 7: {
    console.log("n = семи")
   break
  }
  case 8: {
    console.log("n = восьми")
   break
  }
  default:
    console.log("Число меньше 0 или больше 8")
}

//9
let c
let res
size = 120
unit = "Гб"
switch(unit){
case "Кб":{
  c = 1
  res = size * 1024**c
  console.log(res)
  break
}
case "Мб":{
  c = 2
  res = size * 1024**c
  console.log(res)
  break
}
case "Гб":{
  c = 3
  res = size * 1024**c
  console.log(res)
  break
}
}
