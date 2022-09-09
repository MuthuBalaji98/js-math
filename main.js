// Math PI()
console.log(Math.PI);     

// Math.round()
console.log(Math.round(4.5));
console.log(Math.round(4.6));
console.log(Math.round(4.4));

// Math.ceil()

console.log(Math.ceil(4.4));
console.log(Math.ceil(4.6));
console.log(Math.ceil(-4.4));

// Math.floor()

console.log(Math.floor(4.8));
console.log(Math.floor(4.6));
console.log(Math.floor(-4.2));

// Math.trunc()

console.log(Math.trunc(4.5));
console.log(Math.trunc(4.6));
console.log(Math.trunc(-4.2));

// Math.sign()

console.log(Math.sign(4));
console.log(Math.sign(0));
console.log(Math.sign(-4));

// Math.pow()

console.log(Math.pow(4, 4));

// Math.sqrt()

console.log(Math.sqrt(64));

// Math.abs()

console.log(Math.abs(-4.8));

// Math.sin()

console.log(Math.sin(4));

// Math.cos()

console.log(Math.cos(4));

// Math.tan()

console.log(Math.tan(4));

// Math.min() 

console.log(Math.min(0, 150, 30, 20, -8, -200));

// Math.max()

console.log(Math.max(0, 150, 30, 20, -8, -200));

// Math.random()

console.log(Math.floor(Math.random()*6)+1);

// Math.log()

console.log(Math.log(1));

// Math.log2()

console.log(Math.log2(10));

// Math.log10()

console.log(Math.log10(100));






console.log(Math.floor(Math.random()*6));





const set = () => {
  const randomColor = Math.floor(Math.random()*16000000);
  document.body.style.backgroundColor = "#" + randomColor;
}

color.addEventListener("click", set);
set();