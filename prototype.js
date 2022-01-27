// const arr = ["Kishan", "Ankit"];
const obj={
    name:"Kishan",
    age:19,
    city:"Jamnagar",
    isAdmin:true,
    getIntro:function(){
        console.log(`${this.name} from ${this.city}`);
    }
};
// function fun()
// {
//     //statements
// }

//  Prototypel Inheritance
// Setting Prototype using Object.create()
const obj2 = Object.create(obj);
obj2.getIntro();


//setting prototype using constructor
function Person(name){
    this.name=name;          // constructor
}
Person.prototype = obj;
Person.prototype.constructor =  Person;

const ankit = new Person('Ankit');
ankit.getIntro(); // if there is this.name property is available in given object first access it 