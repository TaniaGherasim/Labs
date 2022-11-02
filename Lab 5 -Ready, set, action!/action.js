function main() {
    let growMe = document.querySelector("#grow-me");
    
    let shrinkMe = document.querySelector("#shrink-me");
    
    growMe.classList.add("big");
    
    shrinkMe.classList.remove("big");
    
    let liTag = document.querySelectorAll("li");
    console.log(liTag);
    

    const link = document.getElementsByTagName("a")[0];
    link.setAttribute('href', "https://www.example.com");
    link.innerHTML = "somewhere";

    
    document.getElementById("show-me").style.display = "block";
    document.getElementById("hide-me").style.display = "none";

    
    const userName = document.getElementById('name').value;
    console.log(userName);

    const h1 = document.getElementsByTagName("h1")[0].innerHTML= "Welcome " + userName + "!";
    }








