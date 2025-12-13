let memo = []
function fib(n, vals = memo)
{
    if(vals[n] != null)
    {
        return vals[n];
    }
    let result;
    if(n <= 2)
    {
        result = 1;
    }else{
        result = fib(n - 1, vals) + fib(n - 2, vals);
    }
    vals[n] = result;
    return result;
}

console.log(fib(25))
console.log(memo);