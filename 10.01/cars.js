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


const prices = cars.map(car => car.price);
console.log(prices);

const most_exp = cars.sort((a, b) => b.price - a.price);
console.log(most_exp[0].price);

const bmw_sum = cars
    .filter((car) => car.brand == "BMW")
    .reduce((acc, cur) => acc + cur.price, 0)
console.log(bmw_sum);

const total_unused = cars.filter((car) => car.used == false).length;
console.log(total_unused);