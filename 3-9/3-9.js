function solution(str) {
    let reverse = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
  }

 console.log(solution("pirate"));
 console.log(solution("racecar"));


 //for 1hr = .5 but rounded down
function litres(time) {
return Math.floor(time * 0.5);
}

console.log(litres(300));


function arrayDiff(a, b) {
    return a.filter(value => !b.includes(value));
  }

  console.log(arrayDiff([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3],[2]));