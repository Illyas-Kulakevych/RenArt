//https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

//Vittsivskyi
function lovefunc(flower1, flower2){
    return flower1 % 2 === 0 && flower2 % 2 !== 0 || flower1 % 2 !== 0 && flower2 % 2 === 0
  }

//Ivashkovych
const lovefunc = (flower1, flower2) => (flower1 + flower2) % 2 === 1

//Kavyn
function lovefunc(flower1, flower2){
  return (flower1 & 1) !== (flower2 & 1);
}