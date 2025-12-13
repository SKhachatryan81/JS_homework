function add(a, b)
{
    if( b == undefined)
    {
        return function(b)
        {
            return a + b;
        }
    }else{
        return a + b;
    }
}

let x = add(2)(3);
console.log(x);