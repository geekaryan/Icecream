let stocks = {
    Fruits : ["strawbeery","grapes","banana","apple"],
    liquid: ["water","ice"],
    holder: ["cone","cup","stick"],
    toppings:["chocolate","peanuts"],
};

let is_shop_open = true;


function time(ms){

    return new Promise((resolve,reject)=>
    {
        if(is_shop_open){
            setTimeout(resolve,ms)
        }
        else{
            reject(console.log("Shop is closed"))
        }
    });
}


async function kitchen(){
    try{

        await time(2000)
        console.log(`${stocks.Fruits[0]}`)

        await time(0000)
        console.log("starts the production")
        
        await time(2000)
        console.log("cut the fruit")

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} are added to the ice cream`)

        await time(1000)
        console.log("start the machine")

        await time(2000)
        console.log(`${stocks.holder[0]} is taken for the ice cream`)

        await time(3000)
        console.log(`${stocks.toppings[0]} is added as topping`)

        await time(2000)
        console.log("Serve the Ice cream")
        }
    catch(error){
        console.log("customer left", error);
    }
    finally{
        console.log("day ended, shop is closed")
    }
}

kitchen();