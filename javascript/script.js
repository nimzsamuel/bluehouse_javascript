var database = [
  {
    userName: "salisu",
    password: "adamu"
  },
  {
    userName: "john",
    password: "abcd"
  },
  {
    userName: "samuel",
    password: "glory"
  }
];

var newsfeed = [
  { userName: "Ali", timeline: "Learning JS!" },
  { userName: "Grace", timeline: "Loving CSS." },
  { userName: "Sam", timeline: "DOM is fun!" }
];

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");


function isUserValid(user, pass) {
  for (var i = 0; i < database.length; i++) {
    if (user === database[i].userName && pass === database[i].password) {
      return true;
    }
  }
  return false;
}


function signIn(user, pass) {
  if (isUserValid(user, pass)) {
    console.log(newsfeed);
  } else {
    alert("User is not valid, try again");
  }
}


signIn(userNamePrompt, passwordPrompt);
