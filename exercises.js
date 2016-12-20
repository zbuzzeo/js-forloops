/* 1) Mr. President
 Declare a variable named `presidents` and assign it to an array containing the following Presidents: Washington, Adams, Jefferson, Madison and Monroe.
 
Write a for loop that will iterate through this array and within the for loop console.log the following:
"The value at 0 is Washington." 
"The value at 1 is Adams." 
"The value at 2 is "Jefferson."
"The value at 3 is "Madison."
"The value at 4 is Monroe."

What is the length of this array?

1-A) Create a function named leaders which will take in a parameter: `person`.
   @param Datatype: String `person`
 
This function will iterate through the person parameter and console.log the following message for each item in the array:

"President person was a great leader."
*/


   
 
 
 




/* 2) Declare a variable named `stringOfNumbers` and set it's value to `''` (an empty String).

Write a **for-loop** that concatenates a Number value to that string on each iteration, starting at `10` and continuing up to and including `20`. */


/***bonus:** could you take the code inside of this for-loop and encapsulate it inside of a function called `appendToString` and still achieve the same result?*/


/* 3) `Add only even numbrs to an array`
Declare a variable named `evenNumberArray` and set its value to an empty array.

Use a for-loop to add only even numbers to an Array. Add `50` even numbers to the `evenNumberArray` starting with the value `0`.*/
  

/* 4) `Accessing only the odd indexes of an Array - 'Not Even Brah'`
Someone forgot to fill out this array! Oh noes...

Declare a new variable named `oopsArray` set it's value to be: `[ 'turn' , , 'down' , , 'for' , , 'what' ]`.

Note that every odd index value in `oopsArray` is currently `undefined`. Using a for-loop, add the string `'nope'` to every odd index.

Example result should look like:

`[ 'turn' , 'nope' , 'down' , 'nope' , 'for' , 'nope' , 'what' ]`*/



/* 5) `Going backwards?!`
Using a for-loop, iterate through the Array stored at `oopsArray` **backwards**. `console.log` each value in the Array.

example output:
```
what
nope
for
nope
down
nope
turn
```*/



/* 6) `isNapTime`
Declare a variable named `isNapTime`. Set it to `false`.

Declare a variable named `napSchedule`. Set it's value to be an `Array` with the values `[false, false, true, false, true, true]`

Declare a function named `nap`. This function takes in a single parameter called `schedule`

- If `schedule` is `true` then use `console.log` to display the message `ZzZzZzZz`
- otherwise if `schedule` is `false` use `console.log` to display the message `Gotta get to work!` and then change the value of `isNapTime` to `true`

Now, Write a FOR loop that iterates through the `napSchedule` array and runs the function `nap` while passing in the value at the current position of `napSchedule` into the `nap` function.*/

/* Declare a variable named `valuesArray` and set it's value to be an array, `[99, 66, 829, 1941, 8, 76]`.

Declare a function named `copyArray` which takes two arguments: `originArray` and `destinationArray`. Inside of this function you will loop through the contents of `originArray` and push each value into `destinationArray`.

To get started, below your function declaration, call your function and pass in the two variables, `valuesArray` and `copyOfValuesArray`. After that, use `console.log` to to inspect the values of `valuesArray` and `copyOfValuesArray` to make sure they have the same values (which means your function worked!).*/



/*![final-boss](https://s3.amazonaws.com/uploads.hipchat.com/54891/2015941/zamX8AqbgYw0QJ8/giphy.gif)

 Stage 1 - Only String Values
Declare a variable named `miscStorage` set it's value to be: `[ [], 'Carrots', 9, 'Beets', {}, {name: "Todd B."}, 'Mush' ]`

Declare a function named `generateArrayOfStrings` which takes a single argument `storage`. This function returns a new Array with only `String` values inside of it.

 Final Form - Change values of objects stored within an Array
It's that time again, we need to graduate the current class of students and start enrollment for the next class.

Declare a variable named `currentClass` and set it's value to be this [array found here](https://gist.github.com/sgnl/e40879b2249e06ca7811).

Declare a function named `graduateAndSetNewClass`, it takes a single argument called `cohort`.

Your function will iterate through the `cohort` argument and check each student's `enrolled` property.

If the `enrolled` property is set to `true` then change that student's `graduated` property to `true`. Otherwise, if `enrolled` is set to `false` then change `enrolled` to `true` leaving `graduated` alone and unchanged.
*/

