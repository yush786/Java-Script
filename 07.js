// IIFE-->Immediately 
(
    () => {
        console.log("I am iife");
    }
)();
(
    (uname) => {
        console.log(`${uname} is logged in `);
    }
)("john");