const userData = {
    name: "Andrew",
    age : 26,
    isAdmin: false,
    hobby: {
        first:'cricket',
        second: 'coding',
    }
};
//destructuring of object
let{name:myName,age,isAdmin,hobby} = userData;

console.log(`My name is ${myName}. I'm ${age} year old. MY hobby is ${hobby.second}`);