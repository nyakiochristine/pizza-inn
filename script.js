function Pizza(size,crust){
    this.size = size;
    this.crust = crust;
    this.toppings =[]
}
var sizePrice={
    small: 650,
    medium: 800,
    large: 1250,

};
var crustPrice = {
    stuffed:250,
    cracker: 200,
    flatbread: 150,
};

var toppingsPrice =[{
    extracheese:{
        small:50,
        medium: 70,
        large: 100 

    },
    sausages:{
        small: 30,
        medium: 50,
        large: 70
    },
    pepperoni:{
        small: 100,
        medium: 120,
        large: 150
    }
}]
//location//
function Residence(name,location){
    this.name = name;
    this.location = location;
    
}


///calculate size according to price//
function calcSizePrice(size){
    if (size==="small")  {
        return sizePrice.small *1;
    } else if(size==="medium") {
        return sizePrice.medium *1;
    } else {
        return sizePrice.large *1;
    }


};

//calculate crust price//
function calcCrustPrice(crust){
    if(crust==="stuffed") {
        return crustPrice.stuffed *1;

    }else if(size==="cracker"){
        return crustPrice.cracker *1;
    }else{
        return crustPrice.flatbread *1;
    }

}

function calcToppingsPrice(toppings){
    var toppingsNo = 0;
    for(i=0; 1<toppings.length; i++){
        if (toppings[i]=="extracheese"){
            toppingsNo +=50;
        }
        if (toppings[i]=="sausages"){
            toppingsNo +=30;
        }
        if(toppings[i]=="pepperoni"){
            toppingsNo +=100;
        }
    }
    return toppingsNo *1;

}
console.log(function checkExtraCheese(toppings){
    return toppings === "extracheese";
})


$("document").ready (function(){
    function getPizza(){
        return $("#pizzasize")
        .find(":selected")
        .val()
    }
})

function getCrust(){
    return $ ("#crusttype")
    .find(":selected")
    .val()
}

function getToppings(){
    var listToppings = [] ;
    $(".toppings:checked").each (function(){

    })
    return listToppings;
}






    


