function calc(n)
{
    let saved = 0;
    let result = n;
    function add(num = 1)
    {
        result += num;
    }
    function sub(num = 1)
    {
        result -= num;
    }
    function multiply(num = 1)
    {
        result *= num;
    }
    function divide(num = 1)
    {
        result /= num;
    }
    function save()
    {
        saved = result;
    }
    function reset()
    {
        result = saved;
    }
    function print()
    {
        console.log(result);
    }

    return [add, sub, multiply, divide, save, reset, print];
}

const [add, sub, multiply, divide, save, reset, print] = calc(10);

print() //output: 10
add(5)
print() //output:15
add(2)
add(3)
print() //output:20
save() //save current state
sub(7)
print() //output: 13
add(1)
add(2)
print() //output: 16
reset() //reset back to the saved value
print() //output:20
multiply(2);
print();