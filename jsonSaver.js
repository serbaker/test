var fs = require('fs');

var myfile = fs.readFileSync('./myfile_.json');
var myObject = JSON.parse((myfile));
var register = {
    users: [
        {login: 'jeck2@mail.ru', password: 'tfhku01', name: 'jeck'},
        {login: 'vita@mail.ru', password: 'tfhku01', name: 'vita'}
    ]
};

function isRegistered(users, user) {
    for(var i = 0; i <= users.length-1;i++ ){
        if(users[i].login == user.login) {
            return true;
        }
    }
    return false;
}
function registration(users, newUser) {
    users.push(newUser);

    return users;
}
if(!isRegistered(myObject.users,register.users[0])) {
    registration(myObject.users, register.users[0]);
}
if(!isRegistered(myObject.users,register.users[1])) {
    registration(myObject.users, register.users[1]);
}



fs.writeFileSync('./myfile_.json', JSON.stringify(myObject));

console.log(JSON.stringify(myfile));

