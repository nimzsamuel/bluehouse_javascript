var database = [
  {
    username: "john_doe",
    password: "supersecure123"
  },
  {
    username: "jane_smith",
    password: "mypassword456"
  },
  {
    username: "alice_jones",
    password: "abc123"
  }
];

var newsfeed = [
  {
    username: "Stanley",
    timeline: "Feeling like Stan!"
  },
  {
    username: "Mariom",
    timeline: "Had a great workout today!"
  },
  {
    username: "Remson",
    timeline: "He is a hustler!"
  }
];

var userNameprompt = prompt('What is your username?');
var passwordprompt = prompt('What is your password?');

function signIn(usernameInput, passwordInput) {
  var userFound = false;

  for (var i = 0; i < database.length; i++) {
    if (
      usernameInput === database[i].username &&
      passwordInput === database[i].password
    ) {
      userFound = true;
      break;
    }
  }

  if (userFound) {
    console.log("Login successful!");
    console.log(newsfeed);
  } else {
    alert("Wrong username or password");
  }
}

signIn(userNameprompt, passwordprompt);