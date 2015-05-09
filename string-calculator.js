var expect = require('chai').expect;

function toEnglish(word){
  if ( word === "zero" ){
      return 0;
  }

  if ( word === "one" ){
      return 1;
  }
  if ( word === "two" ){
      return 2;
  }
  if ( word === "three" ){
      return 3;
  }
  if ( word === "four" ){
      return 4;
  }
  if ( word === "five"){
      return 5;
  }
  if ( word === "six"){
      return 6;
  }
  if ( word === "seven"){
    return 7;
  }
  if ( word === "eight"){
    return 8;
  }
  if ( word === "nine" ){
    return 9;
  }
  if ( word === "ten" ){
    return 10;
  }
}

expect(toEnglish("zero")).to.equal(0);
expect(toEnglish("one")).to.equal(1);
expect(toEnglish("two")).to.equal(2);
expect(toEnglish("three")).to.equal(3);
expect(toEnglish("four")).to.equal(4);
expect(toEnglish("five")).to.equal(5);
expect(toEnglish("six")).to.equal(6);
expect(toEnglish("seven")).to.equal(7);
expect(toEnglish("eight")).to.equal(8);
expect(toEnglish("nine")).to.equal(9);
expect(toEnglish("ten")).to.equal(10);

function plus(a,b){
    var a = toEnglish(a);
    var b = toEnglish(b);

  if (a === "zero" && b === "zero"){
    var a = 0;
    var b = 0;
  }
  if (a === "zero" && b === "one"){
    var a = 0;
    var b = 1;
  }
  if (a === "zero" && b === "two"){
    var a = 0;
    var b = 2;
  }
  if (a === "zero" && b === "three"){
    var a = 0;
    var b = 3;
  }
  if (a === "zero" && b === "four"){
    var a = 0;
    var b = 4;
  }
  if (a === "zero" && b === "five"){
    var a = 0;
    var b = 5;
  }
  if (a === "zero" && b === "six"){
    var a = 0;
    var b = 6;
  }
  if (a === "zero" && b === "seven"){
    var a = 0;
    var b = 7;
  }
  if (a === "zero" && b === "eight"){
    var a = 0;
    var b = 8;
  }
  if (a === "zero" && b === "nine"){
    var a = 0;
    var b = 9;
  }
  if (a === "one" && b === "zero"){
    var a = 1;
    var b = 0;
  }
  if (a === "one" && b === "one"){
    var a = 1;
    var b = 1;
  }
  if (a === "one" && b === "two"){
    var a = 1;
    var b = 2;
  }
  if (a === "one" && b === "three"){
    var a = 1;
    var b = 3;
  }
  if (a === "one" && b === "four"){
    var a = 1;
    var b = 4;
  }
  if (a === "one" && b === "five"){
    var a = 1;
    var b = 5;
  }
  if (a === "one" && b === "six"){
    var a = 1;
    var b = 6;
  }
  if (a === "one" && b === "seven"){
    var a = 1;
    var b = 7;
  }
  if (a === "one" && b === "eight"){
    var a = 1;
    var b = 8;
  }
  if (a === "one" && b === "nine"){
    var a = 1;
    var b = 9;
  }
  if (a === "two" && b === "zero"){
    var a = 2;
    var b = 0;
  }
  if (a === "two" && b === "one"){
    var a = 2;
    var b = 1;
  }
  if (a === "two" && b === "two"){
    var a = 2;
    var b = 2;
  }
  if (a === "two" && b === "three"){
    var a = 2;
    var b = 3;
  }
  if (a === "two" && b === "four"){
    var a = 2;
    var b = 4;
  }
  if ( a === "two" && b === "five"){
    var a = 2;
    var b = 5;
  }
  if (a === "two" && b === "six"){
    var a = 2;
    var b = 6;
  }
  if (a === "two" && b === "seven"){
    var a = 2;
    var b = 7;
  }
  if (a === "two" && b === "eight"){
    var a = 2;
    var b = 8;
  }
  if (a === "two" && b === "nine"){
    var a = 2;
    var b = 9;
  }
  if ( a === "three" && b === "zero"){
    var a = 3;
    var b = 0;
  }
  if ( a === "three" && b === "one"){
    var a = 3;
    var b = 1;
  }
  if ( a === "three" && b === "two"){
    var a = 3;
    var b = 2;
  }
  if ( a === "three" && b === "three"){
    var a = 3;
    var b = 3;
  }
  if ( a === "three" && b === "four"){
    var a = 3;
    var b = 4;
  }
  if ( a === "three" && b === "five"){
    var a = 3;
    var b = 5;
  }
  if ( a === "three" && b === "six"){
    var a = 3;
    var b = 6;
  }
  if ( a === "three" && b === "seven"){
    var a = 3;
    var b = 7;
  }
  if ( a === "three" && b === "eight"){
    var a = 3;
    var b = 8;
  }
  if ( a === "three" && b === "nine"){
    var a = 3;
    var b = 9;
  }
  return a + b;
}

