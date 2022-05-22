function greet() {
  var userName = prompt("What is your name?")
  if (userName && userName.trim()) {
    alert('Hello, ' + userName.trim())
  } else {
    alert('Hello')
  }
  var userAge = prompt("How old are you?")
  console.log(parseInt(userAge))
  var passed = confirm("Has your birthday already passed this year?")
  var today = new Date()
  var year = today.getFullYear()
   if (passed){
    alert("You were born in " + (year - userAge))
   } else {
     alert("You were born in " + ((year - 1) - userAge))
   }
  }
  









