//Extends
// class Car {
//   constructor(brand, color) {
//     this.brand = brand;
//     this.color = color;
//   }
//   drive() {
//     console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다.`);
//   }
// }

// //클랙스 상속
// class ElecCar extends Car {
//   constructor(brand, color, fuel) {
//     super(brand, color);
//     this.fuel = fuel;
//   }

//   showFuel() {
//     console.log(`해당 자동차는 ${this.fuel}의 힘으로 움직입니다.`);
//   }
// }

// const tesla = new ElecCar("tesla", "red", "electricity");
// tesla.drive();
// tesla.showFuel();

//Over-riding

// class Car {
//   constructor(brand, color) {
//     this.brand = brand;
//     this.color = color;
//   }
//   drive() {
//     console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다.`);
//   }
// }

// //클랙스 상속
// class ElecCar extends Car {
//   constructor(brand, color, fuel) {
//     super(brand, color);
//     this.fuel = fuel;
//   }

//   drive() {
//     console.log(`${this.brand}의 ${this.color}색 자동차가 ${this.fuel}로 움직입니다.`);
//   }
// }

// const hyundai = new Car("hyundai", "white");
// hyundai.drive();

// const tesla = new ElecCar("tesla", "red", "electricity");
// tesla.drive();

//super

class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
  showSpec() {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다.`);
  }
}

//클랙스 상속
class ElecCar extends Car {
  constructor(brand, color, fuel) {
    super(brand, color);
    this.fuel = fuel;
  }

  showSpec() {
    super.showSpec();
    console.log(`그리고 이 차는 ${this.fuel}로 힘으로 움직입니다.`);
  }
}

const hyundai = new Car("hyundai", "white");
hyundai.showSpec();

const tesla = new ElecCar("tesla", "red", "electricity");
tesla.showSpec();
