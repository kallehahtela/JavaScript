var database = [
    {
        username: "Kalle",
        password: "supersecret"
    },
    {
        username: "Taru",
        password: "123"
    },
    {
        username: "Pekka",
        password: "666"
    }
];

var newsFeed = [
    {
        username: "Taru",
        timeline: "I am pregnant"
    },
    {
        username: "Jari",
        timeline: "JavaScript is too hard to learn"
    }
];

var userNamePromt = prompt("What's your username?");
var passwordPromt = prompt("What's your password?");

function isUserValid(username, password) {
    // looping trough everything
    for (var i=0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}


function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password!");
    }
}

signIn(userNamePromt, passwordPromt);
