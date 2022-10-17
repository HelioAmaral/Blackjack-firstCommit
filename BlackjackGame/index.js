
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");


//Create an OBJECT to store player name and $
let player = {
    name: "Joe",
    chips: 145
}

//Use the player-el Id to print on html the object player
let playerEl = document.getElementById("player-el");
playerEl.textContent = `${player.name}: $${player.chips}`;

//Clicking the start button will call the startGame() which calls renderGame()
function startGame(){
    //Reasign the isAlive variable value to true
    isAlive = true;
    //Generate 2 random numbers
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    //Update cards variable value
    cards = [firstCard, secondCard];
    //update sum variable value
    sum = firstCard + secondCard;
    renderGame();
}

//Generates a random card
function getRandomCard(){
    //Generate a random card value and assign it to a variable. The plus 1 ate the end makes 
    // 0 become 1
    let randomCard = Math.floor(Math.random()*13) + 1;
    if(randomCard === 1){
        randomCard = 11;
    }
    if(randomCard === 11 || randomCard === 12 || randomCard === 13) {
        randomCard = 10;
    } 
    return randomCard
}

//The logic for the 2 first cards
function renderGame(){
    cardsEl.textContent = "Cards: ";
    //Go through all the cards in the array cards
    for(let i = 0; i < cards.length; i++){
        //Update the html text for the cards
        cardsEl.textContent += cards[i] + " ";
    }
        sumEl.textContent = `Sum: ${sum}`; //updates the text in the html 
    
    if (sum <= 20) {
        message = "Do you want to draw another card?";
    } else if (sum === 21) {
        message = "That's Blackjack!!";
        hasBlackjack = true;
    } else {
        message = "Sorry! You've lost!";
        isAlive = false;
    }

    messageEl.textContent = message;
}

//Clicking the new card button calls newCard()
function newCard(){
    if(isAlive === true && hasBlackjack === false){
        let newCardValue = getRandomCard();
        //add the new card value to the sum
        sum += newCardValue;
        //Add the new card to the array cards
        cards.push(newCardValue);
    } 
    renderGame();
}












