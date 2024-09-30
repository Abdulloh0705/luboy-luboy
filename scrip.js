
function newFunction(str, num) {
  let arr1 = []
  const card1 = prompt("so'z kriting")
  const card2 = prompt('son kriting')

  for (let i = 0; i < card2; i++) {
    arr1.push(card1)
  }
 
  let srt2 = arr1.join("-")
  console.log(srt2);

}

newFunction()