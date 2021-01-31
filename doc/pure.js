

/*
    Pure:
*/

const square = ( x ) => x * x;
const squareAll = ( items ) => items.map( square );

/*
    With side effects:
*/

const square = ( x ) => {
    x = updateInDatebase( x );
    return x * x;
}