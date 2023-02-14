// //생성자 함수 버전
// function Car(brand, color) {
//   this.brand = brand;
//   this.color = color;
//   this.drive = () => {
//     console.log(`${this.brand}의 ${this.color}의 자동차가 주행중입니다.`);
//   };
// }

// const hyundai = new Car("hyundai", "blue");
// const porsche = new Car("porsche", "red");
// const toyota = new Car("toyota", "gray");

// console.log(hyundai.brand);
// porsche.drive();
// toyota.drive();

//class  버전
class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
  drive() {
    console.log(`${this.brand}의 ${this.color}의 자동차가 주행중입니다.`);
  }
}

const porsche = new ClassCar("porsche", "black");

console.log(porsche);
hyundai.drive();
toyota.drive();
