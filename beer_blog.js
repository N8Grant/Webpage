beers = [
    {
        "name": "Starburst IPA",
        "description": "Portland Oregon, stars on the can, IPA, I mean come on, instant cop. Im gonna sum it up quick, it was definitley a dinner time beer. The type of beer you just casually sip when youre out to dinner with the fam and wanna take it easy, the one and done, the heavy hitta sippa.",
        "taste": "3/5",
        "uniqueness": "4/5",
        "bingeability": "0/5",
        "pic":"./resources/starburst_ipa_short.jpg"
    },
    {
        "name":"Cosmic Pulp IPA",
        "description": "Dece",
        "taste": "3/5",
        "uniqueness": "3/5",
        "bingeability": "3/5",
        "pic": "./resources/cosmic_pulp_ipa_short2.jpg"
    }, 
    {
        "name": "Profuse Juice",
        "description":"Quite possibly my favorite beer I've had in Seattle so far. Just a classy Hazy IPA. Tasted like carbonated orange juice with 6.5% alcohol. The manmosa.",
        "taste": "4/5",
        "uniqueness": "3/5",
        "bingeability": "4/5",
        "pic":"./resources/profuse_juice_ipa_short2.jpg"
    }
]

var beerNum = Math.floor(Math.random() * beers.length);
console.log(beerNum);
window.onload = function() {
    $("#beer_contents").fadeOut(2);
    setInfo(beers[beerNum]);
    $("#beer_contents").fadeIn(2000);
}

function nextBeer() {
    $("#beer_contents").fadeOut(300);
    if (beerNum == beers.length-1) 
        beerNum = 0;
    else
        beerNum+=1;
    var nextBeer = beers[beerNum];
    $("#beer_contents").promise().done(function(){
        setInfo(nextBeer);
        $("#beer_contents").fadeIn(600);
    });
}

function setInfo(beerInfo) {
    var beerName = document.getElementById("beer_name");
    beerName.innerHTML = beerInfo["name"];
    var beerDescription = document.getElementById("beer_description");
    beerDescription.innerHTML = beerInfo["description"];
    var beerTaste = document.getElementById("taste");
    beerTaste.innerHTML = "Taste: "+ beerInfo["taste"];
    var beerUniqueness = document.getElementById("uniqueness");
    beerUniqueness.innerHTML = "Uniqueness: "+beerInfo["uniqueness"];
    var beerBingeability = document.getElementById("bingeability");
    beerBingeability.innerHTML = "Bingeability: "+beerInfo["bingeability"];
    var beerPic = document.getElementById("pic");
    beerPic.src = beerInfo["pic"];
}