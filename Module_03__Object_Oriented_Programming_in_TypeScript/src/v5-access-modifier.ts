//* Access Modifier: control who can access class members.

//? public - accessible from anywhere
//? private - accessible only inside the class
//? protected - accessible inside the class and its subclasses

//? readonly - can only be assigned in the constructor

class Employee {
  constructor(
    public name: string,
    protected _baseSalary: number, //? Protected class accessible from it's child class
  ) {}

  get baseSalary(): number {
    return this._baseSalary;
  }

  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary can not be negative value");
    }
    this._baseSalary = newSalary;
  }

  describe(): string {
    return `${this.name} earns ${this._baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    _baseSalary: number, 
    public teamMemberCount: number,
  ) {
    super(name, _baseSalary);
  }

  describeWork(): string {
    return `${this.name} manages ${this.teamMemberCount} people`;
  }

  describeManager(): string {
    return `${this.name} earns ${this._baseSalary}`
  }
}

// const employee = new Employee("Amir", 22000)

const manager = new Manager("Hamza", 28000, 12);

manager.baseSalary = 34000;

console.log(manager);
console.log(manager.describe());
console.log(manager.describeWork());
console.log(manager.describeManager());
