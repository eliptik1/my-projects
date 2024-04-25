
let awesomeName:string = "something"

let obj:object = {name4:"sdf"}

let num:number = 32
//num = num + "asdasd"
//console.log(num);

let bool:boolean = num > 2344

///////////////

let tax:number | string = 10
tax = 100
tax = "$$$asdasd"

let requestStatus: "pending" | "success" | "error" = "pending"
requestStatus = "success"
//requestStatus = "sdfsdf"

///////////////

let notSure: any = 4
notSure = "sdfsdf"
notSure = true
notSure = 234234

///////////////

const books = ["1984", "lotr", "atomic habits"];

let foundBook:string | undefined;

for(let book of books) {
    if(book === "1984"){
        foundBook = book;
        break;
    }
}

foundBook?.length

////////////////
let discount: number | string = 20;
discount = "20%"
discount = 20

////////////////

let prices:number[] = [100,67,23]
prices.push(255)

let fruits: string[] = ["apple", "orange"]

//let randomValues:[] = ["hello"]
let emptyValues:number[] = []

let names = ["ali", "mehmet", 1]

let array:(string | boolean)[] = ["apple", true, "orange"]

/////////////////

let temperatures: number[] = [20,25,30]
//temperatures.push("hot")
let colors: string[] = ["red","green","blue"]
//colors.push(true)

let mixedArray:(number | string)[] = [1, "two", 3]

//////////////////

let car:{brand: string, year: number} = {brand:"mercedes", year: 2024}
car.brand = "bmw"
//car.color = "blue"

let car2:{brand: string, year: number} = {brand:"toyota", year: 2022}

let book = {title:"book", cost:20}
let pen = {title:"pen", cost:10}
let notebook = {title:"book"}

let items:{ readonly title:string; cost?:number}[] = [book, pen, notebook]
//items[0].title = "fsdfsdf"

///////////////////
let bike:{brand:string, year:number} = {brand:"asd",year:123}
bike.year = 60
//let laptop:{brand:string, year:number} = {brand:"msi"}
let product1 = {title:"shirt", price: 300}
let product2 = {title:"pants"}
//let products:{title:string, price?:number}[] = [{title:"a"}, {title:"b", price:400}]
let products:{title: string, price?:number}[] = [product1, product2]
products.push({title:"shoes", price:223})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function sayHi(name:string){
    console.log(`Hello ${name.toUpperCase()}`);
}
sayHi("ali")
//sayHi(3)

function calculateDiscount(price:number):number{
    const hasDiscount = true
    if(hasDiscount) {
        return price * 0.9
        //return "Discount Applied"
    }
    return price
}
const finalPrice = calculateDiscount(200)

//////////////////////

let names2:string[] = ["ali", "ahmet", "mehmet"]

function checkName(user:string):boolean{
    return names2.includes(user)
}

console.log(checkName("ali"));

//////////////////////

function calculatePrice(price:number, discount?:number):number {
    return price - (discount || 0)
}
let priceAfterDiscount = calculatePrice(100, 33)

/////////////////////

function calculateScore(initialScore:number, penaltyPoints:number = 0):number {
    return initialScore - penaltyPoints
}
let scoreAfterPenalty = calculateScore(100, 20)
let scoreWithoutPenalty= calculateScore(100)
console.log(scoreAfterPenalty, scoreWithoutPenalty);

/////////////////////

function sum(message:string, ...numbers:number[]){
    const doubled = numbers.map(num=>num*2).reduce((acc, curr) => acc + curr, 0)
    return message + doubled
}

let result = sum("The total is : ", 1,2,3,4,5)
console.log(result);

/////////////////////

function logMessage(message:string):void {
    console.log(message);
    //return "hello world"
}
logMessage("hello, typescript")

////////////////////

function processInput(input: string | number) {
    if(typeof(input) == "string"){
        return input.toUpperCase()
    } else {
        return input*2
    }
}
console.log(processInput("hello"))
console.log(processInput(234))

////////////////////

function createEmployee({ id }: { id: number }):{id:number; isActive:boolean}{
    return {id, isActive: id%2 === 0}
}

console.log(createEmployee({id: 1}));
console.log(createEmployee({id: 2}));
/////
function createStudent(student:{id:number, name:string}):void {
    console.log(`welcome to the course ${student.name.toUpperCase()}`);
}
const newStudent = {
    id: 5,
    name: "ali"
}
createStudent(newStudent)
//createStudent({id:1, name:"mehmet", email:"mehmet@gmail.com"})

/////////////////////

function processData(input:string | number, config:{reverse: boolean}={reverse:false}):string | number{
    if(typeof input === "number") {
        return input **2
    } else {
        return config.reverse ? input.split("").reverse().join("") : input.toUpperCase()
    }
}

console.log(processData(3));
console.log(processData("merhaba"));
console.log(processData("merhaba", {reverse: true}));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Alias & Interface

const ali:{ id: number; name:string; isActive: boolean} = {
    id: 1,
    name: "ali",
    isActive: true
}

const mehmet:{ id: number; name:string; isActive: boolean} = {
    id: 1,
    name: "mehmet",
    isActive: false
}

function createUser(user: {id:number; name: string; isActive:boolean}): {
    id: number;
    name: string;
    isActive: boolean
}{
    console.log(`hello ${user.name.toUpperCase()}`);
    return user
}


type User = {id: number; name:string; isActive: boolean}

const ali2:User = {
    id: 1,
    name: "ali",
    isActive: true
}
const mehmet2:User = {
    id: 1,
    name: "mehmet",
    isActive: false
}
function createUser2(user: User): {
    id: number;
    name: string;
    isActive: boolean
}{
    console.log(`hello ${user.name.toUpperCase()}`);
    return user
}

/////////////////////
type StringOrNumber = string | number
let value: StringOrNumber;
value = "hello"
value = 123

type Theme = "light" | "dark"
let theme:Theme;
theme = "dark"
theme = "light"

function setTheme(t:Theme){
    theme = t
}
setTheme("light")

////////////////////////
type Employee = {id: number, name:string, department: string}
type Manager = {id: number, name:string, employees:Employee[]}
type Staff = Employee | Manager

function printStaffDetails(staff:Staff){
    return ("employees" in staff) ? `${staff.name} is the manager, has ${staff.employees.length} employees.` : `${staff.name} is a ${staff.department} employee`
}

let mehmet3: Employee = {id: 3, name:"mehmet", department: "HR" }
let bob: Employee = {id: 3, name:"bob", department: "IT" }

let ali3: Manager = {id: 3, name:"ali", employees:[mehmet3, bob]}

console.log(printStaffDetails(ali3));

/////////////////////////
interface Person {
    name: string
}

interface DogOwner extends Person {
    dogName: string
}

interface Manager2 extends Person {
    managePeople():void,
    delegateTasks():void
}

function getEmployee():Person | DogOwner | Manager2{
    let randomVal = Math.random()
    if(randomVal < 0.33) {
        return {name:"hakan"}
    } else if(randomVal < 0.66) {
        return {name: "ali", dogName: "kurt"}
    } else {
        return {
            name:"mehmet",
            managePeople(){
                console.log("managing people");
            },
            delegateTasks() {
                console.log("delegating task");
            },
        }
    }
}
getEmployee()

let employeeVar: Person | DogOwner | Manager2 = getEmployee()

function isManager(obj:Person | DogOwner | Manager2):obj is Manager2{
    if("managePeople" in obj) { 
        return true
    } else {
        return false
    }
}

if(isManager(employeeVar)){
    console.log(employeeVar.delegateTasks());
}
console.log(isManager(employeeVar));