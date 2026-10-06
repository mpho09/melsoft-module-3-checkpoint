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
 let confirmEmail = "mphomangena09@gmail.com";

  if (newPassword === confirmPassword) {
    return "Passwords do match.";
  }
  if (currentEmail === confirmEmail) {
    return "Emails do match.";
  }
  if (newPassword === currentEmail) {
    return "Password cannot be your email address.";
  }
  if (newPassword.length < 8) {
    return "Password must be at least 8 characters long.";
  }
 return "Success! Form is valid.";

 /* I used === mainly becouse it is strict comparison operator and it checks both the 
 value and the data type. to bugs in the code. And it is code practice moslty for password for security*/

 /*CHALLENGE 3*/

 // It WILL PRINT 13
 //I will start from the beginining with the addition and then the multiplication and then the subtraction
2 + 3 * 4 - 1
console.log(2 + 3 * 4 - 1);

//It will print 15.The brackets will come first and multiply both numbers in the brackets
(2 + 3) * (4 - 1)

//It will print 4.
//Start by subracting 10 with 4 and then subtract 2 from the result
10 - 4 - 2

//it will print 512. The exponentiation operator is right associative so it will first calculate 3 ** 2 = 9 and then 2 ** 9 = 512
2 ** 3 ** 2 

//It will print 7. The modulus operator will come first and then the multiplication and then the addition
10 % 3 * 2 + 1

//it will print 5. It will start by dividing 100 with 4 and then divide the result with 5
100 / 4 / 5

// It will print true becouse both sides are true.
5 + 2 > 6 && 3 < 4

// it will print true becouse with || one side can be true and other false for it to be true
true && false || true && true

// it will print false. Both sides need to be true  for it to be true
!false && !!0

// it will print true. the step will c=start checking from the left to right
5 > 3 && 10 < 20 || !(2 === "2")

// it will print 1035. it will start from the left to right meaning it will multiply 1000 with 1.15 and then multiply the result with 0.9
1000 * 1.15 * 0.9 

// it will print number becouse it checks what type of datatype it is
typeof 5 + 1
//it printed number1

//it will print number becouse it is checking the type of data type it is in the brackets
typeof (5 + 1)

// it will print 56. it will start with multiplication and then addition.
//becouse 5 is a string and there is an addition it will just concatenate the string with the result of the multiplication
"5" + 3 * 2

// it will print 4. it will start from the 5 and then subtract 3 and then add 2. 
// the string of 5 will chanfe to number becouse substartion only works with numbers
"5" - 3 + 2

/* Interview Questions 
When should you add parentheses to an expression even when
they are not strictly needed by precedence rules?

you should it when you want your code to be more readable so that the next team member
is able to understand the code. It is also the to avoid any bugs in th future
*/

/*CHALLENGE 4*/

/*PART A*/


const grade = score >= 90 ? 'A' : score >= 80 ? 'B' 
: score >= 70 ? 'C' : score >= 60 ? 'D' : score >= 50 ? 'E' : 'F';


console.log(grade(95));
console.log(grade(82));
console.log(grade(73));
console.log(grade(65));
console.log(grade(54));
console.log(grade(42));
console.log(grade(0));

/*PARTB*/


/*PART C*/

console.log(user && user.address && user.address.city);
console.log(user?.address?.city);


/*PART D*/


//I t will print finally becouse all first 3 values are treated as false so it will print the last value
null || undefined || 0 || "" || "finally"

//It will print finally as well becouse the first 3 are false
null ?? undefined ?? 0 ?? "" ?? "finally"
//it printed 0

// it will print first truthy becouse the first value is treated as false
0 || "first truthy"

// it will print 0
0 ?? "first non-nullish"

//it will print false becouse all the values need to be true. the moment it sees flse it will print false
true && false && "never reached"

//it will print thirf becouse there is no false value or a value that is treated as false
"first" && "second" && "third"

// it will print false becouse both side are false
false || (true && "yes")
//it printed yes


// it will print yes
(false || true) && "yes"

// it will print 3 becouse of no false value. it will print the last one
1 && 2 && 3

// it will print foo
null?.foo?.bar?.baz
//it printed undefined

/* CHALLENGE 5*/

// it will print number becouse it checks what type of datatype it is
typeof 42

//it will print string becouse it checks for the datatype
typeof "hello"

// it will print boolean becouse it checks for the datatype
typeof true

//it will print undefined
typeof undefined

//it will print null
typeof null 
//it printed object

// it will print object becouse it checks for the datatype
typeof {}

// it will print object becouse it checks for the datatype and an array is an object
typeof [] 

// it will print function since this is a function
typeof function() {}

//it will print number
typeof NaN

//I believe it will print undefined becouse the variable does not have any value
typeof undeclaredVariable

/* CHALLENGE 6*/


const READ = 1; // binary 0001
const WRITE = 2; // binary 0010
const DELETE = 4; // binary 0100
const ADMIN = 8; // binary 1000

const permission = READ | WRITE;
const UserAdmin = READ + WRITE + DELETE + ADMIN;
permission && READ ? "YES" : "NO";

/*Interview Questions
Why would a team use bitwise flags for permissions instead of storing an array like ['read',
'write']? Give two concrete reasons.

What is the real-world downside of bitwise permissions? When would you NOT use this
pattern?

Explain the difference between & and &&, and | and ||. Give one case where confusing them
would cause a silent bug.
*/

/*CHALLENGE 7*/

/*CHALLENGE 9 */

/*CHALLENGE 10*/
/*
Walk me through the difference between the single-character operators (& and |) and the
double-character operators (&& and ||). Give one case where confusing them would cause a
silent production bug.
They are both logical operators but the single-character operators (& and |) are bitwise
operators that perform operations on the binary representation of numbers and then the
double-character operators (&& and ||) are logical operators that check boolean expressions.

When would you prefer the nullish coalescing operator (??) over the logical OR operator (||)?
Give a concrete example where swapping one for the other changes the outcome.
I would prefer the nullish coalescing operator (??) when I want to check if the value is 
null or undefined without treating other falsy values to be like null or undefined.

typeof null returns 'object'. Explain WHY (the historical reason) and then describe how you
would check if a variable is specifically null without being tricked.


In your banking calculator for Challenge 7, you had to handle floating-point arithmetic for
money. Explain in your own words why 0.1 + 0.2 does NOT equal 0.3 in JavaScript, and
what the production-grade solution would be (think about how real banks store money
internally).

What was the single hardest Module 3 concept for you to grasp, and what finally made it
click? Be honest — this is for me to know how to teach the next cohort better.
*/

