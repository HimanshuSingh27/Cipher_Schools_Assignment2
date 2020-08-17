var pizzacost = [150,130,200,120];
var burgercost = [40,60,75,140];
var pastrycost = [90,110,65,99];
var chickencost = [200,230,310,400];

var x = document.getElementsByClassName("header");
x[0].innerHTML = "FOODWEB";
  

var pizza = function(x) {
    var img="";
    for (var counter = 1; counter <= x; counter++ ) {
             img += '<div class="align"> <img src="Images/Pizzas/Pizza'+counter+'.jpg" alt="" /> Pizza -Price: '+pizzacost[counter-1]+'</div>';
          }
            document.getElementById("space").innerHTML = img;
        };




var burger = function(x) {
    var img2="";
    for (var counter = 1; counter <= x; counter++ ) {
        img2 += '<div class="align"> <img src="Images/Burgers/Burger'+counter+'.jpg" alt="" /> Burger -Price: '+burgercost[counter-1]+'</div>';
    }
    document.getElementById("space2").innerHTML = img2;
};


var pastries  = function(x) {
    var img3="";
    for (var counter = 1; counter <= x; counter++ ) {
        img3 += '<div class="align"> <img src="Images/Pastries/Pastry'+counter+'.jpg" alt="" /> Pastry -Price: '+pastrycost[counter-1]+'</div>';
    }
    document.getElementById("space3").innerHTML = img3;
};
var nonveg = function(x) {
    var img4="";
    for (var counter = 1; counter <= x; counter++ ) {
        img4 += '<div class="align"> <img src="Images/Non-Veg/nv'+counter+'.jpg" alt="" /> Chicken -Price: '+chickencost[counter-1]+'</div>';
    }
    document.getElementById("space4").innerHTML = img4;
};





var dispAll = function() {
    burger(4);
    pizza(4);
    pastries(4);
    nonveg(4);
};
var displayPizza = function() {
    document.getElementById("space4").innerHTML = " ";
    document.getElementById("space3").innerHTML = " ";
    document.getElementById("space2").innerHTML = " ";
    pizza(4);
   
    
};
var displayPastries = function() {
    document.getElementById("space4").innerHTML = " ";
    document.getElementById("space").innerHTML = " ";
    document.getElementById("space2").innerHTML = " ";
    pastries(4);
   
};
var displayNonveg = function() {
    document.getElementById("space").innerHTML = " ";
    document.getElementById("space3").innerHTML = " ";
    document.getElementById("space2").innerHTML = " ";
    nonveg(4);
   
};
var displayBurger = function() {
    document.getElementById("space4").innerHTML = " ";
    document.getElementById("space3").innerHTML = " ";
    document.getElementById("space").innerHTML = " ";
    burger(4);
   
};

dispAll();

function search() {
    var x = document.getElementById("searchText").value;
   if(x=="burger"){
       displayBurger();
   }
   else if(x=="pastries"){
    displayPastries();
}
else if(x=="nonveg"){
    displayNonveg();
}
else if(x=="pizza"){
    displayPizza();
}
else {
 
    dispAll();
}
   
  }