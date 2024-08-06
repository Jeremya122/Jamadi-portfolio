//console.log('Hello World!')

//var prompt = prompt('What is your name?')

//console.log(prompt)

function verifyAge(age) {
  var age = prompt('What is your age?');
  console.log(age);

  // Convert age to a number before comparison
  age = Number(age);

  if (isNaN(age)) {
    alert('Please enter a valid number for age.');
  } else if (age < 18) {
    alert('You are a minor!');
  } else if (age >= 18 && age < 60) {
    alert('You are an adult!');
  } else {
    alert('You are a senior citizen!');
  }
}