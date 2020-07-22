/*Find the number of ways that a given integer, , can be expressed as the sum of the  powers of unique, natural numbers.

For example, if  and , we have to find all combinations of unique squares adding up to . The only solution is .

Function Description

Complete the powerSum function in the editor below. It should return an integer that represents the number of possible combinations.

powerSum has the following parameter(s):

X: the integer to sum to
N: the integer power to raise numbers to
Input Format

The first line contains an integer .
The second line contains an integer .

Constraints
1<= x <= 1000
2<= n <= 10 
Output Format
Output a single integer, the number of possible combinations caclulated.
https://www.hackerrank.com/challenges/the-power-sum/problem
*/


// x=100
// n=2
// arr= [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// output = 3
// 1. (10^2) -> 100
// 2. (6^2 + 8^2) -> 36 + 64
// 3. (1^2 + 3^2 + 4^2 + 5^2 + 7^2) -> 1 + 9 + 16 + 25 + 49


function powerSum(X, N) {
    let arr = [], ans = 0
    // build our array of max available powered nums
    for (let i=1; i**N <= X; i++) arr.push(i**N)
    // define the recursive function
    const rc = (rem, avail) => {
        // if we hit 0 remaining, we've found a solution
        if (rem === 0) ans++
        // or if we still have remaining space, keep trying
        else if (rem > 0) {
            // go through available nums in reverse order,
            // and try each combination
            for (let j = avail.length - 1; j >= 0; j--) {
                // new remaining is difference of old rem and picked num
                // new avail is any number smaller than picked num
                rc(rem - avail[j], avail.slice(0,j))
            }
        }
    }
    rc(X, arr) // base case with max rem and max avail
    return ans
}
console.log(powerSum(100,2))