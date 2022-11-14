//A Callback Hell using call back functions


let stocks = {
    Fruits : ["strawbeery","grapes","banana","apple"],
    liquid: ["water","ice"],
    holder: ["cone","cup","stick"],
    toppings:["chocolate","peanuts"],
}






let order = (Fruit_name, call_production) =>{

    setTimeout(() =>{
        console.log(`${stocks.Fruits[Fruit_name]} was selected`);

        call_production();
    },2000) 
   
}; 


let production = () => {

    setTimeout(()=>{
        console.log("Production has started")

        setTimeout(()=>{
            console.log("The fruits has been choped")

            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

                setTimeout(()=>{
                    console.log("the machine was started")

                    setTimeout(()=>{
                        console.log(`icecream was placed on ${stocks.holder[0]}`)

                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]} was added as topping`)

                            setTimeout(()=>{
                                console.log("Serve Icecream")
                            },2000);
                        },3000);
                    },2000);
                },1000);
            },1000);
        },2000);

    },  0000);
   
 

};

order(0, production);