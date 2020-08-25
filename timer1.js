const timer1 = function(test){

  let alarm = process.argv.slice(2)
  //filter out the non numbers
  let numbers = alarm.filter(num => !isNaN(num))
  let numbers2 = numbers.filter(num => num >= 0)
  console.log(numbers)
  // console.log(alarm)



for(let el in numbers2){

    setTimeout(() => {
      process.stdout.write('beep\n');
    }, numbers2[el] * 1000);


  }
}

// console.log(timer1())

module.exports = timer1;

console.log(timer1())