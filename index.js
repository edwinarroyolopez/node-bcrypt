const bcrypt = require('bcrypt');

bcrypt.hash('myPassword', 10, function(err, hash) {
    // Store hash in database
    console.log('hash',hash)
    /* hash: $2b$10$cLSRLi8jXbh4A332clgeb.gvmvmHEJyMYSFHVELA1c3WJ.F3chyj2 */
  });


  bcrypt.compare('somePassword', hash ='$2b$10$cLSRLi8jXbh4A332clgeb.gvmvmHEJyMYSFHVELA1c3WJ.F3chyj2' , function(err, res) {
    if(res) {
     // Passwords match
     console.log('match')
    } else {
     // Passwords don't match
     console.log(`don't match `)
    } 
  });