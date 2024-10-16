// create a car object
const car = {
    type: "Toyota",
    model: "Supra mk5",
    color: "red"
};

// check the type of the object
console.log(typeof car);

// updated object
car.type = "Toyota";
console.log(car);

// new property wheels
car.wheels = 4;
console.log("car with wheels", car);
