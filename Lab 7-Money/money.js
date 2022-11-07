const form = document.getElementById("money");
    form.addEventListener('submit', submitForm);

    let coinCointainer = document.getElementById("container");

    //on submitForm event function
    function submitForm(event){

        //event.preventDefault used so that form doesn't refresh everytime submit button is clicked
        event.preventDefault();

        //get value of the number input
        let number = document.getElementById("number").value;

        //get value of select input
        let moneyType = document.getElementById("moneyType").value;

        //loop through the number that was added in the input
        for(let i=0;i<number;i++){

            //create coin variable that will be appended to the coin container
            let coin = coinCointainer.appendChild(document.createElement('div'));
            
            //add text content to coin to display on UI
            coin.textContent = '' + moneyType + '';

            //add class to coin to style the coin
            coin.classList.add("coin");

            //add event listener function to remove coin
            coin.addEventListener("click", removeCoin);
        }

        //this function will remove the coin that is clicked.
        function removeCoin() {
            this.remove();
          }
    }

  