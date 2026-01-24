// independent "userModule.js" file
let users = []; //encapsulated

function addUser(user) {
  users.push(user);
}

function removeUser(id) {
  users = users.filter((u) => u.id !== id);
}

function logUsers() {
  console.log(users);
}

export { addUser, removeUser, logUsers };
