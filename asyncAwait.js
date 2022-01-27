let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

let is_shop_open = true;

let topping_choice = () =>{
    return new Promise ((resolve,reject)=>{
              setTimeout(()=>{
                  resolve( console.log("Which topping would you have to like?"));s
                 
              },3000);
    })
}
async function kitchen(){
    console.log(" A ");
    console.log(" B ");
    console.log(" C ");

    await topping_choice();

    console.log(" D ");
    console.log(" E ");
}
kitchen();

console.log("cleaning tables");
console.log("Taking other orders");
console.log("doing the dishes");