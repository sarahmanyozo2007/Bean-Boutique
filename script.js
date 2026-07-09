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