/*function plus(A, B){
  return toEnglish(A) + toEnglish(B);
} NIGHTMARE
*/

expect(plus).to.exist;
expect(plus("zero", "zero")).to.equal(0);
expect(plus("zero", "one")).to.equal(1);
expect(plus("zero", "two")).to.equal(2);
expect(plus("zero", "three")).to.equal(3);
expect(plus("zero", "four")).to.equal(4);
expect(plus("zero", "five")).to.equal(5);
expect(plus("zero", "six")).to.equal(6);
expect(plus("zero", "seven")).to.equal(7);
expect(plus("zero", "eight")).to.equal(8);
expect(plus("zero", "nine")).to.equal(9);

expect(plus("one", "zero")).to.equal(1);
expect(plus("one", "one")).to.equal(2);
expect(plus("one", "two")).to.equal(3);
expect(plus("one", "three")).to.equal(4);
expect(plus("one", "four")).to.equal(5);
expect(plus("one", "five")).to.equal(6);
expect(plus("one", "six")).to.equal(7);
expect(plus("one", "seven")).to.equal(8);
expect(plus("one", "eight")).to.equal(9);
expect(plus("one", "nine")).to.equal(10);

expect(plus("two", "zero")).to.equal(2);
expect(plus("two", "one")).to.equal(3);
expect(plus("two", "two")).to.equal(4);
expect(plus("two", "three")).to.equal(5);
expect(plus("two", "four")).to.equal(6);
expect(plus("two", "five")).to.equal(7);
expect(plus("two", "six")).to.equal(8);
expect(plus("two", "seven")).to.equal(9);
expect(plus("two", "eight")).to.equal(10);
expect(plus("two", "nine")).to.equal(11);

expect(plus("three", "zero")).to.equal(3);
expect(plus("three", "one")).to.equal(4);
expect(plus("three", "two")).to.equal(5);
expect(plus("three", "three")).to.equal(6);
expect(plus("three", "four")).to.equal(7);
expect(plus("three", "five")).to.equal(8);
expect(plus("three", "six")).to.equal(9);
expect(plus("three", "seven")).to.equal(10);
expect(plus("three", "eight")).to.equal(11);
expect(plus("three", "nine")).to.equal(12);

/*expect(plus("four", "zero")).to.equal(4);
expect(plus("four", "one")).to.equal(5);
expect(plus("four", "two")).to.equal(6);
expect(plus("four", "three")).to.equal(7);
expect(plus("four", "four")).to.equal(8);
expect(plus("four", "five")).to.equal(9);
expect(plus("four", "six")).to.equal(10);
expect(plus("four", "seven")).to.equal(11);
expect(plus("four", "eight")).to.equal(12);
expect(plus("four", "nine")).to.equal(13);

expect(plus("five", "zero")).to.equal(5);
expect(plus("five", "one")).to.equal(6);
expect(plus("five", "two")).to.equal(7);
expect(plus("five", "three")).to.equal(8);
expect(plus("five", "four")).to.equal(9);
expect(plus("five", "five")).to.equal(10);
expect(plus("five", "six")).to.equal(11);
expect(plus("five", "seven")).to.equal(12);
expect(plus("five", "eight")).to.equal(13);
expect(plus("five", "nine")).to.equal(14);

expect(plus("six", "zero")).to.equal(6);
expect(plus("six", "one")).to.equal(7);
expect(plus("six", "two")).to.equal(8);
expect(plus("six", "three")).to.equal(9);
expect(plus("six", "four")).to.equal(10);
expect(plus("six", "five")).to.equal(11);
expect(plus("six", "six")).to.equal(12);
expect(plus("six", "seven")).to.equal(13);
expect(plus("six", "eight")).to.equal(14);
expect(plus("six", "nine")).to.equal(15);

expect(plus("seven", "zero")).to.equal(7);
expect(plus("seven", "one")).to.equal(8);
expect(plus("seven", "two")).to.equal(9);
expect(plus("seven", "three")).to.equal(10);
expect(plus("seven", "four")).to.equal(11);
expect(plus("seven", "five")).to.equal(12);
expect(plus("seven", "six")).to.equal(13);
expect(plus("seven", "seven")).to.equal(14);
expect(plus("seven", "eight")).to.equal(15);
expect(plus("seven", "nine")).to.equal(16);

/* console.log(plus("zero", "zero"));
 console.log(plus("zero", "one"));
 console.log(plus("zero", "two"));

/*function div(a, b){
    if (toNumber(a) === 0 && toNumber(b) === 0);
    return NaN;
  } else if (toNumber(b) === 0);{
    return infinity;
} else {
  return toNumber(a) / toNumber(b);
}*/


/*expect(divide).to.exist;
expect(divide("zero", "NaN")).to.equal(0);
expect(divide("zero", "one")).to.equal(0);*/
