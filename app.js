var divs = document.querySelectorAll(".cub");
var myh1 = document.querySelectorAll("h1");
var myh2 = document.querySelector(".w");
var myh3 = document.querySelector(".h3");
var myb = document.querySelector(".b");
var myr = document.querySelector(".r");

let count = 2;

var x = 0;
var o = 0;

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", function () {
        if (divs[i].innerText == "") {

     
        if (count % 2 === 0) {
            divs[i].innerText = "X";
            divs[i].style.color = "rgb(122, 36, 36)"
            divs[i].style.pointerEvents = "none"
        } 
       
        else {
            divs[i].innerText = "0";
            divs[i].style.color = "white";
            divs[i].style.pointerEvents = "none"
        }
    }
        if (
            (divs[0].innerText === "X" && divs[1].innerText === "X" && divs[2].innerText === "X") ||
            (divs[3].innerText === "X" && divs[4].innerText === "X" && divs[5].innerText === "X") ||
            (divs[6].innerText === "X" && divs[7].innerText === "X" && divs[8].innerText === "X") ||
            (divs[0].innerText === "X" && divs[3].innerText === "X" && divs[6].innerText === "X") ||
            (divs[1].innerText === "X" && divs[4].innerText === "X" && divs[7].innerText === "X") ||
            (divs[2].innerText === "X" && divs[5].innerText === "X" && divs[8].innerText === "X") ||
            (divs[0].innerText === "X" && divs[4].innerText === "X" && divs[8].innerText === "X") ||
            (divs[2].innerText === "X" && divs[4].innerText === "X" && divs[6].innerText === "X")
        ) {
            x = x + 5;
            myh2.innerText = `Player X Wins! X: ${x} | O: ${o}`;
            myh2.style.color = "rgb(122, 36, 36)";
            
            for (let i = 0; i < divs.length; i++) {
                divs[i].style.pointerEvents = "none"
                
            }
            
           
        } else if (
            (divs[0].innerText === "0" && divs[1].innerText === "0" && divs[2].innerText === "0") ||
            (divs[3].innerText === "0" && divs[4].innerText === "0" && divs[5].innerText === "0") ||
            (divs[6].innerText === "0" && divs[7].innerText === "0" && divs[8].innerText === "0") ||
            (divs[0].innerText === "0" && divs[3].innerText === "0" && divs[6].innerText === "0") ||
            (divs[1].innerText === "0" && divs[4].innerText === "0" && divs[7].innerText === "0") ||
            (divs[2].innerText === "0" && divs[5].innerText === "0" && divs[8].innerText === "0") ||
            (divs[0].innerText === "0" && divs[4].innerText === "0" && divs[8].innerText === "0") ||
            (divs[2].innerText === "0" && divs[4].innerText === "0" && divs[6].innerText === "0")
        ) {
            for (let i = 0; i < divs.length; i++) {
                divs[i].style.pointerEvents = "none"
                
            }
            o = o + 5;
            myh2.innerText = `Player O Wins! X: ${x} | O: ${o}`;
            myh2.style.color = "white";
           
        } else if (
            divs[0].innerText !== "" && divs[1].innerText !== "" && divs[2].innerText !== "" &&
            divs[3].innerText !== "" && divs[4].innerText !== "" && divs[5].innerText !== "" &&
            divs[6].innerText !== "" && divs[7].innerText !== "" && divs[8].innerText !== ""
        ) {
            for (let i = 0; i < divs.length; i++) {
                divs[i].style.pointerEvents = "none"
                
            }
            myh2.innerText = "It's a draw!";
            myh2.style.color = "yellow";
            myh2.innerText = `It's Draw! X: ${x} | O: ${o}`;
        }

        count++;
    });
}

myb.addEventListener("click", function () {
    for (let i = 0; i < divs.length; i++) {
        divs[i].innerText = "";
        divs[i].style.pointerEvents = "auto"
    }
    myh2.innerText = "";
    myh2.style.color = "";
   count = 2
  });

myr.addEventListener("click", function () {
    for (let i = 0; i < divs.length; i++) {
        divs[i].innerText = "";
        divs[i].style.color = "";
        divs[i].style.pointerEvents = "auto"
    }
  
    myh2.innerText = "";
    myh2.style.color = "";
    count = 2;
    x = 0;
    o = 0;

    
   
    myh2.style.color = "";
});

