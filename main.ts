export{}
let message = 'hellooooooo world';
console.log(message);


let isBegineer: boolean = true;
let total: number = 0 ;
let name:string = 'Vishwas';

let sentence: string = `my name is ${name} I am a begineer in typescript`;
console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ['prem', 22];


enum Color {Red =5, Green, Blue};

let c: Color = Color.Blue;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'Vishwas';

let myVariable: unknown = 10;

function hasName(obj: any): obj is {name:string} {
    return !!obj &&
    typeof obj ==="object" &&
    "name" in obj
}
if(hasName(myVariable)){
   console.log(myVariable.name); 
}

(myVariable as string);


let a;
a =10;
a = true;

let b= 20;

let multiType : number | boolean;
multiType =20;
multiType = true;

let anyType : any;
anyType =20;
anyType = true;

function add(num1 :number, num2: number) {
    return num1+ num2;
}
add(5,10);

interface Person{
    firstName:string;
    lastName: string;
}

function fullName(person: Person){
    console.log((`${person.firstName}  ${person.lastName}`));
}

let p = {
    firstName :"prem",
    lastName: "pandey"
};

fullName(p);

class Employee {
    employeeName: string;
    constructor(name: string) {
        this.employeeName = name;
    }
    greet(){
        console.log(`good morning ${this.employeeName}`);
        
    }
}
let emp1 = new Employee('prem');
console.log(emp1.employeeName);
emp1.greet();


class Manager extends Employee{
    constructor(managerName: string){
        super(managerName);
    }
    delegateWork(){
        console.log(`Manager delegating work`);
        
    }
}
let m1 = new Manager('om');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);



