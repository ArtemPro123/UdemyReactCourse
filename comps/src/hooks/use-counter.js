import { useEffect, useState } from "react";

//Brute Force Hook Creation
//1, Make a function called 'useSomething'
//2. Find all the non-JSX expressions that refer to 1-2 related pieces of state
//3. Cut them all out, paste them into 'useSomething'
//4. Find 'not defined' errors in your component
//5. In your hook, return an object that contains the variable the complement needs
//6. In the component, call the hook. Destructure the properties the component needs
//7. Find 'not defined' errors in the hook. Pass the missing variables in as arguments to the hook
//8. Rename the hook to something more meaningful
//9. Rename returned properties to something more descriptive.


function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const Increment = () => {
    setCount(count+1);
  };
  return {
    count,
    Increment
  };
}

export default useCounter;