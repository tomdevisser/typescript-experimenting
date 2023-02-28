const thisIsPi: number = 3.14;
const movieTitle: string = "The Godfather";

movieTitle = 9; // Error: Type 'number' is not assignable to type 'string'.
thisIsPi = "3.14"; // Error: Type 'string' is not assignable to type 'number'.

thisIsPi.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'number'.
