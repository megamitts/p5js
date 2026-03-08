// Parent class
class Car {
  constructor(brand) {
    this.brand = brand;
  }

  drive() {
    console.log(`${this.brand} is driving`);
  }
}

// Child class
class PoliceCar extends Car {
  constructor(brand, sirenType) {
    // Call the parent constructor to set 'brand'
    super(brand);
    this.sirenType = sirenType;
  }

  // Override drive method but still use parent's drive
  drive() {
    super.drive(); // Call Car's drive()
    console.log(`Siren type: ${this.sirenType} 🚨`);
  }

  siren() {
    console.log(`${this.brand} police car: Woo Woo! 🚨`);
  }
}

// Usage
const myPoliceCar = new PoliceCar("Ford", "Electronic");
myPoliceCar.drive();
// Output:
// Ford is driving
// Siren type: Electronic 🚨

myPoliceCar.siren();
// Output:
// Ford police car: Woo Woo! 🚨
