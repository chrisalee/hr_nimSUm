/*
 * Complete the 'chocolateInBox' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

const chocolateInBox = (arr) => {
    // nim is a mathematical game of strategy in which two players take turns removing objects from distinct heaps or piles.  
    // on each turn the player, must remove at least one objecct, and may remove any number of objects provided they all come from the same heap or pile
    
    let nimSum = 0;
    let numWaysP1Wins = 0;
    
    // ^ (bitwise XOR) is a binary operation that takes two bit patterns of equal length and performs the logical exclusive OR operation on each corresponding bits.
    // the result in each position is 1 if only one of the bits is 1, but will be 0 if both are 0 or both are 1
    // this technique may be used to manipulate bit patterns representing sets of boolean states
    //  JavaScript uses bitwise operations to evaluate each of two or more units place to 1 or 0
    
    for(let i = 0; i < arr.length; i++) {
        nimSum ^= arr[i]
    }
    // console.log('nim', nimSum);
    
    // winning strategy is to finish every move with a nim-sum of 0.
    // this is always possible if the nim-sum is not 0 before the move
    
    for(let i = 0; i < arr.length; i++) {
        if((arr[i] ^ nimSum) < arr[i]) {
            numWaysP1Wins++;
        }
    }
    return numWaysP1Wins;
}
