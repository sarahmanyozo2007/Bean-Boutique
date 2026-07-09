function searchCoffee(){

    let input = document.getElementById("search");
    let filter = input.value.toUpperCase();
    let cards = document.getElementsByClassName("coffee-card");

    for(let i = 0; i < cards.length; i++){

        let title = cards[i].getElementsByTagName("h3")[0];
        let text = title.innerText;

        if(text.toUpperCase().indexOf(filter) > -1){

            cards[i].style.display = "";

        }else{

            cards[i].style.display = "none";

        }

    }

}

let images = [

    "coffee pics/coffee 6.png",
    "coffee pics/coffee 400.png",
    "coffee pics/coffee 402.png",
    "coffee pics/coffee 2.png",
    "coffee pics/coffee 3.png",
    "coffee pics/coffee 4.png"

];

let current = 2;
function changeImage(){

    current++;

    if(current >= images.length){

        current = 2;

    }

    document.getElementById("slide").src = images[current];

}

setInterval(changeImage,3000);

window.onload = function(){

    if(localStorage.getItem("popupShown") == "yes"){

        document.getElementById("popup").style.display = "none";
        } else {
            popup.style.display = "flex"; // Shows popup for first-time visitors

    }

}

function closePopup(){

    let email = document.getElementById("email").value;

    if(email == ""){

        alert("Please enter your email.");
        return;

    }

    document.getElementById("popup").style.display = "none";

    localStorage.setItem("popupShown","yes");

}
function addToCart(product, price){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({

        name: product,
        price: price

    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(product + " added to cart.");

}
function loadCart(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let table = document.getElementById("cartItems");

    if(table == null){

        return;

    }

    let total = 0;

    table.innerHTML = "";

    for(let i=0;i<cart.length;i++){

        total += cart[i].price;

        table.innerHTML +=

        "<tr>" +

        "<td>"+cart[i].name+"</td>" +

        "<td>K"+cart[i].price+"</td>" +

        "<td>1</td>" +

        "<td>K"+cart[i].price+"</td>" +

        "</tr>";

    }
    document.getElementById("grandTotal").innerHTML =
    "Total Amount: K"+total;

}
document.getElementById("eventForm").addEventListener("submit", function(e){

    e.preventDefault();

    alert(
        "Registration Successful!\n\n" +
        "Thank you for registering with Bean Boutique.\n\n" +
        "A confirmation email will be sent to your email address.\n\n" +
        "We look forward to seeing you at our event!"
    );

    this.reset();

});
function registerAgain(){

    document.getElementById("eventForm").reset();

    document.getElementById("eventForm").style.display="grid";

    document.getElementById("success-message").style.display="none";

}
