/*
Problem:
let user = [];
function addUser({..}) {...}
function removeUser(.) {...}
function logUsers() {...}

Without module pattern everthing is global, anyone can mutate the root, no boundary, global scope pollution,
impossible to reason about ownership.
*/

import { addUser, removeUser, logUsers } from "./userModule.js";

addUser({ id: 1, name: "Sam" });
addUser({ id: 2, name: "John" });
addUser({ id: 3, name: "Lee" });
logUsers();

removeUser(2);
logUsers();
