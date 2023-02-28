let thisIsPi: number = 3.14;
let movieTitle: string = "The Godfather";
const isRaining: boolean = false;

// movieTitle = 9; // Error: Type 'number' is not assignable to type 'string'.

// thisIsPi = "3.14"; // Error: Type 'string' is not assignable to type 'number'.
// thisIsPi.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'number'.

let type: any = "string";
type = 9; // This is valid.
type = true; // This is valid.

let futureBoss: string; // This fixed delayed initialization errors.

// Typing functions in TypeScript.
function square(x: number): number {
  return x * x;
}

// square("this"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// Adding default values to parameters.
const sum = (x: number, y: number = 10): number => x + y;

// A function with multiple return types.
const multipleReturnTypes = (x: number): number | string => {
  if (x > 10) {
    return x;
  } else {
    return "Less than 10";
  }
};

const nonPureFunction = (x: number): void => {
  console.log(x);
};
