const accountId = 144553
let accountEmail = "chandan@google.com"
var accountPassword = "123456"
accountCity = "Jaipur"
let accountState;

// accountId= 2
accountEmail = "sxcsdc4454.com"
accountPassword = "125478"
accountCity = "Bengaluru"


/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])