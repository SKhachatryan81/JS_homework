const testarr = [10, 2, 30]
const cars = 
[
    { brand: "Audi", model: "Q7", year: 2015, price: 36000, used: true },
    { brand: "Mercedes-Benz", model: "GLE", year: 2020, price: 54000, used: false },
    { brand: "Toyota", model: "Land Cruiser", year: 2011, price: 31000, used: true },
    { brand: "Tesla", model: "Model Y", year: 2023, price: 59000, used: false },
    { brand: "Lexus", model: "RX 350", year: 2017, price: 42000, used: true },
    { brand: "Porsche", model: "Cayenne", year: 2019, price: 88000, used: false },
    { brand: "Ford", model: "Explorer", year: 2014, price: 23000, used: true },
    { brand: "Hyundai", model: "Santa Fe", year: 2021, price: 33000, used: false },
    { brand: "Volkswagen", model: "Touareg", year: 2016, price: 29000, used: true },
    { brand: "Range Rover", model: "Sport", year: 2018, price: 67000, used: true },
    { brand: "BMW", model: "X1", year: 2017, price: 26000, used: true },
    { brand: "BMW", model: "X3", year: 2019, price: 38000, used: true },
    { brand: "BMW", model: "X5", year: 2021, price: 61000, used: false },
    { brand: "BMW", model: "X6", year: 2020, price: 68000, used: false },
]

Array.prototype.my_filter = function(callback)
{
    const result = [];
    for(const item of this)
    {
        if(callback(item))
        {
            result.push(item);
        }
    }
    return result;
}

Array.prototype.my_every = function(callback)
{
    for(const item of this)
    {
        if(!callback(item))
        {
            return false;
        }
    }
    return true;
}

Array.prototype.my_some = function(callback)
{
    for(const item of this)
    {
        if(callback(item)){
            return true;
        }
    }
    return false;
}

Object.my_groupBy = function(arr, callback)
{
    const result = {}
    for(const item of arr)
    {
        const key = callback(item);
        if(!result[key])
        {
            result[key] = [];
        }
        result[key].push(item);
    }
    return result;
}

const newarr = testarr.my_filter((num) => num > 10);
console.log(testarr);
console.log(newarr);

const check_every = testarr.my_every((num) => num > 10);
console.log(check_every);

const check_some = testarr.my_some((num) => num > 10);
console.log(check_some);

const grouped = Object.my_groupBy(cars, (car) => car.used);
console.log(grouped);