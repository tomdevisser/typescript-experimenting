const thisIsPi: number = 3.14;
const movieTitle: string = "The Godfather";
const isRaining: boolean = false;

movieTitle = 9; // Error: Type 'number' is not assignable to type 'string'.

thisIsPi = "3.14"; // Error: Type 'string' is not assignable to type 'number'.
thisIsPi.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'number'.

let type: any = "string";
type = 9; // This is valid.
type = true; // This is valid.

let futureBoss: string; // This fixed delayed initialization errors.

// Typing functions in TypeScript.
function square(x: number): number {
  return x * x;
}