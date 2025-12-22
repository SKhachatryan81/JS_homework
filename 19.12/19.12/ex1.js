const fact = p => {
    let result =  1;

    if(p == 0)
    {
        result = 1;
    }else if(p < 0)
    {
        result = undefined;
    }else{
        for(let i = 2; i <= p; i++)
        {
            result *= i;
        }
    }
    
    return result;
}

function memoize(callback)
{
    let cache = [];
    if(typeof callback !== "function")
    {
        return undefined;
    }

    return function(...args){
        if(args in cache)
        {
            return args;
        }
        const result = callback(...args);
        cache[args] = result;
        
        return result;
    }
}

const fn = memoize(fact);
console.log(fn(5));

// console.log(memoize(5));


// const memoize = (() => {
//     const cache = [];

//     return function fact(n)
//     {
//         if(n < 0)
//         {
//             return  undefined;
//         }
//         if(n === 0)
//         {
//             return 1;
//         }
//         if(cache[n] !== undefined)
//         {
//             return cache[n];
//         }
//         let result = 1;
//         for(let i = 2; i <= n; i++)
//         {
//             result *= i;
//         }

//         cache[n] = result;
//         return result;
//     }
// })();

// console.log(memoize());