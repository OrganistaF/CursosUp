let random1 = Math.round((Math.random() * 6) + 1)

let random2 = Math.round((Math.random() * 6) + 1)

document.getElementById("img1").setAttribute("src", "./images/dice" + random1 + ".png")
document.getElementById("img2").setAttribute("src", "./images/dice" + random2 + ".png")

if( random1 > random2 ){
    document.getElementById("title").innerHTML = "Player 1 wins!"
} else if( random1 < random2){
    document.getElementById("title").innerHTML = "Player 2 wins!"
} else {
    document.getElementById("title").innerHTML = "There's a Draw"
}