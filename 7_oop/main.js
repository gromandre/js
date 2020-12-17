// Создаем суперкласс Vehicle
class Vehicle {
  constructor(name, typeMovement, speed) {
   this.name = name;
   this.typeMovement = typeMovement;
   this.speed = speed;
   this.titleName = 'Название';
   this.titleMovement = 'Тип движения';
   this.titleSpeed = 'Макс. скорость';
  }
 }
 // Создаем подкласс Car
 class Car extends Vehicle {
  constructor(name, typeMovement, speed, numOfWheels) {
   //Вызываем функцию super() со всеми параметрами, необходимыми для класса Vehicle
   super(name, typeMovement, speed);
   this.numOfWheels = numOfWheels;
   this.titleWheels = 'Колес';
  }
  // Добавляем метод для вывода всех свойств
  printInfo() {
   return `${this.titleName}: ${this.name}, ${this.titleMovement}: ${this.typeMovement}, ${this.titleSpeed}: ${this.speed}, ${this.titleWheels}: ${this.numOfWheels}`;
  }
 }
 // Создаем экземпляр класса Car
 const nissan = new Car('Nissan', 'наземный', 280, 4);
 console.log(nissan.printInfo()); 

// Создаем подкласс Plane
class Plane extends Vehicle {
  constructor(name, typeMovement, speed, numOfPlaces) {
    //Вызываем функцию super() со всеми параметрами, необходимыми для класса Vehicle
    super(name, typeMovement, speed);
    this.numOfPlaces = numOfPlaces;
    this.titlePlaces = 'Количество мест';
  }
  // Добавляем метод для вывода всех свойств
  printInfo() {
    return `${this.titleName}: ${this.name}, ${this.titleMovement}: ${this.typeMovement}, ${this.titleSpeed}: ${this.speed}, ${this.titlePlaces}: ${this.numOfPlaces}`;
  }
  }
  // Создаем экземпляр класса Plane
  const superjet = new Plane('Superjet', 'воздушный', 950, 103);
  console.log(superjet.printInfo()); 

  // Создаем подкласс Ship
class Ship extends Vehicle {
  constructor(name, typeMovement, speed, numOfDeck) {
    //Вызываем функцию super() со всеми параметрами, необходимыми для класса Vehicle
    super(name, typeMovement, speed);
    this.numOfDeck = numOfDeck;
    this.titleNumOfDeck = 'Количество палуб';
  }
  // Добавляем метод для вывода всех свойств
  printInfo() {
    return `${this.titleName}: ${this.name}, ${this.titleMovement}: ${this.typeMovement}, ${this.titleSpeed}: ${this.speed}, ${this.titleNumOfDeck}: ${this.numOfDeck}`;
  }
  }
  // Создаем экземпляр класса Ship
  const fregat = new Ship('Fregat', 'надводный', 50, 5);
  console.log(fregat.printInfo()); 

