//* Inheritance: a child class reuses the parent class members via extends/super.

class Employee {
    constructor(
        public name: string,
        private _baseSalary: number,
    ){}

    get baseSalary(): number {
        return this._baseSalary
    }

    set baseSalary(newSalary: number) {
        if(newSalary < 0){
            throw new Error("Salary can not be negative value")
        }
        this._baseSalary = newSalary;
    }

    describe(): string {
        return `${this.name} earns ${this._baseSalary}`; 
    }
}

class Manager extends Employee {
    teamMemberCount: number;

    constructor(name: string, _baseSalary:number, teamMemberCount: number){
        super(name, _baseSalary)
        this.teamMemberCount = teamMemberCount;
    }
}


const employee = new Employee("Amir", 22000)


const manager = new Manager("Hamza", 28000, 12)

manager.baseSalary = 34000

console.log(manager);
console.log(manager.describe());