const accountId = "13794138"
let accountEmail = "bipul@gmail.com"
var accountPassword = "0000000"
accountCity = "Patna"

//accountId = "1212"  ---> This is not allowed ;once the const is defined, we cannot change

console.log(accountId)

//console.table([accountId, accountEmail, accountPassword, accountCity])

accountEmail = "vicky@gmail.com"
accountPassword = "11111"
accountCity = "bangalore"


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])