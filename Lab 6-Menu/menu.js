let letters = document.getElementById("rowsOfLetters");
let numbers = document.getElementById("numbersRow");

function toggleDisplay(displayType) {
    console.log(displayType);

    if(displayType == 0) {
        letters.style.display = "block";
        numbers.style.display = "none";
    }

    else{
        letters.style.display = "none";
        numbers.style.display = "block";
    }
}
