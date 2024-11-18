// maxOfTwoNumbers
const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  //console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

  // isAdult
  function isAdult(age) {
    if (age <= 17)
    {console.log("Minor")}
    else
    {console.log("Adult")}
  }
  //console.log('Exercise 2 Result:', isAdult(21));

  // IsCharAVowel
  function IsCharAVowel(vowel) {
    if (vowel==="a"||vowel==="e"||vowel==="i"||vowel==="o"||vowel==="u")
        console.log(`${vowel} is a vowel`)
    else
        console.log("thats not a vowel")
  }
  //console.log('Exercise 3 Result:', isCharAVowel("a"));

  // generateEmail()
  function generateEmail(name,domain) {
    return(`${name}@${domain}`)
  }
//console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

// greetUser()
  function greetUser(name,time) {
    if (time==="morning"||time==="afternoon"||time==="night")
        return(`Good ${time}, ${name}`)
  }
  //console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

  // maxOfThree()
  function maxOfThree(numA,numB,numC) {
    if (numA > numB && numC)
        return (numA)
    else if (numB > numA && numC)
        return (numB)
    else if (numC > numA && numB)
        return (numC)
  }
  //console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

  //calculateTip()
  function calculateTip(bill, tip) {
     const tipAmount = bill * (tip/100)
     return tipAmount
  }
  // console.log('Exercise 7 Result:', calculateTip(50, 20));

  //convertTemperature()
  function convertTemperature(temp, scale) {
    if (scale === "C")
        return ((temp * 9/5) + 32)
    else if (scale === "F")
        return ((temp - 32) * 5/9) 
  }
  //console.log('Exercise 8 Result:', convertTemperature(32, "C"));

  //basicCalculator()
  function basicCalculator(numA, numB, operater) {
    if (operater === "subtract")
        return (numA - numB)
    if (operater === "divide")
        return (numA / numB)
    if (operater === "multiply")
        return (numA * numB)
    if (operater === "add")
        return (numA + numB)
  }
  //console.log('Exercise 9 Result:', basicCalculator(10, 5, "multiply"));