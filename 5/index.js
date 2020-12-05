//1 
let city1 = {
  name: "ГородN",
  population: 1000000,
  getname: function () {
    return this.name
  },
  getCity: getObj(),
  exportStr: function() {
    return `name=${this.name}\npopulation=${this.population}\n`
  }
}

//2
let city2 = {
  name: "Г о р о д М",
  population: 1e6,
  getname: function () {
    return this.name
  },
  getCity: getObj(),
  exportStr: function() {
    return `name=${this.name}\npopulation=${this.population}\n`
  }
}

//5
function getObj() {
  return this
}

//6
let obj = {
  method1: function() {
    return this
  },
  method2: function() {
    return this
  },
  method3: function() {
    return "метод3"
  },
}

//7
let d1 = [45,78,10,3]
d1[7] = 100
d1.forEach((value, index) => {
  console.log(value)
})
console.log(d1[6],d1[7])

//8
let d2 = [45,78,10,3]
let sum2 = 0
for (let i = 0; i < d2.length; i++) {
  sum2 += d2[i]
}
// d2.forEach(function (v,i) {
//   sum2 += v
// })
console.log(sum2)

//9
let d3 = [45,78,10,3]
d3[7] = 100
let sum3 = 0
for (value in d3) {
  sum3 += d3[value]
}
console.log(sum3)


//10
let d4 = [45,78,10,3]
function my(a,b) {
  return a+b
}
d4.sort(my)
console.log(d4)

//11
let d5 = []
let n = 3, m = 4
for (let i = 0; i < n; i++) {
  d5[i] = []
  for(let j = 0; j < m; j++) {
    d5[i][j] = 5
  }
}
console.log(d5)