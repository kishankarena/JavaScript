let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

let is_shop_open = true;
 let order = (time , work) => {
     return new Promise((resolve,reject)=>{
         if(is_shop_open)
         {
               setTimeout(()=>{
                   resolve(work());
               },time);
         }
         else{
             reject(console.log("Sorry! we are closed"))
         }
     });
 };
//Promise chaining
 order(2000,()=>console.log(`${stocks.Fruits[0]} was selected.`))
 .then(()=>{
     return order(0000 , ()=>console.log("productions has started"))
 })
 .then(()=>{
     return order(2000,()=>console.log("Fruits was choped"))
 })
 .then(()=>{
     return order(1000,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} are added`))
 })
 .then(()=>{
     return order(1000, ()=>console.log("Start the machine"))
 })
 .then(()=>{
     return order(2000,()=>console.log(`Ice-cream was placed on ${stocks.holder[0]}`))
 })
 .then(()=>{
     return order (3000,()=>console.log(`${stocks.toppings[0]} choose as topping`))
 })
 .then(()=>{
     return order(2000, ()=>console.log("Ice-cream is ready to serve."))
 })
 //error handling
 .catch(()=>{
     console.log("Customer  left");//run only when promise was rejected
 })

 //.finally handler
 .finally(()=>{
     console.log("End of the day, shop closed");
 })