"use strict"

do{    
    var price = prompt("Įveskite prekės kainą:")
} while(isNaN(price) || price < 0)

var delivery = confirm("Pristatymas į Jūsų pasirinktą Miestą tik 2.99€! (Taip/Ne)")

if(delivery == true){
    var address = prompt("Įveskite pristatymo Miestą:")
    var parcelPrice = 2.99
    var total = Number(price) + Number(parcelPrice)

console.log("Prekės kaina: " + price + " €")
console.log("Pristatymas: " + parcelPrice + " €")
console.log("Iš viso: " + total + " €")
console.log("Prekę pristatysime į " + address + " per 1-3 dienas.")
}

else {
    console.log("Prekės kaina: " + price + " €")
    console.log("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a")
}