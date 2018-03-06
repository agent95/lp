# Balanced Brackets
Given a string consisting of entirely characters ()[]{}, determine if its "balanced".

### Specifications
- Every opening bracket must have a closing bracket of the same type,
- the stringbetween the pair must also be balanced.
- Empty string should be considered balaned

### Solution
TDD Approach. RED | GREEN | REFACTOR

Start with failing tests, code to make them pass then refactor the code.

Test cases using:
- Karma, Jasmine and PhantomJs

#### STEPS:
    1. input a string e.g '()[]{}(([]))' 
    2. scan the string characters, check if character is a bracket,
    3. if character is an opening bracket - push onto a stack
    4. else if closing bracket , see if it matches the last item in stack. 
        if it does, pop off that last item and move to the next element
    5. if at the end of the function the stack is empty then return true
    6. print to screen "Balanced" or "Not Balanced"

#### PSEUDO CODE

- Convert string to array, inputArray
- Loop through array items (characters)
- check if the character is a bracket using **isBracket()**
 if true , check if its an openBracket using **isOpenBracket()**
 - if true, push the character onto the stack, **openBracketStack**
   -if false, check if character matches the top of openBracketStack, using **isMatch()**
   -if true, pop the **openBracketStack**
   -if false, move to the next element
- if stack is empty, **isBalanced** returns true, else return false.
- isBalanced returns true ? print "Balanced" : print "Not Balanced", using **printOutput()**

#### Solution includes
 - /src/
 - /src/js/
 - /src/test/

 #### For Demo
 - npm install
 - npm run test

#### To DO

- HTML User Interface
- Refactor
