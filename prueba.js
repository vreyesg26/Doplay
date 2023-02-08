let number = 3;
let arr = [['Noah,blue'], ['Euge,red'], ['Ki Na Ma,red']];
let sheepName = '';

for (let i = 0; i < number; i++) {
  if (String(arr[i]).includes('N') || String(arr[i]).includes('n') && String(arr[i]).includes('A') || String(arr[i]).includes('a')) {
    sheepName = String(arr[i]);
  }
}

console.log(sheepName.split(',').shift());