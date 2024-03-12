class Employee {
    id! : string;
    name! : string;
    address! : string;

    constructor(id : string, name : string, address : string) {
        this.id = id;
        this.name = name;
        this.address = address;
    }

    get empId () : string {
        return this.id;
    }

    set empId (id : string) {
        this.id = id;
    }

    printPerson () {
        console.log(`${this.name} is enrolled with us. He stays at ${this.address}. His ID is ${this.id}`)
    }
}

class Person {
    name! : string;
    address! : string;

    printPerson() {
        console.log(`${this.name} is enrolled with us. He stays at ${this.address}.`)
    }
}

function func (person : Person) {
    person.printPerson();
}

let employee : Employee = new Employee("1", "Arijit", "Harirampur");
func(employee);