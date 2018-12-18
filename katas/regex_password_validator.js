// https://www.codewars.com/kata/52e1476c8147a7547a000811/train/javascript

// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

function validate(password) {
  return  /[a-z]+/.test(password) && //contains at least one lowercase letter
  /[A-Z]+/.test(password) && //at least one capital letter
  /[0-9]+/.test(password) && //contains at least one number
  /.{6,}/.test(password) && //6 or more chars
  !/[^a-zA-Z0-9]/.test(password); //does not contain non-alphanumeric chars
}

// possible refactoring - the .{6,} line doesn't need to be by itself.


// this can also be written using "?=" look ahead.
// they are useful when combining different regex filters.

function validate(password) {
  return  /^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[0-9]+)[a-zA-Z0-9]{6,}$/.test(password); //does not contain non-alphanumeric chars
}
