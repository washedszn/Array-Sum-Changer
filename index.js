const arraySumChanger = (newSum, array) => {
    let oldSum = array.reduce((a, b) => a + b); // Previous sum of array
    let n = array.length; 
    let x = Math.floor((newSum - oldSum) / n) // Divisor is rounded down
    let remaining = (newSum - oldSum) - (x * n) // Calculates how many numbers need rounding up
    
    // Creates a new array with length n, then maps x or (x + 1) onto each element
    let arr = Array(n).fill(0).map((u, i) => i < remaining ? x + 1 : x)
    
    // Adds together the corresponding elements from the two arrays
    return arr.map((e, i) => e + array[i])
}
