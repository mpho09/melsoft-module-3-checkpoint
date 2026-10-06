/*CHALLENGE 1 */

/*1 What is the difference between prefix (++x) and postfix (x++) increment? Show it with a
one-line code example where they produce different outputs.
The postfix  performs the operation by changing the value of the variable but returns the value before the change.
The prefix version performs the operation and returns the new value.


2 The modulo operator (%) is one of the most-asked-about operators in interviews. Give
THREE concrete, real-world uses for it. (One is even/odd, think of two more.)


3 In your Challenge 1 Section 6 example, you nested a ternary. Is nested ternary good
practice? When should you NOT use it?
/

/*CHALLENGE2*/

//It will print true because the == compares if it is the same or not and true becomes 1 false becomes 0
0 == false

// It will print false because the === compares both value and type
0 === false

//It will print false because it is an empty string compared to 0
"" == 0

//It will print false because it is an empty string compared to 0
"" === 0

//It will print true -- compares if the values are the same not the data type
"0" == 0

//It will print false because the data type are not the same
"0" === 0

// true becouse becouse of them are empty so it makes them the same
null == undefined

// It will print false because the data type are not the same
null === undefined

// It will print false because null is not equal to 0
null == 0

// It will print false because null is not equal to 0. 0 is greater than null
null >= 0

// It will print false because null is not equal to 0. 0 is greater than null
null > 0

//It is true becouse the data type is the same and the value is the same
NaN == NaN

//It will print false because even when the data type is the same the values could be different
NaN === NaN

//It will print true 
Object.is(NaN, NaN)

//It will print false because the data type is the same and the value is the same
+0 === -0 

//It will print false with object.is it checks the exact vaalue if the are the same
Object.is(+0, -0)

//it will print true the values are the same even when the data types are different
[1,2,3] == "1,2,3"

//it will print true becouse array is empty and it the same as false
[] == false

//it will print true becouse array is empty and  0 is the same as empty
[] == 0

//it will print true
[0] == false

/*PART B*/

 let newPassword = "MphoMpho098";
 let confirmPassword = "MphoMpho098";
 let currentEmail = "mphomangena@gmail.com";
 let confirmEmail = "mphomangena@gmail.com";

  if (newPassword !== confirmPassword) {
    return "Passwords do not match.";
  }
  if (currentEmail !== confirmEmail) {
    return "Emails do not match.";
  }
  if (newPassword === currentEmail) {
    return "Password cannot be your email address.";
  }
  if (newPassword.length < 8) {
    return "Password must be at least 8 characters long.";
  }
 return "Success! Form is valid.";
