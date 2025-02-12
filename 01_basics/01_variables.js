const accountId = 14453
let accountEmail = "anshikag3006@gmail.com"
var accountPassword = "124"
accountCity = "Jaipur"
let accountState;

// accountId = 2 not allowed
accountEmail = "a@gmail.com"
accountPassword = "1234"
accountCity = "Delhi"

/**
 Prefer not to use var because of issue oin block scope and functional scope
 */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])