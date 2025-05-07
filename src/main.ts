function formatString(input: string, toUpper?: boolean): string {
  return toUpper === false ? input : input.toUpperCase();
};
// console.log(formatString("Hello", true));
// console.log(formatString("Hello"));
// console.log(formatString("Hello", false));


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
  return items.filter(item => item.rating >= 4);
};

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }
];
// console.log(filterByRating(books));

function concatenateArrays<T>(...arrays: T[][]): T[] {
  // return arrays.reduce((acc, array) => [...acc, ...array], []);
  return arrays.flat();
};
// console.log(concatenateArrays([1, 2, 3], [4, 5], [6]));
// console.log(concatenateArrays(["a", "b", "c"], ["d", "e"], ["f"]));


class Vehicle {
  // private make: string;
  // private year: string;
  constructor(protected make: string, protected year: string) { };

  getInfo() {
    return `${this.make} ${this.year}`
  }
};

const vehicle = new Vehicle("Toyota", "2022");
// console.log(vehicle.getInfo());



class Car extends Vehicle {
  constructor(make: string, year: string, private model: string) {
    super(make, year);
  };
  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`
  };
  getModel() {
    return `Model: ${this.model}`
  }
};

const car = new Car("Toyota", "2022", "Camry");
// console.log(car.getInfo());
// console.log(car.getModel());

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
};
// console.log(processValue("Hello"));
// console.log(processValue(10));


interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  return products.reduce((acc, product) => {
    if (product.price > acc.price) {
      return product;
    } else {
      return acc;
    }
  }, { name: "", price: 0 });
};
const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];
// console.log(getMostExpensiveProduct(products));

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string {
  switch (day) {
    case Day.Monday:
      return "Weekday";
    case Day.Tuesday:
      return "Weekday";
    case Day.Wednesday:
      return "Weekday";
    case Day.Thursday:
      return "Weekday";
    case Day.Friday:
      return "Weekday";
    case Day.Saturday:
      return "Weekend";
    case Day.Sunday:
      return "Weekend";

    default:
      return "Invalid day";
  }
};
// console.log(getDayType(Day.Monday));
// console.log(getDayType(Day.Saturday));

async function squareAsync(n: number): Promise<number> {
  return await new Promise((resolve, reject) => setTimeout(() => { n >= 0 ? resolve(n * n) : reject(new Error("Negative number not allowed")) }, 1000));
};
// squareAsync(2).then(result => console.log(result));
// squareAsync(-2).then(result => console.log(result));
